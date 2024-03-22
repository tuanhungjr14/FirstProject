import {
  ActivityIndicator,
  DeviceEventEmitter,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useSelector} from 'react-redux';
// import HomeScreen from './navigationBottom/screens/HomeScreen.js';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {ContactStackNavigator} from './StackNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AccountScreen from './src/modules/screens/AccountScreen.js';
import LogMain from './src/modules/screens/LoginScreen.js';
import ImeiScan from './src/modules/screens/ImeiScan.js';
import LanguageScreen from './src/modules/screens/LanguageScreen.js';
import Tabs from './src/modules/navigation/tabs.js';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const MainContainer = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //choc truc tiep vao redux vao user=>state
  const tokens = useSelector(state => state.user.tokens);
  console.log(typeof tokens);
  //TODO vòng đời của 1 hook component.

  // useEffect(() => {
  //   setTimeout(() => {
  //     getUserFromStorage();
  //   }, 2000);
  //   DeviceEventEmitter.addListener('update', () => {
  //     getUserFromStorage();
  //   });
  //   return () => {};
  // }, []);

  // const getUserFromStorage = async () => {
  //   try {
  //     const data = await AsyncStorage.getItem('loginData');
  //     setUser(JSON.parse(data));
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // // toan tu 3 ngoi: dieu kien === true ? value : value2

  // if (loading && user === null) {
  //   return (
  //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //       <ActivityIndicator color="red" />
  //     </View>
  //   );
  // }

  // if (user) {
  //   return (
  //     <NavigationContainer>
  //       <GestureHandlerRootView style={{flex: 1}}>
  //         <Stack.Navigator
  //           screenOptions={{
  //             headerShown: false,
  //           }}>
  //           <Stack.Screen name="Tabs" component={Tabs} />
  //         </Stack.Navigator>
  //       </GestureHandlerRootView>
  //     </NavigationContainer>
  //   );
  // }

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="LogMain"
          component={LogMain}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const AppStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="ImeiScan" component={ImeiScan} />
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        {tokens ? <AppStack /> : <AuthStack />}
      </GestureHandlerRootView>
    </NavigationContainer>
    // <NavigationContainer>
    //   <GestureHandlerRootView style={{flex: 1}}>
    //     <Stack.Navigator
    //       screenOptions={{
    //         headerShown: false,
    //       }}>
    //       <Stack.Screen name="Login" component={LogMain} />
    //     </Stack.Navigator>
    //   </GestureHandlerRootView>
    // </NavigationContainer>
  );
};

export default MainContainer;
