
import * as types from './ActionsTybe';
import {createAction} from 'redux-actions';
// import DataService  from '../service/DataService';
import * as requestService from '../service/requestService';
import  config from '../config/config';


function getindex(){   
  //action 是可以直接的携带数据     
  //首先action就是可以理解为一个函数(用来执行数据请求的函数)
    let url = config.domain
    
    return requestService.get(url,true).then( data =>{
      // console.log('xml-data',data)
      if(!data.error){
        return {
          female:data.female,
          male:data.male,
          ok:data.ok
        }
        // return data.showapi_res_body.newslist
      }else{
        throw 'do getPhoto failed'
      }
    })
  }

//可以在执行后调用一个callback   这个是活生生的一个例子  在执行之后调用一个callback,我是没动之后给我的理解是什么意思来着


export   const  getindex_data = createAction(types.INDEX_LIST,getindex);




