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

import ImeiScan from './navigationBottom/ImeiScan';
import MaterialTop from './src/btap3/MaterialTop';
import MainContainer from './MainContainer';

import AccountScreen from './navigationBottom/screens/SettingsComponent/AccountScreen';
import App from './App';

AppRegistry.registerComponent(appName, () => App);
