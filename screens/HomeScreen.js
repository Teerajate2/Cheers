import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, Image, ImageBackground } from 'react-native';



export default class HomeScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1}}>

                    <View style={styles.location}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', justifyContent: 'center', color: '#C3971A' }}>Menu</Text>
                    </View>
                
                <View style={styles.menu}>
                    <View>
                        <TouchableOpacity 
                           style={styles.list} 
                           onPress={()=> this.props.navigation.navigate('Liquor')}
                        >
                            <Image
                                style={styles.catButton}
                                source={require('../assets/liquor.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>


                    <View>
                        <TouchableOpacity style={styles.list}>
                            <Image
                                style={styles.catButton}
                                source={require('../assets/beverage.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.list}>
                            <Image
                                style={styles.catButton}
                                source={require('../assets/food.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    location: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    
    menu:{
        justifyContent: 'space-between'
    },
    
    list:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        flexDirection:'column'

    },
    
    catButton: {
        
        width: 420,
        height: 190,
        
    },


}
)