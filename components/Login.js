import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component {
  
  static navigationOptions = {
    header: null
  };
  
  state = {
    placename: ''
  };
  placeNameChangedHandler = () => {
    this.setState({
      username: '',
      password: '',
    });
  };

  usernameChangeHandler = val => {
    this.setState({
      username: val
    })
  };

  passwordChangeHandler = val => {
    this.setState({
      password: val
    })
  };

  

  render() {
  
    return (

      <View style={styles.login}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>TABLE TABLE</Text>
        </View>
        
        <View style={styles.register}>
          <TextInput
            value={this.state.username}
            placeholder="Username"
            placeholderTextColor="#a2a2a0"
            onChangeText={this.usernameChangeHandler}
            style={styles.textInput}
          />
          <TextInput
            value={this.state.password}
            placeholder="password"
            placeholderTextColor="#a2a2a0"
            secureTextEntry={true}
            style={styles.textInput}
          />
          
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.props.navigation.navigate('Register')}
          >
            <Text style={styles.buttonLabel}>Log in</Text>
          </TouchableOpacity>
         
        </View>
        <View style={styles.oauth}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.onPress}
          >
            <Text style={styles.buttonLabel}>Log in with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.onPress}
          >
            <Text style={styles.buttonLabel}>Sign up with G-mail</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
   
    flex: 1,
    backgroundColor: '#3c3a3a',
    justifyContent: "flex-start",
    flexDirection: "column",
  },

  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
  },

  register: {
    flex: 4,
    justifyContent: "flex-start",
    flexDirection: 'column'
  },

  oauth: {
   flex: 4,
   marginVertical: 50
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#f5c031'
  },

  textInput: {
    borderColor: '#f5c031',
    borderWidth: 1,
    borderRadius: 25,
    margin: 15,
    height: 40,
    padding: 10,
    color: '#ffffff',
    
  },

  submitButton: {
    backgroundColor: '#f5c031',
    borderRadius: 25,
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: 'center',
  },

  buttonLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  }
});
