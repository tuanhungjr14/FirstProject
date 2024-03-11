import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import NotiScreen from './screens/NotiScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  AccessibilityInfo,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {DrawerContent} from './DrawerContent';
import AccountScreen from './screens/SettingsComponent/AccountScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CustomTabBarButton = ({state, descriptors, navigation}) => (
  <View style={{backgroundColor: 'white'}}>
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#F0EFF0',
        height: 90,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
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

        let icon = 'home';
        let color = isFocused ? '#02B9AE' : 'white';

        if (route.name === 'Home') {
          return (
            <View
              key={String(label)}
              style={{
                backgroundColor: 'white',
                bottom: 40,
                height: 100,
                width: 100,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={onPress}
                style={{
                  backgroundColor: 'black',
                  height: 71,
                  width: 71,
                  borderRadius: 64,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name={icon} color={color} size={30} />
              </TouchableOpacity>
            </View>
          );
        }

        if (route.name === 'Notification') {
          icon = 'notification';
          color = isFocused ? '#02B9AE' : 'black';
        }
        if (route.name === 'Settings') {
          icon = 'setting';
          color = isFocused ? '#02B9AE' : 'black';
        }

        return (
          <TouchableOpacity
            onPress={onPress}
            key={String(label)}
            style={{paddingHorizontal: 30}}>
            <AntDesign name={icon} color={color} size={30} />
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTabBarButton {...props} />}>
      <Tab.Screen
        name="Notification"
        component={NotiScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Tabs} />
    </Drawer.Navigator>
  );
};

export default App;
