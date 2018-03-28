import * as types from '../actions/ActionsTybe';



//countReducer 接受Action 和当前的state 返回一个新的State
//如果使用了中间件的话,那么就是会有一个异步的处理结构在里面,也就是说我们呢吃进行dispath 并不能立马得到结果,需要等待异步处理的结果之后才会拿到响应的返回数据

const initial_state = 0; 

export default function get_indexList(state={list:null},action={}){  
 //当然在页面应用这一块,其实我们本身就可以不用再发新的action,其实在导航里面都已发过了
 //这个是当前数据的逻辑处理问题都在里面呢
  switch (action.type) {
    case types.INDEX_LIST:
      var ostate = { ...state }; //复制好当前要获取的数据;
      return Object.assign(
        {}, state, {
          list: action.payload
        }
      )
    default:
      return state;
  }
}

