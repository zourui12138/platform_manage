import axios from 'axios'
// 统一配置请求时间限制
axios.defaults.timeout = 4000;

const api = '/api';
// 登录系统
export const api_login = (username,password) => axios.post(api+'/account/manageLogin',{
    accountName: username,
    password: password
});
// 虚拟机管理
export const DFC_getTableData = (page,size,searchKey,status) => axios.get(api+'/vm/list?page='+page+'&size='+size+'&searchKey='+searchKey+'&status='+status);
export const DFC_getCountData = () => axios.get(api+'/vm/number');
export const DFC_getDetailData = (id) => axios.get(api+'/vm/detail?id='+id);
export const DFC_start = (id) => axios.put(api+'/vm/start?id='+id);
export const DFC_stop = (id) => axios.put(api+'/vm/shutdown?id='+id);
export const DFC_destroy = (id) => axios.delete(api+'/vm/destroy?id='+id);
export const DFC_getMonitorById = (id) => axios.get(api+'/vm/monitor?id='+id);
// 流通管理
export const circulateManage_getTableData = (page,size,searchKey) => axios.get(api+'/contract/getContract?page='+page+'&size='+size+'&searchKey='+searchKey);
export const circulateManage_getContract = (id) => axios.get(api+'/contract/contractDetail?contractRecordId='+id);
export const circulateManage_getCycle = (id) => axios.post(api+'/carried/getTranactionSMZQ',{id:id});
export const circulateManage_getCycleBlock = (id) => axios.post(api+'/carried/getblockAndTran',{id:id});
export const circulateManage_getVoucher = (id) => axios.get(api+'/guacamole/records?id='+id);
export const circulateManage_getCirculateCount = () => axios.post(api+'/dataInfo/getCirculationTotal',{limit: {size:5,startNumber:0}});
export const circulateManage_getCirculateBar = () => axios.get(api+'/contract/statisticsSevenDay');
export const circulateManage_getCirculateTop = () => axios.get(api+'/contract/contractRank');
export const circulateManage_getCirculateData = (page,size) => axios.post(api+'/dataInfo/getCirculationTotalByLimit',{limit: {size: size, startNumber: (page-1)*size}});
export const circulateManage_getCirculateTrade = () => axios.get(api+'/contract/contractStatistics');
// 用户管理
export const user_getTableData = (page,size) => axios.post(api+'/account/queryByLimit',{
    limit: {
        size: size,
        startNumber: (page-1)*size
    }
});
export const user_getUserById = (id) => axios.get(api+'/account/getAccountById?accountId='+id);
export const user_resetPassword = (id) => axios.get(api+'/account/resetUserPassword?accountId='+id);
export const user_enabled = (id,status) => axios.put(api+'/account/enabled',{
    accountId: id,
    enabledStatus: status
});
export const user_getCategory = () => axios.get(api+'/account/getAccountCategorys');
export const user_recharge = (id,amount,comment) => axios.put(api+'/account/jifcz',{
    count: amount,
    userId: id,
    remaker: comment
});
export const user_getBillData = (id,page,size) => axios.post(api+'/account/bill',{
    limit: {
        size: size,
        startNumber: (page-1)*size
    },
    param: {
        id: id
    }
});
export const user_getUserCount = () => axios.get(api+'/account/statisticalUsers');
// 数据目录
export const dataDirectory_getTableData = () => axios.get(api+'/dataDirectory/queryAll');
export const dataDirectory_addDataDirectory = (name,parentId) => axios.post(api+'/dataDirectory/add',{
    dataDirectoryName: name,
    parentDataDirectoryId: parentId
});
export const dataDirectory_setDataDirectory = (name,id,parentId) => axios.put(api+'/dataDirectory/update',{
    dataDirectoryName: name,
    dataDirectoryId: id,
    parentDataDirectoryId: parentId
});
export const dataDirectory_deleteDataDirectory = (id) => axios.delete(api+'/dataDirectory/delete?dataDirectoryId='+id);
export const dataDirectoty_getDirectoryCount = () => axios.post(api+'/dataDirectory/getDataDirectorysDataTotal',{limit: {size:5,startNumber:0}});
// 区块链管理
export const blockChain_getTableData = () => axios.get(api+'/carried/getInfo');
export const blockChain_getCountData = () => axios.get(api+'/demand/getInfo');
export const blockChain_getToken = () => axios.get(api+'/carried/getToken');
export const blockChain_wsUrl = (token) => 'ws://192.168.125.3:18080/v1/stats?token='+token;
// 添加响应拦截器
export const interceptor = (callback) => axios.interceptors.response.use(
    // 正确处理的回调函数
    function (response) {return response;},
    // 错误处理回调函数
    function () {callback();}
);
