<template>
    <div>
        <div>
            <div v-if="showUserInfo">
                <div class="box">
                    <label>用户名：</label>
                    <input v-model="username" placeholder="用户名">
                </div>
                <div class="box">
                    <label>邮箱：</label>
                    <input v-model="userMail" placeholder="邮箱">
                </div>
                <div class="box">
                    <label>手机：</label>
                    <input v-model="userPhone" placeholder="手机">
                </div>
                <div class="box">
                    <button @click="checkUser">找回密码</button>
                </div>
            </div>
            <div v-show="showRePassword">
                <div class="box">
                    <label>新密码：</label>
                    <input v-model="repassword" placeholder="请输入新密码">
                </div>
                <div class="box">
                    <button @click="changeUserPassword">修改密码</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "findBackPassword",
        data() {
            return{
                username: '',
                userMail: '',
                userPhone: '',
                repassword: '',
                showRePassword: false,
                showUserInfo: true
            }
        },
        methods: {
            checkUser() {

            },
            changeUserPassword() {

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