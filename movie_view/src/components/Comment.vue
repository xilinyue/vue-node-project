<template>
    <div>
        <label>评论</label>
        <hr>
        <div>
            <ul>
                <li v-for="item in items">
                    XXX 评论 XXX
                </li>
            </ul>
        </div>
        <div style="padding: 5px">
            <textarea v-model="context" style="width: 80%;height: 50px;" placeholder="内容"></textarea>
        </div>
        <div style="padding-top: 10px">
            <button @click="send_comment">评论</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        data() {
            return {
                items: [],
                context: ""
            }
        },
        methods: {
            send_comment: function() {
                alert("评论");
            }
        }
    }
</script>

<style scoped>

</style>