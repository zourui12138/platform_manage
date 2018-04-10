<template>
    <div>
        <div class="breadcrumbContainer clear">
            <span class="fl">所在位置：</span>
            <el-breadcrumb class="breadcrumb fl" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item to="/platform/userManage">用户管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="detailPath">详情</el-breadcrumb-item>
                <el-breadcrumb-item>账单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <ul class="userBillTitle clear">
            <li class="fl">{{username}}</li>
            <li class="fl"><img src="../../../assets/img/platform/userManage/integral.png" alt="">账户积分：{{userBalance}}</li>
        </ul>
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
            <el-table :data="billData" header-cell-class-name="tableHeaderRow" style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <p>备注信息：<span>{{ props.row.Value.remaker }}</span></p>
                    </template>
                </el-table-column>
                <el-table-column label="账单时间" prop="Timestamp"></el-table-column>
                <el-table-column label="账单类型" prop="Value.type"></el-table-column>
                <el-table-column label="交易积分" prop="Value.count"></el-table-column>
                <el-table-column label="积分余额" prop="Value.integral"></el-table-column>
            </el-table>
            <div class="page clear">
                <el-pagination
                    class="fr"
                    background
                    layout="prev, pager, next"
                    :total="totalElements"
                    :page-size="pageSize"
                    @current-change="getBillData">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import { user_getBillData } from "~/api/getData"
    import { user_getUserById } from "~/api/getData"

    export default {
        name: "user-bill",
        data() {
            return{
                pageSize: 10,
                totalElements: null,
                billData: null,
                username: null,
                selected: '虚拟机总数'
            }
        },
        computed: {
            detailPath() {
                return '/platform/userManageDetail?id='+this.$route.query.id
            },
            userBalance() {
                return this.billData ? this.billData[0].Value.integral : null;
            }
        },
        methods: {
            async getBillData(page) {
                let data;
                data = await user_getBillData(this.$route.query.id,page,this.pageSize);
                this.totalElements = data.data.total;
                this.billData = data.data.data;
            },
            async getUserById() {
                let data;
                data = await user_getUserById(this.$route.query.id);
                this.username = data.data.data.accountName;
            }
        },
        mounted() {
            this.getBillData();
            this.getUserById();
        }
    }
</script>

<style lang="scss" scoped>
    .userBillTitle{
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        border: 1px solid #ebecf0;
        border-bottom: 2px solid #f3f7ff;
        background-color: #fff;
        padding: 0 30px;
        img{
            vertical-align: top;
            margin: 18px 10px 0 50px;
        }
    }
</style>
