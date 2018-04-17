<template>
    <div>
        <div class="breadcrumbContainer clear">
            <span class="fl">所在位置：</span>
            <el-breadcrumb class="breadcrumb fl" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>数据统计</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content">
            <!--<div class="search">-->
                <!--<el-select size="medium" placeholder="请选择" v-model="selected">-->
                    <!--<el-option label="虚拟机总数" value="虚拟机总数"></el-option>-->
                    <!--<el-option label="已启用虚拟机" value="已启用虚拟机"></el-option>-->
                    <!--<el-option label="已停用虚拟机" value="已停用虚拟机"></el-option>-->
                    <!--<el-option label="已销毁虚拟机" value="已销毁虚拟机"></el-option>-->
                <!--</el-select>-->
                <!--<el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>-->
            <!--</div>-->
            <el-row class="tradeCount">
                <el-col :span="4">
                    <div class="tradeCountBox clear">
                        <img class="fl" src="../../../assets/img/platform/dataStatistics/tradeCount.png" style="margin-top: 15px" alt="">
                        <div class="fl">
                            <h1>{{tradeCount.all}}</h1>
                            <p>交易总量</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="tradeCountBox">
                        <img class="fl" src="../../../assets/img/platform/dataStatistics/tradeSuccess.png" style="margin-top: 15px" alt="">
                        <div class="fl">
                            <h1>{{tradeCount.success}}</h1>
                            <p>交易成功</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="tradeCountBox">
                        <img class="fl" src="../../../assets/img/platform/dataStatistics/tradeIntegral.png" style="margin-top: 13px" alt="">
                        <div class="fl">
                            <h1>{{tradeCount.points}}</h1>
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
                            <h1>{{userCount.totalUsers}}</h1>
                            <p>总用户数</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="tradeCountBox" style="border-right: none;">
                        <img class="fl" src="../../../assets/img/platform/dataStatistics/userAdd.png" style="margin-top: 14px" alt="">
                        <div class="fl">
                            <h1>{{userCount.newUsersTotal}}</h1>
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
            <el-table :data="circulateData" style="width: 100%" header-cell-class-name="tableHeaderRow">
                <el-table-column prop="dataInfoId" label="数据ID"></el-table-column>
                <el-table-column prop="dataName" label="数据名称"></el-table-column>
                <el-table-column prop="companyName" label="所属公司"></el-table-column>
                <el-table-column prop="circulationTotal" label="数据流通数"></el-table-column>
            </el-table>
            <div class="page clear">
                <el-pagination
                    class="fr"
                    background
                    layout="prev, pager, next"
                    :total="totalElements"
                    :page-size="pageSize"
                    @current-change="getCirculateData">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import { user_getUserCount } from '~/api/getData'
    import { dataDirectoty_getDirectoryCount } from '~/api/getData'
    import { circulateManage_getCirculateCount } from '~/api/getData'
    import { circulateManage_getCirculateData } from '~/api/getData'
    import { circulateManage_getCirculateTrade } from '~/api/getData'

    export default {
        name: "data-statistics",
        data() {
            return{
                selected: '虚拟机总数',
                userCount: {},
                tradeCount: {},
                pageSize: 5,
                circulateData: null,
                totalElements: null
            }
        },
        methods: {
            pieDirectory(data) {
                let legend = [];
                for(let i=0; i<data.length; i++){legend.push(data[i].name);}
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
                        data:legend
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
                            data:data
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            pieContent(data) {
                let legend = [];
                for(let i=0; i<data.length; i++){legend.push(data[i].name);}
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
                        data:legend
                    },
                    color: ['#ffc74a','#5a8bff','#33cf98','#F27356','#8580FB','#FA7096'],
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
                            data:data
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            async getUserCount() {
                let data = await user_getUserCount();
                this.userCount = data.data.data;
            },
            async getDirectoryCount() {
                let data = await dataDirectoty_getDirectoryCount();
                let pieData = [];
                for(let i=0; i< data.data.data.dataDirectorysDataTotalVos.length; i++){
                    let current = data.data.data.dataDirectorysDataTotalVos[i];
                    pieData.push({
                        name : current.dataDirectoryName,
                        value : current.dataDirectoryTotal
                    });
                }
                this.pieDirectory(pieData);
            },
            async getCirculateCount() {
                let data = await circulateManage_getCirculateCount();
                let pieData = [];
                for(let i=0; i< data.data.data.circulationDataVos.length; i++){
                    let current = data.data.data.circulationDataVos[i];
                    pieData.push({
                        name : current.dataName,
                        value : current.circulationTotal
                    });
                }
                this.pieContent(pieData);
            },
            async getCirculateData(page) {
                let data = await circulateManage_getCirculateData(page,this.pageSize);
                this.circulateData = data.data.data;
                this.totalElements = data.data.total;
            },
            async getCirculateTrade() {
                let data = await circulateManage_getCirculateTrade();
                this.tradeCount = data.data.data;
            }
        },
        mounted() {
            this.getDirectoryCount();
            this.getCirculateCount();
            this.getUserCount();
            this.getCirculateData(1);
            this.getCirculateTrade();
        }
    }
</script>

<style lang="scss" scoped>
    .content{
        padding-top: 30px;
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
