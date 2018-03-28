// //这里其实 就是要从新定义每个导航的action
//我是可以不使用这个导航的,其实

import { AppWithNavigationState} from '../navigation'
import { NavigationActions } from 'react-navigation';


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppWithNavigationState.router.getActionForPathAndParams('Home');
const tempNavState = AppWithNavigationState .router.getStateForAction(firstAction);
const secondAction = AppWithNavigationState .router.getActionForPathAndParams('Chat');
// const initialNavState = AppWithNavigationState .router.getStateForAction(
//   secondAction,
//   tempNavState
// );



//这个redux其实你是可以当做是用来添加登录模块时,你要额外的导航问题

const navReducer = (state, action) => {
   //它在这里进行的导航的操作,我们可以不再这里进行,因为导航的操作是本是就可以存在的
  let nextState;
  // console.log('action',action,state)
  switch (action.type) {  //数据的获取方式引导在这里进行(也即是说在进入页面的顶层是可以在这里进行数据的传递)
    case 'Login':
      nextState =AppWithNavigationState .router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppWithNavigationState .router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case 'User':
      nextState = AppWithNavigationState .router.getStateForAction(
        NavigationActions.navigate({ routeName: 'User' }),
        state
      )
      break;
    default:
      nextState = AppWithNavigationState .router.getStateForAction(action, state);
      break;
  }


  // switch(action.routeName){
  //   //我们可以不做导航的控制,可以添加数据吗? (其实最大的问题是怎么把数据全部裹到对应的导航条里面去) 
  //   case 'MyTab':
  //     console.log('zs');
  //   break;
  // case 'Detail':
  //   console.log('shu');
  //   break;
  // }

  return nextState || state;
}

export default navReducer;



