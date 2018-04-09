<template>
    <div>
        <div class="breadcrumbContainer clear">
            <span class="fl">所在位置：</span>
            <el-breadcrumb class="breadcrumb fl" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>数据目录</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="directoryTitle clear">
            <el-button class="fr" size="small" type="primary" @click="openAddDialog(0)">新增</el-button>
        </div>
        <div class="content">
            <ul class="directoryList">
                <li v-for="i in tableData">
                    <header class="clear">
                        <img class="fl" src="../../../assets/img/platform/dataDirectory/folder.png" alt="">
                        <span class="fl">{{i.dataDirectoryName}}</span>
                        <strong class="fl">{{'('+i.totalChildrens+')'}}</strong>
                        <div class="fr">
                            <el-button type="text" @click="openAddDialog(i.dataDirectoryId)">新增子类</el-button>
                            <el-button type="text" @click="openSetDialog(i.dataDirectoryName,i.dataDirectoryId,i.parentDataDirectoryId)">修改</el-button>
                            <el-button type="text" @click="openDeleteDialog(i.dataDirectoryId)">删除</el-button>
                        </div>
                    </header>
                    <el-row class="secondDirectory">
                        <el-col :span="4" v-for="j in i.childrens" :key="j.dataDirectoryId">
                            <p class="clear">
                                <img class="fl" src="../../../assets/img/platform/dataDirectory/folder_small.png" alt="">
                                <span class="fl" :title="j.dataDirectoryName">{{j.dataDirectoryName}}</span>
                                <strong class="fl">{{'('+j.totalChildrens+')'}}</strong>
                                <i class="el-icon-edit fr" @click="openSetDialog(j.dataDirectoryName,j.dataDirectoryId,j.parentDataDirectoryId)"></i>
                                <i class="el-icon-delete fr" @click="openDeleteDialog(j.dataDirectoryId)"></i>
                            </p>
                        </el-col>
                    </el-row>
                </li>
            </ul>
        </div>
        <el-dialog
            title="修改目录名称"
            width="400px"
            :visible.sync="setDialogTitleUI"
            :before-close="closeSetDialog">
            <div class="dialogContent">
                <div class="clear">
                    <span class="fl dialogContentLabel">目录名称：</span>
                    <div class="fl dialogContentBox">
                        <el-input placeholder="请输入目录名称" size="small" v-model="setDialogData"></el-input>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <el-button size="small" @click="closeSetDialog">取 消</el-button>
                <el-button size="small" type="primary" @click="setDataDirectory">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog
            title="新增目录名称"
            width="400px"
            :visible.sync="addDialogTitleUI"
            :before-close="closeAddDialog">
            <div class="dialogContent">
                <div class="clear">
                    <span class="fl dialogContentLabel">目录名称：</span>
                    <div class="fl dialogContentBox">
                        <el-input placeholder="请输入目录名称" size="small" v-model="addDialogData"></el-input>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <el-button size="small" @click="closeAddDialog">取 消</el-button>
                <el-button size="small" type="primary" @click="addDataDirectory">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { dataDirectory_getTableData } from "~/api/getData"
    import { dataDirectory_addDataDirectory } from "~/api/getData"
    import { dataDirectory_setDataDirectory } from "~/api/getData"
    import { dataDirectory_deleteDataDirectory } from "~/api/getData"

    export default {
        name: "data-directory",
        data() {
            return{
                tableData: null,
                setDialogTitleUI: false,
                setDialogData: null,
                setParentId: null,
                setId: null,
                addDialogTitleUI: false,
                addDialogData: null,
                addParentId: null,
                deleteId: null
            }
        },
        methods: {
            // 修改数据目录
            openSetDialog(name,id,parentId) {
                this.setDialogData = name;
                this.setId = id;
                this.setParentId = parentId;
                this.setDialogTitleUI = true;
            },
            closeSetDialog() {
                this.setDialogTitleUI = false;
                this.$message({type: 'info', message: '取消修改目录名称'});
            },
            async setDataDirectory() {
                let data;
                data = await dataDirectory_setDataDirectory(this.setDialogData,this.setId,this.setParentId);
                if(data.data.message === 'success'){
                    this.setDialogTitleUI = false;
                    this.$message({type: 'success', message: '修改目录名称完成'});
                    this.getCountData();
                }
            },
            // 新增数据目录
            openAddDialog(parentId) {
                this.addDialogTitleUI = true;
                this.addParentId = parentId;
            },
            closeAddDialog() {
                this.addDialogTitleUI = false;
                this.$message({type: 'info', message: '取消新增目录名称'});
            },
            async addDataDirectory() {
                let data;
                data = await dataDirectory_addDataDirectory(this.addDialogData,this.addParentId);
                if(data.data.message === 'success'){
                    this.addDialogTitleUI = false;
                    this.$message({type: 'success', message: '新增目录名称完成'});
                    this.getCountData();
                }
            },
            // 删除数据目录
            openDeleteDialog(id) {
                this.deleteId = id;
                this.$confirm('此操作将永久删除该目录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteDataDirectory();
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消删除'});
                });
            },
            async deleteDataDirectory() {
                let data;
                data = await dataDirectory_deleteDataDirectory(this.deleteId);
                if(data.data.message === 'success'){
                    this.getCountData();
                    this.$message({type: 'success', message: '删除成功!'});
                }
            },
            // 获取目录数据
            async getCountData() {
                let data;
                data = await dataDirectory_getTableData();
                console.log(data);
                this.tableData = data.data.data;
            },
        },
        mounted() {
            this.getCountData();
        }
    }
</script>

<style lang="scss" scoped>
    .directoryTitle{
        padding: 14px 30px;
        background-color: #fff;
    }
    .directoryList{
        font-size: 14px;
        margin-top: 30px;
        li{
            margin-bottom: 10px;
            header{
                height: 50px;
                line-height: 50px;
                padding: 0 30px;
                cursor: pointer;
                img{
                    vertical-align: top;
                    margin-top: 9px;
                    margin-right: 10px;
                }
                span{
                    margin-right: 10px;
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
            strong{
                font-weight: normal;
                margin-left: 4px;
            }
            .secondDirectory{
                padding: 0 50px;
                p{
                    height: 40px;
                    line-height: 40px;
                    padding: 0 10px;
                    cursor: pointer;
                    margin: 5px 0;
                    img{
                        margin: 12px 10px 12px 0;
                    }
                    span{
                        width: 120px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    i{
                        margin-top: 13px;
                        margin-left: 4px;
                        display: none;
                    }
                }
                p:hover{
                    background-color: #f3f7ff;
                    i{
                        display: inline-block;
                    }
                    i:hover{
                        color: #5a8bff;
                    }
                }
            }
        }
    }
</style>
