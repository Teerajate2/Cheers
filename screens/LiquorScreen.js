import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button,FlatList } from 'react-native';

  
  export default class LiquorScreen extends React.Component {
    render() {
      return (
        <View>
          <View>
              
          </View>
          <FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />
        </View>
      );
    }
  }