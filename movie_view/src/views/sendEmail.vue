<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="userMessage">
            <user-message></user-message>
        </div>
        <!--用户相关信息-->
        <label>收件箱</label>
        <div>
            <email-list v-for="item in receive_items" :title="item.title"
            :from-user="item.fromUser" :context="item.context"></email-list>
        </div>
        <label>发件箱</label>
        <div>
            <email-list v-for="item in send_items" :title="item.title"
                        :from-user="item.fromUser" :context="item.context"></email-list>
        </div>
        <send-talk-box></send-talk-box>
        <common-footer></common-footer>
    </div>
</template>

<script>
    import MovieIndexHeader from "../components/MovieIndexHeader";
    import UserMessage from "../components/UserMessage";
    import EmailList from "../components/EmailList";
    import SendTalkBox from "../components/SendTalkBox";
    import CommonFooter from "../components/CommonFooter";
    export default {
        name: "sendEmail",
        components: {CommonFooter,
            SendTalkBox,
            EmailList,
            UserMessage,
            MovieIndexHeader},
        data() {
            return{
                receive_items: [],
                send_items: []
            }
        },
        created() {
            //获取数据
        }
    }
</script>

<style scoped>
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