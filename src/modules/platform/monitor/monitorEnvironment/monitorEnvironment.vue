<template>
    <div id="monitorEnvironment">
        <div class="count">
            <el-row :gutter="40">
                <el-col :span="6">
                    <div class="countBox clear">
                        <img class="fl" src="../../../../assets/img/platform/environment/virtualTotal.png" alt="">
                        <div class="fl">
                            <h1 class="clear">
                                <strong class="fl">{{countData.totalDFC}}</strong>
                            </h1>
                            <p>DFC总数</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="countBox clear">
                        <img class="fl" src="../../../../assets/img/platform/environment/virtualStart.png" alt="">
                        <div class="fl">
                            <h1 class="clear">
                                <strong class="fl">{{countData.startDFC}}</strong>
                            </h1>
                            <p>已启用DFC</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="countBox clear">
                        <img class="fl" src="../../../../assets/img/platform/environment/virtualDisable.png" alt="">
                        <div class="fl">
                            <h1 class="clear">
                                <strong class="fl">{{countData.stopDFC}}</strong>
                            </h1>
                            <p>已停用DFC</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="countBox clear">
                        <img class="fl" src="../../../../assets/img/platform/environment/virtualDestroy.png" alt="">
                        <div class="fl">
                            <h1 class="clear">
                                <strong class="fl">{{countData.destroyDFC}}</strong>
                            </h1>
                            <p>已销毁DFC</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <div class="search">
                <el-select placeholder="请选择" v-model="selected">
                    <el-option label="全部" value="全部"></el-option>
                </el-select>
                <el-input placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
            </div>
            <el-table :data="tableData" style="width: 100%" header-cell-class-name="tableHeaderRow">
                <el-table-column prop="vmName" label="名称"></el-table-column>
                <el-table-column prop="hostName" label="主机"></el-table-column>
                <el-table-column prop="ip" label="ip地址"></el-table-column>
                <el-table-column prop="cluster" label="群集"></el-table-column>
                <el-table-column prop="dataCenter" label="数据中心"></el-table-column>
                <el-table-column prop="memoryUsage" label="内存"></el-table-column>
                <el-table-column prop="cpuUsage" label="CPU"></el-table-column>
                <el-table-column prop="network" label="网络"></el-table-column>
                <el-table-column prop="createAt" label="使用时间" width="150"></el-table-column>
                <el-table-column prop="dataUserName" label="使用方"></el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        <span>{{ scope.row.status ? '运行中' : '停止服务' }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="mini" @click="toDetail(scope.row.id)">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="page clear">
                <el-pagination
                    class="fr"
                    background
                    layout="prev, pager, next"
                    :total="totalElements"
                    :page-size="pageSize"
                    @current-change="getTableData">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import { DFC_getTableData } from "~/api/getData"
    import { DFC_getCountData } from "~/api/getData"

    export default {
        name: "monitor-environment",
        data() {
            return{
                pageSize: 10,
                tableData: null,
                totalElements: null,
                countData: {
                    totalDFC: null,
                    startDFC: null,
                    stopDFC: null,
                    destroyDFC: null
                },
                selected: '全部'
            }
        },
        methods: {
            toDetail(id) {
                this.$router.push({path : '/platform/monitor/environmentDetail', query: { id : id }});
            },
            async getTableData(page) {
                let data;
                data = await DFC_getTableData(page,this.pageSize);
                this.tableData = data.data.data.content;
                this.totalElements = data.data.data.totalElements;
            },
            async getCountData() {
                let data;
                data = await DFC_getCountData();
                this.countData = data.data.data;
            }
        },
        mounted() {
            this.getTableData(1);
            this.getCountData();
        }
    }
</script>

<style lang="scss" scoped>
    .count{
        img{
            margin:33px 34px 33px 0;
        }
    }
</style>
