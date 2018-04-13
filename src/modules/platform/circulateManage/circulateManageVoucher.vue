<template>
    <div>
        <div class="breadcrumbContainer clear">
            <span class="fl">所在位置：</span>
            <el-breadcrumb class="breadcrumb fl" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item to="/platform/circulateManage">流通管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="detailPath">详情</el-breadcrumb-item>
                <el-breadcrumb-item>凭证</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content clear">
            <ul class="contentLeft fl">
                <li v-for="i in voucherData"><div></div></li>
            </ul>
            <ul class="contentRight fl">
                <li class="clear" v-for="i in voucherData">
                    <el-row class="fl contentRightMsg">
                        <el-col :span="24"><h2>{{i.time}}</h2></el-col>
                        <el-col :span="24"><h1>名称：<span>{{i.name}}</span></h1></el-col>
                        <el-col :span="24"><p>所在区块信息</p></el-col>
                        <el-col :span="24"><p>哈希值：<span>{{i.hash}}</span></p></el-col>
                        <el-col :span="12"><p>区块高度：<span>{{i.height}}</span></p></el-col>
                        <el-col :span="12"><p>创建时间：<span>{{i.time}}</span></p></el-col>
                    </el-row>
                    <div class="fl contentRightVideo"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { circulateManage_getVoucher } from '~/api/getData'

    export default {
        name: "circulate-manage-voucher",
        data() {
            return{
                voucherData: null
            }
        },
        computed: {
            detailPath() {
                return '/platform/circulateManageDetail?id='+this.$route.query.uuid
            }
        },
        methods: {
            async getVoucher() {
                let data = await circulateManage_getVoucher(this.$route.query.id);
                this.voucherData = data.data.data;
            }
        },
        mounted() {
            this.getVoucher();
        }
    }
</script>

<style lang="scss" scoped>
    .content{
        padding-top: 30px;
        .contentLeft{
            width: 42px;
            background: url('../../../assets/img/platform/circulateManage/border.png') repeat-y center;
            li{
                height: 160px;
                padding-top: 22px;
                div{
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    margin: auto;
                }
            }
            li:not(:last-child){
                margin-bottom: 30px;
            }
            li:nth-child(4n+1){
                div{
                    background-color: #5a8bff;
                }
            }
            li:nth-child(4n+2){
                div{
                    background-color: #33cf98;
                }
            }
            li:nth-child(4n+3){
                div{
                    background-color: #ffc74a;
                }
            }
            li:nth-child(4n+4){
                div{
                    background-color: #f77f5b;
                }
            }
        }
        .contentRight{
            width: calc(100% - 42px);
            line-height: 30px;
            font-size: 14px;
            li{
                padding: 14px;
                border: 2px solid #f3f7ff;
                border-radius: 4px;
                .contentRightMsg{
                    width: 870px;
                }
                .contentRightVideo{
                    width: 300px;
                    height: 150px;
                    border-radius: 6px;
                    background: #f3f7ff url('../../../assets/img/platform/circulateManage/start.png') no-repeat center;
                }
            }
            li:not(:last-child){
                margin-bottom: 30px;
            }
            li:nth-child(4n+1){
                h2{
                    color: #5a8bff;
                }
            }
            li:nth-child(4n+2){
                h2{
                    color: #33cf98;
                }
            }
            li:nth-child(4n+3){
                h2{
                    color: #ffc74a;
                }
            }
            li:nth-child(4n+4){
                h2{
                    color: #f77f5b;
                }
            }
        }
    }
</style>
