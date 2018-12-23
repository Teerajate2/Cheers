import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  state = {
    placename: ''
  };
  placeNameChangedHandler = val => {
    this.setState({
      username: '',
      password: '',
      phone: '',
      email: ''
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

  phoneChangeHandler = val => {
    this.setState({
      phone: val
    })
  };

  emailChangeHandler = val => {
    this.setState({
      email: val
    })
  };

  render() {
    return (

      <View style={styles.login}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Register</Text>
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
            onChangeText={this.passwordChangeHandler}
            style={styles.textInput}
          />
          <TextInput
            value={this.state.email}
            placeholder="email"
            placeholderTextColor="#a2a2a0"
            onChangeText={this.emailChangeHandler}
            style={styles.textInput}
          />
          <TextInput
            value={this.state.phone}
            placeholder="phone"
            placeholderTextColor="#a2a2a0"
            onChangeText={this.phoneChangeHandler}
            style={styles.textInput}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.onPress}
          >
            <Text style={styles.buttonLabel}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.oauth}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.onPress}
          >
            <Text style={styles.buttonLabel}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.onPress}
          >
            <Text style={styles.buttonLabel}>Google</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    paddingTop: 40,
    padding: 20,
    backgroundColor: '#3c3a3a',
    justifyContent: "space-between",
    flexDirection: "column",
  },

  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },

  register: {
    flex: 4,
    justifyContent: "space-between",
  },

  oauth: {
    flex: 2,
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
