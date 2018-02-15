import { StackNavigator } from 'react-navigation';
import TestBasics from '../containers/demo';
import LanguageBasics from '../containers/language';
import PicBasics from '../containers/pic';
import refactorRouters from '../utils/refactorRouters';

const router = {
  Home: {
    screen: TestBasics,
  },
  Language: {
    screen: LanguageBasics,
  },
  Pic: {
    screen: PicBasics,
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

