import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SysModal from '../components/sys_modal';
import {CheckBox} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Tabs from '../../navigationBottom/tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../../navigationBottom/screens/RegisterScreen';
import ForgotScreen from '../../navigationBottom/screens/ForgotScreen';
import GGSignInScreen from '../../navigationBottom/screens/GGSignInScreen';
import {useDispatch} from 'react-redux';
import {setUser} from '';
import {setUserInfo, setUserTokens} from '../redux/reducers/userSlice';
const Stack = createNativeStackNavigator();
const LogMain = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState('');
  const [getPasswordVisible, setPasswordVisible] = useState(false);

  const onChangeUsername = value => {
    setUsername(value);
  };

  const onChangePassword = value => {
    setPassword(value);
  };

  const onHideModal = () => {
    setShowModal(false);
  };

  const onClickLogin = async () => {
    // if (username.length === 0 || password.length === 0) {
    //   setErrors('Please enter your username and password');
    //   setShowModal(true);
    //   return;
    // }

    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        name: 'nguyen tuan hung',
        email: 'hung@gmail.com',
        socialID: '545465fd456464',
        socialType: 'google',
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };
      fetch(
        'https://api-phenet.phenikaa-x.com/v1/auth/login-social',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          //

          dispatch(setUserTokens(result.tokens));
          dispatch(setUserInfo(result.user));
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.error('Error:', error);
      setErrors('Login failed. Please try again.');
      setShowModal(true);
    }
  };

  //   try {
  //     const value = JSON.stringify({
  //       username: username,
  //       password: password,
  //     });
  //     await AsyncStorage.setItem('loginData', value);
  //     //
  //     DeviceEventEmitter.emit('update');
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //   }
  //   // navigation.navigate('Tabs');
  //   console.log('click Login', {username, password});
  // };

  // const loadData = async () => {
  //   try {
  //     const result = await AsyncStorage.getItem('loginData');
  //     if (result !== null) {
  //       const data = JSON.parse(result);
  //       setUsername(data.username);
  //       setPassword(data.password);
  //     }
  //   } catch (error) {
  //     console.error('Error loading data:', error);
  //   }
  // };

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <SysModal visible={showModal} message={errors} onHide={onHideModal} />
      <View style={styles.viewLogo}>
        <Image
          style={styles.logos}
          source={require('/DevPro/React Native/Project/FirstProject/assets/logo.png')}
        />
      </View>

      <View style={styles.input}>
        <FontAwesome5 size={15} name="user-alt" style={{paddingLeft: 25}} />
        <View
          style={{
            width: 1,
            height: 30,
            backgroundColor: 'black',
            marginHorizontal: 13,
          }}
        />
        <TextInput
          style={{}}
          placeholder="Tài khoản"
          value={username}
          onChangeText={onChangeUsername}
        />
      </View>
      <View style={styles.input}>
        <FontAwesome size={25} name="lock" style={{paddingLeft: 25}} />
        <View
          style={{
            width: 1,
            height: 30,
            backgroundColor: 'black',
            marginHorizontal: 13,
          }}
        />
        <TextInput
          style={{flex: 1}}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={getPasswordVisible ? false : true}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!getPasswordVisible)}>
          <Entypo
            name="eye"
            size={20}
            color="black"
            style={{paddingHorizontal: 25}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <CheckBox
          checked={checked}
          onPress={() => setChecked(!checked)}
          title="Tự động đăng nhập"
          containerStyle={{padding: 0, margin: 0}}
          textStyle={{fontWeight: 'normal'}}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotScreen')}
          style={{marginTop: 4}}>
          <Text style={styles.forgotPass}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          padding: 23,
          backgroundColor: '#02B9AE',
          borderRadius: 20,
          width: 341,
          alignSelf: 'center',
        }}
        onPress={onClickLogin}>
        <Text style={{color: '#fff'}}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.signIn}>Đăng kí tài khoản</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('GGSignInScreen')}>
        <Text style={styles.signIn}>Đăng nhập bằng Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <Stack.Navigator initialRouteName="LogMain">
      <Stack.Screen
        name="LogMain"
        component={LogMain}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        options={{headerShown: false}}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="ForgotScreen"
        options={{headerShown: false}}
        component={ForgotScreen}
      />
      <Stack.Screen
        name="GGSignInScreen"
        options={{headerShown: false}}
        component={GGSignInScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 24,
  },
  autoLogin: {},
  signIn: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginHorizontal: 16,
    marginVertical: 24,
  },
  forgotPass: {
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginRight: 16,
  },
  viewInput: {
    backgroundColor: '#F0EFF0',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
  logos: {
    width: 200,
    height: 200,
  },

  viewLogo: {
    alignItems: 'center',
    marginTop: 100,
  },

  input: {
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    height: 57,
    backgroundColor: '#F0EFF0',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
