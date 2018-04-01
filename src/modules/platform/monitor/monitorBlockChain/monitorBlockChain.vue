<template>
    <div id="monitorBlockChain">
        <div class="count">
            <el-row :gutter="40">
                <el-col :span="12"><div class="countBox"></div></el-col>
                <el-col :span="12"><div class="countBox"></div></el-col>
            </el-row>
        </div>
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
        name: "monitor-block-chain"
    }
</script>

<style lang="scss" scoped></style>
