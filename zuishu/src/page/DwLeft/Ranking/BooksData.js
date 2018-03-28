
//每本书的详细内容  //我想要想一块海绵似得,疯狂的去吸收一切我可以吸收的物质
import  React,{Component,PropTypes} from 'react';
import { View, Text, StyleSheet, Image, ListView, TouchableOpacity } from 'react-native';
import store from '../../../service/Store'; // 数据请求发出的action
import { isfalse } from '../../../utils/Utils';//一些基本的工具方法


//首先要将这个页面添加到导航的注册页面中去
//让其在这个导航中是已经注册了的


class BooksData extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){

        return <View><Text>这只是个测试页面</Text></View>
    }
}

module.exports = BooksData