import React from 'react'
import { View, StyleSheet, Pressable, Text, Image } from 'react-native'
import { Colors } from '../../styles/colors'
import { useNavigation } from '@react-navigation/native';

interface UserChatCardProps {
    id: string,
    name: string,
    message: string,
    time: string,
    image?: string,
    unreadMessagesCount: number,
    onPress: (id: string) => void,
    unreadMessages?: boolean,
}

const UserChatCard = ({ id, name, message, time, image, unreadMessagesCount, onPress, unreadMessages }: UserChatCardProps) => {

    const navigation: any = useNavigation();

    return (
        <View style={styles.container} >
            <Pressable style={styles.pressableContainer} onPress={() => onPress(id)}>
                <View style={styles.innerContainer} >
                    <View style={styles.imageContainer} >
                        <Image source={{ uri: image }} style={styles.imageStyle} />
                    </View>
                    <View style={styles.textContainer} >
                        <Text style={styles.nameText} >{name}</Text>
                        <Text numberOfLines={1} style={[styles.messageText, unreadMessages ? { color: Colors.primary } : {}]} >{message}</Text>
                    </View>
                    <View style={styles.timeTextContainer} >
                        <Text style={styles.timeText} >4 mins</Text>
                        {unreadMessagesCount > 0 &&
                            <View style={styles.unreadMessageContainer} >
                                <Text style={styles.unreadMessageText} >{unreadMessagesCount}</Text>
                            </View>
                        }
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
    timeTextContainer: {
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },
    timeText: {
        fontSize: 12,
        color: Colors.tabInactiveColor
    },
    unreadMessageContainer: {
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadMessageText: {
        fontSize: 10,
    }


});