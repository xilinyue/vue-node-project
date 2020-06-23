var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const recommendModel = require("../models/recommend");
const movieModel = require("../models/movie");
const articleModel = require("../models/article");
const userModel = require("../models/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* mongooseTest */
router.get("/mongooseTest", (req,res,next) => {
  mongoose.connect("mongodb://localhost:27017/pets", {useMongoClient: true});
  mongoose.Promise = global.Promise;

  let Cat = mongoose.model('Cat', {name: 'String'});

  let tom = new Cat({name: 'Tome'});
  tom.save(function(err) {
    if(err){
      console.log(err);
    }else{
      console.log('success insert');
    }
  });
  res.send("数据库连接测试");
});

// 获取推荐信息
router.get("/showIndex", (req,res) => {
  recommendModel.find({}).then(docs => {
    res.send({status: 0, message: "获取推荐数据成功", data: docs});
  });
});

//显示所有的排行榜，也就是对于电影字段index为true的样式
router.get('/showRanking', (req, res,) => {
  movieModel.find({movieMainPage: true}, (err, getMovies) => {
      res.send({status: 0, message: "获取主页数据", data: getMovies})
  })
});

//显示文章列表
router.get('/showArticle', (req, res) => {
  articleModel.find({}, (err, getArticles) => {
      res.send({status: 0, message: "获取主页数据", data: getArticles})
  })
});

//显示文章的内容
router.post('/articleDetail', function (req, res) {
  if(!req.body.article_id){
      res.send({status:1,message:'文章id出错'});
      return true;
  }
  articleModel.findOne({_id: req.body.article_id},function (err, getArticle) {
      res.send({status: 0, message: "获取成功", data: getArticle})
  })
});

//显示用户自己个人信息的内容
router.post('/showUser', function (req, res) {
  if (!req.body.user_id) {
      res.send({status: 1, message: "用户状态出错"});
      return true;
  }
  userModel.findOne({_id: req.body.user_id},function (err, getUser) {
      res.send({status: 0, message: "获取成功", data: {
          user_id:getUser._id,
          username:getUser.username,
          userMail:getUser.userMail,
          userPhone:getUser.userPhone,
          userStop:getUser.userStop
      }})
  })
});

module.exports = router;
