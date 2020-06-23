<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="userMessage">
            <user-message></user-message>
        </div>
<!--        用户的相关信息-->
        <div>
            <div class="box">用户名：{{userDetail.username}}</div>
        </div>
        <div>
            <div class="box">用户邮箱：{{userDetail.userMail}}</div>
        </div>
        <div>
            <div class="box">用户电话：{{userDetail.userPhone}}</div>
        </div>
        <div>
            <div class="box">用户状态：{{userStatus}}</div>
        </div>
        <div v-if="!showRePassword">
            <button @click="showChangeUserPassword">修改密码</button>
        </div>
        <!--平时需要隐藏-->
        <div v-if="showRePassword">
            <div class="box">
                <label>旧密码：</label>
                <input v-model="password" placeholder="输入旧密码">
            </div>
            <div class="box">
                <label>新密码：</label>
                <input v-model="repassword" placeholder="输入新密码">
            </div>
            <div>
                <button @click="changeUserPassword">修改密码</button>
            </div>
        </div>
        <div style="padding-top: 10px">
            <router-link to="/sendEmail">
                <button>发送站内信</button>
            </router-link>
        </div>
        <div>
            <common-footer></common-footer>
        </div>
    </div>
</template>

<script>
    import MovieIndexHeader from "../components/MovieIndexHeader";
    import UserMessage from "../components/UserMessage";
    import CommonFooter from "../components/CommonFooter";
    export default {
        name: "userInfo",
        components: {CommonFooter, UserMessage, MovieIndexHeader},
        data() {
            return{
                items: [],
                userDetail: [],
                userStatus: '',
                showRePassword: false,
                password: '',
                repassword: ''
            }
        },
        created() {
            //获取用户信息
        },
        methods: {
            showChangeUserPassword() {
                this.showRePassword = true;
            },
            changeUserPassword() {

            }
        }
    }
</script>

<style scoped>
.box{
    display: inline-flex;
}
    .container{
        width: 100%;
        margin: 0 auto;
    }
    .userMessage{
        padding-top: 60px;
        margin-top: -10px;
        margin-left: -10px;
    }
</style>