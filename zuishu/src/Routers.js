
/*在这里将三个导航全部组合起来,看下能不能成功

其中的包含关系是侧面的导航囊括这页面导航
页面导航囊括这底部导航


*/



import React, {Component} from 'react';
import {DrawerNavigator, StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";

import Loogin from './page/DwLeft/Loogin'; //登录界面
import Setup from './page/DwLeft/Setup'; //设置界面
import Notice from './page/DwLeft/Notice'; //通知界面


import Detalis from './page/detalis';
import Book from './page/Book';

import HomeScreen from './page/index';
import  Me from './page/My';


import {Image,StyleSheet,Text,Button} from 'react-native';


//首先是一个主体组件


export  default class MinComponent extends Component{
render (){

    return <Drawer/>
}

}











