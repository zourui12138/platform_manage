<template>
    <div id="monitor">
        <header class="breadcrumb">所在位置：<span>平台监控</span></header>
        <el-menu class="monitorMenu" default-active="1" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">区块连网络服务监控</el-menu-item>
            <el-menu-item index="2">数据流通环境监控</el-menu-item>
        </el-menu>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "monitor",
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .monitorMenu{
        margin-bottom: 25px;
    }
</style>
