<template>
    <div>
        <header class="breadcrumb">所在位置：<span>流通管理</span></header>
        <div class="content">
            <div class="search">
                <el-select size="medium" placeholder="请选择" v-model="selected">
                    <el-option label="虚拟机总数" value="虚拟机总数"></el-option>
                    <el-option label="已启用虚拟机" value="已启用虚拟机"></el-option>
                    <el-option label="已停用虚拟机" value="已停用虚拟机"></el-option>
                    <el-option label="已销毁虚拟机" value="已销毁虚拟机"></el-option>
                </el-select>
                <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
            </div>
            <el-table :data="tableData" style="width: 100%" header-cell-class-name="tableHeaderRow">
                <el-table-column prop="vmName" label="名称"></el-table-column>
                <el-table-column prop="hostName" label="主机"></el-table-column>
                <el-table-column prop="ip" label="ip地址"></el-table-column>
                <el-table-column prop="cluster" label="群集"></el-table-column>
                <el-table-column prop="dataCenter" label="数据中心"></el-table-column>
                <el-table-column prop="createAt" label="使用时间"></el-table-column>
                <el-table-column prop="dataUserName" label="使用方"></el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope" class="clear">
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
    export default {
        name: "circulate-manage",
        data() {
            return{
                pageSize: 5,
                tableData: null,
                totalElements: null,
                selected: '虚拟机总数'
            }
        },
        methods: {
            toDetail(id) {
                this.$router.push({path : '/platform/environmentDetail', query: { id : id }});
            },
            async getTableData(page) {
                let data;
                data = await DFC_getTableData(page,this.pageSize);
                this.tableData = data.data.data.content;
                this.totalElements = data.data.data.totalElements;
            }
        }
    }
</script>

<style lang="scss" scoped></style>
