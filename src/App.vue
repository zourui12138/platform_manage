<template>
    <router-view/>
</template>

<script>
    import { interceptor } from "~/api/getData"

    export default {
        name: 'App',
        methods: {
            async errorCallback() {
                await interceptor(() => {
                    const loading = this.$loading({
                        lock: true,
                        text: '服务器连接超时，请刷新页面重新连接',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });
                    setTimeout(() => {loading.close();}, 3000);
                });
            }
        },
        created() {
            this.errorCallback();
        }
    }
</script>

<style lang="scss">@import "./assets/css/app";</style>
