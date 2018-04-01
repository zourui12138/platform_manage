<template>
    <div id="platform" class="clear">
        <div class="aside fl">
            <h1><img src="../../assets/img/platform/logo.png" alt="">数据流通平台</h1>
            <VuePerfectScrollbar class="nav">
                <ul>
                    <li class="current">平台总揽</li>
                    <li>环境管理</li>
                    <li>流通管理</li>
                    <li>用户管理</li>
                    <li>数据目录</li>
                    <li>平台监控</li>
                    <li>数据统计</li>
                </ul>
            </VuePerfectScrollbar>
        </div>
        <section class="section fl">
            <header class="header"></header>
            <VuePerfectScrollbar class="main"><router-view/></VuePerfectScrollbar>
        </section>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "platform",
        components: {VuePerfectScrollbar}
    }
</script>

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
