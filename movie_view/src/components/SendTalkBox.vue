<template>
    <div>
        <div>
            <input v-model="toUserName" placeholder="发送用户名">
        </div>
        <div style="padding: 10px">
            <input v-model="title" placeholder="发送标题">
        </div>
        <div style="padding: 5px">
            <textarea v-model="context" style="width: 80%;height: 50px;" placeholder="内容"></textarea>
        </div>
        <div style="padding-top: 10px">
            <button @click="sendEmail">发送站内信</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SendTalkBox",
        data() {
            return{
                toUserName: '',
                context: '',
                title: ''
            }
        },
        methods: {
            sendEmail() {
                //发送
            }
        }
    }
</script>

<style scoped>

</style>