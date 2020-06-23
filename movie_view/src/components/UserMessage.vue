<template>
    <div>
        <div v-if="!isLogin" class="header">
            <router-link to="/login">
                <div class="header_menu">登录</div>
            </router-link>
        </div>
        <div v-else class="header">
            <router-link :to="{path: '/userInfo', query: {id: id}}">
                <div class="header_menu">已登录：{{username}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserMessage",
        data() {
            return{
                username: '',
                isLogin: false
            }
        },
        created() {
            // 获取token
            let token = localStorage.getItem("token");
            if (token){
                this.isLogin = true;
                this.username = localStorage.getItem("username");
                this.id = localStorage.getItem("_id");
            }else{
                console.log("用户未登录");
            }
        }
    }
</script>

<style scoped lang="less">
.header{
    width: 103%;
    height: 30px;
    left: 0;
    top: 0;
    color: #000;
    background-color: #C3BD5C;
    .header_menu{
        padding-right: 60px;
        padding-top: 10px;
        float: right;
        color: #fff;
        font-size: 8px;
    }
}
</style>