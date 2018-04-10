<template>
    <div>
        <div class="breadcrumbContainer clear">
            <span class="fl">所在位置：</span>
            <el-breadcrumb class="breadcrumb fl" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content">
            <div class="search">
                <el-select size="medium" placeholder="请选择" v-model="selected">
                    <el-option v-for="i in userCategory" :key="i.code" :label="i.value" :value="i.code"></el-option>
                </el-select>
                <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
            </div>
            <el-table :data="tableData" style="width: 100%" header-cell-class-name="tableHeaderRow">
                <el-table-column prop="accountName" label="用户名"></el-table-column>
                <el-table-column prop="accountId" label="用户ID"></el-table-column>
                <el-table-column prop="accountCategoryValue" label="用户类别"></el-table-column>
                <el-table-column prop="contacts" label="联系人"></el-table-column>
                <el-table-column prop="cellphoneNumber" label="联系方式"></el-table-column>
                <el-table-column prop="memory" label="积分余额"></el-table-column>
                <el-table-column prop="accumulatedConsumptionPoints" label="消费积分"></el-table-column>
                <el-table-column label="帐号审批">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            :disabled="scope.row.openingStatusValue === '已开通'"
                            :type="scope.row.openingStatusValue === '已开通' ? 'success' : 'primary'">
                            {{ scope.row.openingStatusValue }}
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column label="帐号状态" width="200">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="userStatus[scope.$index]"
                            active-text="启用"
                            inactive-text="禁用"
                            @change="enabled(scope.row.accountId,scope.row.enabledStatus)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="mini" @click="toDetail(scope.row.accountId)">详情</el-button>
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
    import { user_enabled } from "~/api/getData"
    import { user_getCategory } from "~/api/getData"

    export default {
        name: "user-manage",
        data() {
            return{
                pageSize: 10,
                totalElements: null,
                tableData: null,
                selected: '0',
                userStatus: null,
                userCategory: null
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
                this.userStatus = [];
                for (let i=0; i<this.tableData.length; i++){
                    this.userStatus.push(this.tableData[i].enabledStatus === '1');
                }
            },
            async enabled(id,status){
                let data;
                status = status === '1' ? '2' : '1';
                data = await user_enabled(id,status);
                data.data.status === 1 && (this.$message.success('修改帐号状态成功'));
            },
            async getCategory() {
                let data;
                data = await user_getCategory();
                this.userCategory = data.data.data;
                this.userCategory.unshift({code : '0',value : '全部分类'});
            }
        },
        mounted() {
            this.getTableData(1);
            this.getCategory();
        }
    }
</script>

<style lang="scss" scoped></style>
