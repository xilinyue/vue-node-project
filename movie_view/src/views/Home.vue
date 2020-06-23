<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="userMessage">
            <user-message></user-message>
        </div>
        <div class="contentPic">
            <index-header-pic></index-header-pic>
        </div>
        <div class="contentMain">
            <div>
                <div class="contentLeft">
                    <div class="cont-ul">
                        <movie-list v-for="item in movieItems" :key="item._id"
                            id="item._id" :movie-name="item.movieName" :movie-time="item.movieTime"></movie-list>
                    </div>
                </div>
                <div class="contentRight">
                    <div class="cont-ul">
                        <new-list v-for="item in newsItems" :key="item._id"
                                  id="item._id" :article-title="item.articleTitle" :article-time="item.articleTime"></new-list>
                    </div>
                </div>
            </div>
        </div>
        <common-footer></common-footer>
    </div>
</template>

<script>
    import MovieIndexHeader from "../components/MovieIndexHeader";
    import CommonFooter from "../components/CommonFooter";
    import NewList from "../components/NewList";
    import MovieList from "../components/MovieList";
    import IndexHeaderPic from "../components/IndexHeaderPic";
    import UserMessage from "../components/UserMessage";
    export default {
        name: "Home",
        components: {
            MovieIndexHeader,
            CommonFooter,
            NewList,
            MovieList,
            IndexHeaderPic,
            UserMessage
        },
        data() {
            return{
                movieItems: [],
                newsItems: []
            }
        }
    }
</script>

<style scoped lang="less">
.container{
    width: 100%;
    margin: 0 auto;
    .contentMain{
        height: 50px;
        .contentLeft{
            width: 60%;
            float: left;
            margin-top: 5px;
            border-top: 1px solid #000;
        }
        .contentRight{
            width: 38%;
            margin-left: 1%;
            float: left;
            margin-top: 5px;
            border-top: 1px solid #000;
        }
        .con-ul{
            padding-top: 0.5rem;
            background-color: #fff;
        }
        .con-ul::after{
            content: "";
            display: block;
            clear: both;
            width: 0;
            height: 0;
        }
    }
    .userMessage{
        padding-top: 60px;
        margin-top: -10px;
        margin-left: -10px;
    }
    .contentPic{
        padding-top: 5px;
    }
}
</style>