var express = require('express');
var router = express.Router();
const userModel = require("../models/user");
const commentModel = require("../models/comment");
const movieModel = require("../models/movie");
const mailModel = require("../models/mail");
const crypto = require("crypto");
const init_token = 'TKL02o';

// 获取MD5的值
function getMD5Password(id){
  let md5 = crypto.createHash("md5");
  let token_before = id + init_token;
  return md5.update(token_before).digest('hex');
}

/* 用户注册路由  /users/register*/
router.post("/register", (req,res) => {
  let {username, password, userMail, userPhone} = req.body;

  // 判断参数是否完整
  if(!username || !password || !userMail || !userPhone) {
    res.send({
      status: 1,
      message: '参数不完整'
    });
    return false;
  }

  // 查看是否已经被注册
  userModel.find({username}).then(docs => {
    if(docs.length != 0){
      // 用户名已经被注册
      res.send({status: 1, message: "用户名已被注册"});
    }else{
      userModel.create({username,password,userMail,userPhone}).then(doc => {
        res.send({status: 0, message: "注册成功"});
      });
    }
  }).catch(err => {
    res.send({status: 5, message: '服务器错误'});
  });

});

/* 用户登录路由 /users/login*/
router.post("/login", (req,res) => {
  let {username, password} = req.body;
  //验证数据的完整性
  if (!username || !password) {
    res.send({
      status: 1, message: "参数不完整"
    });
  }else{
    userModel.find({username}).then(docs => {
      if(docs.length > 0){
        if(docs[0].password === password){
          let token_after = getMD5Password(docs[0]._id);
          res.send({status: 0, message: "登录成功", data: {token: token_after, user: docs[0]}});
        }else{
          res.send({status: 1, message: "密码错误"});
        }
      }else{
        res.send({status: 1, message: "用户不存在"});
      }
    }).catch(err => {
      res.send({status: 5, message: "服务器错误"});
    })
  }
});

// 用户找回密码
router.post('/findPassword', (req,res) => {
  // 这里需要返回用户的邮箱信息和手机信息，同时可以更新密码
  // 这里需要两个返回情况，1个是req.body.repassword存在时，2是repassword不存在时
  // 这个接口同时用于密码的重置，需要用户登录
  if(req.body.repassword) {
    // 用户密码重置
    if(req.body.token) {
      // 用户登录
      if (!req.body.user_id) {
        res.send({status: 1, message: "用户登录状态错误"});
      }
      if(!req.body.password) {
        res.send({status: 1, message: "用户老密码错误"});
      }
      if(req.body.token == getMD5Password(req.body.user_id)){
        userModel.findOne({_id: req.body.user_id, password: req.body.password}).then(doc => {
          if (doc){
            userModel.updateOne({_id: req.body.user_id}, {password: req.body.repassword}, (err, userUpdate) => {
              if (err) {
                res.send({status: 5, message: "服务器错误", data: err});
              }else{
                res.send({status: 0, message: "更改成功", data: userUpdate});
              }
            });
          }else{
            res.send({status: 1, message: "用户老密码错误"});
          }
        }).catch(err => {
          res.send({status: 5, message: "服务器错误"});
        });
      }else{
        res.send({status: 1,message: "用户登录状态错误"});
      }
    }else{
      // 直接验证mail和phone
      userModel.find({username: req.body.username, userMail: req.body.userMail, userPhone: req.body.userPhone}).then(docs => {
        if(docs.length > 0) {
          userModel.updateOne({_id : docs[0]._id}, {password: req.body.repassword}, (err, userUpdate) => {
            if (err) {
              res.send({status: 5, message: "服务器错误", data: err});
            }else{
              res.send({status: 0, message: "更改成功", data: userUpdate});
            }
          })
        }else{
          res.send({status: 1, message: "信息错误"});
        }
      }).catch(err => {
        res.send({status: 5, message: "服务器错误"});
      })
    }
  }else{
    // 这里只验证mail和phone，返回验证成功提示和提交的字段，用于之后改密码的操作
    if (!req.body.username) {
      res.send({status: 1, message: "用户名称为空"});
    }
    if (!req.body.userMail) {
      res.send({status: 1, message: "用户邮箱为空"});
    }
    if (!req.body.userPhone) {
      res.send({status: 1, message: "用户手机为空"});
    }
    userModel.find({username: req.body.username, userMail: req.body.userMail, userPhone: req.body.userPhone}).then(docs => {
      if(docs.length > 0) {
        res.send({status: 0, message: "验证成功,请修改密码",
        data: {username: req.body.username, userMail: req.body.userMail, userPhone: req.body.userPhone}});
      }else{
        res.send({status: 1, message: "信息错误"});
      }
    }).catch(err => {
      res.send({status: 5, message: "服务器错误"});
    });
  }
});

// 提交评论路由
router.post("/postComment", (req,res) => {
  //验证数据的完整性
  if(!req.body.username){
    var username = "匿名用户";
  }
  if(!req.body.movie_id) {
    res.send({status: 1, message: "电影id为空"});
    return false;
  }
  if(!req.body.context){
    res.send({status: 1, message: "评论内容为空"});
    return false;
  }
  let saveComment = {
    movie_id: req.body.movie_id,
    username: req.body.username ? req.body.username : username,
    context: req.body.context
  }
  commentModel.create(saveComment).then(doc => {
    res.send({status: 0, message: "评论成功"});
  }).catch(err => {
    res.send({status: 5, message: err});
  });
});

//用户点赞路由
router.post("/support", (req,res) => {
  let {movie_id} = req.body;
  if(!movie_id){
    res.send({status: 1, message: "参数不完整"});
    return true;
  }
  movieModel.findOne({_id: movie_id}).then(doc => {
    if(doc) {
      movieModel.updateOne({_id: movie_id}, {movieNumSuppose: doc.movieNumSuppose + 1}).then(() => {
        res.send({status: 0, message: "点赞成功"});
      })
    }else{
      res.send({status: 1, message: "电影不存在"});
    }
  }).catch(err => {
    res.send({status: 5, message: "服务器错误"});
  })
});

//下载路由
router.post("/download", (req,res) => {
  // 验证数据完整性
  if(!req.body.movie_id){
    res.send({status: 1, message: "参数不完整"});
    return true;
  }
  movieModel.findOne({_id: req.body.movie_id}).then(doc => {
    if(doc) {
      movieModel.updateOne({_id: movie_id}, {movieNumDownload: doc.movieNumDownload + 1}).then(() => {
        res.send({status: 0, message: "下载成功",data: doc.movieDownload});
      })
    }else{
      res.send({status: 1, message: "电影不存在"});
    }
  }).catch(err => {
    res.send({status: 5, message: "服务器错误"});
  })
});

//发送站内信
router.post("/sendEmail",(req,res) => {
  let {token, user_id, toUserName, title,context} = req.body;
  if(!token) {
    res.send({status: 1, message: "用户登录状态出错"});
    return true;
  }
  if(!user_id || !toUserName || !title || !context) {
    res.send({status: 1, message: "参数不完整"});
    return true;
  }
  if(token == getMD5Password(user_id)) {
    //存入数据库之前需要先在数据库中获取到要发送至用户的user_id
    userModel.findOne({username: toUserName}, (err, doc) => {
      if (err) {
        res.send({status: 5, message: "服务器错误"});
        return true;
      }
      if(doc) {
        mailModel.create({
          fromUser: user_id,
          toUser: doc._id,
          title,
          context
        }).then(() => {
          res.send({status: 0, message: "站内信发送成功"});
        })
      }else{
        res.send({status: 1, message: "发送对象不存在"});
      }
    })
  }else{
    res.send({status: 1, message: "用户登录状态错误"});
  }


});

//用户接收站内信
router.post("/showEmail",(req,res) => {
  let {token, user_id, receive} = req.body;
  if(!token) {
    res.send({status: 1, message: "用户登录状态出错"});
    return true;
  }
  if(!user_id || !receive) {
    res.send({status: 1, message: "参数不完整"});
    return true;
  }
  if(token == getMD5Password(user_id)) {
    if(receive == 1){
      mailModel.find({fromUser: user_id}).then(docs => {
        res.send({status: 0, message: "数据获取成功", data: docs});
      }).catch(err => {
        res.send({status: 5, message: "服务器错误"});
      })
    }else{
      mailModel.find({toUser: user_id}).then(docs => {
        res.send({status: 0, message: "数据获取成功", data: docs});
      }).catch(err => {
        res.send({status: 5, message: "服务器错误"});
      })
    }
  }
});

module.exports = router;
