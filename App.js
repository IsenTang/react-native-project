import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import StackNavigator from './src/containers/index';
import { store, persistor } from './src/store/store';
import I18n from './src/config/i18n';


const onBeforeLift = () => {
  const { language } = store.getState().language;
  I18n.locale = language;
};

const App = () => (
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      onBeforeLift={onBeforeLift}
    >
      <StackNavigator />
    </PersistGate>
  </Provider>
);
export default App;

