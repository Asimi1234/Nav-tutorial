import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, Pressable, StyleSheet, ImageBackground, TextInput, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './welcome';


export default function PlanScreen({ navigation }) {
  
    return (
        <View style={styles.Container}>
         
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('page1')}>
                <Image source={require('./assets/back (1).png')} style={styles.back}/>
                </Pressable>
                <Text style={styles.header_text}>Planner</Text>
                <Image source={require('./assets/active (1).png')} style={styles.active} />
            </View>
            <Image
                source={require('./assets/schedule2.png')} style={styles.welcome} />
            <Text style={styles.selection1}>Choose plan</Text>
            <Text style={styles.selection}>Help us create your personal plan that best suits you today</Text>
            <View style={styles.schedule}>
                <Pressable onPress={() => navigation.navigate('planner2')}>
                <Text style={styles.schedule_text}>Schedule for later</Text>
                </Pressable>
            </View>


       <View style={styles.navigation}>
                <View style={styles.navigation_container1} >
                    <Pressable onPress={() => navigation.navigate('page1')}>
                    <Image source={require('./assets/home.png')} style={styles.navigation_image1} />
                    <Text style={styles.navigation_text}>Home</Text>
                    </Pressable> 
                </View>
                <View style={styles.navigation_container1} >
                    <Image source={require('./Component/assets2/tracking.png')} style={styles.navigation_image2} />
                    <Text style={styles.navigation_text}>Activity</Text>
                </View>
                <View style={styles.navigation_container1} >
                    <Pressable onPress={() => navigation.navigate('planner')}>
                    <Image source={require('./Component/assets2/diary.png')} style={styles.navigation_image3} />
                    <Text style={styles.navigation_text}>Planner</Text>
                    </Pressable> 
                </View>
                <View style={styles.navigation_container1} >
                   
                    <Image source={require('./Component/assets2/progress.png')} style={styles.navigation_image4} />
                   
                    <Text style={styles.navigation_text}>Progress</Text>
                    
                </View>
                <View style={styles.navigation_container1} >
                    <Image source={require('./Component/assets2/settings.png')} style={styles.navigation_image5} />
                    <Text style={styles.navigation_text}>Settings</Text>
                </View>
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
    header:{
        flexDirection:"row",
        top:50,
        gap:115,
        marginLeft:25,
    },
    welcome: {
        width: 320,
        height: 220,
        left: 50,
        marginTop: 120,
    },
   selection: {
       
        fontSize: 18,
        top: 35,
        textAlign:"center",
        flexWrap:"wrap",
        width:380,
        fontWeight:"300",
        left:20,
    },
    selection1: {

        fontSize: 25,
        top: 20,
        textAlign: "center",
        flexWrap: "wrap",
        width: 380,
        fontWeight: "bold",
        left: 20,
        color:"#01b017"
    },
   
    Redirecting: {
        left: 120,
        fontSize: 18,
        top: 30,
        color: '#ccc'
    },
    schedule_text:{
        textAlign:"center",
      fontSize:20,
      color:"white"
    },
    schedule:{
        backgroundColor:"#045300",
    width:350,
    height:50,
    top:80,
    justifyContent:"center",
    marginLeft:35,
    borderRadius:10
    },
    navigation_image1: {
        width: 30,
        height: 30,
        justifyContent: "center",
        left: 3,
    },
    navigation_image2: {
        width: 30,
        height: 30,
        justifyContent: "center",
        left: 8,
    },
    navigation_image3: {
        width: 30,
        height: 30,
        justifyContent: "center",
        left: 10,
    },
    navigation_image4: {
        width: 30,
        height: 30,
        justifyContent: "center",
        left: 12,
    },
    navigation_image5: {
        width: 30,
        height: 30,
        justifyContent: "center",
        left: 8,
    },
    navigation_text: {
        paddingTop: 5,
        fontSize: 15,
    },

    navigation: {
        flexDirection: "row",

        backgroundColor: "#d2fdd0",
        height: 80,
        width: 420,
        gap: 33,
        top: 172,
        justifyContent: "center"
    },
    navigation_container1: {
        top: 20,
    },
    back:{
        width:30,
        height:30,
    },
    active: {
        width: 30,
        height: 30,
    },
    header_text:{
        fontSize:25,
        color:"#236820"
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
                <Stack.Screen name="planner" component={PlanScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="planner2" component={Planner2Screen}
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
import planner2Screen from './page2a';
import Planner2Screen from './page2a';

// Import your screen components



<View>
    <WelcomeScreen />
    <MainScreen />
    <PlanScreen />
    <Planner2Screen />
</View>