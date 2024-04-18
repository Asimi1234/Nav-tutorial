import * as React from 'react';
import { View, Text, Image, Pressable, ImageBackground, TouchableOpacity, Vibration } from 'react-native';
import { styles } from './App';

export function HomeScreen({ navigation }) {
    const placeholderImage = { uri: "https://github.com/Asimi1234/images/assets/138695508/a497bb63-1bde-40f8-bf43-65f9f7d52be8" };
    return (
        <ImageBackground
            source={placeholderImage}
            style={styles.background}>
            <View style={styles.container}>

                <View style={styles.Logo_Container}>
                    <Image source={require('./assets/gym.png')} style={styles.logo} />
                    <Text style={styles.Logo_text}>WellFit360</Text>
                </View>
                <Text style={styles.Logo_text2}>Get Fit Anywhere, Anytime</Text>
                <Text style={styles.Logo_text3}>Welcome to WellFit360-Your Ultimate Fitness</Text>
                <Text style={styles.Logo_text4}>Companion</Text>
                <View style={styles.Reg_Log}>

                    <TouchableOpacity onPress={console.log('hello')}>
                        <Text style={styles.Navigation_text}>
                            Register
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.Navigation_Container2}>
                        <Pressable onPress={() => navigation.navigate('Details'), Vibration.vibrate()}>
                            <Text style={styles.Navigation_text2}>
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
