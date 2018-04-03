<template>
    <div id="dataDirectory">
        <header class="breadcrumb">所在位置：<span>数据目录</span></header>
        <div class="title clear">
            <el-button class="fr" size="small" type="primary">新增</el-button>
        </div>
        <div class="content">
            <ul class="directoryList">
                <li>
                    <header class="clear">
                        <img class="fl" src="../../../assets/img/platform/dataDirectory/folder.png" alt="">
                        <span class="fl">极地海洋学(100)</span>
                        <div class="fr">
                            <el-button type="text">新增子类</el-button>
                            <el-button type="text">修改</el-button>
                            <el-button type="text">删除</el-button>
                        </div>
                    </header>
                    <el-row class="secondDirectory">
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                    </el-row>
                </li>
                <li>
                    <header class="clear">
                        <img class="fl" src="../../../assets/img/platform/dataDirectory/folder.png" alt="">
                        <span class="fl">极地海洋学(100)</span>
                        <div class="fr">
                            <el-button type="text">新增子类</el-button>
                            <el-button type="text">修改</el-button>
                            <el-button type="text">删除</el-button>
                        </div>
                    </header>
                    <el-row class="secondDirectory">
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                    </el-row>
                </li>
                <li>
                    <header class="clear">
                        <img class="fl" src="../../../assets/img/platform/dataDirectory/folder.png" alt="">
                        <span class="fl">极地海洋学(100)</span>
                        <div class="fr">
                            <el-button type="text">新增子类</el-button>
                            <el-button type="text">修改</el-button>
                            <el-button type="text">删除</el-button>
                        </div>
                    </header>
                    <el-row class="secondDirectory">
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                    </el-row>
                </li>
                <li>
                    <header class="clear">
                        <img class="fl" src="../../../assets/img/platform/dataDirectory/folder.png" alt="">
                        <span class="fl">极地海洋学(100)</span>
                        <div class="fr">
                            <el-button type="text">新增子类</el-button>
                            <el-button type="text">修改</el-button>
                            <el-button type="text">删除</el-button>
                        </div>
                    </header>
                    <el-row class="secondDirectory">
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                        <el-col :span="3"><p>极地海洋学(20)</p></el-col>
                    </el-row>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "data-directory"
    }
</script>

<style lang="scss" scoped>
    .title{
        padding: 14px 30px;
        background-color: #fff;
    }
    .directoryList{
        font-size: 14px;
        margin-top: 30px;
        header{
            height: 50px;
            line-height: 50px;
            background-color: #ecf3fd;
            padding: 0 30px;
            cursor: pointer;
            img{
                vertical-align: top;
                margin-top: 9px;
                margin-right: 20px;
            }
            div{
                display: none;
                a{
                    margin-left: 20px;
                }
            }
        }
        header:hover{
            background-color: #f3f7ff;
            div{
                display: block;
            }
        }
        .secondDirectory{
            padding: 0 60px;
            p{
                height: 40px;
                line-height: 40px;
            }
        }
    }
</style>
