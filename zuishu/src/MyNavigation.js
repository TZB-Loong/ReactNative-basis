import React, { Component, PropTypes } from 'react';
import {  StackNavigator } from 'react-navigation';


//试图封装的注册组件

const MyNavigation = (component)=>{


    //那我现在是要按照其他的来进行一个显示咯,现在这个才是关键啊
    //传进来的应该是一个组件的数组,然后根据这个数组来进行一个封装,尝试一下,如果不行,就先不要浪费时间,先将作品进行开发出来


    //如果说没有,没有这么大的魄力去解决这个问题,这本身就是

    const StackNavigatorConfigs = {
        // {conmponent}:component
    }


    //我们首先需要确定的是 在没有指定默认显示的页面的那一个的话,这个是否会起作用

    const  StackNavigatorConfigs = {  //这里是对导航栏的配置(对导航栏的一些配置)(对所用导航栏的样式,跳转方法等的配置)
        initialRouteName: 'Home' 
    };

    return(      //这个是我最终需要反馈的东西(我们现在先将共有的东西进行提取,之后在进行封装,重复使用,原则是一个注册上只只会挂载两个页面)
        StackNavigator(StackRouteConfigs, StackNavigatorConfigs)
    )
}

module.exports = MyNavigation;