import React, { Component, PropTypes } from 'react';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';
// import Detalis from './page/detalis';
// import Book from './page/Book';
// import connect from 'react-redux';
// import * as TabNa from './TabgationBar';
// import  TabNa from './TabgationBar';
// import Dwn from './DrawerNavigator';
// import connectComponent from './connectComponent';
// import { get_indexList } from './reducers/index';

import Nav from './Nav'

//组件的写法涉及到新的路由问题,有带商榷




// const TTabNa = connectComponent(TabNa);   //(这种写法是自定义导航组件的写法)
export const  AppWithNavigationState = StackNavigator({   
    Home: { screen: Nav },
    // Chat: { screen: Detalis },
    // Book:{screen:Book},

},{
  initialRouteName: 'Home', // 默认显示界面
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
   title:'追书神器' 
});

class SimpleApp extends Component { //自定义导航组件(这个是可以获取到内部的path 然后可以指定路由
      
      render() {
        return (
          <AppWithNavigationState
            navigation={addNavigationHelpers({ 
              dispatch: this.props.dispatch,
              state: this.props.state.navReducer
            })
        } 
          />
        )
      }
    }


export const LayoutComponent = SimpleApp; //什么是最大的问题,最大的为题就是你获取数据的函数,与状态无法往下传

export function mapStateToProps(state) {  //这个是用来改变真个状态的(也就是说这个是针对导航的)
    return {
        state
    }
}


/*




//导航栏的原本写法   //前面的部分是主要切换的组件  //后面的部分是对导航栏的一些设置
    

const SimpleApp = StackNavigator({

  Home: { screen: TabNa },
  Chat: { screen: Detalis },
  Book:{screen:Book},
},{
  initialRouteName: 'Home', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        header: {  // 导航栏相关设置项
            backTitle: '返回',  // 左上角返回键文字 (左上角也可以是一定的标签)
            style: {
                backgroundColor: '#fff'
            },
            titleStyle: {
                color: 'green'
            }
        },
        cardStack: {
            gesturesEnabled: true
        },
        title:'追书神器',
        right:'右',  //这个是否能为组件还是有待商榷
        left:'左'  //这个能否为组件也是有待商榷的,兄弟
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    
})
export default SimpleApp


*/









