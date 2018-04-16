<template>
    <div>
        <div class="breadcrumbContainer clear">
            <span class="fl">所在位置：平台监控&nbsp;<i class="el-icon-arrow-right"></i>&nbsp;</span>
            <el-breadcrumb class="breadcrumb fl" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item to="/platform/monitor/blockChain">区块链网络服务监控</el-breadcrumb-item>
                <el-breadcrumb-item>详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <ul class="monitorTitle clear">
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
                    <h1>内存使用(MB)</h1>
                    <div class="chartBox" ref="chartPie"></div>
                </el-col>
                <el-col :span="24">
                    <h1>网络接收数据(MB)</h1>
                    <div class="chartBox" ref="chartLine"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import { blockChain_getToken } from '~/api/getData'
    import { blockChain_wsUrl } from '~/api/getData'

    export default {
        name: "monitor-block-chain-detail",
        data() {
            return{
                webSocket: null,
                barData: {
                    x: ['','','','','','',''],
                    y: [0,0,0,0,0,0,0]
                },
                lineData: {
                    x: ['','','','','','',''],
                    y: [0,0,0,0,0,0,0]
                }
            }
        },
        methods: {
            gauge(value) {
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
                            detail: {
                                fontSize: 18,
                                formatter:'{value}%'
                            },
                            data: [{value: value}]
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
                        text: 'CPU使用率时段统计(GB)',
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
                            data: y
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            pie(read,write) {
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
                        data:['已读取内存','已写入内存']
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
                                {value:read, name:'已读取内存'},
                                {value:write, name:'已写入内存'}
                            ]
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            line(x,y) {
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
                        data: x
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: y,
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
            },
            async initWebSocket() {
                let data = await blockChain_getToken();
                this.webSocket = new WebSocket(blockChain_wsUrl(data.data));
                this.webSocket.onmessage = this.webSocket_onmessage;
                this.webSocket.onclose = this.webSocket_close;
            },
            webSocket_onmessage(e){
                let data = JSON.parse(e.data)[0];
                // CPU使用率
                let gaugeData = (data.cpu.usage.user/data.cpu.usage.total).toFixed(2);
                this.gauge(gaugeData);
                // CPU使用率时段统计
                this.barData.x.shift();
                this.barData.y.shift();
                this.barData.x.push('');
                this.barData.y.push(parseInt(data.cpu.usage.user/1024/1024/1024/1024));
                this.barVertical(this.barData.x,this.barData.y);
                // 内存使用
                let read, write;
                read = data.diskio.io_service_bytes[0].stats.Read/1024/1024/1024;
                write = data.diskio.io_service_bytes[0].stats.Write/1024/1024/1024;
                this.pie(read,write);
                // 网络统计
                this.lineData.x.shift();
                this.lineData.y.shift();
                this.lineData.x.push('');
                this.lineData.y.push(data.network.rx_bytes/1024/1024/1024);
                this.line(this.lineData.x,this.lineData.y);
            },
            webSocket_close(e){  //关闭
                console.log("connection closed (" + e.code + ")");
            }
        },
        mounted() {
            this.initWebSocket();
        },
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            this.webSocket && this.webSocket.close();
            next();
        }
    }
</script>

<style lang="scss" scoped>
    .monitorTitle{
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        border: 1px solid #ebecf0;
        border-bottom: 2px solid #f3f7ff;
        background-color: #fff;
        padding: 0 30px;
    }
</style>
