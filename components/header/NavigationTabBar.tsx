import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '../../styles/colors';
import { Ionicons } from '@expo/vector-icons';

interface NavigationTabBarProps {
    state: any;
    descriptors: any;
    navigation: any;
}

const NavigationTabBar = ({ state, descriptors, navigation }: NavigationTabBarProps) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                        key={route.key}
                    >
                        <View style={styles.container}>
                            <Ionicons name={options.icon} size={20} color={isFocused ? Colors.primary : Colors.tabInactiveColor} />
                            <Text style={[styles.labelTextStyle, { color: isFocused ? Colors.primary : Colors.tabInactiveColor }]}>
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default NavigationTabBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        gap: 5,
    },
    labelTextStyle: {
        fontSize: 10,
        fontStyle: 'italic',
    }
});