<template>
    <div>
        <div class="breadcrumbContainer clear">
            <span class="fl">所在位置：平台监控&nbsp;<i class="el-icon-arrow-right"></i>&nbsp;</span>
            <el-breadcrumb class="breadcrumb fl" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>区块链网络服务监控</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="count">
            <el-row :gutter="40">
                <el-col :span="12">
                    <div class="countBox clear">
                        <img class="fl" src="../../../../assets/img/platform/monitor/blockChain/disableServer.png" alt="">
                        <div class="fl">
                            <h2>当前时刻节点服务器不可用<strong class="fr">29<span>台</span></strong></h2>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="countBox clear">
                        <img class="fl" src="../../../../assets/img/platform/monitor/blockChain/disablePing.png" alt="">
                        <div class="fl">
                            <h2>当前时刻节点服务器ping不可达<strong class="fr">24<span>台</span></strong></h2>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <el-table :data="tableData" style="width: 100%" header-cell-class-name="tableHeaderRow">
                <el-table-column prop="name" label="节点名称"></el-table-column>
                <el-table-column label="节点状态">
                    <template slot-scope="scope">
                        <span>{{scope.row.state === 'running' ? '运行中' : '已停止'}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="ip" label="ip地址"></el-table-column>
                <el-table-column prop="port" label="端口"></el-table-column>
                <el-table-column prop="platform" label="区块链平台"></el-table-column>
                <el-table-column prop="version" label="区块链版本"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="mini" @click="toDetail">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import { blockChain_getTableData } from "~/api/getData"

    export default {
        name: "monitor-block-chain",
        data() {
            return{
                tableData: [],
                selected: '全部'
            }
        },
        methods: {
            toDetail() {
                this.$router.push({path : '/platform/monitor/blockChainDetail'});
            },
            async getTableData() {
                let data;
                data = await blockChain_getTableData();
                if(data.data.message === 'success'){
                    for(let i=0; i<data.data.data.length; i++){
                        this.tableData.push(data.data.data[i][0]);
                    }
                }
            }
        },
        mounted() {
            this.getTableData();
        }
    }
</script>

<style lang="scss" scoped>
    .count{
        img{
            margin:35px 34px 35px 0;
        }
    }
    .content{
        padding-top: 30px;
    }
</style>
