import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class EnterCodeScreen extends React.Component {

   
  state = {
        code: ''
      };
    
    
      render() {
        return (
    
          <View style={styles.login}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Enter Code</Text>
            </View>
    
            <View style={styles.codeRegister}>
              <TextInput
                value={this.state.code}
                placeholder="Please enter code"
                placeholderTextColor="#a2a2a0"
                onChangeText={str => this.setState({code : str})}
                style={styles.codeInput}
              />
              
              <TouchableOpacity
                style={styles.submitButton}
                onPress={()=> this.props.navigation.navigate('Home')}
              >
                <Text style={styles.buttonLabel}>Submit</Text>
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
    
      titleContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 0.5,
      },
    
      codeRegister: {
        flex: 1,
        justifyContent: "flex-start",
      },
    
    
      title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#C3971A'
      },
    
      codeInput: {
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
      }
    });
    
    



