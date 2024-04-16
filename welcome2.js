import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, Pressable, StyleSheet, ImageBackground, TextInput, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Welcome2Screen({ navigation }) {
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
            <View style={styles.welcome_container}>
            <Image source={require('./assets/welcome2.png')} style={styles.welcome} />
            <Text style={styles.Registration}>Login Successful</Text>
            <Image source={require('./assets/loading.png')} style={styles.loading} />
            <Text style={styles.Redirecting}>Redirecting in 7 seconds</Text>
</View>
        </View>

    );
}
const styles = StyleSheet.create({

    Container: {
        backgroundColor: "white",
        width: 500,
        height: 1000,
 
    },
    welcome: {
        width: 320,
        height: 220,
        left: 50,
       bottom:40
    },
    welcome_container:{
top: 180,
justifyContent:"center"
    },
    Registration: {
        right: 30,
        fontSize: 30,
        bottom: 10,
        textAlign:"center",
        fontWeight:"300"
    },
    loading: {
        width: 50,
        height: 50,
        left: "38%",
        top: 10,
    },
    Redirecting: {
        left: 120,
        fontSize: 18,
        top: 30,
        color: '#ccc'
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

                <Stack.Screen name="welcome" component={Welcome2Screen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="page1" component={Main2Screen}
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
import Main2Screen from './Page1';

// Import your screen components



<View>
    <Welcome2Screen />
    <Main2Screen />
</View>