<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <h1>{{newDetail.articleTitle}}</h1>
            <div>{{newDetail.articleTime}}</div>
            <div class="contentText">{{newDetail.articleContext}}</div>
        </div>
        <div>
            <comment :movie_id="article_id"></comment>
        </div>
        <div>
            <common-footer></common-footer>
        </div>
    </div>
</template>

<script>
    import MovieIndexHeader from "../components/MovieIndexHeader";
    import CommonFooter from "../components/CommonFooter";
    import Comment from '../components/Comment';
    export default {
        name: "newDetail",
        components: {
            MovieIndexHeader,
            CommonFooter,
            Comment
        },
        data() {
            return{
                newDetail: [],
                article_id: ''
            }
        },
        created() {
            this.article_id = this.$route.query.id;
        }
    }
</script>

<style scoped lang="less">
    .container{
        width: 100%;
        margin: 0 auto;
    }
    .contentMain{
        padding-top: 150px;
    }
    .contentText{
        font-size: 15px;
        padding-top: 20px;
    }
</style>