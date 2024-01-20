import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigationBottom/tabs.js';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const MainContainer = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <Tabs />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default MainContainer;
