import React, { useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
import MainScreen from './Page1';
import PlanScreen from './Page2';
import WelcomeScreen from './welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HeaderScrollView = () => {
    const scrollViewRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleHeaderPress = (index) => {
        // Calculate the position to scroll to based on index
        const position = index * window.width;
        scrollViewRef.current.scrollTo({ x: position, animated: true });
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => handleHeaderPress(0)}>
                    <Text style={{ fontSize: 20 }}>Browse</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleHeaderPress(1)}>
                    <Text style={{ fontSize: 20 }}>For You</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleHeaderPress(2)}>
                    <Text style={{ fontSize: 20 }}>Meal Plan</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleHeaderPress(3)}>
                    <Text style={{ fontSize: 20 }}>Recommendation</Text>
                </TouchableOpacity>
            </View>

            {/* Content */}
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                scrollEventThrottle={16}
            >
                {/* Browse Content */}
                <View style={{ width: window.width, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Browse Content</Text>
                </View>

                {/* For You Content */}
                <View style={{ width: window.width, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>For You Content</Text>
                </View>

                {/* Meal Plan Content */}
                <View style={{ width: window.width, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Meal Plan Content</Text>
                </View>

                {/* Recommendation Content */}
                <View style={{ width: window.width, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Recommendation Content</Text>
                </View>
            </ScrollView>
        </View>
    );
};

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
                <Stack.Screen name="header" component={HeaderScrollView}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HeaderScrollView;
