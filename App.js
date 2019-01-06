import React from 'react';

import { createStackNavigator,createAppContainer } from "react-navigation";
import Login from '/Users/teerajate2/Desktop/Cheers/components/Login.js';
import Register from '/Users/teerajate2/Desktop/Cheers/components/Register.js';

export default class App extends React.Component {

  render() {
    return (
       
       <AppContainer>
         <AppStackNavigator/>
       </AppContainer>
        


      
    );
  }
}
const AppStackNavigator = createStackNavigator({
  Login: Login,
  Register: Register
  
  
});
const AppContainer = createAppContainer(AppStackNavigator);

