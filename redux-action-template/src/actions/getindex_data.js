
import * as types from  './ActionsTybe';
import {createAction} from 'redux-actions';
// import DataService  from '../service/DataService';
import * as requestService from '../service/requestService';
import  config from '../config/config';


function getindex(){
    let url = config.domain
   //等我回去的时候在去找一个比较好的时候呗,这个才是简单的事情啊,兄弟
    
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

//可以在执行后调用一个callback

export   const  getindex_data = createAction(types.INDEX_LIST,getindex)




