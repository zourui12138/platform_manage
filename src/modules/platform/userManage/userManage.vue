<template>
    <div id="userManage">
        <header class="breadcrumb">所在位置：<span>用户管理</span></header>
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
                <el-table-column prop="accountName" label="用户名"></el-table-column>
                <el-table-column prop="accountId" label="用户ID"></el-table-column>
                <el-table-column prop="accountCategoryValue" label="用户类别"></el-table-column>
                <el-table-column prop="contacts" label="联系人"></el-table-column>
                <el-table-column prop="cellphoneNumber" label="联系方式"></el-table-column>
                <el-table-column prop="memory" label="账户积分余额"></el-table-column>
                <el-table-column prop="accumulatedConsumptionPoints" label="累计消费积分"></el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        <span>{{ scope.row.openingStatusValue }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="mini" @click="toDetail(scope.row.accountId)">详情</el-button>
                        <el-switch v-model="scope.row.enabledStatus === '1'"></el-switch>
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
    import { user_getTableData } from "~/api/getData"

    export default {
        name: "user-manage",
        data() {
            return{
                pageSize: 2,
                totalElements: null,
                tableData: null,
                selected: '虚拟机总数'
            }
        },
        methods: {
            toDetail(id) {
                this.$router.push({path : '/platform/userManageDetail', query: { id : id }});
            },
            async getTableData(page) {
                let data;
                data = await user_getTableData(page,this.pageSize);
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
