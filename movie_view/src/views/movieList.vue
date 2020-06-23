<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <div class="contentLeft">
                <div class="cont-ul">
                    <movie-list v-for="item in movieItems" :key="item._id"
                    :id="item._id" :movie-name="item.movieName" :movie-time="item.movieTime"></movie-list>
                </div>
            </div>
        </div>
        <div>
            <common-footer></common-footer>
        </div>
    </div>
</template>

<script>
    import MovieIndexHeader from "../components/MovieIndexHeader";
    import CommonFooter from "../components/CommonFooter";
    import MovieList from "../components/MovieList";
    export default {
        name: "movieList",
        components: {
            MovieIndexHeader,
            CommonFooter,
            MovieList
        },
        data() {
            return{
                movieItems: []
            }
        },
        mounted() {
            // 获取数据 movieItems
        }
    }
</script>

<style scoped lang="less">
.container {
    width: 100%;
    margin: 0 auto;
    .contentMain{
        padding-top: 150px;
    }
    .contentText{
        font-size: 15px;
        padding-top: 20px;
    }
}
</style>