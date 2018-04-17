<template>
    <div>
        <div class="breadcrumbContainer clear">
            <span class="fl">所在位置：</span>
            <el-breadcrumb class="breadcrumb fl" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>平台总揽</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="count">
            <el-row :gutter="40">
                <el-col :span="6">
                    <div class="countBox clear">
                        <img class="fl" src="../../../assets/img/platform/home/blockHeight.png" alt="">
                        <div class="fl">
                            <h1 class="clear">
                                <strong class="fl">{{blockChainCount.high}}</strong>
                            </h1>
                            <p>区块高度block height</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="countBox clear">
                        <img class="fl" src="../../../assets/img/platform/home/totalTrade.png" alt="">
                        <div class="fl">
                            <h1 class="clear">
                                <strong class="fl">{{blockChainCount.jycount}}</strong>
                            </h1>
                            <p>交易总数</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="countBox clear">
                        <img class="fl" src="../../../assets/img/platform/home/totalContract.png" alt="">
                        <div class="fl">
                            <h1 class="clear">
                                <strong class="fl">{{blockChainCount.hycount}}</strong>
                            </h1>
                            <p>合约总数</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="countBox clear">
                        <img class="fl" src="../../../assets/img/platform/home/tps.png" alt="">
                        <div class="fl">
                            <h1 class="clear">
                                <strong class="fl">{{blockChainCount.tps+'/s'}}</strong>
                            </h1>
                            <p>历史最高TPS</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <header><span>数据流通</span>Data Circulation</header>
            <el-row class="charts">
                <el-col :span="7">
                    <h1>区块链网络服务监控</h1>
                    <div class="chartBox chartGauge" ref="chartGauge"></div>
                </el-col>
                <el-col :span="10">
                    <h1></h1>
                    <div class="chartBox chartBarVertical" ref="chartBarVertical"></div>
                </el-col>
                <el-col :span="7">
                    <h1></h1>
                    <div class="chartBox chartBarHorizontal" ref="chartBarHorizontal"></div>
                </el-col>
            </el-row>
            <div class="virtual">
                <h1>DFC(数据流通容器)</h1>
                <el-row>
                    <el-col :span="7">
                        <div class="virtualCount">
                            <h1>DFC数量(<span>{{countData.totalDFC}}</span>)</h1>
                            <ul>
                                <li class="clear">
                                    <img src="../../../assets/img/platform/home/startVirtual.png" alt="">
                                    <span>启动中的数量</span>
                                    <span class="fr">({{countData.startDFC}})</span>
                                </li>
                                <li class="clear">
                                    <img src="../../../assets/img/platform/home/errorVirtual.png" alt="">
                                    <span>停止中的数量</span>
                                    <span class="fr">({{countData.stopDFC}})</span>
                                </li>
                                <li class="clear">
                                    <img src="../../../assets/img/platform/home/destroyVirtual.png" alt="">
                                    <span>销毁的数量</span>
                                    <span class="fr">({{countData.destroyDFC}})</span>
                                </li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :span="17">
                        <div class="virtualTable">
                            <el-table :data="tableData" style="width: 100%" header-cell-class-name="tableHeaderRow">
                                <el-table-column prop="vmName" label="名称"></el-table-column>
                                <el-table-column prop="hostName" label="主机"></el-table-column>
                                <el-table-column prop="ip" label="ip地址"></el-table-column>
                                <el-table-column prop="memoryUsage" label="内存"></el-table-column>
                                <el-table-column prop="cpuUsage" label="CPU"></el-table-column>
                                <el-table-column prop="createAt" label="使用时间" width="150"></el-table-column>
                                <el-table-column prop="dataUserName" label="使用方"></el-table-column>
                                <el-table-column label="状态">
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.status ? '运行中' : '停止服务' }}</span>
                                    </template>
                                </el-table-column>>
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
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import { DFC_getTableData } from "~/api/getData"
    import { DFC_getCountData } from "~/api/getData"
    import { blockChain_getCountData } from "~/api/getData"
    import { circulateManage_getCirculateBar } from "~/api/getData"
    import { circulateManage_getCirculateTop } from "~/api/getData"

    export default {
        name: "home",
        data() {
            return{
                pageSize: 5,
                tableData: null,
                totalElements: null,
                countData: {
                    totalDFC: null,
                    startDFC: null,
                    stopDFC: null,
                    destroyDFC: null
                },
                blockChainCount: {
                    high: null,
                    hycount: null,
                    jycount: null,
                    tps: null,
                }
            }
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
            barVertical(x,y) {
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
                            data : x,
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
                            data:y
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            barHorizontal(x,y) {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.chartBarHorizontal);
                // 图标配置项
                let option = {
                    color: ['#33cf98','#5a8bff','#ffc74a'],
                    title: {
                        text: '数据流通排行',
                        textStyle: {
                            color: '#606266',
                            fontSize: 16,
                            fontWeight: 'normal'
                        },
                        left: 30
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: 40,
                        right: 40,
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        show: false
                    },
                    yAxis: {
                        type: 'category',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        data: y
                    },
                    series: [
                        {
                            name: '数据流通排行',
                            type: 'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right'
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        let colorList = [
                                            '#ffc74a','#ffc74a','#5a8bff','#5a8bff','#33cf98','#33cf98'
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            data: x
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            async getTableData(page) {
                let data;
                data = await DFC_getTableData(page,this.pageSize,'','');
                this.tableData = data.data.data.content;
                this.totalElements = data.data.data.totalElements;
            },
            async getDFCCountData() {
                let data;
                data = await DFC_getCountData();
                this.countData = data.data.data;
            },
            async getBlockChainCountData() {
                let data = await blockChain_getCountData();
                this.blockChainCount = data.data.data;
            },
            async getCirculateBar() {
                let data = await circulateManage_getCirculateBar();
                let barDataX = [],barDataY = [];
                for(let i=0; i<data.data.data.length; i++){
                    let current = data.data.data[i];
                    barDataX.push(current.date.split(' ')[0]);
                    barDataY.push(current.count);
                }
                this.barVertical(barDataX.reverse(),barDataY.reverse());
            },
            async getCirculateTop() {
                let data = await circulateManage_getCirculateTop();
                let barDataX = [],barDataY = [];
                for(let i=0; i<data.data.data.length; i++){
                    let current = data.data.data[i];
                    barDataX.push(current.b);
                    barDataY.push(current.dataName);
                }
                this.barHorizontal(barDataX.reverse(),barDataY.reverse());
            }
        },
        mounted(){
            this.gauge();
            this.getTableData(1);
            this.getDFCCountData();
            this.getBlockChainCountData();
            this.getCirculateBar();
            this.getCirculateTop();
        }
    }
</script>

<style lang="scss" scoped>
    .count{
        img{
            margin:34px 34px 34px 0;
        }
    }
    .content{
        header{
            height: 30px;
            margin-top: 20px;
            padding-left: 30px;
            span{
                font-size: 24px;
                margin-right: 10px;
            }
        }
        .charts{
            .chartBarVertical{
                border-right: 2px dashed #ebecf0;
            }
        }
        .virtual{
            margin-top: 20px;
            h1{
                height: 50px;
                line-height: 50px;
                background-color: #f3f7ff;
                margin-bottom: 20px;
                padding-left: 30px;
            }
            .virtualTable{
                height: 340px;
                padding-left: 20px;
                border-left: 2px dashed #ebecf0;
            }
            .virtualCount{
                height: 340px;
                padding-right: 20px;
                ul{
                    li{
                        padding: 0 30px;
                        height: 60px;
                        line-height: 60px;
                        border-bottom: 1px solid #ebecf0;
                        font-size: 14px;
                        img{
                            vertical-align: middle;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
</style>
