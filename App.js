import firebase from 'firebase';
import React from 'react';
import { createStackNavigator, createAppContainer} from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import {
  LoginScreen,
  RegisterScreen,
  EnterCodeScreen,
  HomeScreen,
  LiquorScreen
} from './screens/index';



const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  EnterCode: {screen: EnterCodeScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#C3971A',
      }
    }
    },
  Home: {screen: HomeScreen,
    navigationOptions: {
      title: "Welcome",
      headerStyle: {
        backgroundColor: '#C3971A'
      },
    },
  },
  Liquor: LiquorScreen  
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
