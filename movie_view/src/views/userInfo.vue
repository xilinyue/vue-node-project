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
            <div class="box">用户名：用户名</div>
        </div>
        <div>
            <div class="box">用户邮箱：邮箱</div>
        </div>
        <div>
            <div class="box">用户电话：电话</div>
        </div>
        <div>
            <div class="box">用户状态：用户状态（封停与否）</div>
        </div>
        <div>
            <button>修改密码</button>
        </div>
        <!--平时需要隐藏-->
        <div>
            <div class="box">
                <label>旧密码：</label>
                <input placeholder="输入旧密码">
            </div>
            <div class="box">
                <label>新密码：</label>
                <input placeholder="输入新密码">
            </div>
            <div>
                <button>修改密码</button>
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
        components: {CommonFooter, UserMessage, MovieIndexHeader}
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