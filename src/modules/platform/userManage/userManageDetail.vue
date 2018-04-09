<template>
    <div>
        <div class="breadcrumbContainer clear">
            <span class="fl">所在位置：</span>
            <el-breadcrumb class="breadcrumb fl" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item to="/platform/userManage">用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="userMsg">
            <div class="title"><h1>数据流通信息</h1></div>
            <el-row>
                <el-col :span="8">
                    <div class="userMsgBox clear">
                        <span class="fl">用户名：</span>
                        <el-input v-model="userDetailData.accountName" class="fl" size="small"  :disabled="true"></el-input>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="userMsgBox clear">
                        <span class="fl">用户类别：</span>
                        <el-input v-model="userDetailData.accountCategory" class="fl" size="small" :disabled="true"></el-input>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="userMsgBox clear">
                        <span class="fl">用户ID：</span>
                        <el-input v-model="userDetailData.accountId" class="fl" size="small" :disabled="true"></el-input>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="userMsgBox clear">
                        <span class="fl">联系人：</span>
                        <el-input v-model="userDetailData.contacts" class="fl" size="small" :disabled="true"></el-input>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="userMsgBox clear">
                        <span class="fl">联系方式：</span>
                        <el-input v-model="userDetailData.cellphoneNumber" class="fl" size="small" :disabled="true"></el-input>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="userMsgBox clear">
                        <span class="fl">备用信息：</span>
                        <el-input v-model="userDetailData.remarksInformation" class="fl" size="small" resize="none" :rows="2" type="textarea" :disabled="true"></el-input>
                    </div>
                </el-col>
            </el-row>
            <div class="title" style="margin-top: 20px"><h1>基础环境信息</h1></div>
            <div class="userMsgBox clear">
                <span class="fl">用户密码：</span>
                <el-input v-model="userDetailData.password" class="fl" size="small" :disabled="true"></el-input>
                <el-button class="fl" size="small" type="primary" style="margin: 9px;" @click="openResetPasswordTip">重置密码</el-button>
            </div>
            <div class="userMsgBox clear">
                <span class="fl">帐号状态：</span>
                <el-switch v-model="userDetailData.status" active-text="开通" inactive-text="关闭"></el-switch>
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
    import { user_getUserById } from "~/api/getData"
    import { user_resetPassword } from "~/api/getData"

    export default {
        name: "user-manage-detail",
        data() {
            return{
                dialogVisible: false,
                userDetailData: {
                    accountName: null,
                    accountCategory: null,
                    accountId: null,
                    contacts: null,
                    cellphoneNumber: null,
                    remarksInformation: null,
                    password: null,
                    status: null
                },
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
            openResetPasswordTip() {
                this.$confirm('此操作将重置用户密码, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.resetPassword();
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消重置'});
                });
            },
            toUserBill() {
                this.$router.push({path : '/platform/userBill', query: { id : this.$route.query.id }});
            },
            async getUserById() {
                let data;
                data = await user_getUserById(this.$route.query.id);
                this.userDetailData.accountName = data.data.data.accountName;
                this.userDetailData.accountCategory = data.data.data.accountCategory;
                this.userDetailData.accountId = data.data.data.accountId;
                this.userDetailData.contacts = data.data.data.contacts;
                this.userDetailData.cellphoneNumber = data.data.data.cellphoneNumber;
                this.userDetailData.remarksInformation = data.data.data.remarksInformation;
                this.userDetailData.password = data.data.data.password;
            },
            async resetPassword() {
                let data;
                data = await user_resetPassword(this.$route.query.id);
                console.log(data);
                if(data.data.message === 'success'){
                    this.$message({type: 'success', message: '重置成功!'});
                    this.getUserById();
                }
            }
        },
        mounted() {
            this.getUserById();
        }
    }
</script>

<style lang="scss" scoped>
    .userMsg{
        padding:20px 30px;
        background-color: #fff;
        border: 1px solid #ebecf0;
        border-top: none;
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
