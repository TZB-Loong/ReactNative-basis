import React, {Component} from 'react';
import {DrawerNavigator, StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";
import Navigator from  './Navs';  
import {Loogin,Setup,Notice,Search,RankingNavigator} from './page/DwLeft';
import {Image,StyleSheet} from 'react-native';
import TabBarItem from './TabBarItem';


//导航显示的主体

export default class MainComponent extends Component {   //这个是展现的实体
    render() {
        return (
            <Drawer/>
        );
    }
}


// http://statics.zhuishushenqi.com/ranking-cover/142319314350435
const DrawerRouteConfigs = {
    Navigator: {
        screen: Navigator,
        navigationOptions: ({navigation}) => ({
            drawerLabel : '首页',
            drawerIcon : ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./image/548300.png')}
                    selectedImage={require('./image/1156332.png')}
                />
            ),
        }),
    },
    Login: {
        screen: Loogin,
        navigationOptions: {
            drawerLabel : '登录',
            drawerIcon : ({focused, tintColor}) => (
                <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('./image/548300.png')}
                selectedImage={require('./image/1156332.png')}
            />
            ),
  
        },
    },
    Mine: {
        screen: Setup,
        navigationOptions: {
            drawerLabel : '设置',
            drawerIcon : ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./image/548300.png')}
                    selectedImage={require('./image/1156332.png')}
                />
            ),
        },
    },
    Search:{
        screen:Search,
        navigationOptions: { 
            drawerLabel : '搜索',
            drawerIcon : ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./image/548300.png')}
                    selectedImage={require('./image/1156332.png')}
                />
            ),
        }
    },
    RankingNavigator:{
        screen:RankingNavigator,
        navigationOptions: { 
            drawerLabel : '排行榜',
            drawerIcon : ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./image/548300.png')}
                    selectedImage={require('./image/1156332.png')}
                />
            ),
        }
    }
};
const DrawerNavigatorConfigs = {
    initialRouteName: 'Navigator',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {}
};


const Drawer = DrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfigs);

