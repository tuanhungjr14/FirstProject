import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginData, setLoginData] = useState(null);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('loginData');
      setLoginData(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {
      console.error('Error reading data:', e);
    }
  };

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify({
        username: username,
        password: password,
      });
      await AsyncStorage.setItem('loginData', jsonValue);
      getData(); // Sau khi lưu dữ liệu, cập nhật lại giá trị của biến state loginData
    } catch (e) {
      console.error('Error storing data:', e);
    }
    console.log({username, password});
  };

  // Gọi hàm getData mỗi khi component được render
  getData();

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder="Tai khoan"
          onChangeText={text => setUsername(text)}
          value={loginData ? loginData.username : ''}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="mat khau"
          onChangeText={text => setPassword(text)}
          value={loginData ? loginData.password : ''}
        />
      </View>
      <View>
        <TouchableOpacity onPress={storeData}>
          <Text style={{backgroundColor: 'red'}}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    backgroundColor: 'grey',
    width: 356,
    height: 40,
    alignSelf: 'center',
    borderRadius: 13,
    justifyContent: 'space-around',
  },
});
