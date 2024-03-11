import {Settings, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import NotiScreen from './screens/NotiScreen';

// import CartScreen from './screens/CartScreen';s

import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ImeiScan from './ImeiScan';

const Drawer = createDrawerNavigator();

const DrawerContent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={ImeiScan} />
    </Drawer.Navigator>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
