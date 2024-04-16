import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, Pressable, StyleSheet, ImageBackground, TextInput,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { header_text } from './Component/header_text';
import { RefreshControl } from 'react-native';
import { Video, ResizeMode } from 'expo-av';


export default function MainScreen({ navigation }) {
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
        <ImageBackground
            source={{ uri: "https://github.com/Asimi1234/images/assets/138695508/448ef890-2a27-4329-96c5-d40ea6652a03" }}
            style={styles.background}
        >
            <ScrollView style={styles.scrollview1} showsVerticalScrollIndicator={false}>
                <RefreshControl
                    refreshing={refreshing} // State variable for refreshing state
                    onRefresh={handleRefresh} // Function to call on refresh
                    colors={['white']} 
                />
                <View style={styles.Container}>
                    <View style={styles.header}>
                        <View style={styles.header_component1}>
                            <Image source={require('./assets/hamburger (1).png')} style={styles.hamburger} />
                            <Text style={styles.header_text}>Welcome!</Text>
                        </View>
                        <View style={styles.header_component2}>
                            <Image source={require('./assets/search (2).png')} style={styles.search} />
                            <Image source={require('./assets/active.png')} style={styles.notification} />
                        </View>
                    </View>
                    <View style={styles.text_container}>
                        {header_text.map((item) => (
                            <View key={item.id} style={styles.text_container2}>
                                <View key={item.id} style={styles.text1_container}>
                                    <Text style={styles.text1}>{item.text1}</Text>
                                </View>
                                <Text style={styles.text}>{item.text}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.header_image_container}>
                        <Image source={{ uri: "https://github.com/Asimi1234/images/assets/138695508/b996bd00-ef08-4a5b-bdba-01b2944b0956" }} style={styles.header_image} />
                    </View>
                    <View style={styles.video_container_text}>
                        <Text style={styles.Cardio}>Cardio</Text>
                        <Text style={styles.see_more}>See more</Text>
                    </View>
                    <View style={styles.video_container}>
                        <View style={styles.video_container1}>
                            {Videos.map((items) => (
                                <View key={items.ids}>
                                    <Video
                                        ref={video}
                                        style={styles.video}
                                        source={items.video1}
                                        useNativeControls
                                        resizeMode={ResizeMode.CONTAIN}
                                        isLooping
                                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                                    />
                                </View>
                            ))}
                        </View>
                        <View>
                        <View style={styles.video_container_text2}>
                            <Text style={styles.Cardio}>Recommendation</Text>
                            <Text style={styles.see_more}>See more</Text>
                        </View>
                        <View style={styles.video_container2}>
                            {Videos2.map((items1) => (
                                <View key={items1.ide}>
                                    <Video
                                        ref={video}
                                        style={styles.video}
                                        source={items1.video1}
                                        useNativeControls
                                        resizeMode={ResizeMode.CONTAIN}
                                        isLooping
                                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                                    />
                                </View>
                            ))}
                        </View>
                        </View>
                        <View>
         <View style={styles.video_container_text3}>
                            <Text style={styles.Cardio}>Featured Tips</Text>
                            <Text style={styles.see_more}>See more</Text>
                        </View>
                        <View style={styles.video_container3}>
                            {Videos3.map((items2) => (
                                <View key={items2.ides}>
                                    <Video
                                        ref={video}
                                        style={styles.video}
                                        source={items2.video1}
                                        useNativeControls
                                        resizeMode={ResizeMode.CONTAIN}
                                        isLooping
                                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                                    />
                                </View>
                            ))}
                        </View>
                        </View>
                        </View>
                </View>
            </ScrollView>
            <View style={styles.navigation}>
                <View style={styles.navigation_container1} >
                    <Image source={require('./assets/home.png')} style={styles.navigation_image1} />
                    <Text style={styles.navigation_text}>Home</Text>
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
        </ImageBackground>
    );
}
const styles = StyleSheet.create({

    Container: {
top:30,
paddingTop:60,
    },
    hamburger: {
        width: 25,
        height: 25,
     
    },
    video: {
        alignSelf: 'center',
        width: 115,
        height: 130,
        borderRadius:20,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.75,
    },
    header_text:{
        color:"darkgreen",
    
        fontSize:23,
    },
    search: {
        width: 25,
        height:25, 
    },
    notification: {
        width: 25,
        height: 25,
    },
    header:{
        flexDirection:"row",
        bottom:45,
        gap:40,
        justifyContent:"center"
    },
    header_component1: {
        flexDirection: "row",
        gap:10,
        right:70,
    },
    header_component2: {
        flexDirection: "row",
        gap: 10,
        left: 70,
    },
    text:{
        color:"white",
        fontWeight:"100",
       fontSize:18,
    },
    text1: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        paddingBottom:5
    },
    text_container:{
        flexDirection:"row",
        gap: 40,
        justifyContent:"center",
        bottom:30,
    },
     text_container2: {
        flexDirection: "row",    
    },
    text1_container: {
        borderBottomWidth: 5,
        borderColor: "green"
    },
    header_image:{
        width: 370, // Set the width of the image to your desired value
        height: 180, // Set the height of the image to your desired value
        borderRadius: 20,
    },
    header_image_container:{
        borderWidth:1.2,
        borderColor:"white",
        width:374,
        height:184,
        bottom:10,
        borderRadius:20,
        justifyContent:"center",
       left:1,
    },
    navigation_image1:{
        width:30,
        height: 30,
        justifyContent:"center",
        left:3,
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
      paddingTop:5,
        fontSize: 15,   
    },

    navigation: {
    flexDirection: "row",
   
        backgroundColor: "white",
        height:80,
        width:420,
        gap: 33,
        bottom:1,
        justifyContent:"center"
    },
    navigation_container1:{
        top:20,
    },
    video_container: {
        gap: 15,
        top:70,
    },
    video_container1:{
        gap:15,
        flexDirection:"row",
        bottom:45,
    },
    video_container2: {
        gap: 15,
        flexDirection: "row",
        bottom: 45,
    },
    video_container3: {
        gap: 15,
        flexDirection: "row",
        bottom: 45,
        paddingBottom: 70
    },
    Cardio:{
        color:'white',
        bottom:50,
        zIndex:1,
        fontSize:24,
        
    },
    video_container_text:{
        flexDirection:"row",
        gap:240,
        top:60
    },
    video_container_text2: {
        flexDirection: "row",
        gap: 130,
        bottom: 5,
        paddingTop:10
    },
    video_container_text3: {
        flexDirection: "row",
        gap: 165,
        bottom: 5,
        paddingTop: 10
    },
    see_more:{
        color: '#ffffff',
        bottom: 45,
        zIndex: 1,
        fontSize: 14,
    },
    scrollview1: {
        flexGrow: 1,
        paddingTop: -10,
        
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

// Import your screen components



<View>
    <WelcomeScreen />
    <MainScreen />
    <PlanScreen />
</View>