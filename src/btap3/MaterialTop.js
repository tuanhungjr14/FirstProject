import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const MaterialTop = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MaterialTop;

const styles = StyleSheet.create({});
