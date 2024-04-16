import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, Pressable, StyleSheet, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RefreshControl } from 'react-native';




export default function Planner2Screen({ navigation }) {
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        setRefreshing(true); // Set refreshing state to true to show loading indicator
        // Your data fetching logic here (e.g., using fetch or an HTTP library)
        // ...
        setRefreshing(false); // Reset refreshing state after data is fetched
    };
    return (
    <><View>
            <ScrollView style={styles.scrollview1} showsVerticalScrollIndicator={false}>
                <RefreshControl
                    refreshing={refreshing} // State variable for refreshing state
                    onRefresh={handleRefresh} // Function to call on refresh
                />
               <View style={styles.container}>
               
                <View>
                <Pressable onPress={() => navigation.navigate('planner')}>
                    <Image source={require('./assets/back (1).png')} style={styles.back} />
                </Pressable> 
                </View>

                <View style={styles.textinput_container}>
                    <Image source={require('./assets/search (3).png')}style={styles.search} />
            <TextInput placeholder="search" style={styles.textinput} />
                </View>
        <View style={styles.header_text}>
            <Text style={styles.plans}>Trending Plans</Text>
                        <View style={styles.show_all_container}>
                <Text style={styles.show_all}>Show All</Text>
                        </View>
        </View>
        <View style={styles.main_container}>
    <View style={styles.container2}>
         <ScrollView horizontal={true}
          contentContainerStyle={styles.scrollViewContent} 
          showsHorizontalScrollIndicator={false} >
            
            <View style={styles.page2_text_container1}>
             <Text style={styles.page2_text}>All</Text>
            </View>
                            {page2_text.map((item3) => (
                                <View key={item3.id} style={styles.page2_text_container2}>
                                  
                                    <View> 
                                    <Text style={styles.page2_text} >{item3.text} </Text>
                                    </View>
                                </View>
                            ))}
                            

         </ScrollView>
         </View>
                        <View style={styles.exercise_container}>
                          
                            {Exercise.map((item4) => (
                                
                                <View key={item4.ids} style={styles.exercise_container2}>
                                    <Image source={item4.image} style={styles.exercise_image} />
                                    
                                 
                               <View style={styles.img_container_text}>
                                        <View style={styles.img_container_sub_text}>
                                
                                <Text style={styles.img_container_sub_text1}>
                                    {item4.text1}
                                    </Text>
                                        <Text style={styles.img_container_sub_text2}>
                                            {item4.text2}
                                            </Text>
                              <View style={styles.bookmark_img_cont}>               
                            <View style={styles.img_container2_text}>
                                    <View>
                                     <Text style={styles.img_container_sub_text3}>
                                                {item4.text3}
                                    </Text >
                                    </View>
                                         <Text style={styles.img_container_sub_text3}>
                                                {item4.text4}
                                         </Text>
                                        
                                         <Text style={styles.img_container_sub_text3}>
                                                {item4.text5}
                                        </Text>
                                        </View>
                                            <View>
                                                <Image source={item4.image2} style={styles.bookmark} />
                                            </View>

                                    </View>
                                </View>
                                    </View>
                            </View>
                            ))}
                            <View style={styles.text1a_cont}>
                                <View style={styles.img_container_sub_text1a_cont}>
                                    <Pressable onPress={() => navigation.navigate('planner3')}>
                                    <Text style={styles.img_container_sub_text1a}>
                                        View
                                    </Text>
                                    </Pressable>
                                </View>
                                <View style={styles.img_container_sub_text1a_cont2}>
                                    <Text style={styles.img_container_sub_text1a}>
                                        View
                                    </Text>
                                </View>
                                <View style={styles.img_container_sub_text1a_cont3}>
                                    <Text style={styles.img_container_sub_text1a}>
                                        View
                                    </Text>
                                </View>
                                <View style={styles.img_container_sub_text1a_cont4}>
                                    <Text style={styles.img_container_sub_text1a} >
                                        View
                                    </Text>
                                </View>
                            </View>
                        </View>
    </View>
               




            </View>
            </ScrollView>
        </View><View style={styles.navigation}>
                <View style={styles.navigation_container1}>
                    <Pressable onPress={() => navigation.navigate('page1')}>
                    <Image source={require('./assets/home.png')} style={styles.navigation_image1} />
                    <Text style={styles.navigation_text}>Home</Text>
                    </Pressable>
                </View>
                <View style={styles.navigation_container1}>
                    <Image source={require('./Component/assets2/tracking.png')} style={styles.navigation_image2} />
                    <Text style={styles.navigation_text}>Activity</Text>
                </View>
                <View style={styles.navigation_container1}>
                    <Pressable onPress={() => navigation.navigate('planner')}>
                        <Image source={require('./Component/assets2/diary.png')} style={styles.navigation_image3} />
                        <Text style={styles.navigation_text}>Planner</Text>
                    </Pressable>
                </View>
                <View style={styles.navigation_container1}>

                    <Image source={require('./Component/assets2/progress.png')} style={styles.navigation_image4} />

                    <Text style={styles.navigation_text}>Progress</Text>

                </View>
                <View style={styles.navigation_container1}>
                    <Image source={require('./Component/assets2/settings.png')} style={styles.navigation_image5} />
                    <Text style={styles.navigation_text}>Settings</Text>
                </View>

            </View></>
    );
}
const styles = StyleSheet.create({
    container:{
        top:50,
        gap:20,
        alignItems:"center",
        justifyContent:"center"
    },
    back: {
        width: 30,
        height: 30,
        marginRight:340
    },
    dumbell:{
        width:50,
        height:50,
    
    },
    textinput:{
        fontSize: 17,
        left: 10
    },
    textinput_container: {
        borderWidth: 1,
        borderColor: "#ccc",
        height: 45,
      width: 370,
        borderRadius: 8,
        fontSize: 17,
        flexDirection:"row",
        gap:8
    },
    search:{
        width:20,
        height:20,
        top:12,
        left:10
    },
    header_text:{
        flexDirection:"row",
        gap:163,
    },
    show_all_container:{
       backgroundColor:"#045300",
       width:80,
       height:27,
       justifyContent:"center",
       borderRadius:5,
       
    },
    show_all:{
         fontSize: 15,
         color:"white" ,
         textAlign:"center",
         fontWeight:"bold"
    },
    plans:{
        fontSize:20,
        fontWeight:"500"
    },
    main_container:{
         backgroundColor:"#E6E6E6",
        borderTopLeftRadius:40,
        borderTopRightRadius: 40
    },
    container2:{
      
    width:410,
    height:180,
    },
    
    page2_text_container1:{
        borderWidth: 1,
        borderRadius: 15,
        width: "15%",
        height: 45,
        borderColor: "#ccc",
        right: 10,
        backgroundColor:"#01b017",
        justifyContent:"center",
      
    },
    page2_text_container2: {
        borderWidth: 1,
        borderRadius: 15,
        width: "32%",
        height: 45,
        borderColor: "#ccc",
        right: 10,
        backgroundColor: "#D2FDD0",
        justifyContent: "center",

    },
    page2_text: {
        fontSize: 18,
        textAlign: "center",
    },
    exercise_image:{ 
    width:"100%",
     height:250,
borderRadius: 8,
    },
    exercise_container:{
        gap:20,
        bottom:120,
    },
    exercise_container2: {
     left:25,
        
        borderWidth: 2,
        width: "88%",
        borderColor:"#01b017",
        borderRadius:10,
        height:290,
        top:70
    },
    img_container_text:{
        backgroundColor:"#D2FDD0",
        bottom:66,
        height:102,
        borderBottomRightRadius:10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    img_container2_text:{
    flexDirection:"row",
    gap:20
    },
    img_container_sub_text: {
       gap:5,
       top:12,
       left:15,
    },
    img_container_sub_text1: {
        fontSize:20,
        fontWeight:"300",
    },
    img_container_sub_text2: {
        fontSize:25,
        fontWeight:"600",
    },
    img_container_sub_text3:{
        fontSize:18,
        fontWeight:"300",       
    },
    img_container_sub_text1_cont:{
        flexDirection:"row",
      
    },
    img_container_sub_text1a_cont:{
backgroundColor:"#25232B",
        width:65,
        justifyContent:"center",
       height:27,
       borderRadius:8,
       left:300,
       bottom:970
    },
    img_container_sub_text1a_cont2: {
        backgroundColor: "#25232B",
        width: 65,
        justifyContent: "center",
        height: 27,
        borderRadius: 8,
        right: 10,
        left: 300,
        bottom: 686,
    },
    img_container_sub_text1a_cont3: {
        backgroundColor: "#25232B",
        width: 65,
        justifyContent: "center",
        height: 27,
        borderRadius: 8,
        right: 10,
        left: 300,
        bottom: 401,
    },
    img_container_sub_text1a_cont4: {
        backgroundColor: "#25232B",
        width: 65,
        justifyContent: "center",
        height: 27,
        borderRadius: 8,
        right: 10,
        left: 300,
        bottom: 118,
 
    },
    text1a_cont:{
        left:7,
    },
    img_container_sub_text1a: {
        textAlign:"center",
        color:"white",
        fontSize:16,
        
    },
    bookmark:{
        width:25,
        height:25,
        bottom:5
    },
    bookmark_img_cont:{
        flexDirection:'row',
        gap:74,
    },

    scrollViewContent:{
    paddingRight:410,
    paddingLeft:30,
    gap:15,
    top:40,
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
        zIndex:1,
        backgroundColor: "white",
        height: 80,
        width: 420,
        gap: 33,
        bottom: 76,
        justifyContent: "center"
    },
    navigation_container1: {
        top: 20,
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
import Planner3Screen from './page2b';

// Import your screen components



<View>
    <WelcomeScreen />
    <MainScreen />
    <PlanScreen />
    <Planner3Screen />
</View>