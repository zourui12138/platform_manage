<template>
    <div>
        <header class="breadcrumb">所在位置：<span>用户管理&nbsp;>>&nbsp;详情&nbsp;>>&nbsp;账单</span></header>
        <ul class="userBillTitle clear">
            <li class="fl">xxx虚拟机</li>
            <li class="fl"><img src="../../../assets/img/platform/userManage/integral.png" alt="">账户积分：333</li>
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
            <ul>
                <li class="title">
                    <h1 class="clear">
                        <span class="fl">2018-09-09</span>
                        <span class="fl">购买数据-xxxx大数据公司</span>
                        <span class="fr">余额：20积分</span>
                        <span class="fr">+10积分</span>
                    </h1>
                </li>
                <li class="title">
                    <h1 class="clear">
                        <span class="fl">2018-09-09</span>
                        <span class="fl">购买数据-xxxx大数据公司</span>
                        <span class="fr">余额：20积分</span>
                        <span class="fr">+10积分</span>
                    </h1>
                </li>
                <li class="title">
                    <h1 class="clear">
                        <span class="fl">2018-09-09</span>
                        <span class="fl">购买数据-xxxx大数据公司</span>
                        <span class="fr">余额：20积分</span>
                        <span class="fr">+10积分</span>
                    </h1>
                </li>
                <li class="title">
                    <h1 class="clear">
                        <span class="fl">2018-09-09</span>
                        <span class="fl">购买数据-xxxx大数据公司</span>
                        <span class="fr">余额：20积分</span>
                        <span class="fr">+10积分</span>
                    </h1>
                </li>
                <li class="title">
                    <h1 class="clear">
                        <span class="fl">2018-09-09</span>
                        <span class="fl">购买数据-xxxx大数据公司</span>
                        <span class="fr">余额：20积分</span>
                        <span class="fr">+10积分</span>
                    </h1>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-bill",
        data() {
            return{
                selected: '虚拟机总数'
            }
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
    .title{
        margin-top: 0;
        span{
            margin-right: 16px;
        }
    }
</style>
