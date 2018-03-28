import React,{Component,PropTypes} from 'react';
import {View,Text, StyleSheet,Image} from 'react-native';

export default  class Notice extends Component  {
    /**
     * 左侧导航登录界面
     * 
     */
    constructor(props){
        super(props)
        this.state={}
    }

    render(){        
        return (
            <View style={{flex:1}}>  
            <Text onPress={()=>this.props.navigation.navigate("DrawerOpen")}>通知界面</Text>  
        </View> 
        );
    }
}
