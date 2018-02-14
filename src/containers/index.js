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
  },
);

