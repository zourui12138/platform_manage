<template>
    <div>
        <el-menu
            style="margin-top: 20px"
            :default-active="defaultActive"
            mode="horizontal"
            router
            active-text-color="#5a8bff"
            background-color="#fff">
            <el-menu-item index="blockChain">区块链网络服务监控</el-menu-item>
            <el-menu-item index="environment">数据流通环境监控</el-menu-item>
        </el-menu>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "monitor",
        computed: {
            defaultActive() {
                let data;
                switch (this.$route.name){
                    case 'monitorEnvironment' : data = 'environment';break;
                    case 'monitorEnvironmentDetail' : data = 'environment';break;
                    case 'monitorBlockChain' : data = 'blockChain';break;
                    case 'monitorBlockChainDetail' : data = 'blockChain';break;
                }
                return data;
            }
        }
    }
</script>

<style lang="scss" scoped></style>
