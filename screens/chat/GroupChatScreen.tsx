import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { groupChatMessages } from '../../data/dummy-chat'
import UserChatCard from '../../components/chat/UserChatCard'
import { useNavigation } from '@react-navigation/native'

const GroupChatScreen = () => {

    const navigation: any = useNavigation();


    const onChatCardClick = (id: string) => {
        navigation.navigate(
            { name: 'NewChat', params: { id: id } }
        );
    }

    return (
        <ScrollView style={styles.container} >
            {groupChatMessages.map((chat, index) => <UserChatCard key={index} {...chat} onPress={onChatCardClick} />)}
        </ScrollView>
    )
}

export default GroupChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
    },
});