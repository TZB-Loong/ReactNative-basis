import React,{Component,PropTypes} from 'react';
import {View,Text} from 'react-native';
import { StackNavigator } from 'react-navigation';
// import HomeScreen from'./StactkNavigator';

export default  class Me extends Component  {
    /**
     * 注释的样式是不一样的,要注意 ,现在可以开始做导航的东西了
     * 
     */
    constructor(props){
        super(props)
        this.state={}
    }

   
    render(){
        // console.log('this.props-My',this.props)
        return (
            <View>
                <Text>我的</Text>
            </View>
        );
    }
}