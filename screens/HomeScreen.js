import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
class HomeScreen extends React.Component {
    
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      );
    }
  }
  
  class SummaryScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Summary!</Text>
        </View>
      );
    }
  }
  
  const TabNavigator = createBottomTabNavigator({
    Home: {screen: HomeScreen,
    navigationOptions: {
       tabBarLabel: 'Home',
       tabBarIcon: ({tintColor})=> (
           <Icon name = "ios-home"  color= {tintColor} size = {24}/>
       )
     }
    },
    Summary: {screen: SummaryScreen,
    navigationOptions: {
        tabBarLabel: 'Summary',
        tabBarIcon: ({tintColor})=> (
            <Icon name = "ios-wallet" color= {tintColor} size = {24}/>
        ),
     }
    },
    },{
    initialRouteName: 'Home',
    order: ['Home','Summary'],
    navigationOptions:{
        tabBarVisible: true
    },
    tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: '#000000',
        tabStyle: {
            backgroundColor: '#C3971A'
        }
    }
  });
  
  export default createAppContainer(TabNavigator);




