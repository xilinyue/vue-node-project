<template>
    <div>
        <div>
            <div>
                <div class="box">
                    <label>用户名：</label>
                    <input placeholder="用户名" v-model="username">
                </div>
                <div class="box">
                    <label>密码：</label>
                    <input placeholder="密码" v-model="password" type="password">
                </div>
                <div class="box">
                    <button @click="userLogin">登录</button>
                    <button style="margin-left: 10px" @click="userRegister">注册</button>
                    <button style="margin-left: 10px" @click="findBackPassword">忘记密码</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import userServices from "../api/userServices";

    export default {
        name: "loginPage",
        data() {
            return{
                username: '',
                password: ''
            }
        },
        methods: {
            //用户登录
            userLogin() {
                //发起请求
                userServices.login({username: this.username,password: this.password}).then(res => {
                    console.log(res);
                });
                // 存储token
                // localStorage.setItem("token", token);
                // localStorage.setItem("username", token);
                // localStorage.setItem("_id", token);
            },
            userRegister() {
                this.$router.push("/register");
            },
            // 找回密码
            findBackPassword() {
                this.$router.push("/findPassword")
            }
        }
    }
</script>

<style scoped lang="less">
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }
</style>