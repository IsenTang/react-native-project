import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';/* allows you to write action creators that return a function instead of an action */


import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';


const persistConfig = {
  key: 'ricepo',
  storage,
  whitelist: ['language'], /* white list only element in array will be persisted */
};

/* redux persist */
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(persistedReducer, /* preloadedState, */compose(applyMiddleware(thunk)));


const persistor = persistStore(store);

module.exports = {
  store,
  persistor,
};
