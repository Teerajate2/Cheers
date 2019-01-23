import firebase from 'firebase';
import React from 'react';
import { createStackNavigator, createAppContainer} from "react-navigation";

import {
  LoginScreen,
  RegisterScreen,
  EnterCodeScreen,
  HomeScreen,
} from './screens/index';



const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  EnterCode: EnterCodeScreen,
  Home: HomeScreen,
  
});

const AppContainer = createAppContainer(AppStackNavigator);


export default class App extends React.Component {
  
  componentDidMount(){
  
    const config = {
    apiKey: "AIzaSyDLi18-mLW4OdJNIIHZqs3z9uUMHvi_wgc",
    authDomain: "tabletableproject.firebaseapp.com",
    databaseURL: "https://tabletableproject.firebaseio.com",
    projectId: "tabletableproject",
    storageBucket: "tabletableproject.appspot.com",
    messagingSenderId: "52512492703"
  };
   firebase.initializeApp(config);
     

  
}
  render() {
    return (
    
      <AppContainer>
        <AppStackNavigator>
        </AppStackNavigator> 
      </AppContainer>
           
    );
  }
}
