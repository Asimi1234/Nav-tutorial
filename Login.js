import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, Pressable,StyleSheet, ImageBackground, TextInput,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';


export default function DetailsScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle changes in the email input
    const handleEmailChange = (text) => {
        setEmail(text);
    };

    // Function to handle changes in the password input
    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    // Function to validate email format
    const validateEmail = (email) => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        return isValid;
    };

    // Function to validate password strength
    const validatePassword = (password) => {
        const isValid = password.length >= 8;
        return isValid;
    };

    // Function to handle navigation to the next screen
    const navigateToNextScreen = () => {
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        if (isEmailValid && isPasswordValid) {
            // Navigate to the 'Welcome2' screen
            navigation.navigate('welcome2');
        } else {
            // Display error messages for invalid inputs
            if (!isEmailValid) {
                Alert.alert('Invalid Email', 'Please enter a valid email address');
            }
            if (!isPasswordValid) {
                Alert.alert('Weak Password', 'Password must be at least 8 characters long');
            }
        }
    };




    return (
        
        <ImageBackground
            source={{ uri: "https://github.com/Asimi1234/images/assets/138695508/785e9de0-3cbd-49b1-86ce-e4041be44201" }}
            style={styles.background}
            resizeMode='cover'
            onError={(error) => console.error("Image load error:", error.nativeEvent.error)}
        >

            <View style={styles.Logo_Container}>
                <Image source={require('./assets/gym.png')} style={styles.logo} />
                <Text style={styles.Logo_text}>WellFit360</Text>
            </View>
        <View style={styles.Container}>
               
                    
            <Text style={styles.welcome}>Welcome back!</Text>
            <View style={styles.Textinput_container}>
            <View>  
            <Text style={styles.Input_title}>Email</Text> 
                          
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={handleEmailChange}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCompleteType="email"
                            textContentType="emailAddress"
                            style={styles.textInput}
                        />
             </View>
                  <View>  
                    <View style={styles.password_container}>
                    <Text style={styles.Input_title}>Password</Text>
                     <Text style={styles.Input_title_Forgot_password}>Forgot Password?</Text>
                    </View>
                      
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={handlePasswordChange}
                            secureTextEntry
                            textContentType="password"
                            style={styles.textInput}
                        />
                   </View>
            <View style={styles.Login}>
                        <Pressable
                            title="Next"
                            onPress={navigateToNextScreen}>
         <Text style={styles.Login_text}>Log In</Text>
            </Pressable>
            </View>
        <View style={styles.Sign}>
            <Text style={styles._sign_not}>Not a member?</Text>
            <Pressable onPress={() => navigation.navigate('User')}>
            <Text style={styles._signup}>Sign Up</Text>
            </Pressable>
        </View>
</View>
        </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    Logo_Container: {
        flexDirection: "row",
        bottom: 30,
        right:120,
    },
    logo: {
        width: 45,
        height: 45,

    },
    Logo_text: {
        marginTop: 13,
        fontSize: 22,
        color: "green",
        fontWeight: "bold",
        right:10,
    },
    Container: {
        marginTop:80,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
      height:'60%',
      width:"100.3%",
      borderRadius:15,
      borderColor:"white",
      opacity:0.83,
      backgroundColor:"#3E3F41"
    },
    
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.88,

    },
    textInput:{
        borderWidth:2,
        borderColor:"white",
        borderRadius:9,
        width:350,
        height:45,
        color:"white",
        paddingLeft:15,
    },
    welcome:{
        fontSize:25,
        color:"white",
        fontWeight:"bold",
        marginTop:30,
        bottom:30,
        right: 95,
    },
  Input_title:{
    color:"white",
    fontSize:18,
    bottom:10,
  },
    Input_title_Forgot_password:{
        color: "#ccc",
        fontSize: 15,
        bottom: 10,
    },
    Textinput_container:{
        gap:30,
        top:5,
        
    },
    Login:{
      marginTop:20,
        backgroundColor:"green",
        height:40,
        borderRadius: 9,
    },
    Login_text:{
        textAlign:"center",
        top:10,
        fontWeight:"bold",
        color:"white",
        fontSize:17,
    },
    password_container:{
        flexDirection:"row",
        gap:160,
    },
    Sign:{
        flexDirection:"row",
        justifyContent:"center",
        gap:10,
        bottom:10,
    },
    _sign_not:{
        color:'white',
        fontSize: 16,
    },
    _signup:{
        fontWeight:"600",
        color:"white",
        fontSize:16,
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
                <Stack.Screen name="welcome2" component={Welcome2Screen}
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
import Welcome2Screen from './welcome2';

// Import your screen components



<View>
    <DetailsScreen />
 <WelcomeScreen />
</View>

