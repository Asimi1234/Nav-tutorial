import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, Pressable, StyleSheet, ImageBackground, TextInput, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';


export default function UsersScreen({ navigation }) {
        const [ password, setPassword] = useState('');

        const handlePasswordChange = (text) => {
            setPassword(text);
        };

        const handleSubmit = () => {
            // Handle form submission with the password
            console.log('Password:', password);
        };
       
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleNameChange = (text) => {
        setName(text);
        if (text.length < 3) {
            setNameError('Name must be at least 3 characters long');
        } else {
            setNameError('');
        }
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(text)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    };
    return (
        <ImageBackground
            source={require('./assets/Training_group.jpg')}
            style={styles.background} >
            <View style={styles.Logo_Container}>
                <Image source={require('./assets/gym.png')} style={styles.logo} />
                <Text style={styles.Logo_text}>WellFit360</Text>
            </View>
            <View style={styles.Container}>


                <Text style={styles.welcome}>Welcome!</Text>
                <View style={styles.Textinput_container}>
                    <View>
                        <Text style={styles.Input_title}>Full Name</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View>
                        
                            <Text style={styles.Input_title}>Email</Text>
                        <TextInput style={styles.textInput}
                            value={email}
                            onChangeText={handleEmailChange}
                            placeholder="Enter your email"
                            {... (emailError && { error: true, errorText: emailError })}
                        ></TextInput>
                    </View>
                    <View>
                        <Text style={styles.Input_title}>Password</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Enter your password"
                            secureTextEntry={true} // This makes the input hold a password and obscures the text
                            value= {password}
                            onChangeText={handlePasswordChange}
                         >
                         </TextInput>
                        <Image source={require('./assets/invisible (1).png')} style={styles.Password_hidden}/>
                    </View>
                    <View style={styles.Login}>
                        <Pressable onPress={() => navigation.navigate('welcome')}>
                            <Text style={styles.Login_text}>Register</Text>
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
        bottom: 10,
        right: 120,
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
        right: 10,
    },
    Container: {
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        height: '70%',
        width: "100.3%",
        borderRadius: 15,
        borderColor: "white",
        opacity: 0.83,
        backgroundColor: "#3E3F41"
    },

    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.78,

    },
    textInput: {
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 9,
        width: 350,
        height: 45,
        paddingLeft:10,
    },
    welcome: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        marginTop: 30,
        bottom: 30,
        right:125,
    },
    Input_title: {
        color: "white",
        fontSize: 18,
        bottom: 10,
    },
  
    Textinput_container: {
        gap: 30,
        top: 15,

    },
    Login: {
        marginTop: 5,
        backgroundColor: "green",
        height: 40,
        borderRadius: 9,
    },
    Login_text: {
        textAlign: "center",
        top: 10,
        fontWeight: "bold",
        color: "white",
        fontSize: 17,
    },
    Sign: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        bottom: 10,
    },
    _sign_not: {
        color: 'white',
        fontSize: 16,
    },
    _signup: {
        fontWeight: "600",
        color: "white",
        fontSize: 16,
    },
    Password_hidden:{
        width:20,
        height:20,
        bottom:30,
        left:310,
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
// Import necessary components from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './welcome';

// Import your screen components



<View>
    <UsersScreen />
<WelcomeScreen />
</View>

