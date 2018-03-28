import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {Provider} from 'react-redux'; //redux中的stor的接入口
// import store from './src/serveice/Store';

//如果说是需要打包工具的话(exd 打包工具);

//redux以及之后的action的生规则全部按照之前的饿写法来进行


export default class Nav extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>页面测试</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
