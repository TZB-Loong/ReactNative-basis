import React,{Component,PropTypes} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';
// import HomeScreen from'./StactkNavigator';

export default  class TabBarItem extends Component  {
    /**
     * 导航栏的图标显示内容
     * 
     */
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return (
            <View>
                <Image source={this.props.focused?this.props.selectedImage:this.props.normalImage}
                style={[styles.icon, {tintColor: this.props.tintColor}]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({ //把全部的样式封装成一个对象来进行使用
    icon: {
      width: 24,
      height: 24,
    },
  });