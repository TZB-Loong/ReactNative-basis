import React, { Component, PropTypes } from 'react';
import {
    Text,
    View,
    Button,
    ListView,
    FlatList,
    SectionList,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';

import { connect, } from 'react-redux';
import store from '../../../service/Store'; // 数据请求发出的action
import { isfalse } from '../../../utils/Utils'
//取到屏幕的宽、高
let { width, height } = Dimensions.get('window');

class RankingList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    componentWillMount() { //获取数据  //挂在这个组件之后只执行一次,其他的不变,这个才是比较大的问题
        store.get_ranking();
    }


    _onPress = (Id, title) => {

        if (Id != 'other' && !isfalse(Id)) {
            this.props.navigation.navigate('RankData', { Id: Id, Title: title });
        } else {
            this.setState({
                show: !this.state.show
            })
        }
    } 


    //下拉列表的行
    _faltListItem = (ItemData)=>{
        //绑定之后这个数据就会出现 (ItemData)

        return <Text>
            {ItemData.item.title}
        </Text>
    }

    _renderItem = (info) => {  //每行的定义 
        
        var txt = info.item.title;
        var src
        if (!isfalse(info.item.cover)) {
            src = 'http://statics.zhuishushenqi.com' + info.item.cover
        } else {
            src = null
        }
        return (
            <TouchableOpacity style={styles.TouchableOpacity} onPress={this._onPress.bind(this, info.item._id, info.item.title)}>
                {!isfalse(src) ?
                    <View style={styles.ViewList}>
                        <Image source={{ uri: src }} style={styles.Image} />
                        <Text>{txt}</Text>
                    </View>
                    : <View >
                        <View style={styles.ViewList}>
                            <Text>{txt}</Text>
                        </View>
                        {this.state.show ?
                            <FlatList 
                            data={info.section.otherData}
                             renderItem={this._faltListItem.bind(this)} /> : null
                        }
                    </View>
                }
            </TouchableOpacity>
        )
    }

    _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
            style={styles.sectionComp}>{txt}</Text>
    }



    getds = (dataSource) => {

        var dsp = [];
        const dataGate = (data) => { //排行榜的数据  
            var nds = [];
            data.map(iten => {
                 nds.push({ title: iten.title, _id: iten._id, cover: iten.cover })
            })
            nds.push({ title: '其他排行榜', Id: 'other' })
            // data.push({title:'其他排行榜',_id:'other'})
            return nds
        }

        if (!dataSource.isLoading) {
            dsp = [{ key: '男生', data: dataGate(dataSource.male),otherData:dataSource.maleOther}, { key: '女生', data: dataGate(dataSource.female) ,otherData:dataSource.femaleOther}]
        }

        return dsp;
    }

    render() {

        var dss = this.props

        // console.log('dds-dds', dss)

        return (
            <View style={styles.listviewStyle}>
            
                <SectionList
                    renderSectionHeader={this._sectionComp.bind(this)}
                    renderItem={this._renderItem.bind(this)}
                    sections={this.getds(dss.ranking)}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                />
            </View>
        );
    }
}


const mapStateToProps = state => ({   //过滤数据(数据刷新,组件刷新)
    ranking: state.ranking
})

module.exports = connect(mapStateToProps)(RankingList); //与redux 进行相关联



//样式,布局,单独的写在最后
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    listviewStyle: {
        width: width
    },
    renderItem: {
        height: 40,
        textAlignVertical: 'center',
        backgroundColor: "#F7F7F7",
        color: '#5C5C5C',
        fontSize: 12
    },
    sectionComp: {
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#E6E6E6',
        color: 'white',
        fontSize: 16
    },
    ViewList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        // backgroundColor:'yellow'
    },
    TouchableOpacity: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: '#fff'
    },
    Image: {
        width: 24,
        height: 24,
    }
});


