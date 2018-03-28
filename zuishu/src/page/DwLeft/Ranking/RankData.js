import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, ListView, TouchableOpacity } from 'react-native';
import { connect, } from 'react-redux';
import store from '../../../service/Store'; // 数据请求发出的action
import { isfalse } from '../../../utils/Utils'


class RankData extends Component {
    /**
     * 左侧导航登录界面
     * 在左侧的界面当中,你其实还是要好好的想想是否需要这个
     * 
     */
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {  //获取到当前的id值然后
        //如果想要频繁的去进行数据请求的话,就可以在最开始的时候将所有的数据全部请求下来后,传入到某个组件里面去
        //也可以解决需要每个的绑
        //获取到书的数据(不需要接收,直接请求后可更新过来)
        store.getRnakingList(this.props.navigation.state.params.Id)
    }



    static navigationOptions = ({ navigation }) => ({
        //这个页面的标题    
        title: navigation.state.params.Title
    })



    get_data() {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        //在初始化完成之后,就是有一个ds 的对象来可以进行获取(用一个对象来获取到数据源)
        var data_ds = [];
        // console.log(data,'data-data')
        if (!isfalse(this.props.ranking.chartsDetailBooks)) {
            this.props.ranking.chartsDetailBooks.map((item) => {
                return data_ds.push(item)
            })
        }

        console.log('data_ds', data_ds)

        return ds.cloneWithRows(data_ds)
    }


    _onPress = (Id, title) => { //点击事件以及其他
        //点击是将id 和名传入redux里面去      
        this.props.navigation.navigate('Book', { Id: Id, Title: title })

    }



    renderRow = (rowData) => {
       //ListView 里面的每一行的详细设置
        // console.log(rowData,'rowData-rowData')
        var src
        if (!isfalse(rowData.cover)) {
            src = 'http://statics.zhuishushenqi.com' + rowData.cover  //不对的啊,我这不应该在这里出现的啊
        } else {
            src = null
        }
        return <View>
            <TouchableOpacity onPress={() => {
                console.log('day and night')
            }} style={{
                flexDirection: 'row',
                flexWrap: 'nowrap',
                padding: 10,
                height: 100,
                borderBottomColor: 'yellow'
            }}>
                <View style={{ paddingRight: 10 }}>
                    <Image source={{ uri: src }} style={{ width: 60, height: 80 }} />
                </View>
                <View >
                    <Text style={{fontSize:12}}>
                    <Text style={{display:'block'}}> {rowData.title}</Text>
                    <Text >{rowData.author}</Text>
                    <Text >{rowData.shortIntro}</Text>
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    }


    render() {
        const self = this;
        console.log('this.props-zzz', this.props)

        return (
            <View style={{ flex: 1 }}>
                <ListView
                    dataSource={self.get_data()}
                    renderRow={this.renderRow.bind(this)
                    }
                />
            </View>
        );
    }
}




const mapStateToProps = state => ({   //反馈最原始的state并反馈到props里面去
    //这里可以对state做过滤,只需改变的数据,也就是说在在本页的数据进行刷新的时候才才会刷新整个页面
    ranking: state.ranking
})

module.exports = connect(mapStateToProps)(RankData);  
//将其连接起来  
//如果说你是按照个人意见来搞的话,这个是会有很大的出入的这个才是问题