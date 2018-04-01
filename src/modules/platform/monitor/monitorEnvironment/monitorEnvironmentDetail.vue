<template>
    <div id="monitorEnvironmentDetail">
        <ul class="virtualTitle clear">
            <li class="fl">xxx虚拟机</li>
            <li class="fr">状态：<span>up</span></li>
        </ul>
        <div class="content">
            <el-row class="charts" :gutter="60">
                <el-col :span="17">
                    <el-row>
                        <el-col :span="10">
                            <h1></h1>
                            <div class="chartBox chartGauge"></div>
                        </el-col>
                        <el-col :span="14">
                            <h1></h1>
                            <div class="chartBox chartBarVertical"></div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="7">
                    <h1></h1>
                    <div class="chartBox chartBarHorizontal"></div>
                </el-col>
                <el-col :span="24">
                    <h1></h1>
                    <div class="chartBox chartLine"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "monitor-environment-detail"
    }
</script>

<style lang="scss" scoped>
    #monitorEnvironmentDetail{
        .virtualTitle{
            height: 60px;
            line-height: 60px;
            font-size: 14px;
            border: 1px solid #ebecf0;
            border-bottom: 2px solid #f3f7ff;
            background-color: #fff;
            padding: 0 30px;
        }
    }
</style>
