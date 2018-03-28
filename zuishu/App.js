/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

  import React, { Component } from 'react';
  import {Provider } from 'react-redux';
  // import *as SimpleApp from './src/navigation';
  import store from './src/service/Store';
  import Dwn from './src/DrawerNavigator';
  import MainComponent from './src/Dwn';


  // import Dwnright from './src/DrawerNaRight'
  // import connectComponent from './src/connectComponent';
  // import * as SimpleApp from  './src/navigation';
  // const SSimpleApp = connectComponent(SimpleApp); //connectComponent() 映射state,store(store与props的合并)
  
  //现在是先把抽屉导航想搞定
  //这个导航的问题不是什么大问题,是很大的问题
  // const DDwn = connectComponent(Dwn);
  // Provider 将store传入到整个组件

  export default  class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <MainComponent/>
        </Provider>
      );
    }
  }
  
  
  
  