import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'; //redux中的stor的接入口
import store from './src/service/Store';
import Nav from './src/Nav';
//如果说是需要打包工具的话(exd 打包工具);

//redux以及之后的action的生规则全部按照之前的饿写法来进行


export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
      <Nav/>
    </Provider>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
