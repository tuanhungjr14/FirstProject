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
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SysModal from '../components/sys_modal';
import {CheckBox} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Tabs from '../../navigationBottom/tabs';

function LogMain() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState('');
  const navigation = useNavigation();

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
    if (username.length === 0 || password.length === 0) {
      setErrors('Please enter your password');
      setShowModal(true);
      return;
    }

    try {
      const value = JSON.stringify({
        username: username,
        password: password,
      });
      await AsyncStorage.setItem('loginData', value);
      //
      DeviceEventEmitter.emit('update');
    } catch (error) {
      console.error('Error saving data:', error);
    }
    // navigation.navigate('Tabs');
    console.log('click Login', {username, password});
  };

  const loadData = async () => {
    try {
      const result = await AsyncStorage.getItem('loginData');
      if (result !== null) {
        const data = JSON.parse(result);
        setUsername(data.username);
        setPassword(data.password);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

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
        />
        <TouchableOpacity>
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
        <TouchableOpacity style={{marginTop: 4}}>
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

      <TouchableOpacity>
        <Text style={styles.signIn}>Đăng kí tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
}

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

export default LogMain;
