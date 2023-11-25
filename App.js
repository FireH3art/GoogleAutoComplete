import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './src/screens/LoadingScreen';
import DashboardReducer from './src/stores/reducers/dashboard';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n/i18n';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
})

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <LoadingScreen />
      </Provider>
    </I18nextProvider>
  );
}
