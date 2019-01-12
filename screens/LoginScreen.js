import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    header: null
  };
  
  onLoginButtonPress=() =>{
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{ alert("Login is successful"); })
        .catch(()=>{ alert('Email or password is not correct');});
    
}

  
state = { email:'' , password:''};
 
   
   render() {
    
    return (

      <View style={styles.login}>
        <View style={styles.titleContainer}>
          <Image style={{width: 380,height: 380}}
          source= {require('../assets/tlogo.png')}/>
        </View>

        <View style={styles.register}>
          <TextInput
            value={this.state.email}
            onChangeText={str => this.setState({email : str})}
            placeholder="Username or Email"
            placeholderTextColor="#a2a2a0"
            style={styles.textInput}
          />
          <TextInput
            value={this.state.password}
            onChangeText={str => this.setState({password : str})}
            placeholder="Password"
            placeholderTextColor="#a2a2a0"
            secureTextEntry={true}
            style={styles.textInput}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.onLoginButtonPress.bind(this)}
          >
            <Text style={styles.buttonLabel}>Log in</Text>
          </TouchableOpacity>

        </View>
          
          <View style={styles.signUpContainer}>
          <Text style={styles.signUpTitle}> Already have an account?</Text>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.signUpButton}>Sign up</Text>
         
          </TouchableOpacity>

        </View>
        
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {

    flex: 1,
    backgroundColor: '#061843',
    justifyContent: "flex-start",
    flexDirection: "column",
  },

  titleContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    
  },

  register: {
    flex: 4,
    justifyContent: "flex-start",
    flexDirection: 'column'
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
  
  signUpContainer: {
     flex: 1,
     flexDirection: "row",
     justifyContent: 'center',
     alignItems: 'flex-start'

  },
  signUpTitle:{
     fontSize: 16,
     color: '#C3971A'
  },
  signUpButton:{
     fontSize: 16,
     color: '#ffffff'
  }

});
