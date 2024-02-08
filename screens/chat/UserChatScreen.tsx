import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { chatMessages } from '../../data/dummy-chat'
import UserChatCard from '../../components/chat/UserChatCard'

const UserChatScreen = () => {
    return (
        <ScrollView style={styles.container} >
            {chatMessages.map((chat, index) => <UserChatCard key={index} {...chat} />)}
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