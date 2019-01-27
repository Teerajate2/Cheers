import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen'
import SummaryScreen from './SummaryScreen'

class MainScreen extends React.Component {
  
  

    render() {
      return (
      <View style={styles.main}>
        <View>
          <Text>Main!</Text>
        </View>
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
        tabBarVisible: true,
    },
    tabBarOptions: {
        activeTintColor: '#000000',
        inactiveTintColor: '#d1cece',
        tabStyle: {
            backgroundColor: '#C3971A'
        }
    }
  });
  
  export default createAppContainer(TabNavigator);




