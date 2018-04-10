import axios from 'axios'
// 统一配置请求时间限制
axios.defaults.timeout = 4000;

const api = '/api';
// 登录系统
export const api_login = (username,password) => axios.post(api+'/account/login',{
    accountName: username,
    password: password
});
// 虚拟机管理
export const DFC_getTableData = (page,size) => axios.get(api+'/api/vm/list?page='+page+'&size='+size);
export const DFC_getCountData = () => axios.get(api+'/api/vm/number');
export const DFC_getDetailData = (id) => axios.get(api+'/api/vm/detail?id='+id);
export const DFC_start = (id) => axios.put(api+'/api/vm/start?id='+id);
export const DFC_stop = (id) => axios.put(api+'/api/vm/shutdown?id='+id);
export const DFC_destroy = (id) => axios.delete(api+'/api/vm/destroy?id='+id);
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
// 区块链管理
export const blockChain_getTableData = () => axios.get(api+'/carried/getInfo');
// 添加响应拦截器
export const interceptor = (callback) => axios.interceptors.response.use(
    function (response) {return response;},
    function () {callback();}
);
