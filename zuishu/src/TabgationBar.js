/**
 * 
 * 导航栏的基础组件,也就是现有的导航栏的基础组件
 */

import React, { Component } from 'react';
import {View,Text} from 'react-native'
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import Detalis from './page/detalis';
// import * as HomeScreen from './page/index';
import HomeScreen from './page/index';
import  Me from './page/My';
import connectComponent from './connectComponent'
import { connect } from 'react-redux';
// const HHomeScreen = connectComponent(HomeScreen);
// const MMe  = connectComponent(Me);

    const TabNa = TabNavigator ({

        MyTab:{ 
            screen:HomeScreen,
            navigationOptions:{
                style:{
                    height:10
                },
                tabBarLabel:'追书架',
                // title:'追书神器'
            },
            tabBarPosition:'bottom',
            swipeEnabled:false,
            animationEnabled:false,
            tabBarOptions: {
                style: {
                    height:49
                },
                activeBackgroundColor:'white',
                activeTintColor:'#4ECBFC',
                inactiveBackgroundColor:'white',
                inactiveTintColor:'#aaa',
                showLabel:false,
            } 
        },
        Detail:{ 
            screen: Me,
            navigationOptions:{
                style:{
                    height:10
                },
                tabBarLabel:'追书社区',
                // title:'追书神器'
            },
            // tabBarPosition:'bottom',
            swipeEnabled:false,
            animationEnabled:true,
            tabBarOptions: {
                style: {
                    height:49
                },
                labelStyle: {  
                    fontSize: 10, // 文字大小  
                },
                activeBackgroundColor:'white',
                activeTintColor:'#4ECBFC',
                inactiveBackgroundColor:'white',
                inactiveTintColor:'#aaa',
                showLabel:false,
            }
        },

        
});







export default TabNa;
