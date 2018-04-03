<template>
    <div id="dataStatistics">
        <header class="breadcrumb">所在位置：<span>数据统计</span></header>
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
            <el-row class="tradeCount">
                <el-col :span="4">
                    <div class="tradeCountBox clear">
                        <img class="fl" src="../../../assets/img/platform/dataStatistics/tradeCount.png" style="margin-top: 15px" alt="">
                        <div class="fl">
                            <h1>23</h1>
                            <p>交易总量</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="tradeCountBox">
                        <img class="fl" src="../../../assets/img/platform/dataStatistics/tradeSuccess.png" style="margin-top: 15px" alt="">
                        <div class="fl">
                            <h1>23</h1>
                            <p>交易成功</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="tradeCountBox">
                        <img class="fl" src="../../../assets/img/platform/dataStatistics/tradeIntegral.png" style="margin-top: 13px" alt="">
                        <div class="fl">
                            <h1>23</h1>
                            <p>交易积分</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="tradeCountBox">
                        <img class="fl" src="../../../assets/img/platform/dataStatistics/tradePay.png" style="margin-top: 13px" alt="">
                        <div class="fl">
                            <h1>23</h1>
                            <p>积分充值</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="tradeCountBox">
                        <img class="fl" src="../../../assets/img/platform/dataStatistics/userTotal.png" style="margin-top: 14px" alt="">
                        <div class="fl">
                            <h1>23</h1>
                            <p>总用户数</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="tradeCountBox" style="border-right: none;">
                        <img class="fl" src="../../../assets/img/platform/dataStatistics/userAdd.png" style="margin-top: 14px" alt="">
                        <div class="fl">
                            <h1>23</h1>
                            <p>新增用户</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row class="charts">
                <el-col :span="12">
                    <h1>数据统计</h1>
                    <div class="chartBox" ref="chartPieDirectory"></div>
                </el-col>
                <el-col :span="12">
                    <h1></h1>
                    <div class="chartBox chartBorder" ref="chartPieContent"></div>
                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%" header-cell-class-name="tableHeaderRow">
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="host" label="主机"></el-table-column>
                <el-table-column prop="ip" label="ip地址"></el-table-column>
                <el-table-column prop="cluster" label="群集"></el-table-column>
                <el-table-column prop="dataCenter" label="数据中心"></el-table-column>
                <el-table-column prop="memory" label="内存"></el-table-column>
                <el-table-column prop="cpu" label="CPU"></el-table-column>
                <el-table-column prop="network" label="网络"></el-table-column>
                <el-table-column prop="date" label="使用时间"></el-table-column>
                <el-table-column prop="user" label="使用方"></el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        <span>{{ scope.row.status }}</span>
                        <el-switch v-model="scope.row.status === '使用中'"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="mini">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="page clear">
                <el-pagination class="fr" background layout="prev, pager, next" :total="1000"></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "data-statistics",
        data() {
            return{
                tableData: [
                    {
                        name: '王小虎',
                        host: 'vd56',
                        ip: '192.168.111.222',
                        cluster: '群集',
                        dataCenter: '数据中心',
                        memory: '0%',
                        cpu: '0%',
                        network: '网络',
                        date: '2016-05-02',
                        user: '迅鳐成都科技',
                        status: '使用中'
                    },
                    {
                        name: '王小虎',
                        host: 'vd56',
                        ip: '192.168.111.222',
                        cluster: '群集',
                        dataCenter: '数据中心',
                        memory: '0%',
                        cpu: '0%',
                        network: '网络',
                        date: '2016-05-02',
                        user: '迅鳐成都科技',
                        status: '使用中'
                    },
                    {
                        name: '王小虎',
                        host: 'vd56',
                        ip: '192.168.111.222',
                        cluster: '群集',
                        dataCenter: '数据中心',
                        memory: '0%',
                        cpu: '0%',
                        network: '网络',
                        date: '2016-05-02',
                        user: '迅鳐成都科技',
                        status: '使用中'
                    },
                    {
                        name: '王小虎',
                        host: 'vd56',
                        ip: '192.168.111.222',
                        cluster: '群集',
                        dataCenter: '数据中心',
                        memory: '0%',
                        cpu: '0%',
                        network: '网络',
                        date: '2016-05-02',
                        user: '迅鳐成都科技',
                        status: '使用中'
                    },
                    {
                        name: '王小虎',
                        host: 'vd56',
                        ip: '192.168.111.222',
                        cluster: '群集',
                        dataCenter: '数据中心',
                        memory: '0%',
                        cpu: '0%',
                        network: '网络',
                        date: '2016-05-02',
                        user: '迅鳐成都科技',
                        status: '使用中'
                    }
                ],
                selected: '虚拟机总数'
            }
        },
        methods: {
            pieDirectory() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.chartPieDirectory);
                // 图标配置项
                let option = {
                    title: {
                        text: '按目录统计',
                        textStyle: {
                            color: '#606266',
                            fontSize: 16,
                            fontWeight: 'normal'
                        },
                        left: 30
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 480,
                        y: 'center',
                        itemGap: 30,
                        data:['数据统计1','数据统计2','数据统计3']
                    },
                    color: ['#ffc74a','#5a8bff','#33cf98'],
                    series: [
                        {
                            name:'数据统计',
                            type:'pie',
                            radius: ['45%', '80%'],
                            center: ["35%", "50%"],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    formatter: '{b}\n{d}%'
                                }

                            },
                            data:[
                                {value:335, name:'数据统计1'},
                                {value:310, name:'数据统计2'},
                                {value:310, name:'数据统计3'}
                            ]
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            pieContent() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.chartPieContent);
                // 图标配置项
                let option = {
                    title: {
                        text: '按内容统计',
                        textStyle: {
                            color: '#606266',
                            fontSize: 16,
                            fontWeight: 'normal'
                        },
                        left: 30
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 480,
                        y: 'center',
                        itemGap: 30,
                        data:['数据统计1','数据统计2','数据统计3']
                    },
                    color: ['#ffc74a','#5a8bff','#33cf98'],
                    series: [
                        {
                            name:'数据统计',
                            type:'pie',
                            radius: ['45%', '80%'],
                            center: ["35%", "50%"],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    formatter: '{b}\n{d}%'
                                }

                            },
                            data:[
                                {value:335, name:'数据统计1'},
                                {value:310, name:'数据统计2'},
                                {value:310, name:'数据统计3'}
                            ]
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            }
        },
        mounted() {
            this.pieDirectory();
            this.pieContent();
        }
    }
</script>

<style lang="scss" scoped>
    .content{
        .tradeCount{
            padding-top: 20px;
            border-top: 2px solid #f3f7ff;
            .tradeCountBox{
                height: 70px;
                padding: 0 30px;
                border-right: 2px dashed #ebecf0;
                img{
                    margin-right: 40px;
                }
                div{
                    margin: 5px 0;
                    h1{
                        height: 36px;
                        line-height: 36px;
                        font-size: 36px;
                        font-weight: bold;
                        color: #1e244a;
                    }
                    p{
                        height: 24px;
                        font-size: 18px;
                    }
                }
            }
        }
        .charts{
            margin-bottom: 40px;
        }
    }
</style>
