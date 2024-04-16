import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, Pressable, StyleSheet, ImageBackground, TextInput, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import FastImage from 'react-native-fast-image';
export default function WelcomeScreen({ navigation }) {
    const navigations = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            // Navigate to the next screen after 7 seconds
            navigation.navigate('page1');
        }, 7000); // 7 seconds in milliseconds

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [navigations]);
    return (
            <View style={styles.Container}>

        <Image
         source={require('./assets/welcome.png')} style={styles.welcome}/>
                <Text style={styles.Registration}>Registration Successful</Text>
            <Image source={require('./assets/loading.png')} style={styles.loading} /> 
            <Text style={styles.Redirecting}>Redirecting in 7 seconds</Text>

            </View>
    
    );
}
const styles = StyleSheet.create({
   
    Container: {
       backgroundColor:"white",
       width:500,
       height:1000,

    },
welcome:{
    width:320,
    height:220,
    left:50,
    marginTop:150,
},
    Registration:{
        left:110,
        fontSize:20,
        bottom:10,
    },
    loading:{
        width:50,
        height:50,
        left:"38%",
        top:10,
    },
    Redirecting: {
        left: 120,
        fontSize: 18,
        top: 30,
        color:'#ccc'
    },
})
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Details"
                    component={DetailsScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="User" component={UsersScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen name="welcome" component={WelcomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="page1" component={MainScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
// Import necessary components from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Page1';

// Import your screen components



<View>
    <WelcomeScreen />
<MainScreen />
</View>