<template>
    <div class="headerPic">
        <div>
            <p class="imgTitle">{{recommendTitle}}</p>
            <a :href="recommendSrc">
                <img :src="recommendImg" class="headerImg" alt="图片"/>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexHeaderPic",
        props: ['recommendTitle','recommendSrc','recommendImg']
    }
</script>

<style scoped lang="less">
.headerPic{
    height: 300px;
    width: 100%;
    background-color: antiquewhite;
    .headerImg{
        height: 300px;
        width: 100%;
    }
    .imgTitle{
        z-index: 2;
        padding-left: 45%;
        padding-top: 230px;
        position: absolute;
        color: #fff;
        font-size: 20px;
    }
}
</style>