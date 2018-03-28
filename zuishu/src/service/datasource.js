
//这个组件是一个中转组件(目的是可以接收改变后的state)
import store from  './Store';  //引用这个来获取到store 
import {createStore,applyMiddleware,combineReducers,bindActionCreators} from 'redux'; /** 创建一个store */
import * as Reduxs from  '../reducers';
import { connect, } from 'react-redux';
import thunk from 'redux-thunk';  //导入中间件
import reduxPromiseMiddleware from 'redux-promise'; //也是中间件
import {createLogger} from 'redux-logger';;  //生成日志中间件
import actions from '../actions';


const Allactions =  bindActionCreators(actions, store.dispatch) //所有的dispatch全部绑定到这里来,对吧

export default{  //想不到这个东西怎么来写是比较合适的,所以很郁闷,兄弟




}




