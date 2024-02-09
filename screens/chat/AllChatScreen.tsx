import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { PrimaryButton } from '../../components/ui/Button'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserChatScreen from './UserChatScreen';
import GroupChatScreen from './GroupChatScreen';
import { getFocusedRouteNameFromRoute, useNavigation, useNavigationState, useRoute } from '@react-navigation/native';
import { Colors } from '../../styles/colors';

const Stack = createNativeStackNavigator();


const AllChatScreen = () => {

    const navigation: any = useNavigation();

    const router = useRoute();

    const childRoute = getFocusedRouteNameFromRoute(router);


    const onClickUserChat = () => {
        navigation.navigate('UserChat');
    }

    const onClickGroupChat = () => {
        navigation.navigate('GroupChat');
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer} >
                <PrimaryButton
                    outerContainerStyle={styles.buttonOuterContainer}
                    onPress={onClickUserChat}
                    innerContainerStyle={childRoute === 'UserChat' ? { backgroundColor: Colors.primary } : { backgroundColor: Colors.secondary }}>
                    <Text>Chats</Text>
                </PrimaryButton>
                <PrimaryButton
                    outerContainerStyle={styles.buttonOuterContainer}
                    onPress={onClickGroupChat}
                    innerContainerStyle={childRoute === 'GroupChat' ? { backgroundColor: Colors.primary } : { backgroundColor: Colors.secondary }}
                >
                    <Text>Groups</Text>
                </PrimaryButton>
            </View>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="UserChat" component={UserChatScreen} />
                <Stack.Screen name="GroupChat" component={GroupChatScreen} />
            </Stack.Navigator>
        </View>
    )
}

export default AllChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
    },
    buttonOuterContainer: {
        flex: 1,
    }
});