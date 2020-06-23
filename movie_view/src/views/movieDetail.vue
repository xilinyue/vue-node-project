<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <div class="">
                <h1>{{movieDetail.movieName}}</h1>
                <div class="viewNum">下载次数：{{movieDetail.movieNumDownload}}</div>
            </div>
            <div class="">
                <button @click="movieDownload">点击下载</button>
            </div>
            <div>
                <img class="headerImg" :src="movieDetail.movieImg">
            </div>
            <div class="btnPosition" @click="support">
                <div class="SupportBtn">点赞<div>{{movieDetail.movieNumSuppose}}</div></div>
            </div>
        </div>
        <div>
            <comment :movie_id="movieId"></comment>
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
        name: "movieDetail",
        components: {
            MovieIndexHeader,
            CommonFooter,
            Comment
        },
        data() {
            return{
                movieDetail: null,
                movieId: ''
            }
        },
        created() {
            this.movieId = this.$route.query.id
            //根据movieId获取movieDetail的数据
        },
        methods: {
            support() {
                // 点赞
            },
            movieDownload() {
                //获取下载链接  跳转至该下载链接 window.location = data
            }
        }
    }
</script>

<style scoped lang="less">
    .headerImg{
        height: 200px;
    }
    .container{
        width: 100%;
        margin: 0 auto;
    }
    .contentMain{
        padding-top: 150px;
    }
    .btnPosition{
        padding-left: 150px;
    }
    .SupportBtn{
        border: 1px solid #000;
        width: 60px;
    }
    .viewNum{
        font-size: 10px;
    }
</style>