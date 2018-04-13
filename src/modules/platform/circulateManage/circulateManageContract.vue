<template>
    <div>
        <div class="breadcrumbContainer clear">
            <span class="fl">所在位置：</span>
            <el-breadcrumb class="breadcrumb fl" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item to="/platform/circulateManage">流通管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="detailPath">详情</el-breadcrumb-item>
                <el-breadcrumb-item>合约</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="contractTitle">
            <h1>数据流通合约</h1>
            <p>数据提供方：<span>{{contractData.partA}}</span></p>
            <p>数据需求方：<span>{{contractData.partB}}</span></p>
        </div>
        <div class="contractContent">
            <div class="title"><h1>合约信息</h1></div>
            <p>{{contractData.content}}</p>
            <div class="title"><h1>流通需求</h1></div>
            <p>需支付积分：<span>{{contractData.points}}</span>积分</p>
            <p>数据使用期限：<span>{{contractData.start+' —— '+contractData.end}}</span><strong>数据到期后将自动销毁</strong></p>
            <div class="title"><h1>其他约定</h1></div>
            <p>数据提供方：<span>{{contractData.remarksA}}</span></p>
            <p>数据需求方：<span>{{contractData.remarksB}}</span></p>
        </div>
        <footer class="contractFooter"><el-button size="small" type="primary" @click="toDetail">返回</el-button></footer>
    </div>
</template>

<script>
    import { circulateManage_getContract } from '~/api/getData'

    export default {
        name: "circulate-manage-contract",
        data() {
            return{
                contractData: {}
            }
        },
        computed: {
            detailPath() {
                return '/platform/circulateManageDetail?id='+this.$route.query.id
            }
        },
        methods: {
            toDetail() {
                this.$router.push({path : '/platform/circulateManageDetail', query: { id : this.$route.query.id }});
            },
            async getContract() {
                let data = await circulateManage_getContract(this.$route.query.id);
                this.contractData = data.data.data;
            }
        },
        mounted() {
            this.getContract();
        }
    }
</script>

<style lang="scss" scoped>
    .contractTitle{
        background-color: #fff;
        border: 1px solid #ebecf0;
        border-bottom: 2px solid #f3f7ff;
        padding: 40px 190px 0;
        h1{
            font-size: 24px;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        p{
            font-size: 14px;
            height: 40px;
            line-height: 40px;
        }
    }
    .contractContent{
        background-color: #fff;
        border: 1px solid #ebecf0;
        border-bottom: none;
        padding: 0 190px;
        p{
            font-size: 14px;
            line-height: 30px;
            strong{
                font-weight: normal;
                margin-left: 30px;
                color: #f77f5b;
            }
        }
    }
    .contractFooter{
        background-color: #fff;
        border: 1px solid #ebecf0;
        border-top: none;
        padding: 45px 190px;
        text-align: right;
    }
</style>
