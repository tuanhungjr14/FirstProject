import {Settings, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import NotiScreen from './screens/NotiScreen';

import CartScreen from './screens/CartScreen';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ImeiScan from '../../navigationBottom/ImeiScan';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={ImeiScan} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
