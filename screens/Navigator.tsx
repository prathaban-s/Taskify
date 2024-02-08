import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SplashScreen from './SplashScreen';
import { Colors } from '../styles/colors';
import HomeScreenNavigator from './HomeScreenNavigator';


const Stack = createNativeStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.background,
    }
}

const Navigator = () => {
    return (
        <NavigationContainer theme={theme} >
            <Stack.Navigator screenOptions={
                { headerShown: false }
            }>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="PrimaryNavigation" component={HomeScreenNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator