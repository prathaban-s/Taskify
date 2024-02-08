import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../styles/colors'

interface ButtonProps {
    onPress?: () => void,
    children: React.ReactNode,
    innerContainerStyle?: object,
    outerContainerStyle?: object,
    pressableContainerStyle?: object,
    disabled?: boolean,
    loading?: boolean,
}

export const PrimaryButton = ({ children, innerContainerStyle, outerContainerStyle, pressableContainerStyle, onPress, disabled }: ButtonProps) => {
    return (
        <View style={[styles.outerContainer, outerContainerStyle]} >
            <Pressable style={[styles.pressableContainer, pressableContainerStyle]} onPress={onPress} disabled={disabled} >
                <View style={[styles.innerContainer, innerContainerStyle]} >
                    {children}
                </View >
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        flexDirection: 'row',
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: Colors.primary,
    },
    pressableContainer: {
        justifyContent: 'center',
        width: '100%',
    },
})