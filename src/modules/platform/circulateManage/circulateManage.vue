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
                <el-input
                    size="medium"
                    v-model="searchKey"
                    clearable
                    placeholder="请输入名称,主机名,集群"
                    @blur="getTableData(1)"
                    suffix-icon="el-icon-search">
                </el-input>
            </div>
            <el-table :data="tableData" style="width: 100%" header-cell-class-name="tableHeaderRow">
                <el-table-column prop="contractRecordId" label="合约号"></el-table-column>
                <el-table-column prop="partA" label="提供方"></el-table-column>
                <el-table-column prop="partB" label="需求方"></el-table-column>
                <el-table-column prop="signtime" label="生效时间"></el-table-column>
                <el-table-column prop="points" label="流通积分"></el-table-column>
                <el-table-column prop="hash" label="哈希值"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="mini" @click="toDetail(scope.row.contractRecordId)">详情</el-button>
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
    import { circulateManage_getTableData } from '~/api/getData'

    export default {
        name: "circulate-manage",
        data() {
            return{
                pageSize: 10,
                tableData: null,
                totalElements: null,
                selected: '虚拟机总数',
                searchKey: ''
            }
        },
        methods: {
            toDetail(id) {
                this.$router.push({path : '/platform/circulateManageDetail', query: { id : id }});
            },
            async getTableData(page) {
                let data;
                data = await circulateManage_getTableData(page,this.pageSize,this.searchKey);
                this.tableData = data.data.data;
                this.totalElements = data.data.total;
            }
        },
        mounted() {
            this.getTableData(1);
        }
    }
</script>

<style lang="scss" scoped></style>
