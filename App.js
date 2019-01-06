import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import {
  LoginScreen,
  RegisterScreen,
} from './screens/index';

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

const AppContainer = createAppContainer(AppStackNavigator);
export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <AppStackNavigator />
      </AppContainer>
    );
  }
}