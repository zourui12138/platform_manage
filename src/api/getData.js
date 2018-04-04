import axios from 'axios'

// 虚拟机管理
export const DFC_getTableData = (page,size) => axios.get('/api/api/vm/list?page='+page+'&size='+size);
export const DFC_getCountData = () => axios.get('/api/api/vm/number');
export const DFC_getDetailData = (id) => axios.get('/api/api/vm/detail?id='+id);
export const DFC_start = (id) => axios.put('/api/api/vm/start?id='+id);
export const DFC_stop = (id) => axios.put('/api/api/vm/shutdown?id='+id);
export const DFC_destroy = (id) => axios.delete('/api/api/vm/destroy?id='+id);
// 用户管理
export const user_getTableData = () => axios.post('/api/account/queryByLimit',{
    limit: {
        size: 10,
        startNumber: 0
    }
});
