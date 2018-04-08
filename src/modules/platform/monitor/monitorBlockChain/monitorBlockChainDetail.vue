<template>
    <div>
        <ul class="title clear">
            <li class="fl">xxx虚拟机</li>
            <li class="fr">状态：<span>up</span></li>
        </ul>
        <div class="content">
            <el-row class="charts" :gutter="60">
                <el-col :span="17">
                    <el-row>
                        <el-col :span="10">
                            <h1>CPU使用率</h1>
                            <div class="chartBox" ref="chartGauge"></div>
                        </el-col>
                        <el-col :span="14">
                            <h1></h1>
                            <div class="chartBox chartBorder" ref="chartBarVertical"></div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="7">
                    <h1>内存使用</h1>
                    <div class="chartBox" ref="chartPie"></div>
                </el-col>
                <el-col :span="24">
                    <h1>IO&nbsp;Await</h1>
                    <div class="chartBox" ref="chartLine"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "monitor-block-chain-detail",
        data() {
            return{}
        },
        mounted(){
            this.gauge();
            this.barVertical();
            this.pie();
            this.line();
        },
        methods: {
            gauge() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.chartGauge);
                // 图标配置项
                let option = {
                    title: {
                        text: 'CPU使用率',
                        textStyle: {
                            color: '#606266',
                            fontSize: 16,
                            fontWeight: 'normal'
                        },
                        left: 30
                    },
                    tooltip : {
                        formatter: "{a} : {c}%"
                    },
                    series: [
                        {
                            name: 'CPU使用率',
                            type: 'gauge',
                            radius: '85%',
                            center: ["50%", "60%"],
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, '#33cf98'],[0.8, '#8d87ff'],[1, '#fe7b9d']],
                                    width: 30,
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length: 30,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto'
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 30,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'auto'
                                }
                            },
                            detail: {formatter:'{value}%'},
                            data: [{value: 76}]
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            barVertical() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.chartBarVertical);
                // 图标配置项
                let option = {
                    color: ['#5a8bff'],
                    title: {
                        text: '数据流通统计',
                        textStyle: {
                            color: '#606266',
                            fontSize: 16,
                            fontWeight: 'normal'
                        },
                        left: 30
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: 40,
                        right: 40,
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'数据流通统计',
                            type:'bar',
                            barWidth: '60%',
                            markPoint : {
                                itemStyle: {
                                    color: '#f77f5b'
                                },
                                data : [
                                    {type : 'max', name: '最大值'}
                                ]
                            },
                            data:[10, 52, 200, 334, 390, 330, 220]
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            pie() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.chartPie);
                // 图标配置项
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 30,
                        data:['已使用内存','未使用内存']
                    },
                    color: ['#ffc74a','#5a8bff'],
                    series: [
                        {
                            name:'内存使用',
                            type:'pie',
                            radius: ['50%', '65%'],
                            center: ["50%", "55%"],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    formatter: '{b}\n{d}%'
                                }

                            },
                            data:[
                                {value:335, name:'已使用内存'},
                                {value:310, name:'未使用内存'}
                            ]
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            line() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.chartLine);
                // 图标配置项
                let option = {
                    color: ['#5a8bff'],
                    grid: {
                        left: 40,
                        right: 40,
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: [40, 50, 70, 30, 40, 80, 70],
                            type: 'line',
                            smooth: true,
                            areaStyle: {
                                normal: {
                                    color: '#A2B9FA'
                                }
                            }
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title{
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        border: 1px solid #ebecf0;
        border-bottom: 2px solid #f3f7ff;
        background-color: #fff;
        padding: 0 30px;
    }
</style>
