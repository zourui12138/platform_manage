<template>
    <div id="monitor">
        <header class="breadcrumb">所在位置：<span>平台监控</span></header>
        <nav class="monitorMenu">
            <ul class="clear">
                <li class="fl" :class="{current : blockChainMenu}" @click="toggleMonitorMenu('blockChain')">区块链网络服务监控</li>
                <li class="fl" :class="{current : environmentMenu}" @click="toggleMonitorMenu('environment')">数据流通环境监控</li>
            </ul>
        </nav>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "monitor",
        data() {
            return{
                blockChainMenu: false,
                environmentMenu: false
            }
        },
        methods: {
            toggleMonitorMenu(arg) {
                this.$router.push({path: '/platform/monitor/'+arg});
                this.initMonitorMenu();
            },
            initMonitorMenu() {
                this.blockChainMenu = false;
                this.environmentMenu = false;
                console.log(this.$route.name);
                switch (this.$route.name){
                    case 'monitorEnvironment' : this.environmentMenu = true;break;
                    case 'monitorEnvironmentDetail' : this.environmentMenu = true;break;
                    case 'monitorBlockChain' : this.blockChainMenu = true;break;
                    case 'monitorBlockChainDetail' : this.blockChainMenu = true;break;
                }
            }
        },
        mounted() {
            this.initMonitorMenu();
        }
    }
</script>

<style lang="scss" scoped>
    .monitorMenu{
        margin-bottom: 25px;
        li{
            width: 196px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            border: 2px solid #5a8bff;
            font-size: 14px;
            cursor: pointer;
        }
        li.current,li:hover{
            background-color: #5a8bff;
            color: #fff;
            transition: all .2s;
        }
    }
</style>
