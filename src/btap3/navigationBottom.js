import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreens';
import Notiscreen from './screens/NotiScreen';

const Tab = createBottomTabNavigator();

const navigationBottom = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
      <Tab.Screen name="Notiscreen" component={Notiscreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default navigationBottom;
