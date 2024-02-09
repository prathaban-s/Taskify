import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../styles/colors";

export const homeScreenHeaderOptions = () => {
    return {
        headerStyle: { backgroundColor: Colors.background },
        headerLeft: () => {
            return (
                <View style={styles.leftContainer} >
                    <Text style={styles.smallText} >Welcome Back</Text>
                    <Text style={styles.largeText} >Prathaban</Text>
                </View>
            )
        },
        headerRight: () => {
            return (
                <View style={styles.rightContainer} >
                    <Text style={{ fontSize: 20 }} >SP</Text>
                </View>
            )
        },
        headerTitle: "",
        icon: "home-outline",
    }
}

export const chatScreenHeaderOptions = () => {
    return {
        headerStyle: { backgroundColor: Colors.background },
        headerTitle: "Message",
        headerTitleStyle: { color: Colors.white },
        icon: "chatbox",
    }
}

export const addTaskScreenHeaderOptions = () => {
    return {
        headerStyle: { backgroundColor: Colors.background },
        headerTitle: "Create New Task",
        icon: "add-circle-sharp",
        headerTitleStyle: { color: Colors.white },
    }
}

export const calendarScreenHeaderOptions = () => {
    return {
        headerStyle: { backgroundColor: Colors.background },
        headerTitle: "Calendar",
        icon: "calendar",
        headerTitleStyle: { color: Colors.white },
    }
}

export const notificationScreenHeaderOptions = () => {
    return {
        headerStyle: { backgroundColor: Colors.background },
        headerTitle: "Notification",
        icon: "notifications",
        headerTitleStyle: { color: Colors.white },
    }
}


const styles = StyleSheet.create({
    rightContainer: {
        flexDirection: 'row',
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        padding: 5,
    },
    leftContainer: {
        marginLeft: 10,
    },
    smallText: {
        fontSize: 10,
        color: Colors.primary,
    },
    largeText: {
        fontSize: 20,
        color: Colors.white,
    }
})