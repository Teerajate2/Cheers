import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class RegisterScreen extends React.Component {
  
  
  
  
  onSignUpButtonPress=() =>{
    this.setState({error:'',loading:true})
    const {email, password} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password)
    

    .then(() => {
      alert("Sign up is succesful")
    })
    .catch(() =>{
      alert("Authentication failed")
    })
  }
  state = {
    username: '',
    password: '',
    email: '',
    phone: ''
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
            onChangeText={str => this.setState({username: str})}
            placeholder="Username"
            placeholderTextColor="#a2a2a0"
            style={styles.textInput}
          />
          <TextInput
            value={this.state.password}
            onChangeText={str => this.setState({password: str})}
            placeholder="password"
            placeholderTextColor="#a2a2a0"
            secureTextEntry={true}
            style={styles.textInput}
          />
          <TextInput
            value={this.state.email}
            onChangeText={str => this.setState({email: str})}
            placeholder="email"
            placeholderTextColor="#a2a2a0"
            style={styles.textInput}
          />
          <TextInput
            value={this.state.phone}
            onChangeText={str => this.setState({phone: str})}
            placeholder="phone"
            placeholderTextColor="#a2a2a0"
            style={styles.textInput}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.onSignUpButtonPress.bind(this)}
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
    backgroundColor: '#061843',
    justifyContent: "space-between",
    flexDirection: "column",
  },
  
  register: {
    flex: 4,
    justifyContent: "space-around",
  },

  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
  
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#C3971A'
  },
  
  submitButton: {
    backgroundColor: '#C3971A',
    borderRadius: 25,
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: 'center',
  },

  buttonLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },


  oauth: {
    flex: 2,
  },

  

  textInput: {
    borderColor: '#C3971A',
    borderWidth: 1,
    borderRadius: 25,
    margin: 15,
    height: 40,
    padding: 10,
    color: '#ffffff',

  },
}); 

