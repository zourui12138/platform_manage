import Vue from 'vue'
import Router from 'vue-router'

// 数据流通平台
import Platform from '~/modules/platform/platform'
// 数据流通平台 --> 平台总揽
import Home from '~/modules/platform/home/home'
// 数据流通平台 --> 环境管理
import Environment from '~/modules/platform/environment/environment'
import EnvironmentDetail from '~/modules/platform/environment/environmentDetail'
// 数据流通平台 --> 平台监控
import Monitor from '~/modules/platform/monitor/monitor'
import MonitorBlockChain from '~/modules/platform/monitor/monitorBlockChain/monitorBlockChain'
import MonitorEnvironment from '~/modules/platform/monitor/monitorEnvironment/monitorEnvironment'
import MonitorEnvironmentDetail from '~/modules/platform/monitor/monitorEnvironment/monitorEnvironmentDetail'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/platform/home'
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
                }
            ]
        }
    ]
})
