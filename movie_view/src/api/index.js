/*
* 首页   /showIndex  headerItems
*       /showArticle   newsItems
*       /showRanking   movieItems
*
* 电影列表页 /movie/list
* 电影详情页 /movie/detail
*           点赞 /movie/support
*           更新信息 /movie/showNumber
*           获取下载地址  /movie/download
*           获取所有评论  /movie/comment
*           提交评论  /users/postComment
*
* 新闻页面 /articleDetail
*
* 用户登录  /users/login
*
* 用户注册  /users/register
* 用户找回密码  /users/findPassword
* 用户详情  /users/showUser
*
*
* 站内信  /users/sendEmail
*          showEmail  /users/showEmail  send_data or receive_data
* */
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'; //默认访问地址
axios.defaults.withCredentials = true;  //跨域允许携带cookies
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //设置post请求格式

// // response 拦截器
// axios.interceptors.response.use(
//     response => {
//         /**
//          * code为非20000是抛错 可结合自己业务进行修改
//          */
//         return response.data;
//     },
//     error => {
//         console.log(error);
//     });

export default axios;