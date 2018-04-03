<template>
    <div id="platform" class="clear">
        <div class="aside fl">
            <h1><img src="../../assets/img/platform/logo.png" alt="">数据流通平台</h1>
            <VuePerfectScrollbar class="nav">
                <ul>
                    <li :class="{current : asideHomeNav}" @click="href('home')">平台总揽</li>
                    <li :class="{current : asideEnvironmentNav}" @click="href('environment')">环境管理</li>
                    <li :class="{current : asideCirculateManageNav}" @click="href('circulateManage')">流通管理</li>
                    <li :class="{current : asideUserManageNav}" @click="href('userManage')">用户管理</li>
                    <li :class="{current : asideDataDirectoryNav}" @click="href('dataDirectory')">数据目录</li>
                    <li :class="{current : asideMonitorNav}" @click="href('monitor/blockChain')">平台监控</li>
                    <li :class="{current : asideDataStatisticsNav}" @click="href('dataStatistics')">数据统计</li>
                </ul>
            </VuePerfectScrollbar>
        </div>
        <section class="section fl">
            <header class="header"></header>
            <VuePerfectScrollbar class="main" v-scroll><router-view/></VuePerfectScrollbar>
        </section>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "platform",
        components: {VuePerfectScrollbar},
        data() {
            return{
                asideHomeNav: false,
                asideEnvironmentNav: false,
                asideCirculateManageNav: false,
                asideUserManageNav: false,
                asideDataDirectoryNav: false,
                asideMonitorNav: false,
                asideDataStatisticsNav: false,
            }
        },
        methods: {
            initAsideNav() {
                this.asideHomeNav = false;
                this.asideEnvironmentNav = false;
                this.asideCirculateManageNav = false;
                this.asideUserManageNav = false;
                this.asideDataDirectoryNav = false;
                this.asideMonitorNav = false;
                this.asideDataStatisticsNav = false;
                switch (this.$route.name){
                    case 'home' : this.asideHomeNav = true;break;
                    case 'environment' : this.asideEnvironmentNav = true;break;
                    case 'environmentDetail' : this.asideEnvironmentNav = true;break;
                    case 'circulateManage' : this.asideCirculateManageNav = true;break;
                    case 'userManage' : this.asideUserManageNav = true;break;
                    case 'userManageDetail' : this.asideUserManageNav = true;break;
                    case 'userBill' : this.asideUserManageNav = true;break;
                    case 'dataDirectory' : this.asideDataDirectoryNav = true;break;
                    case 'monitorBlockChain' : this.asideMonitorNav = true;break;
                    case 'monitorBlockChainDetail' : this.asideMonitorNav = true;break;
                    case 'monitorEnvironment' : this.asideMonitorNav = true;break;
                    case 'monitorEnvironmentDetail' : this.asideMonitorNav = true;break;
                    case 'dataStatistics' : this.asideDataStatisticsNav = true;break;
                }
            },
            href(arg) {
                this.$router.push({path : '/platform/'+arg});
                this.initAsideNav();
            }
        },
        beforeMount() {
            this.initAsideNav();
        }
    }
</script>

<style lang="scss">@import "../../assets/css/platform";</style>

<style lang="scss" scoped>
    #platform{
        height: calc(100%);
        .aside{
            height: calc(100%);
            width: 295px;
            background-color: #353a40;
            color: #fff;
            h1{
                height: 96px;
                line-height: 96px;
                text-align: center;
                font-size: 24px;
                img{
                    vertical-align: middle;
                    margin-right: 18px;
                }
            }
            .nav{
                height: calc(100% - 96px);
                ul{
                    li{
                        height: 52px;
                        line-height: 52px;
                        width: 200px;
                        margin: 0 auto 7px;
                        border-radius: 6px;
                        padding-left: 81px;
                        cursor: pointer;
                        transition: all .2s;
                        font-size: 18px;
                    }
                    li.current,li:hover{
                        background-color: #5a8bff;
                    }
                }
            }
        }
        .section{
            height: calc(100%);
            width: calc(100% - 295px);
            .header{
                height: 94px;
                background-color: #fff;
                border-bottom: 2px solid #f2f2f2;
            }
            .main{
                padding: 0 20px 20px;
                height: calc(100% - 116px);
            }
        }
    }
</style>
