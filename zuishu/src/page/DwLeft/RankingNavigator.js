import React,{Component,PropTypes} from 'react';
import {View,Text, StyleSheet,Image,Button} from 'react-native';
import store from '../../service/Store';

import {  StackNavigator } from 'react-navigation';
import {RankingList,RankData} from './Ranking/index'


const StackRouteConfigs = {   //这里用来注册 要跳转的组件(也就是导航的路由)
    RankingList: {
        screen: RankingList,
        navigationOptions: ({ navigation }) => ({
        headerTitle: '排行榜',
        headerTitleStyle: { color: 'red', backgroundColor: 'white', alignSelf: 'center' }, //标题文字样式  设置居中
        headerStyle: { backgroundColor: '#FFFFFF' }, //导航栏样式
        // heder:null      //隐藏导航栏                      
        headerLeft: <Button style={{ marginLeft: 10 }} onPress={() => {
            navigation.navigate('DrawerOpen')
        }} title='left' />,
    })
    },
    RankData: {
         screen:RankData
         },
    
};

const StackNavigatorConfigs = {  //这里是对导航栏的配置(对导航栏的一些配置)(对所用导航栏的样式,跳转方法等的配置)
    initialRouteName: 'RankingList' 
};

const RankingNavigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);

module.exports = RankingNavigator;