<template>
    <div>
        <div class="breadcrumbContainer clear">
            <span class="fl">所在位置：</span>
            <el-breadcrumb class="breadcrumb fl" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item to="/platform/circulateManage">流通管理</el-breadcrumb-item>
                <el-breadcrumb-item>详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="step clear">
            <div class="fl">
                <div class="short fl"></div>
                <div class="long fl"></div>
            </div>
            <ul class="fl">
                <li class="fl">
                    <div class="rect"></div>
                    <div class="circle"></div>
                    <p>合约签订</p>
                </li>
                <li class="fl">
                    <div class="rect"></div>
                    <div class="circle"></div>
                    <p>支付积分</p>
                </li>
                <li class="fl">
                    <div class="rect"></div>
                    <div class="circle"></div>
                    <p>环境配置</p>
                </li>
                <li class="fl">
                    <div class="rect"></div>
                    <div class="circle"></div>
                    <p>数据导入</p>
                </li>
                <li class="fl">
                    <div class="rect"></div>
                    <div class="circle"></div>
                    <p>导出审核</p>
                </li>
                <li class="fl">
                    <div class="rect"></div>
                    <div class="circle"></div>
                    <p>审核通过</p>
                </li>
                <li class="fl">
                    <div class="rect"></div>
                    <div class="circle"></div>
                    <p>使用完成</p>
                </li>
                <li class="fl">
                    <div class="rect"></div>
                    <div class="circle"></div>
                    <p>数据销毁</p>
                </li>
            </ul>
            <div class="fl">
                <div class="long fl"></div>
                <div class="short fl"></div>
            </div>
        </div>
        <div class="content">
            <div class="title">
                <h1 class="clear">
                    <span class="fl">{{contractData.dataName}}</span>
                    <strong class="fl">{{contractData.partA}}</strong>
                </h1>
            </div>
            <div class="dataMsg">
                <p>摘要：<span>{{contractData.dataSummary}}</span></p>
                <p>使用时间：<span>{{contractData.start + '  至  ' + contractData.end}}</span></p>
                <p>合约号：<span>{{contractData.contractRecordId}}</span><strong>还剩2小时20分钟&nbsp;自动销毁文件</strong></p>
                 <p>安全数据流通服务登录地址：<span>{{contractData.hostname}}</span></p>
                <h1><el-button size="small" type="primary" @click="toContract(contractData.contractRecordId)">查看合约</el-button><el-button size="small" type="primary" @click="toVoucher(contractData.guacamoleId)">查看凭证</el-button></h1>
            </div>
            <div class="title"><h1>交易生命周期</h1></div>
            <div class="cycle">
                <ul class="cycleStep clear">
                    <li class="fl" v-for="i in cycleData" :class="{current : i.operType === cycleCurrentData.operType}">
                        <div>{{i.operType}}</div>
                        <p>{{i.operTime}}</p>
                        <h1><button @click="getCurrentCycle(i)">详情</button></h1>
                        <strong></strong>
                    </li>
                </ul>
                <h1 class="cycleMsgTitle">合约签订：<span>{{cycleCurrentData.operTime}}</span></h1>
                <div class="cycleMsg">
                    <el-row>
                        <el-col :span="12">
                            <div class="cycleMsgLeft">
                                <el-row>
                                    <el-col :span="24">交易哈希值：<span>{{cycleCurrentData.txId}}</span></el-col>
                                    <el-col :span="12">合约编码：{{cycleCurrentData.contractId}}</el-col>
                                    <el-col :span="12">业务类型：{{cycleCurrentData.busiType}}</el-col>
                                    <el-col :span="12">操作类型：{{cycleCurrentData.operType}}</el-col>
                                    <el-col :span="12">操作时间：{{cycleCurrentData.operTime}}</el-col>
                                    <el-col :span="12">操作人：{{cycleCurrentData.operUser}}</el-col>
                                </el-row>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="cycleMsgRight">
                                <el-row>
                                    <el-col :span="24">所在区块信息</el-col>
                                    <el-col :span="24">哈希值：{{cycleCurrentBlockData.hash}}</el-col>
                                    <el-col :span="12">区块高度：{{cycleCurrentBlockData.blockNumber}}</el-col>
                                    <el-col :span="12">交易笔数：1</el-col>
                                    <el-col :span="12">创建时间：{{cycleCurrentBlockData.createTime | dataFormat}}</el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { circulateManage_getContract } from '~/api/getData'
    import { circulateManage_getCycle } from '~/api/getData'
    import { circulateManage_getCycleBlock } from '~/api/getData'

    export default {
        name: "circulate-manage-detail",
        data() {
            return{
                contractData: {},
                cycleData: null,
                cycleCurrentData: {},
                cycleCurrentBlockData: {}
            }
        },
        methods: {
            toVoucher(id) {
                this.$router.push({path : '/platform/circulateManageVoucher', query: { uuid : this.$route.query.id ,id : id }});
            },
            toContract(id) {
                this.$router.push({path : '/platform/circulateManageContract', query: { id : id }});
            },
            async getContract() {
                let data = await circulateManage_getContract(this.$route.query.id);
                this.contractData = data.data.data;
            },
            async getCycle() {
                let data = await circulateManage_getCycle(this.$route.query.id);
                this.cycleData = data.data.data;
                this.getCurrentCycle(data.data.data[0]);
            },
            async getCycleBlock(hash) {
                let data = await circulateManage_getCycleBlock(hash);
                this.cycleCurrentBlockData = data.data.data;
            },
            getCurrentCycle(data) {
                this.cycleCurrentData = data;
                this.getCycleBlock(data.txId);
            }
        },
        mounted() {
            this.getContract();
            this.getCycle();
        }
    }
</script>

<style lang="scss" scoped>
    .step{
        border: 1px solid #ebecf0;
        border-bottom: 2px solid #f3f7ff;
        background-color: #fff;
        .short{
            width: 21px;
            height: 8px;
            margin:22px 0 38px;
            background-color: #f3f7ff;
        }
        .long{
            width: 46px;
            height: 8px;
            background-color: #f3f7ff;
            margin: 22px 10px 38px;

        }
        li{
            width: 176px;
            margin: 14px 0 4px 0;
            position: relative;
            .rect{
                height: 8px;
                background-color: #f3f7ff;
                margin: 8px 0;
            }
            .circle{
                height: 24px;
                width: 24px;
                border-radius: 50%;
                background-color: #f3f7ff;
                position: absolute;
                top: 0;
                left: calc(50% - 12px);
            }
            p{
                font-size: 14px;
                text-align: center;
                height: 26px;
                line-height: 26px;
                color: #96a2be;
            }
        }
    }
    .content{
        .title{
            strong{
                font-weight: normal;
                padding-left: 30px;
                background: url('../../../assets/img/platform/circulateManage/icon.png') no-repeat 0 center;
                margin-left: 50px;
            }
        }
        .dataMsg{
            font-size: 14px;
            padding: 0 16px;
            line-height: 30px;
            p{
                margin-bottom: 10px;
                strong{
                    font-weight: normal;
                    margin-left: 30px;
                    color: #f77f5b;
                }
            }
        }
        .cycle{
            padding: 0 16px;
            .cycleStep{
                font-size: 14px;
                li{
                    width: 160px;
                    padding-right: 22px;
                    position: relative;
                    div{
                        height: 76px;
                        width: 76px;
                        line-height: 76px;
                        text-align: center;
                        border: 2px solid #b4c1d7;
                        border-radius: 50%;
                        margin: auto;
                    }
                    p{
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                    }
                    h1{
                        text-align: center;
                        button{
                            width: 80px;
                            height: 24px;
                            line-height: 24px;
                            background-color: #b4c1d7;
                            border-radius: 4px;
                            color: #fff;
                            font-size: 14px;
                            cursor: pointer;
                            transition: all .2s;
                        }
                        button:hover{
                            background-color: #5a8bff;
                        }
                    }
                    strong{
                        position: absolute;
                        width: 22px;
                        height: 24px;
                        background: url('../../../assets/img/platform/circulateManage/arrow.png') no-repeat center;
                        top: 28px;
                        right: 0;
                    }
                }
                li:last-child{
                    strong{
                        display: none;
                    }
                }
                li.current{
                    div{
                        border: 2px solid #5a8bff;
                    }
                    h1{
                        button{
                            background-color: #5a8bff;
                        }
                    }
                }
            }
            .cycleMsgTitle{
                height: 50px;
                line-height: 50px;
                color: #5a8bff;
                font-size: 14px;
                margin-top: 20px;
            }
            .cycleMsg{
                font-size: 14px;
                line-height: 30px;
                padding-bottom: 10px;
                .cycleMsgLeft{
                    padding-right: 70px;
                    border-right: 1px solid #ebecf0;
                }
                .cycleMsgRight{
                    padding-left: 70px;
                    border-left: 1px solid #ebecf0;
                }
            }
        }
    }
</style>
