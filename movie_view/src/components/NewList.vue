<template>
    <div class="newList">
        <router-link :to="{path: '/newDetail', query: {id: id}}" class="goods-list-link">
            {{articleTitle}}-{{articleTime}}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NewList",
        props: ['id','articleTitle','articleTime'],
        data() {
            return{
                path: ""
            }
        }
    }
</script>

<style scoped lang="less">
    .newList{
        padding: 5px;
        font-size: 10px;
        border-bottom: 1px dashed #ababab;
    }
</style>