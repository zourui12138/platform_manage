<template>
    <div id="home">
        <header class="breadcrumb">所在位置：<span>平台总揽</span></header>
        <div class="count">
            <el-row :gutter="40">
                <el-col :span="6"><div class="countBox"></div></el-col>
                <el-col :span="6"><div class="countBox"></div></el-col>
                <el-col :span="6"><div class="countBox"></div></el-col>
                <el-col :span="6"><div class="countBox"></div></el-col>
            </el-row>
        </div>
        <div class="content">
            <el-row class="charts">
                <el-col :span="7">
                    <h1></h1>
                    <div class="chartBox chartGauge" ref="chartGauge"></div>
                </el-col>
                <el-col :span="10">
                    <h1></h1>
                    <div class="chartBox chartBarVertical"></div>
                </el-col>
                <el-col :span="7">
                    <h1></h1>
                    <div class="chartBox chartBarHorizontal "></div>
                </el-col>
            </el-row>
            <div class="virtual">
                <h1></h1>
                <el-row>
                    <el-col :span="7">
                        <div class="virtualCount"><h1></h1></div>
                    </el-col>
                    <el-col :span="17">
                        <div class="virtualTable">
                            <el-table :data="tableData" style="width: 100%" header-cell-class-name="tableHeaderRow">
                                <el-table-column prop="name" label="名称"></el-table-column>
                                <el-table-column prop="host" label="主机"></el-table-column>
                                <el-table-column prop="ip" label="ip地址"></el-table-column>
                                <el-table-column prop="memory" label="内存"></el-table-column>
                                <el-table-column prop="cpu" label="CPU"></el-table-column>
                                <el-table-column prop="date" label="使用时间"></el-table-column>
                                <el-table-column prop="user" label="使用方"></el-table-column>
                                <el-table-column prop="status" label="状态"></el-table-column>
                            </el-table>
                            <div class="page clear">
                                <el-pagination class="fr" background layout="prev, pager, next" :total="1000"></el-pagination>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return{
                tableData: [
                    {
                        name: '王小虎',
                        host: 'vd56',
                        ip: '192.168.111.222',
                        memory: '0%',
                        cpu: '0%',
                        date: '2016-05-02',
                        user: '迅鳐成都科技',
                        status: 'up'
                    },
                    {
                        name: '王小虎',
                        host: 'vd56',
                        ip: '192.168.111.222',
                        memory: '0%',
                        cpu: '0%',
                        date: '2016-05-02',
                        user: '迅鳐成都科技',
                        status: 'up'
                    },
                    {
                        name: '王小虎',
                        host: 'vd56',
                        ip: '192.168.111.222',
                        memory: '0%',
                        cpu: '0%',
                        date: '2016-05-02',
                        user: '迅鳐成都科技',
                        status: 'up'
                    },
                    {
                        name: '王小虎',
                        host: 'vd56',
                        ip: '192.168.111.222',
                        memory: '0%',
                        cpu: '0%',
                        date: '2016-05-02',
                        user: '迅鳐成都科技',
                        status: 'up'
                    },
                    {
                        name: '王小虎',
                        host: 'vd56',
                        ip: '192.168.111.222',
                        memory: '0%',
                        cpu: '0%',
                        date: '2016-05-02',
                        user: '迅鳐成都科技',
                        status: 'up'
                    }
                ]
            }
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.chartGauge);
                // 绘制图表
                myChart.setOption({
                    title: {text: '在Vue中使用echarts'},
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    #home{
        .content{
            .charts{
                .chartBarVertical{
                    border-right: 2px dashed #ebecf0;
                }
            }
            .virtual{
                margin-top: 20px;
                h1{
                    height: 50px;
                    background-color: #f3f7ff;
                    margin-bottom: 20px;
                }
                .virtualTable{
                    height: 340px;
                    padding-left: 20px;
                    border-left: 2px dashed #ebecf0;
                }
                .virtualCount{
                    height: 340px;
                    padding-right: 20px;
                }
            }
        }
    }
</style>
