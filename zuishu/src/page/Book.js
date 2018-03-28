import React,{Component,PropTypes} from 'react';
import {View,Text} from 'react-native';
import { StackNavigator } from 'react-navigation';
// import HomeScreen from'./StactkNavigator';
import store from '../service/Store'
import  {isfalse} from '../utils/Utils';
import { connect } from 'react-redux';
  class Book extends Component  {
    /**
     * 注释的样式是不一样的,要注意 ,现在可以开始做导航的东西了
     * 
     */
    constructor(props){
        super(props)
        this.state={}
        console.log(this.props.navigation,'this.props')
    }


    componentWillMount(){

       //数据获取已经没有问题,现在编写其他的功能,这个才是关键
        store.get_bookDetail(this.props.navigation.state.params.Id)
    }

    render(){
        // console.log('this.props-My',this.props)
        //这个导航的原理貌似有些是不通的啊
        
        return (
            <View>
                <Text>书比较详细的介绍</Text>
            </View>
        );  
    }
}
const mapStateToProps = state => ({   //反馈最原始的state并反馈到props里面去
    //这里可以对state做过滤,只需改变的数据,也就是说在在本页的数据进行刷新的时候才才会刷新整个页面
    book:state.book
})


const mapDispatchToProps = function (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps)(Book);