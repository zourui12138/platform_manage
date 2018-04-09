<template>
    <div>
        <header class="breadcrumb">所在位置：<span>环境管理&nbsp;>>&nbsp;详情</span></header>
        <ul class="virtualTitle clear">
            <li class="fl">{{detailData.vmName}}</li>
            <li class="fl"><img src="../../../assets/img/platform/environment/run.png" alt="">{{detailData.status ? '运行中' : '停止服务'}}</li>
            <li class="fr" v-show="detailData.status">
                <el-button type="primary" size="mini" @click="openDestroy" :disabled="canNot">{{destroyBtn}}</el-button>
                <el-button type="primary" size="mini" @click="openStop" :disabled="canNot">{{canNot ? '停止中···' : '停止服务'}}</el-button>
            </li>
            <li class="fr" v-show="!detailData.status">
                <el-button type="primary" size="mini" @click="openDestroy" :disabled="canNot">{{destroyBtn}}</el-button>
                <el-button type="primary" size="mini" @click="openStart" :disabled="canNot">{{canNot ? '启动中···' : '启动服务'}}</el-button>
            </li>
        </ul>
        <div class="virtualMsg">
            <div class="title"><h1>数据流通信息</h1></div>
            <p>数据名称：<span>{{detailData.dataName}}</span></p>
            <p>数据使用方：<span>{{detailData.dataUserName}}</span></p>
            <p>数据提供方：<span>{{detailData.dataMasterName}}</span></p>
            <p>数据流通合约号：<span>{{detailData.contractId}}</span></p>
            <p>虚拟机启用时间：<span>{{detailData.createAt}}</span></p>
            <p>虚拟机销毁时间：<span>{{detailData.destroyAt}}</span></p>
            <div class="title"><h1>基础环境信息</h1></div>
            <el-row>
                <el-col :span="8"><p>操作系统：<span>{{detailData.system}}</span></p></el-col>
                <el-col :span="8"><p>图形界面协议：<span>{{detailData.viewType}}</span></p></el-col>
                <el-col :span="8"><p>视频类型：<span>{{detailData.videoType}}</span></p></el-col>
                <el-col :span="8"><p>定义内存：<span>{{detailData.memorySize}}</span></p></el-col>
                <el-col :span="8"><p>保证的物理内存：<span>{{detailData.diskSize}}</span></p></el-col>
                <el-col :span="8"><p>CPU内核数量：<span>{{detailData.cpuNumber}}</span></p></el-col>
                <!--<el-col :span="8"><p>DFC CPU数：<span>我是数据名称</span></p></el-col>-->
                <!--<el-col :span="8"><p>集群兼容性版本：<span>我是数据名称</span></p></el-col>-->
            </el-row>
        </div>
    </div>
</template>

<script>
    import { DFC_getDetailData } from "~/api/getData"
    import { DFC_start } from "~/api/getData"
    import { DFC_stop } from "~/api/getData"
    import { DFC_destroy } from "~/api/getData"

    export default {
        name: "monitorEnvironment-detail",
        data() {
            return{
                dataId: null,
                canNot: false,
                destroyBtn: '销毁',
                detailData: {
                    vmName: null,
                    status: null,
                    dataName: null,
                    dataUserName: null,
                    dataMasterName: null,
                    contractId: null,
                    createAt: null,
                    destroyAt: null,
                    system: null,
                    viewType: null,
                    videoType: null,
                    memorySize: null,
                    diskSize: null,
                    cpuNumber: null,
                }
            }
        },
        methods: {
            async getDetailData() {
                let data;
                data = await DFC_getDetailData(this.dataId);
                this.detailData = data.data.data;
            },
            async start(){
                this.canNot = true;
                let data;
                data = await DFC_start(this.dataId);
                this.canNot = false;
                this.detailData.status = 1;
                this.$message({type: 'success', message: '启动成功!'});
            },
            async stop(){
                this.canNot = true;
                let data;
                data = await DFC_stop(this.dataId);
                this.canNot = false;
                this.detailData.status = 0;
                this.$message({type: 'success', message: '停止成功!'});
            },
            async destroy(){
                this.canNot = true;
                this.destroyBtn = '销毁中···';
                const loading = this.$loading({
                    lock: true,
                    text: '虚拟机摧毁中，请稍等···',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                let data;
                data = await DFC_destroy(this.dataId);
                this.canNot = false;
                this.destroyBtn = '销毁';
                this.$route.push({path : '/platform/environment'});
                loading.close();
                this.$message({type: 'success', message: '销毁成功!'});
            },
            openStart () {
                this.$confirm('此操作将启动虚拟机服务, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.start();
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消该操作'});
                });
            },
            openStop() {
                this.$confirm('此操作将停止虚拟机服务, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.stop();
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消该操作'});
                });
            },
            openDestroy() {
                this.$confirm('此操作将销毁虚拟机, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.destroy();
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消该操作'});
                });
            }
        },
        beforeMount() {
            this.dataId = this.$route.query.id;
            this.getDetailData();
        }
    }
</script>

<style lang="scss" scoped>
    .virtualTitle{
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        border: 1px solid #ebecf0;
        border-bottom: 2px solid #f3f7ff;
        background-color: #fff;
        padding: 0 30px;
        img{
            vertical-align: top;
            margin: 20px 10px 0 50px;
        }
    }
    .virtualMsg{
        padding:20px 30px;
        background-color: #fff;
        border: 1px solid #ebecf0;
        border-top: none;
        p{
            line-height: 40px;
            font-size: 14px;
            padding-left: 16px;
        }
    }
</style>
