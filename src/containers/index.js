import { StackNavigator } from 'react-navigation';
import TestBasics from '../containers/test';
import LanguageBasics from '../containers/language';


export default StackNavigator(
  {
    Home: {
      screen: TestBasics,
    },
    Language: {
      screen: LanguageBasics,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

