<template>
    <div id="userManage">
        <header class="breadcrumb">所在位置：<span>用户管理</span></header>
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
        name: "user-manage",
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
        }
    }
</script>

<style lang="scss" scoped>
    .content{
        .search{
            padding: 17px 0;
            .el-input{
                width: 217px;
            }
            .el-select{
                margin-right: 10px;
            }
        }
    }
</style>
