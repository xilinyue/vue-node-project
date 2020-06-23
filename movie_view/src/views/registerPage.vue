<template>
    <div>
        <div>
            <div>
                <div class="box">
                    <label>用户名：</label>
                    <input placeholder="用户名" />
                </div>
                <div class="box">
                    <label>密  码：</label>
                    <input placeholder="密码" />
                </div>
                <div class="box">
                    <label>确认密码：</label>
                    <input placeholder="确认密码" />
                </div>
                <div class="box">
                    <label>邮  箱：</label>
                    <input placeholder="邮箱" />
                </div>
                <div class="box">
                    <label>手  机：</label>
                    <input placeholder="手机" />
                </div>
                <div class="box">
                    <button>注  册：</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "registerPage"
    }
</script>

<style scoped>
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }
</style>