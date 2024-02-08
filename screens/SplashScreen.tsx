import { Image, Text, View, StyleSheet, Button, Pressable } from 'react-native'
import { Colors } from '../styles/colors'
import { PrimaryButton } from '../components/ui/Button'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("PrimaryNavigation")
    }

    return (
        <View style={styles.outerContainer} >
            <View style={styles.logoContainer} >
                <Image source={require('../assets/icons/logo.png')} />
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/person.png')} />
            </View>
            <View>
                <Text style={styles.text}  >Manage Your Task with</Text>
                <Text style={[styles.text, styles.appText]}  >Taskify</Text>
            </View>
            <View style={styles.buttonContainer} >
                <PrimaryButton onPress={onPress} pressableContainerStyle={styles.pressableContainer} >
                    <Text style={styles.buttonText} >Get Started</Text>
                </PrimaryButton>
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    outerContainer: {
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    logoContainer: {
        padding: 10,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    text: {
        color: Colors.white,
        fontSize: 50,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center'
    },
    appText: {
        color: Colors.primary,
    },
    buttonContainer: {
        marginVertical: 10,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    pressableContainer: {
        flex: 1,
    }
})