import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'
import AllChatScreen from './chat/AllChatScreen';

const Stack = createNativeStackNavigator();

const ChatScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={
                { headerShown: false }

            }
        >
            <Stack.Screen name="AllChat" component={AllChatScreen} />
        </Stack.Navigator>
    )
}

export default ChatScreen