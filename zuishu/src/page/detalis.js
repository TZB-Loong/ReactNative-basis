/**
 * Created by Administrator on 2017/6/23 0023.
 */
/**
 * Created by apple on 16/10/29.
 */

//什么才是该有的论调,这个是比较需要知道的事情吧,对吗?
import React, { Component, PropTypes } from 'react';
import { Text, View, Button,ListView ,TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import store from '../service/Store';
import { connect } from 'react-redux';
import  {isfalse} from '../utils/Utils';
import { get } from '../service/requestService';
import DataService from '../service/DataService';
import { getindex_data } from '../actions/getindex_data';
// import default from './index';
// import HomeScreen from'./StactkNavigator';

class Detalis extends Component {  //这样子的数据流通是不合理的
    /**
     * 注释的样式是不一样的,要注意 ,现在可以开始做导航的东西了
     * 
     */

    //如果说需要这么一个初始化的话,那么其实我也就可以替换掉他了

    constructor(props){
    super(props);
    // this.state =  this.initialState();
    this.state = {}
    }

    componentWillMount(){  //获取到当前的id值然后
        
        //获取到书的数据(不需要接收,直接请求后可更新过来)
         store.getRnakingList(this.props.navigation.state.params.Id) 
    }

    //如果说我要在这里进标题之间的那种修改的话,那就是现在的问题了
    static navigationOptions= ({navigation}) => ({
       //这个页面的标题    
        title:navigation.state.params.Title
        
    })

    _onPress = (Id,title)=>{
        //点击是将id 和名传入redux里面去      
            this.props.navigation.navigate('Book',{Id:Id,Title:title})
    }

    //使用一个函数接收并处理这些数据
    get_data (){
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2})
        //在初始化完成之后,就是有一个ds 的对象来可以进行获取(用一个对象来获取到数据源)
        //我是想尽快的完成这点,或者说尽快的从这里脱离
        
        var data_ds=[];
        if(!isfalse(this.props.ranking.chartsDetailBooks)){
            this.props.ranking.chartsDetailBooks.map((item)=>{
                    return data_ds.push(item)                 
            })
        }
       return ds.cloneWithRows(data_ds) 
    }

    render() {
       console.log('this.props',this.props)      
        const self = this;
        return (
            <View>
                <ListView
                    dataSource={self.get_data()}
                    renderRow={(rowData) => 
                        <TouchableOpacity onPress={this._onPress.bind(this,rowData._id,rowData.title)} 
                         style={{backgroundColor:'#ffffff'}} >
                         <View>
                         <Text > {rowData.title}</Text>
                         <Text>{rowData.author}</Text>
                         <View style={{ backgroundColor:'gray'}}><Text></Text></View>
                         </View>
                         </TouchableOpacity>}
                />  
            </View>
        );
    }
}

const mapStateToProps = state => ({   
    //反馈最原始的state并反馈到props里面去
    //这里可以对state做过滤,只需改变的数据,也就是说在在本页的数据进行刷新的时候才才会刷新整个页面
    ranking:state.ranking
})


const mapDispatchToProps = function (dispatch) { 
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps)(Detalis);

// export default connect(mapStateToProps,mapDispatchToProps)(Detalis) //把所用的dispatch(请求全部绑定到this.props里面去)



    




