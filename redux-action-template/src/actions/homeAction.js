/**
 * Created by admin on 2017/11/7.
 */
import * as types from '../modules/constants/actionTypes'
import request from '../modules/api/httpUtil'   //本身的数据请求是放在action里面一同发出的,
import api from '../modules/api/apis'

export let getSpread = () => {  //这个的写法也就是说异步的处理这一块,放在action里面了?


    return dispatch => {
        // console.log(api.WEB_BASE_URL,'api.web')
        return request.get(api.WEB_BASE_URL, null,
            (data) => {
                data.ok ? dispatch(getSpreadSuccess(data.data)) : null
            },
            (error) => {
                //todo send error
            })
    }
};
let getSpreadSuccess = (spreads) => {
    // console.log(spreads,'spreads');
    return {
        type: types.HOME_SPREAD,
        spreadData: spreads,
        spreadState: false,
        autoComplete: []
    }
};

