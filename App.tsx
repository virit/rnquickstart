import React from 'react';
import {create} from 'dva-core';
import {Provider} from 'react-redux';
import {createStackNavigator} from "react-navigation-stack";
import router from "./config/router";
import {createAppContainer} from "react-navigation";
import {View} from "react-native";

const models = [];

const app = create();

models.forEach((o) => {
  app.model(o);
});

app.start();

const AppNavigator = createStackNavigator(router.routeConfigMap, router.stackConfig);

const store = app._store;

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}
