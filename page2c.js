import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, Pressable, StyleSheet, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RefreshControl } from 'react-native';
import { Video, ResizeMode } from 'expo-av';



export default function Planner4Screen({ navigation }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        setRefreshing(true); // Set refreshing state to true to show loading indicator
        // Your data fetching logic here (e.g., using fetch or an HTTP library)
        // ...
        setRefreshing(false); // Reset refreshing state after data is fetched
    };
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollview1} showsVerticalScrollIndicator={false}>
                <RefreshControl
                    refreshing={refreshing} // State variable for refreshing state
                    onRefresh={handleRefresh} // Function to call on refresh
                />
                <View >
                    <Pressable onPress={() => navigation.navigate('planner3')}>
                        <Image source={require('./assets/back (1).png')} style={styles.back} />
                    </Pressable>
                </View>
                <View style={styles.main_container}>
                    <View style={styles.image_container}>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={require('./Component/assets2/Squat1.mp4')}
                            useNativeControls
                            resizeMode={ResizeMode.CONTAIN}
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                    </View>
                    <View style={styles.description_container}>
                        <View style={styles.description_text1} >
                            <Text style={styles.text1}>
                                Squat Jump
                            </Text>
                            <Text style={styles.text}>
                                Exercise 1 out of 7
                            </Text>
                        </View>
                       
                        <View style={styles.description_text5} >
                            <Image source={require('./Component/assets2/dumbell.png')} style={styles.profile} />
                            <View style={styles.text_desc_cont}>
                                <Text style={styles.text7}>
                                    Set 1
                                </Text>
                                <Text style={styles.text8}>
                                    12 Reps
                                </Text>
                            </View>
                        </View>
                        <View style={styles.description_text5} >
                            <Image source={require('./Component/assets2/dumbell.png')} style={styles.profile} />
                            <View style={styles.text_desc_cont}>
                                <Text style={styles.text7}>
                                    Set 2
                                </Text>
                                <Text style={styles.text8}>
                                    12 Reps
                                </Text>
                            </View>
                        </View>
                    <View style={styles.alarm_tick_cont}>
                        <View style={styles.alarm_cont}>
                            <Image source={require('./assets/alarm-clock.png')} style={styles.alarm} />  
                            <Text style={styles.alarm_text}>
                            00:12
                            </Text>
                         </View>
                            <View style={styles.tick_cont}>
                                <Image source={require('./assets/check.png')} style={styles.tick} />
                                <Text style={styles.tick_text}>
                                    Done
                                </Text>
                            </View>
                    </View>
                    </View>
                </View>

            </ScrollView>
         
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        top: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",

    },
    video: {
        alignSelf: 'center',
        width: 365,
        height: 400,
        borderRadius: 9,
    },
    back: {
        width: 30,
        height: 30,
        marginRight: 340,
        top: 40,
    },
    image_container: {

        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        borderColor: "#01b017"
    },
    description_text1: {
        flexDirection: "row",
        gap: 130,
        left:5
    },
    description_container: {
        top: 20,
        left: 10,
        gap: 5,
    },
    text1: {
        fontSize: 20,
        fontWeight: "200",
    },
    text2: {
        fontSize: 26,
        fontWeight: "700",
    },

    text7: {
        fontSize: 19,
        fontWeight: "400",
        left: 25,
    },
    text8: {
        fontSize: 17,
        fontWeight: "200",
        left: 25,

    },
    description_text5: {
        borderRadius: 10,
        height: 60,
        width: 340,
        backgroundColor: "#aab8a9",
        left:5,
        flexDirection: "row",
        top: 10,
    },
    profile: {
        width: 42,
        height: 42,
        borderRadius: 30,
        top: 10,
        left: 15,
    },
    main_container: {
        borderWidth: 1,
        height: 770,
        backgroundColor: "#DFE2DF",
        top: 60,
        borderColor: "#01b017",
        borderRadius: 10,

    },

    scrollview1: {
        height: 800,
    },
    text_desc_cont:{
        flexDirection:"row",
        top:20,
        gap:150
    },
    alarm: {
        width: 20,
        height: 20, 
    },
    tick: {
        width: 25,
        height: 25,
    },
    alarm_cont:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        top:5,
        left:20
    },
    alarm_tick_cont: {
        flexDirection: "row",
        gap:65,
        backgroundColor:"#01b017",
        borderRadius:10,
        width:300,
        left:20,
        height:50,
        top:30,
        
    },
    tick_cont: {
        flexDirection: "row",
        top: 10,
        backgroundColor: "#045300",
        height: 35,
        width:150,
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"center",
        gap:10
    },
    tick_text:{
        fontSize:18,
        color:"white"
    },
    alarm_text: {
        fontSize: 18,
        color: "white"
    },
 
})
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
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
                <Stack.Screen name="planner3" component={Planner3Screen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="planner4" component={Planner4Screen}
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
import WelcomeScreen from './welcome';
import { Videos } from './Component/Video';
import { Videos2 } from './Component/Video2';
import { Videos3 } from './Component/Video3';
import PlanScreen from './Page2';
import FastImage from 'react-native-fast-image';
import MainScreen from './Page1';
import { header_text } from './Component/header_text';
import { page2_text } from './Component/page2a_text';
import { Exercise } from './Component/Exercise';
import Planner2Screen from './page2a';
import Planner3Screen from './page2b';

// Import your screen components



<View>
    <WelcomeScreen />
    <MainScreen />
    <PlanScreen />
</View>
