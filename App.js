import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {CheckBox} from '@rneui/themed';
function LogMain() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState();
  const validateForm = () => {
    let errors = {};
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
  };
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={styles.viewLogo}>
        <Image style={styles.logos} source={require('./assets/logo.png')} />
      </View>

      <View style={styles.input}>
        <FontAwesome5 size={15} name="user-alt" style={{paddingLeft: 25}} />
        <MaterialCommunityIcons
          name="drag-vertical-variant"
          size={20}
          style={{paddingVertical: 13}}
        />
        <TextInput style={{}} placeholder="Tài khoản" />
      </View>
      <View style={styles.input}>
        <FontAwesome size={20} name="lock" style={{paddingLeft: 25}} />
        <MaterialCommunityIcons size={20} name="drag-vertical-variant" />
        <TextInput style={{flex: 1}} placeholder="Mật khẩu" />
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
        style={styles.buttons}
        onPress={() => Alert.alert('Login')}>
        <Text style={styles.label}>Đăng nhập</Text>
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
  buttons: {
    alignItems: 'center',
    padding: 23,
    backgroundColor: '#02B9AE',
    borderRadius: 20,
    width: 341,
    alignSelf: 'center',
  },
  viewLogo: {
    alignItems: 'center',
    marginTop: 100,
  },
  label: {color: '#FFF'},
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
