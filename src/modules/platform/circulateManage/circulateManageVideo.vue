<template>
    <div>
        <div class="video">
            <iframe src="./static/try1.html" frameborder="0" width="100%" height="100%"></iframe>
        </div>
        <div class="mask" @click="toVoucher"></div>
    </div>
</template>

<script>
    export default {
        name: "circulateManage-video",
        methods: {
            toVoucher() {
                this.$router.push({path : '/platform/circulateManageVoucher', query: { uuid : this.$route.query.uuid ,id : this.$route.query.id }});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mask{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #000;
        opacity: .5;
        z-index: 1000;
    }
    .video{
        position: fixed;
        width: 656px;
        height: 525px;
        background-color: #fff;
        left: 0;
        right: 0;
        margin: auto;
        top: calc(50% - 262px);
        z-index: 1001;
        border-radius: 10px;
        box-shadow: 0 0 10px #fff;
    }
</style>
