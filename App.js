import * as React from 'react';
import { View, Text, Button,Image, Pressable, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./Login"

function HomeScreen({ navigation }) {
  const placeholderImage = { uri: "https://github.com/Asimi1234/images/assets/138695508/a497bb63-1bde-40f8-bf43-65f9f7d52be8" };
  return (
    <ImageBackground 
      source={placeholderImage}
      style={styles.background} >
    <View style={styles.container}>
      
      <View style={styles.Logo_Container}>
      <Image source={require('./assets/gym.png')} style={styles.logo}/>
      <Text style={styles.Logo_text}>WellFit360</Text>
      </View>
      <Text style={styles.Logo_text2}>Get Fit Anywhere, Anytime</Text>
      <Text style={styles.Logo_text3 }>Welcome to WellFit360-Your Ultimate Fitness</Text>
        <Text style={styles.Logo_text4} >Companion</Text>
<View style={styles.Reg_Log}>

          <TouchableOpacity onPress={console.log('hello')}>
            <Text style={styles.Navigation_text} >
              Register
            </Text>
        </TouchableOpacity>
          <View style={styles.Navigation_Container2} >
          <Pressable onPress={() => navigation.navigate('Details') } >
            <Text style={styles.Navigation_text2} >
              Login
            </Text>
          </Pressable>
        </View>
      </View>

     <Pressable>
      <Text style={styles.Subscription}>Subscription of $15/month</Text>
      </Pressable>
        <Text style={styles.Trial}>Start 7 days free trial</Text>
    </View> 
 </ImageBackground>  
  );
}

const styles = StyleSheet.create ({
container:{
    flex: 1,
     alignItems: 'center', 
     justifyContent: 'center',
   color:"white",
   marginTop:280,
},
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.78,
    
  },
logo:{
  width:68,
  height:68,
  
},
Reg_Log:{
  flexDirection:"row",
  borderWidth:2,
  borderColor:"white",
  borderRadius:10,
  gap:"55",
  marginTop:10,
  width:310,
  height:50,
  alignItems:"center",
  justifyContent:"center"
},
Logo_Container:{
  flexDirection:"row",
  bottom:150,
},
Logo_text:{
  marginTop:23,
  fontSize:32,
  color:"green",
  fontWeight:"bold",
  right:10,
},
  Logo_text2: {
    marginTop: 20,
    fontSize: 17,
    color: "white",
    fontWeight: "bold"
  },
  Logo_text3: {
    marginTop: 20,
    fontSize: 16,
    color: "#ccc",
    flexWrap:"wrap",
    width:330
  },
   Logo_text4: {
   
    fontSize: 16,
    color: "#ccc",
     alignItems: 'center',
     justifyContent: 'center',
  },
  Subscription: {
    marginTop:10,
    fontSize: 18,
    color: "lightgreen",
    alignItems: 'center',
    justifyContent: 'center',
  },
  Trial: {
    fontSize: 17,
    color: "#ccc",
    alignItems: 'center',
    justifyContent: 'center',
  },
  Navigation_text:{
    color:"white",
    fontSize:20,
  },
  Navigation_text2: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    top:5,
  },
  Navigation_Container2:{
    borderColor: "white",
    borderWidth:1,
    backgroundColor: "#045300",
    width: 120,
    height: 30,
    
    borderRadius: 5,
  }
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
        <Stack.Screen 
        name="Details" 
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
        <Stack.Screen name="welcome2" component={Welcome2Screen}
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
        <Stack.Screen name="header" component={HeaderScrollView}
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
import UsersScreen from './Signup';
import WelcomeScreen from './welcome';
import MainScreen from './Page1';
import Welcome2Screen from './welcome2';
import PlanScreen from './Page2';
import planner2Screen from './page2a';
import Planner2Screen from './page2a';
import Planner3Screen from './page2b';
import Planner4Screen from './page2c';
import HeaderScrollView from './headerScroll';
// Import your screen components


<View>
  <HomeScreen />
<DetailsScreen /> 
<UsersScreen />
<WelcomeScreen />
<MainScreen />
<Welcome2Screen />
<PlanScreen />
<Planner4Screen />
</View>
export default App;