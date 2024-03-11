import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React from 'react';
const removeData = async () => {
  try {
    await AsyncStorage.removeItem('loginData');
    DeviceEventEmitter.emit('update');
  } catch (error) {}
};

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
          alignItems: 'center',
        }}>
        <Text style={{marginLeft: 16}}>Back</Text>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 30,
            color: 'black',
          }}>
          Tài khoản
        </Text>
        <Text style={{marginLeft: 16}}>Back</Text>
        <View style={{marginRight: 16}} />
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            marginTop: 3,
            width: 142,
            height: 142,
            borderRadius: 50,
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 200,
          }}>
          <Text>he</Text>
        </TouchableOpacity>
        <Text
          style={{
            textDecorationLine: 'underline',

            alignSelf: 'center',
          }}>
          Đỗ Trường Hải
        </Text>
      </View>
      <View style={{marginLeft: 72}}>
        <TextInput>
          <Text>******hg@gmail.com</Text>
        </TextInput>
        <TextInput>**********</TextInput>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#F63535',
            alignItems: 'center',
            width: 155,
            height: 57,
            alignSelf: 'center',
            borderRadius: 64,
          }}>
          <Text>Xóa tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'relative',
            top: 121,
            backgroundColor: '#02B9AE',
            alignItems: 'center',
            width: 341,
            height: 57,
            alignSelf: 'center',
            borderRadius: 20,
          }}>
          <Text>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
