import {createStore,applyMiddleware,combineReducers,bindActionCreators} from 'redux'; /** 创建一个store */
import * as Reduxs from  '../reducers';
import { connect, } from 'react-redux';
import thunk from 'redux-thunk';  //导入中间件
import reduxPromiseMiddleware from 'redux-promise'; //也是中间件
import {createLogger} from 'redux-logger';;  //生成日志中间件
import actions from '../actions';
// import { bindActionCreators } from 'redux';

/**
 * 
 *创建store 是 createStore 能够接受三个参数
 {
     redux: 应对不同的action改变state(也就是数据的改变),
     initial_state: 初始状态,(也就是初始数据,或者是不同的命名空间)
     applyMiddleware(thunk,promise,logger): 执行中间件  (thunk,promise,logger才是中间件) 
     applyMiddeware: redux的原生函数 将中间组成一个数组  (中间件的执行有顺序)
    combineReducers : 将多个redux合并成一个文件
 }
 */ 

 //现在先不管,先把功能做出来,之后在进行优化(初级版本)


const logger = createLogger({  //创建日志中间件
	predicate: (getState, action) => false,
	collapsed: true,
	duration: true,
  colors: {
    prevState: () => `#FFEB3B`,
    nextState: () => `#4CAF50`,
  },
  diff: true,
});


const Redux = combineReducers(Reduxs); 
const configStore = applyMiddleware(thunk,reduxPromiseMiddleware,logger)(createStore) //这个是引入中间件
// const store = configStore(Redux);
const store = configStore(Redux,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //与redux的工具进行连接(失败)

//这个会把allActions 与dispatch 全部绑定成一个函数,可供直接调用
const Allactions =  bindActionCreators(actions, store.dispatch) //所有的dispatch全部绑定到这里来,对吧

console.log(Allactions,'Allactions') //也就是说我在store下面挂载了所有的actin请求,这里将是请求主战场


var ds ;   //本来是想说只要刷新这个就行,结果内部的刷新机制无法实现,或者说是我太天真的了,我也可以是用组件内部state来控制是否刷新,不过这个已近无所谓

//预期只要发生了请求,请求成功的数据将会返回到这里(我也就可以直接的获取到新的)
//只要有新的数据就刷新组件(但是现在这个是不现实的,我需要在次的建立新的监听机制)

store.subscribe(function(){  //我们要再来把他挑出来,这个才是重点啊

      ds = store.getState();
    //   console.log( ds,'inall ds ')
    return ds;

})

// const ds = store.getState();  //只要状态发生了变化的话,那么,这个组件就会开始刷新(也就是可以获取到store)
 //Allactions ,所有的数据请求封装方法(就是使用dispath响应的action方法)

//当然所有的Action 请求方法也可以直接传入到 props 里面进行请求()

//当如我也可以定义一些全局性的东西放在 store 里面

//如果说你是在引入到props里面,在你引入组件时,你也是可以进行过滤,过滤到只有你想要的函数,这个都是可以的,兄弟

store.get_ranking = (state)=>{   //这个方法是全局的方法,是在全局调用(可以)
    

    Allactions.ranking();

    return ds.ranking   //这个返回是,如果你用一个对象进行接收的话,这个
}



store.getRnakingList = (id)=>{
    Allactions.rankingList(id);

    // return ds ;  //我还是没懂这个ds 的问题是个什么鬼(可以不要这个ds啊,可以吧?)
    return ds.ranking.chartsDetailBooks  //返回一个单一的数据,不需要多个问题

}

store.get_bookDetail = (id)=>{
    Allactions.bookDetail(id);

    return ds
}

store.getImageSrc = (cover)=>{ //返回图片的地址

    return 'http://statics.zhuishushenqi.com' + cover
}

// const mapStateToProps = state => ({   //反馈最原始的state并反馈到props里面去
        //但是这个是不成立的,这也是个问题
//       //这里可以对state做过滤,只需改变的数据,也就是说在在本页的数据进行刷新的时候才才会刷新整个页面
//     // 我的想法是在这里只做一次的绑定,假如说一旦发出了action store的数据就会发生变化,然后返回
//           state
//     })
// export default connect(mapStateToProps)(store);
export default store;

