import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import SysModal from '../../components/sys_modal';
import {CheckBox} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {setUserInfo, setUserTokens} from '../../redux/reducers/userSlice';
import Button from '../../components/Button';
import Input from '../../components/Input';

const LogMain = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState('');

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
    const emailPattern = /\b[A-Za-z0-9._%+-]+@gmail.com\b/;
    if (!emailPattern.test(username) && checked) {
      setErrors('Tài khoản phải có định dạng @gmail.com');
      setShowModal(true);
      return;
    }
    if (username.length === 0 || password.length === 0) {
      setErrors('Nhập tài khoản và mật khẩu của bạn');
      setShowModal(true);
      return;
    }

    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        name: 'Nguyen Tuan Hung',
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
          if (result.user.email === username) {
            dispatch(setUserTokens(result.tokens));
            dispatch(setUserInfo(result.user));
            console.log('token', result);

            navigation.navigate('Tabs');
          } else {
            setErrors('Sai tài khoản hoặc mật khẩu. Vui lòng thử lại.');
            setShowModal(true);
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.error('Error:', error);
      setErrors('Đăng nhập thất bại. Vui lòng thử lại.');
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
      <Input
        icon="user"
        title="Tài khoản"
        value={username}
        onChangeText={onChangeUsername}
        secure={false}
      />
      <Input
        icon="lock"
        title="Mật khẩu"
        value={password}
        onChangeText={onChangePassword}
        eye={true}
      />

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
      <Button
        title="Đăng Nhập"
        onPress={onClickLogin}
        btnStyle={styles.loginBtn}
      />

      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.signIn}>Đăng kí tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtn: {width: 341, height: 57, borderRadius: 20},
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
  viewLogo: {
    alignItems: 'center',
    marginTop: 100,
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
