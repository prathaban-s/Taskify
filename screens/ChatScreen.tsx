import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'
import AllChatScreen from './chat/AllChatScreen';
import NewChatScreen from './chat/NewChatScreen';

const Stack = createNativeStackNavigator();

const ChatScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={
                { headerShown: false }
            }
        >
            <Stack.Screen name="AllChat" component={AllChatScreen} />
            <Stack.Screen name="NewChat" component={NewChatScreen} />
        </Stack.Navigator>
    )
}

export default ChatScreen