<template>
    <div>
        <header class="breadcrumb">所在位置：<span>流通管理</span></header>
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
                    <span class="fl">医疗癌症数据</span>
                    <strong class="fl">xxxx数据公司</strong>
                </h1>
            </div>
            <div class="dataMsg">
                <p>摘要：<span>中新网3月28日电 据外媒报道，就社交媒体“脸书”(Facebook)公司外泄用户个人资料一事，欧盟已要求在两周内回答5个关键问题。而英国国会议员27日再次要求脸书CEO扎克伯格，希望他亲自回答脸书用户个资外泄相关问题，而不是让高管代替。</span></p>
                <p>使用时间：<span>2018.09.09  至  2018.10.10</span></p>
                <p>合约号：<span>3455666777878</span><strong>还剩2小时20分钟&nbsp;自动销毁文件</strong></p>
                <p>安全数据流通服务登录地址：<span>192.168.0.48</span></p>
                <h1><el-button size="small" type="primary">查看合约</el-button><el-button size="small" type="primary">查看凭证</el-button></h1>
            </div>
            <div class="title"><h1>交易生命周期</h1></div>
            <div class="cycle">
                <ul class="cycleStep clear">
                    <li class="fl">
                        <div>合约签订</div>
                        <p>2018/04/08 23:59:59</p>
                        <h1><button>详情</button></h1>
                        <strong></strong>
                    </li>
                    <li class="fl">
                        <div>合约签订</div>
                        <p>2018/04/08 23:59:59</p>
                        <h1><button>详情</button></h1>
                        <strong></strong>
                    </li>
                    <li class="fl">
                        <div>合约签订</div>
                        <p>2018/04/08 23:59:59</p>
                        <h1><button>详情</button></h1>
                        <strong></strong>
                    </li>
                    <li class="fl">
                        <div>合约签订</div>
                        <p>2018/04/08 23:59:59</p>
                        <h1><button>详情</button></h1>
                        <strong></strong>
                    </li>
                    <li class="fl">
                        <div>合约签订</div>
                        <p>2018/04/08 23:59:59</p>
                        <h1><button>详情</button></h1>
                        <strong></strong>
                    </li>
                    <li class="fl">
                        <div>合约签订</div>
                        <p>2018/04/08 23:59:59</p>
                        <h1><button>详情</button></h1>
                        <strong></strong>
                    </li>
                    <li class="fl">
                        <div>合约签订</div>
                        <p>2018/04/08 23:59:59</p>
                        <h1><button>详情</button></h1>
                        <strong></strong>
                    </li>
                </ul>
                <h1 class="cycleMsgTitle">合约签订：<span>2018.03.03 12:22</span></h1>
                <div class="cycleMsg">
                    <el-row>
                        <el-col :span="12">
                            <div class="cycleMsgLeft">
                                <el-row>
                                    <el-col :span="24">交易哈希值：<span>1252a5s2d1d5q1s5</span></el-col>
                                    <el-col :span="12">业务类型：数据流通</el-col>
                                    <el-col :span="12">交易类型：合约签订</el-col>
                                    <el-col :span="12">交易发起：XXXXX</el-col>
                                    <el-col :span="12">交易接受：XXXXXXX</el-col>
                                    <el-col :span="12">合约编码：24555tg</el-col>
                                    <el-col :span="12">交易时间：2018.03.03 12:22</el-col>
                                </el-row>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="cycleMsgRight">
                                <el-row>
                                    <el-col :span="24">所在区块信息</el-col>
                                    <el-col :span="24">哈希值：5a6s5s586wf2s5e56a5656daf5656321245451562</el-col>
                                    <el-col :span="12">区块高度：3456</el-col>
                                    <el-col :span="12">交易笔数：1</el-col>
                                    <el-col :span="12">创建时间：2018.03.03 21:33</el-col>
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
    export default {
        name: "circulate-manage-detail"
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
