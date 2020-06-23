<template>
    <div class="footer">
        <div class="footer">
            <p>vue.js实例</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonFooter"
    }
</script>

<style scoped lang="less">
.footer{
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #000;
    .footer p{
        font-size: 10px;
        color: #fff;
        text-align: center;
    }
}
</style>