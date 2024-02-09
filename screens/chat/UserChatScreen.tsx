import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { chatMessages } from '../../data/dummy-chat'
import UserChatCard from '../../components/chat/UserChatCard'
import { useNavigation } from '@react-navigation/native'

const UserChatScreen = () => {

    const navigation: any = useNavigation();

    const onChatCardClick = (id: string) => {
        navigation.navigate(
            { name: 'NewChat', params: { id: id } }
        );
    }

    return (
        <ScrollView style={styles.container} >
            {chatMessages.map((chat, index) => <UserChatCard key={index} {...chat} onPress={onChatCardClick} />)}
        </ScrollView>
    )
}

export default UserChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
    },
});