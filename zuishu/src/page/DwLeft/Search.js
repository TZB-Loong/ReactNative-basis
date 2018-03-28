import React,{Component,PropTypes} from 'react';
import {View,Text, StyleSheet,Image} from 'react-native';
import store from '../../service/Store';
export default  class Search extends Component  {
    /**
     * 左侧导航登录界面
     * 
     */
    constructor(props){
        super(props)
        this.state={}
    }
    render(){        
        
        console.log('this.search.props',this.props)
        return (
            <View style={{flex:1}}>  
            <Text onPress={()=>this.props.navigation.navigate("DrawerOpen")}>搜索界面</Text>  
        </View> 
        );
    }
}
