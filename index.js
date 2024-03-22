/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';

// import MainContainer from './MainContainer';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import lifeCycle from './navigationBottom/screens/lifeCycle';

import ImeiScan from './src/modules/screens/ImeiScan';

import MainContainer from './MainContainer';

import AccountScreen from './src/modules/screens/AccountScreen';
import App from './App';
import CarSpecifications from './navigationBottom/screens/CarSpecifications';
import languageScreen from './src/modules/screens/LanguageScreen';

AppRegistry.registerComponent(appName, () => App);
