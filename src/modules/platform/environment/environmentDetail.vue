<template>
    <div id="environmentDetail">
        <header class="breadcrumb">所在位置：<span>环境管理&nbsp;>>&nbsp;详情</span></header>
        <ul class="virtualTitle clear">
            <li class="fl">xxx虚拟机</li>
            <li class="fl">运行中</li>
            <li class="fr">
                <el-button type="primary" size="mini">销毁</el-button>
                <el-button type="primary" size="mini">启用</el-button>
            </li>
        </ul>
        <div class="virtualMsg">
            <div class="virtualMsgTitle"><h1>数据流通信息</h1></div>
            <p>数据名称：<span>我是数据名称</span></p>
            <p>数据使用方：<span>xxx公司</span></p>
            <p>数据提供方：<span>xxx公司</span></p>
            <p>数据流通合约号：<span>123456789</span></p>
            <p>虚拟机启用时间：<span>2018-04-01</span></p>
            <p>虚拟机销毁时间：<span>2018-04-01</span></p>
            <div class="virtualMsgTitle"><h1>基础环境信息</h1></div>
            <el-row>
                <el-col :span="8"><p>数据名称：<span>我是数据名称</span></p></el-col>
                <el-col :span="8"><p>数据名称：<span>我是数据名称</span></p></el-col>
                <el-col :span="8"><p>数据名称：<span>我是数据名称</span></p></el-col>
                <el-col :span="8"><p>数据名称：<span>我是数据名称</span></p></el-col>
                <el-col :span="8"><p>数据名称：<span>我是数据名称</span></p></el-col>
                <el-col :span="8"><p>数据名称：<span>我是数据名称</span></p></el-col>
                <el-col :span="8"><p>数据名称：<span>我是数据名称</span></p></el-col>
                <el-col :span="8"><p>数据名称：<span>我是数据名称</span></p></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "monitorEnvironment-detail"
    }
</script>

<style lang="scss" scoped>
    #environmentDetail{
        .virtualTitle{
            height: 60px;
            line-height: 60px;
            font-size: 14px;
            border: 1px solid #ebecf0;
            border-bottom: 2px solid #f3f7ff;
            background-color: #fff;
            padding: 0 30px;
        }
        .virtualMsg{
            padding:20px 30px;
            background-color: #fff;
            border: 1px solid #ebecf0;
            border-top: none;
            .virtualMsgTitle{
                padding: 15px 0;
                background-color: #f3f7ff;
                margin-bottom: 10px;
                h1{
                    height: 20px;
                    border-left:2px solid #5a8bff;
                    font-size: 14px;
                    padding-left: 14px;
                }
            }
            p{
                line-height: 40px;
                font-size: 14px;
                padding-left: 16px;
            }
        }
    }
</style>
