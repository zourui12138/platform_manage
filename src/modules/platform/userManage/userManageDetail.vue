<template>
    <div id="userManageDetail">
        <header class="breadcrumb">所在位置：<span>用户管理&nbsp;>>&nbsp;详情</span></header>
        <div class="userMsg">
            <div class="userMsgTitle"><h1>数据流通信息</h1></div>
            <el-row>
                <el-col :span="8">
                    <div class="userMsgBox clear">
                        <span class="fl">用户名：</span>
                        <el-input class="fl" size="small" :disabled="true"></el-input>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="userMsgBox clear">
                        <span class="fl">用户类别：</span>
                        <el-input class="fl" size="small" :disabled="true"></el-input>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="userMsgBox clear">
                        <span class="fl">用户ID：</span>
                        <el-input class="fl" size="small" :disabled="true"></el-input>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="userMsgBox clear">
                        <span class="fl">联系人：</span>
                        <el-input class="fl" size="small" :disabled="true"></el-input>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="userMsgBox clear">
                        <span class="fl">联系方式：</span>
                        <el-input class="fl" size="small" :disabled="true"></el-input>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="userMsgBox clear">
                        <span class="fl">备用信息：</span>
                        <el-input class="fl" size="small" resize="none" :rows="2" type="textarea" :disabled="true"></el-input>
                    </div>
                </el-col>
            </el-row>
            <div class="userMsgTitle" style="margin-top: 20px"><h1>基础环境信息</h1></div>
            <div class="userMsgBox clear">
                <span class="fl">用户名：</span>
                <el-input class="fl" size="small" :disabled="true"></el-input>
                <el-button class="fl" size="small" type="primary" style="margin: 9px;" @click="resetPassword">重置密码</el-button>
            </div>
            <div class="userMsgBox clear">
                <span class="fl">用户名：</span>
                <el-switch active-text="开通" inactive-text="关闭"></el-switch>
            </div>
            <div class="userMsgBox clear">
                <span class="fl">积分用户：</span>
                <el-button size="small" type="primary" @click="toUserBill">账单</el-button>
                <el-button size="small" type="primary" @click="openDialog">充值</el-button>
            </div>
            <div class="userMsgBox clear">
                <span class="fl">账户余额：</span>
                <p class="fl">160</p>
            </div>
            <div class="userMsgBox clear">
                <span class="fl">累计收入：</span>
                <p class="fl">123,456</p>
            </div>
        </div>
        <el-dialog
            title="积分充值"
            width="400px"
            :before-close="closeDialog"
            :visible.sync="dialogVisible">
            <el-form :model="dialogData" label-width="90px">
                <el-form-item label="充值金额：">
                    <el-input v-model="dialogData.money" placeholder="请输入充值金额"></el-input>
                </el-form-item>
                <el-form-item label="充值备注：">
                    <el-input v-model="dialogData.comment" placeholder="请输入充值备注"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size="small" @click="closeDialog">取 消</el-button>
                <el-button size="small" type="primary" @click="submitDialog">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "user-manage-detail",
        data() {
            return{
                dialogVisible: false,
                dialogData: {
                    money: null,
                    comment: null
                }
            }
        },
        methods: {
            openDialog() {
                this.dialogVisible = true;
            },
            closeDialog() {
                this.dialogVisible = false;
                this.$message('这是一条消息提示');
            },
            submitDialog() {
                this.dialogVisible = false;
                this.$message({message: '恭喜你，这是一条成功消息', type: 'success'});
            },
            resetPassword() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({type: 'success', message: '删除成功!'});
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消删除'});
                });
            },
            toUserBill() {
                this.$router.push({path : '/platform/userBill', query: { uuid : '12138' }});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .userMsg{
        padding:20px 30px;
        background-color: #fff;
        border: 1px solid #ebecf0;
        border-top: none;
        .userMsgTitle{
            padding: 15px 0;
            background-color: #f3f7ff;
            margin-bottom: 10px;
            h1{
                height: 20px;
                border-left:2px solid #5a8bff;
                font-size: 14px;
                padding-left: 14px;
            }
        }
        .userMsgBox{
            line-height: 50px;
            padding: 0 16px;
            span{
                font-size: 14px;
                width: 70px;
            }
            p{
                font-size: 14px;
            }
            .el-input{
                width: 217px;
            }
            .el-textarea{
                width: calc(100% - 70px);
            }
        }
    }
</style>
