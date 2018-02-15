import { StackNavigator } from 'react-navigation';

import LanguagePage from '../containers/LauguagePage/Language';

import refactorRouters from '../utils/refactorRouters';

const router = {
  Home: {
    screen: LanguagePage,
  },
};


export default StackNavigator(
  refactorRouters(router),
  {
    initialRouteName: 'Home',
    // mode: 'modal',
    headerMode: 'none',
    // transitionConfig：配置页面跳转的动画
    // onTransitionStart: 页面跳转动画即将开始的回调
    // onTransitionEnd: 页面跳转动画结束的回调
  },
);

