<template>
    <div>
        <header class="breadcrumb">所在位置：<span>流通管理</span></header>
        <div class="content clear">
            <ul class="contentLeft fl">
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
            </ul>
            <ul class="contentRight fl">
                <li class="clear">
                    <el-row class="fl contentRightMsg">
                        <el-col :span="24"><h2>2018.03.03 12:33:21</h2></el-col>
                        <el-col :span="24"><h1>名称：<span>46778452156</span></h1></el-col>
                        <el-col :span="24"><p>所在区块信息</p></el-col>
                        <el-col :span="24"><p>哈希值：<span>5a6s5s586wf2s5e56a5656daf5656321245451562</span></p></el-col>
                        <el-col :span="12"><p>区块高度：<span>3456</span></p></el-col>
                        <el-col :span="12"><p>创建时间：<span>2018.03.03 21:33</span></p></el-col>
                    </el-row>
                    <div class="fl contentRightVideo"></div>
                </li>
                <li class="clear">
                    <el-row class="fl contentRightMsg">
                        <el-col :span="24"><h2>2018.03.03 12:33:21</h2></el-col>
                        <el-col :span="24"><h1>名称：<span>46778452156</span></h1></el-col>
                        <el-col :span="24"><p>所在区块信息</p></el-col>
                        <el-col :span="24"><p>哈希值：<span>5a6s5s586wf2s5e56a5656daf5656321245451562</span></p></el-col>
                        <el-col :span="12"><p>区块高度：<span>3456</span></p></el-col>
                        <el-col :span="12"><p>创建时间：<span>2018.03.03 21:33</span></p></el-col>
                    </el-row>
                    <div class="fl contentRightVideo"></div>
                </li>
                <li class="clear">
                    <el-row class="fl contentRightMsg">
                        <el-col :span="24"><h2>2018.03.03 12:33:21</h2></el-col>
                        <el-col :span="24"><h1>名称：<span>46778452156</span></h1></el-col>
                        <el-col :span="24"><p>所在区块信息</p></el-col>
                        <el-col :span="24"><p>哈希值：<span>5a6s5s586wf2s5e56a5656daf5656321245451562</span></p></el-col>
                        <el-col :span="12"><p>区块高度：<span>3456</span></p></el-col>
                        <el-col :span="12"><p>创建时间：<span>2018.03.03 21:33</span></p></el-col>
                    </el-row>
                    <div class="fl contentRightVideo"></div>
                </li>
                <li class="clear">
                    <el-row class="fl contentRightMsg">
                        <el-col :span="24"><h2>2018.03.03 12:33:21</h2></el-col>
                        <el-col :span="24"><h1>名称：<span>46778452156</span></h1></el-col>
                        <el-col :span="24"><p>所在区块信息</p></el-col>
                        <el-col :span="24"><p>哈希值：<span>5a6s5s586wf2s5e56a5656daf5656321245451562</span></p></el-col>
                        <el-col :span="12"><p>区块高度：<span>3456</span></p></el-col>
                        <el-col :span="12"><p>创建时间：<span>2018.03.03 21:33</span></p></el-col>
                    </el-row>
                    <div class="fl contentRightVideo"></div>
                </li>
                <li class="clear">
                    <el-row class="fl contentRightMsg">
                        <el-col :span="24"><h2>2018.03.03 12:33:21</h2></el-col>
                        <el-col :span="24"><h1>名称：<span>46778452156</span></h1></el-col>
                        <el-col :span="24"><p>所在区块信息</p></el-col>
                        <el-col :span="24"><p>哈希值：<span>5a6s5s586wf2s5e56a5656daf5656321245451562</span></p></el-col>
                        <el-col :span="12"><p>区块高度：<span>3456</span></p></el-col>
                        <el-col :span="12"><p>创建时间：<span>2018.03.03 21:33</span></p></el-col>
                    </el-row>
                    <div class="fl contentRightVideo"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "circulate-manage-voucher"
    }
</script>

<style lang="scss" scoped>
    .content{
        padding-top: 30px;
        .contentLeft{
            width: 42px;
            background: url('../../../assets/img/platform/circulateManage/border.png') repeat-y center;
            li{
                height: 160px;
                padding-top: 22px;
                div{
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    margin: auto;
                }
            }
            li:not(:last-child){
                margin-bottom: 30px;
            }
            li:nth-child(4n+1){
                div{
                    background-color: #5a8bff;
                }
            }
            li:nth-child(4n+2){
                div{
                    background-color: #33cf98;
                }
            }
            li:nth-child(4n+3){
                div{
                    background-color: #ffc74a;
                }
            }
            li:nth-child(4n+4){
                div{
                    background-color: #f77f5b;
                }
            }
        }
        .contentRight{
            width: calc(100% - 42px);
            line-height: 30px;
            font-size: 14px;
            li{
                padding: 14px;
                border: 2px solid #f3f7ff;
                border-radius: 4px;
                .contentRightMsg{
                    width: 870px;
                }
                .contentRightVideo{
                    width: 300px;
                    height: 150px;
                    border-radius: 6px;
                    background: #f3f7ff url('../../../assets/img/platform/circulateManage/start.png') no-repeat center;
                }
            }
            li:not(:last-child){
                margin-bottom: 30px;
            }
            li:nth-child(4n+1){
                h2{
                    color: #5a8bff;
                }
            }
            li:nth-child(4n+2){
                h2{
                    color: #33cf98;
                }
            }
            li:nth-child(4n+3){
                h2{
                    color: #ffc74a;
                }
            }
            li:nth-child(4n+4){
                h2{
                    color: #f77f5b;
                }
            }
        }
    }
</style>
