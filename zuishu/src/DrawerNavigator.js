import React from 'react'; //引用react 
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Image,
    Button,
    ScrollView
} from 'react-native';  //这是react action 需要引用的定西

import {DrawerNavigator, DrawerItems} from 'react-navigation'; //引用抽屉导航
import  TabNa from './TabgationBar';


//抽屉导航的内容是要靠注册来进行关联的,也就是书,这个页面是必须在这里进行关联的
import Navs from  './Navs';   //页面导航 (也就是首页显示的内容) 
import Loogin from './page/DwLeft/Loogin'; //登录界面
import Setup from './page/DwLeft/Setup'; //设置界面
import Notice from './page/DwLeft/Notice'; //通知界面
  
  const Dwn = DrawerNavigator({ //这里也可以设置抽屉导航的显示样式
      Loogin: {
          screen: Loogin
      },
      Home: {
          screen: Navs,
      },
      Notifications: {
          screen: Setup,
      },
      Notice:{
          screen:Notice
      }

  },{
      drawerWidth: 100, // 抽屉宽
      drawerPosition: 'left', // 抽屉在左边还是右边
      // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
      contentOptions: { //用来配置抽屉内容的属性 (也就是DrawerItems 的属性)
        initialRouteName: 'Home', // 默认页面组件(一开始就显示的组件名称)
        activeItemKey : 'Notifications',
        labelStyle : {//标签样式
             // color : 'red',
             height : 20,
        },
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#000', // 未选中背景颜色
        style: {  // 样式
           marginVertical: 0,
           flex:1
        //    backgroundColor:'yellow' 
        },
        //没有作用
        onItemPress : (route) => {   
            //每次调用抽屉时,调用该方法(但是这个方法是没有用的)
            //我也看到这个方法貌似是没有用的,这个问题也是比较严重的
             console.log('-------->' + JSON.stringify(route))
        },
        
     },
     initialRouteName: 'Home', // 默认页面组件(一开始就显示的组件名称)



     contentComponent: props=>{
        return (
            <View style={{height:'100',backgroundColor:'#000'}}>
                <DrawerItems {...props}/>
            </View>
        )
     }
  });


  export default Dwn
