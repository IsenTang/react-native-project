import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import StackNavigator from './src/containers/index';
import { store, persistor } from './src/store/store';


const App = () => (
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
    >
      <StackNavigator />
    </PersistGate>
  </Provider>
);
export default App;

