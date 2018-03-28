/**
 * 
 * 导航栏的基础组件,也就是现有的导航栏的基础组件
 */

import React, { Component } from 'react';

import {StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";
import HomeScreen from './page/index';
import  Me from './page/My';;
import TabBarItem from './TabBarItem';


const TabRouteConfigs = {   //导航跳转的组件
    MyTab:{
        screen:HomeScreen,
            navigationOptions:({navigation})=>({
                style:{
                    height:10
                },
                tabBarLabel:'追书架',
                // title:'追书神器'
                tabBarIcon: ({focused, tintColor}) => (  //这个是图标的一些组件的变化的写法
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./image/548300.png')}
                        selectedImage={require('./image/1156332.png')}
                    />
                ),
            })
    },
    Detail: {
        screen: Me,
        navigationOptions:({navigation})=>( {
            style: {
                height: 10
            },
           
            tabBarLabel: '追书社区',
            
             tabBarIcon: ({focused, tintColor}) => (  //这个是图标的一些组件的变化的写法
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./image/548300.png')}
                        selectedImage={require('./image/1156332.png')}
                    />
                ),
        })
       
    },

}

const TabNavigatorConfigs = {
    initialRouteName: 'MyTab',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    labelStyle:{
        backgroundColor:'yellow'
    }
};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

module.exports = Tab ;

