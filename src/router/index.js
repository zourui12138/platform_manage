import Vue from 'vue'
import Router from 'vue-router'

// 登录
import Login from '~/modules/login/login'
// 数据流通平台
import Platform from '~/modules/platform/platform'
// 数据流通平台 --> 平台总揽
import Home from '~/modules/platform/home/home'
// 数据流通平台 --> 环境管理
import Environment from '~/modules/platform/environment/environment'
import EnvironmentDetail from '~/modules/platform/environment/environmentDetail'
// 数据流通平台 --> 流通管理
import CirculateManage from '~/modules/platform/circulateManage/circulateManage'
import CirculateManageDetail from '~/modules/platform/circulateManage/circulateManageDetail'
import CirculateManageVoucher from '~/modules/platform/circulateManage/circulateManageVoucher'
// 数据流通平台 --> 用户管理
import UserManage from '~/modules/platform/userManage/userManage'
import UserManageDetail from '~/modules/platform/userManage/userManageDetail'
import UserBill from '~/modules/platform/userManage/userBill'
// 数据流通平台 --> 数据目录
import DataDirectory from '~/modules/platform/dataDirectory/dataDirectory'
// 数据流通平台 --> 平台监控
import Monitor from '~/modules/platform/monitor/monitor'
import MonitorBlockChain from '~/modules/platform/monitor/monitorBlockChain/monitorBlockChain'
import MonitorBlockChainDetail from '~/modules/platform/monitor/monitorBlockChain/monitorBlockChainDetail'
import MonitorEnvironment from '~/modules/platform/monitor/monitorEnvironment/monitorEnvironment'
import MonitorEnvironmentDetail from '~/modules/platform/monitor/monitorEnvironment/monitorEnvironmentDetail'
// 数据流通平台 --> 数据统计
import DataStatistics from '~/modules/platform/dataStatistics/dataStatistics'


Vue.use(Router);

export default new Router({
    //mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/platform',
            name: 'platform',
            component: Platform,
            children: [
                {
                    path: '/platform/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/platform/environment',
                    name: 'environment',
                    component: Environment
                },
                {
                    path: '/platform/environmentDetail',
                    name: 'environmentDetail',
                    component: EnvironmentDetail
                },
                {
                    path: '/platform/circulateManage',
                    name: 'circulateManage',
                    component: CirculateManage
                },
                {
                    path: '/platform/circulateManageDetail',
                    name: 'circulateManageDetail',
                    component: CirculateManageDetail
                },
                {
                    path: '/platform/circulateManageVoucher',
                    name: 'circulateManageVoucher',
                    component: CirculateManageVoucher
                },
                {
                    path: '/platform/userManage',
                    name: 'userManage',
                    component: UserManage
                },
                {
                    path: '/platform/userManageDetail',
                    name: 'userManageDetail',
                    component: UserManageDetail
                },
                {
                    path: '/platform/userBill',
                    name: 'userBill',
                    component: UserBill
                },
                {
                    path: '/platform/dataDirectory',
                    name: 'dataDirectory',
                    component: DataDirectory
                },
                {
                    path: '/platform/monitor',
                    name: 'monitor',
                    component: Monitor,
                    children: [
                        {
                            path: '/platform/monitor/blockChain',
                            name: 'monitorBlockChain',
                            component: MonitorBlockChain
                        },
                        {
                            path: '/platform/monitor/blockChainDetail',
                            name: 'monitorBlockChainDetail',
                            component: MonitorBlockChainDetail
                        },
                        {
                            path: '/platform/monitor/environment',
                            name: 'monitorEnvironment',
                            component: MonitorEnvironment
                        },
                        {
                            path: '/platform/monitor/environmentDetail',
                            name: 'monitorEnvironmentDetail',
                            component: MonitorEnvironmentDetail
                        }
                    ]
                },
                {
                    path: '/platform/dataStatistics',
                    name: 'dataStatistics',
                    component: DataStatistics
                }
            ]
        }
    ]
})
