import { StackNavigator } from 'react-navigation';
import TestBasics from '../containers/test';
import LanguageBasics from '../containers/language';
import PicBasics from '../containers/pic';

export default StackNavigator(
  {
    Home: {
      screen: TestBasics,
    },
    Language: {
      screen: LanguageBasics,
    },
    Pic: {
      screen: PicBasics,
    },
  },
  {
    initialRouteName: 'Home',
    // mode: 'modal',
    headerMode: 'none',
    // transitionConfig：配置页面跳转的动画
    // onTransitionStart: 页面跳转动画即将开始的回调
    // onTransitionEnd: 页面跳转动画结束的回调
  },
);

