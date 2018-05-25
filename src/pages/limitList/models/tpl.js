import * as LimitServices from '../services/tpl'
import {Toast} from 'antd-mobile'

export default {
    namespace: 'limitList',
    state: {
        show: 'buy',
        list:[],
        // list: [{
        //     "分账户": "mn0001",
        //     "合约": "sc1809",
        //     "买卖方向": 0,
        //     "开平方向": 0,
        //     "报单价格": 2,
        //     "报单数量": 1,
        //     "报单时间": "14:33:19",
        //     "报单日期": "20180525",
        //     "交易所ID": "SHFE",
        //     "交易所报单编号": "         1356",
        //     "报单状态": 3,
        //     "资金账户": "8801"
        // }]
    },
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({pathname, query}) => {
                if (pathname === '/') {

                }
            })
        },
    },

    effects: {
        * getList({}, {put, call}) {
            const {data} = yield call(LimitServices.getList, {});
            console.log(data);
            if(data){
                yield put({
                    type: 'assignList',
                    list: data
                })
            }
        },
        *cancel({item},{call}){
            const {data} = yield call(LimitServices.cancel,{orderid:item.交易所报单编号,exchangeid:item.交易所ID});
            console.log(data);
            if(data){
                if(data.状态){
                    Toast.info("撤单成功");
                }else{
                    Toast.info("撤单失败");
                }
            }
        }
    },

    reducers: {
        assignList(state, {list}) {
            return {
                ...state,
                list: list
            }
        }
    },

};
