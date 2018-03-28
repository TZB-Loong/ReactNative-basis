
import React, { Component, PropTypes } from 'react';
import { Text, View, Button,ListView,FlatList,SectionList } from 'react-native';
import DataService from '../service/DataService';
import confing from '../config/config';
import { StackNavigator } from 'react-navigation';
import  {isfalse} from '../utils/Utils';
import store from '../service/Store'
import { connect, } from 'react-redux';
import { selection } from '../reducers/index';
import actions from '../actions';
import{bindActionCreators } from 'redux';


//所谓的组件数据内部结构书写不就是(也就是内部使用dispath来进行数据的获取)
//多个数据请求的action的叠加就会形成一个树状的数据结构

//先不管这些,我们先在开始的时候进行页面排版的布局开始进行一定的描写


 class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    //组件渲染之前
    componentWillMount() {
        
        // this.props.actions.ranking();  //直接绑定到当前组件里面,这里面有所有的action请求(绑定的操作不是在这里进行的,兄弟)
         store.get_ranking();
    }

    // 现在先按照redux的基本原则来进行编写,不在进行过多的封装

    _onPress = (Id,title)=>{
        //点击(将id与其他的物件传递到下一个页面里去,以便进行数据请求)   
          
            this.props.navigation.navigate('Chat',{Id:Id,Title:title})

    }

    _renderItem = (info) => {
        // console.log('info-index',info)
        var txt = '  ' + info.item.title;
        return <Text 
        style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}   onPress={this._onPress.bind(this,info.item.Id,info.item.title)}>{txt}</Text>
    }
    
    _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
        style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
    }
    
 

     getds = (dataSource) => {  //定义为一个函数里面在套用多个函数
        var dsp = []; //接受
         const dataGate = (data)=>{ //函数套用的区别
            var nds = [];
            data.map(iten=>{
                // console.log('----iten',iten._id)
                nds.push({title:iten.title,Id:iten._id})
            })
            return nds
         }
         var  key = ['本地排行榜','其他排行榜']
         if(!dataSource.isLoading){
            dsp = [{key:'本地排行榜',data:dataGate(dataSource.male)},{key:'其他排行榜',data:dataGate(dataSource.maleOther)}]
         }
         return dsp;
     }


      

    //定义导航条中导航栏的内容
    //  static navigationOptions = ({navigation})=>({
    // headerTitle:'追书神器',
    // headerTitleStyle:{color:'red',backgroundColor:'white',alignSelf:'center'}, //标题文字样式  设置居中
    // headerStyle:{backgroundColor:'#FFFFFF'}, //导航栏样式
    // // heder:null      //隐藏导航栏
    // headerRight: <Text style={{marginRight:10}} >right</Text>,                          //标题栏左右的按钮
    // headerLeft: <Text style={{marginLeft: 10}}   onPress={()=>{
    //     navigation.navigate('DrawerOpen')
    // }}>left</Text>, 
    // })


    render() {
      
        var  dss = this.props
        return (
            <View>
                <SectionList
                    renderSectionHeader={this._sectionComp.bind(this)}
                    renderItem={this._renderItem.bind(this)}
                    sections={this.getds(dss.ranking)}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                    ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>排行榜</Text></View>}
                    ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text  style={{ fontSize: 18, color: '#ffffff' }}>排行榜尾部</Text></View>}
                />
            </View>
        );
    }
}




const mapStateToProps = state => ({  
        //只要state,rangink 的内容发生变化,这个组件就会刷新

        ranking:state.ranking
  })
export default connect(mapStateToProps)( HomeScreen);


