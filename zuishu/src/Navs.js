import React, { Component, PropTypes } from 'react';
import {  StackNavigator } from 'react-navigation';
import {Text,Button,Image} from 'react-native'
import Detalis from './page/detalis';
import Book from './page/Book';
import Tab from './Tab';
import TabBarItem from './TabBarItem';





const StackRouteConfigs = {   //这里用来注册 要跳转的组件(也就是导航的路由)
    Home: {
        screen: Tab,
        navigationOptions: ({ navigation }) => ({
        headerTitle: '追书神器',
        headerTitleStyle: { color: 'red', backgroundColor: 'white', alignSelf: 'center' }, //标题文字样式  设置居中
        headerStyle: { backgroundColor: '#FFFFFF' }, //导航栏样式
        // heder:null      //隐藏导航栏                      
        headerLeft: <Button style={{ marginLeft: 10 }} onPress={() => {
            navigation.navigate('DrawerOpen')
        }} title='left' />,
    })
    },
    Chat: {
         screen:Detalis
         },
    Book:{
        screen:Book
    }
};

const StackNavigatorConfigs = {  //这里是对导航栏的配置(对导航栏的一些配置)(对所用导航栏的样式,跳转方法等的配置)
    initialRouteName: 'Home' 
};

/*
API:  stackNavigator(StackRouteConfigs, StackNavigatorConfigs)\
    StackRouteConfigs :跳转的组件(路由的设置)
    StackNavigatorConfigs: 一些配置(也就是真没跳转)
*/


const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);  //组件进行注册

module.exports = Navigator;

// export default Navigator;

