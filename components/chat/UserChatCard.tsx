import React from 'react'
import { View, StyleSheet, Pressable, Text, Image } from 'react-native'
import { Colors } from '../../styles/colors'

interface UserChatCardProps {
    name: string,
    message: string,
    time: string,
    image?: string,
    unreadMessagesCount: number,
    onPress?: () => void,
    unreadMessages?: boolean,
}

const UserChatCard = ({ name, message, time, image, unreadMessagesCount, onPress, unreadMessages }: UserChatCardProps) => {
    return (
        <View style={styles.container} >
            <Pressable style={styles.pressableContainer} onPress={onPress}>
                <View style={styles.innerContainer} >
                    <View style={styles.imageContainer} >
                        <Image source={{ uri: image }} style={styles.imageStyle} />
                    </View>
                    <View style={styles.textContainer} >
                        <Text style={styles.nameText} >{name}</Text>
                        <Text numberOfLines={1} style={[styles.messageText, unreadMessages ? { color: Colors.primary } : {}]} >{message}</Text>
                    </View>
                    <View>
                        <Text>{time}</Text>
                        <Text>{unreadMessagesCount}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default UserChatCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,

    },
    pressableContainer: {
        flex: 1
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
        width: '65%',
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
    },
    messageText: {
        fontSize: 14,
        marginTop: 3,
        color: Colors.tabInactiveColor
    },

});