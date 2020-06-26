<template>
    <div>
        <div>
            <div>
                <div class="box">
                    <label>用户名：</label>
                    <input type="text" v-model="username" placeholder="用户名" />
                </div>
                <div class="box">
                    <label>密  码：</label>
                    <input type="password" v-model="password" placeholder="密码" />
                </div>
                <div class="box">
                    <label>确认密码：</label>
                    <input type="password" v-model="repassword" placeholder="确认密码" />
                </div>
                <div class="box">
                    <label>邮  箱：</label>
                    <input type="text" v-model="userMail" placeholder="邮箱" />
                </div>
                <div class="box">
                    <label>手  机：</label>
                    <input type="text" v-model="userPhone" placeholder="手机" />
                </div>
                <div class="box">
                    <button @click="register">注  册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import userServices from "../api/userServices";
    export default {
        name: "registerPage",
        data() {
            return{
                username: '',
                password: '',
                userMail: '',
                userPhone: '',
                repassword: ''
            }
        },
        methods: {
            register() {
                if (this.password === this.repassword){
                    let sendData = {
                        username: this.username,
                        password: this.password,
                        userMail: this.userMail,
                        userPhone: this.userPhone,
                    };
                    userServices.register(sendData).then(res => {
                       let data = res.data;
                       if (data.status === 0){
                           alert(data.message);
                           this.$router.push("/login");
                       }else{
                           alert(data.message)
                       }
                    });
                }else{
                    alert("两次密码不一致！");
                }
            }
        }
    }
</script>

<style scoped>
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }
</style>