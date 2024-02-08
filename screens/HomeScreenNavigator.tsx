import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { Text, View } from 'react-native';
import { Colors } from '../styles/colors';
import { addTaskScreenHeaderOptions, calendarScreenHeaderOptions, chatScreenHeaderOptions, homeScreenHeaderOptions, notificationScreenHeaderOptions } from '../components/header/NavigationOption';
import ChatScreen from './ChatScreen';
import AddTaskScreen from './AddTaskScreen';
import CalenderScreen from './CalenderScreen';
import NotificationScreen from './NotificationScreen';
import NavigationTabBar from '../components/header/NavigationTabBar';

const Tab = createBottomTabNavigator();

const HomeScreenNavigator = () => {
    return (
        <Tab.Navigator tabBar={props => <NavigationTabBar {...props} />}>
            <Tab.Screen
                options={homeScreenHeaderOptions}
                name="Home"
                component={HomeScreen} />
            <Tab.Screen
                options={chatScreenHeaderOptions}
                name="Chat"
                component={ChatScreen} />
            <Tab.Screen
                options={addTaskScreenHeaderOptions}
                name="AddTask"
                component={AddTaskScreen} />
            <Tab.Screen
                options={calendarScreenHeaderOptions}
                name="Calender"
                component={CalenderScreen} />
            <Tab.Screen
                options={notificationScreenHeaderOptions}
                name="Notification"
                component={NotificationScreen} />
        </Tab.Navigator>

    )
}

export default HomeScreenNavigator;