import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, Pressable, StyleSheet, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RefreshControl } from 'react-native';
import { Video, ResizeMode } from 'expo-av';




export default function Planner3Screen({ navigation }) {
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
                        <Pressable onPress={() => navigation.navigate('planner2')}>
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
                        Squats
                    </Text>
                    <Image source={require('./Component/assets2/bookmark (2).png')} style={styles.bookmark}/>
                </View>
                <Text style={styles.text2}>
                    Begineer Hit Workout
                </Text>
                <View style={styles.description_text3} >
                    <Text style={styles.text3}>
                    5 moves
                    </Text>
                            <Text style={styles.text3}>
                            2weeks
                            </Text>
                        
                                <Text style={styles.text3}>
                                    10minutes
                                    </Text>
                                <Text style={styles.text4}>
                                        No Equipment
                                    </Text>
              
                </View>

                        <View style={styles.description_cont} >
                            <View style={styles.description_text4} >
                                <Text style={styles.text5}>
                                    Weight Loss
                                </Text>
                                <Text style={styles.text6}>
                                    300 KCal
                                </Text>     
                            </View>
                        <View style={styles.description_text4} >
                            <Text style={styles.text5}>
                            Total Squats
                            </Text>
                            <Text style={styles.text6}>
                            15
                            </Text>
                        </View>
                        </View>
                        <View style={styles.description_text5} >
                        <Image source={require('./assets/IMG.jpeg')} style={styles.profile} />
                    <View>
                        <Text style={styles.text7}>
                             Israel Asimi
                        </Text>
                                <Text style={styles.text8}>
                                    174lbs/80kg
                                </Text>
                    </View>
                    </View>    
                </View>
        </View>
        
            </ScrollView>
            <View style={styles.last_container}>
                <ScrollView style={styles.scrollview2}>
                <View style={styles.last_text_container}>
                <Text style={styles.last_container_text1}>Description Plan</Text>
                <Text style={styles.last_container_text2}>
                    Squats involve the original downward motion of sitting back and down with the feet firmly planted on the ground.
                     The movement then reverses as the lifter stands back up to the starting position. 
                    When performing squats, correct form is important to avoid injury and ensure maximum benefits from the exercise.
                </Text>
                <Text style={styles.last_container_text3}>
                    Exercises
                </Text>
                <View style={styles.last_text_container2}>
                    <Text style={styles.last_container_text4}> Hide Plan</Text>
                    <View style={styles.last_text5_cont}>
                                <Pressable onPress={() => navigation.navigate('planner4')}>
                        <Image source={require('./assets/play-buttton.png')} style={styles.play}/>
                        <Text style={styles.last_container_text5}> Start workout</Text>
                        </Pressable>
                    </View>
                </View>
                </View>
                
               </ScrollView> 
            </View>    
        </View>
       
    );
}
const styles = StyleSheet.create({
    container: {
        top: 10,
        alignItems: "center",
        justifyContent: "center",
   backgroundColor:"#ffffff",
 
    },
    video: {
        alignSelf: 'center',
        width: 365,
        height: 280,
        borderRadius: 9,
    },
    back: {
        width: 30,
        height: 30,
        marginRight: 340,
        top:40,
    },
    image_container:{
       
        borderWidth:1,
        borderRadius:10,
        justifyContent:"center",
        borderColor:"#01b017"
    },
    image: {
    width:370,
    height:270,
        borderRadius: 8,
    },
    bookmark: {
        width: 25,
        height: 30,
        
    },
    description_text1:{
        flexDirection:"row",
        gap:260,
    },
    description_container:{
        top:20,
        left:10,
        gap:5,
    },
    text1:{
        fontSize:25,
        fontWeight:"200",
    },
    text2: {
        fontSize: 26,
        fontWeight: "700",
    },
    text3: {
        fontSize: 17,
        fontWeight: "200",
    },
    text4: {
        fontSize: 17,
        fontWeight: "200",
        left:46,
        color:"#6f716f"
    },
    text5: {
        fontSize: 16,
        fontWeight: "200",
        left:15,
        color:"#484e48"
    },
    text6: {
        fontSize: 20,
        fontWeight: "300",
        left: 15,
    },
    text7: {
        fontSize: 19,
        fontWeight: "400",
        left: 25,
        top:10,
        color:"#045300"
    },
    text8: {
        fontSize: 16,
        fontWeight: "200",
        left: 25,
        top: 15,
    },
    description_text3:{
        flexDirection:"row",
        gap:10,
    },
    description_cont:{
        flexDirection:"row",
        gap:13,
        top:5,
    },
    description_text4:{
      
        borderRadius:10,
        height:50,
        width:170,
        backgroundColor: "#aab8a9",
        justifyContent:"center",
        
    },
    description_text5:{
        borderRadius: 10,
        height: 60,
        width: 353,
        backgroundColor: "#aab8a9",
       
        flexDirection:"row",
        top:10,
    },
    profile:{
        width:42,
        height:42,
        borderRadius:30,
        top:10,
        left:15,
    },
    main_container:{
        borderWidth:1,
        height:680,
        backgroundColor:"#DFE2DF",
        top:60,
        borderColor: "#01b017",
        borderRadius:10,

    },

    scrollview1: {
      height:700,
    },
    last_container:{
 backgroundColor:'#d2fdd0',
 bottom:93,
 width:410,
 
 borderTopLeftRadius:40,
        borderTopRightRadius: 40,
        justifyContent:"center",
        
    },
    last_text_container:{
        top:20,
        left:30,
        gap:6
  },
   last_container_text1: {
        fontSize:20
    },
    last_container_text2:{
        flexWrap:"wrap",
        width:347,
    },
    last_container_text3: {
        fontSize: 20
    },
    scrollview2:{
        height: 280,
    },
    last_text5_cont:{
        backgroundColor:"#045300",
        width:150,
        height:35,
        justifyContent:"center",
        borderRadius:10,
        top:15,
    },
    last_text_container2:{
        flexDirection:"row",
        gap:105,
        backgroundColor:"#01b017",
        height: 60,
        width: 353,
        borderRadius: 10,
        top:5
    },
    last_container_text4:{
        fontSize:18,
        color:"white",
        top:22,
        left:30,
        fontWeight:"400"
    },
    last_container_text5:{
        color:"white",
        left:40,
        fontSize: 16,
        fontWeight: "200",
        bottom:6
    },
    play:{
        width:15,
        height:15,
        top:10,
        left:20
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
import Planner4Screen from './page2c';

// Import your screen components



<View>
    <WelcomeScreen />
    <MainScreen />
    <PlanScreen />
</View>
