import {
  ActivityIndicator,
  DeviceEventEmitter,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigationBottom/tabs.js';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogMain from './src/Login/Login.js';
import {selectIsLoggedIn} from './src/redux/reducers/userSlice.js';
import {useSelector} from 'react-redux';
import HomeScreen from './navigationBottom/screens/HomeScreen.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ContactStackNavigator} from './StackNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AccountScreen from './navigationBottom/screens/SettingsComponent/AccountScreen.js';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const MainContainer = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const tokens = useSelector(state => state.user.tokens);
  console.log(tokens);
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

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {tokens ? (
            <Stack.Screen name="Tabs" component={Tabs} />
          ) : (
            <Stack.Screen name="Login" component={LogMain} />
          )}
        </Stack.Navigator>
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
