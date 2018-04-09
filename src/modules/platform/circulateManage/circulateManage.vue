<template>
    <div>
        <div class="breadcrumbContainer clear">
            <span class="fl">所在位置：</span>
            <el-breadcrumb class="breadcrumb fl" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>流通管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
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
                <el-table-column prop="contractNum" label="合约号"></el-table-column>
                <el-table-column prop="hostName" label="合约时间"></el-table-column>
                <el-table-column prop="ip" label="提供方"></el-table-column>
                <el-table-column prop="cluster" label="需求方"></el-table-column>
                <el-table-column prop="dataCenter" label="生效时间"></el-table-column>
                <el-table-column prop="createAt" label="流通积分"></el-table-column>
                <el-table-column prop="dataUserName" label="流通状态"></el-table-column>
                <el-table-column prop="dataUserName" label="哈希值"></el-table-column>
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
                tableData: [
                    {
                        id: 1,
                        contractNum: '123456789'
                    }
                ],
                totalElements: null,
                selected: '虚拟机总数'
            }
        },
        methods: {
            toDetail(id) {
                this.$router.push({path : '/platform/circulateManageDetail', query: { id : id }});
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
