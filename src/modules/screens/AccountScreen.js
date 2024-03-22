import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import {removeUserInfo} from '../../redux/reducers/userSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {options} from '@react-native-community/cli-platform-android/build/commands/buildAndroid';
const AccountScreen = () => {
  const userInfo = useSelector(state => state.user.data);

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(removeUserInfo(null));
  };

  // const removeData = async () => {
  //   try {
  //     await AsyncStorage.removeItem('loginData');
  //     DeviceEventEmitter.emit('update');
  //   } catch (error) {}
  // };

  const maskEmail = email => {
    const atIndex = email.indexOf('@');
    const visibleChars = '*'.repeat(Math.min(email.length - atIndex, 4));
    const maskedChars = email.substring(atIndex - 2, atIndex);
    return visibleChars + maskedChars + email.substring(atIndex);
  };
  const [selectImage, setselectImage] = useState('');
  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, response => {
      console.log(response);
    });
  };
  return (
    <View style={styles.container}>
      <Header title="Tài Khoản" onPress="Tabs" />
      <View style={{flex: 1}}>
        <View style={{marginTop: 32}}>
          <TouchableOpacity style={styles.images}>
            <View style={styles.viewLogo}>
              <Image
                style={styles.logos}
                source={require('/DevPro/React Native/Project/FirstProject/assets/Avatar.png')}
              />
              <Fontisto name="camera" size={50} style={styles.cameras} />
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={styles.names}>{userInfo.name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
              <Feather
                name="edit-3"
                size={24}
                style={{paddingTop: 24, paddingLeft: 10}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 10,
            }}>
            <MaterialIcons name="verified" size={18} style={styles.veriIcon} />
            <Text style={{color: '#02B9AE', paddingLeft: 7, fontSize: 19}}>
              Verified
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{marginHorizontal: 26}}>
            <MaterialCommunityIcons
              size={28}
              style={{
                paddingTop: 10,
                color: 'black',
              }}
              name="email"
            />
            <MaterialCommunityIcons
              size={28}
              style={{
                paddingTop: 30,
                color: 'black',
              }}
              name="lock"
            />
          </View>
          <View>
            <Text>Email</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>{maskEmail(userInfo.email)}</Text>
              <MaterialIcons
                name="verified"
                size={18}
                style={{color: '#02B9AE', paddingLeft: 7}}
              />
            </View>
            <View style={styles.textLine} />
            <Text style={{marginTop: 10}}>Mật khẩu</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>******</Text>
              <Feather name="edit-3" size={24} />
            </View>
          </View>
        </View>

        <Button title="Xóa tài khoản" btnStyle={styles.deleteAccount} />
      </View>

      <Button
        onPress={onLogout}
        title="Đăng xuất"
        btnStyle={{width: 341, height: 57, borderRadius: 20, marginBottom: 32}}
      />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  veriIcon: {color: '#02B9AE', paddingLeft: 7, paddingTop: 5},
  names: {
    textDecorationLine: 'underline',
    fontSize: 22,
    color: 'black',
    paddingTop: 20,
  },
  images: {
    marginTop: 3,
    width: 142,
    height: 142,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 200,
  },
  logos: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  textLine: {
    display: 'flex',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    width: 295,
    alignItems: 'center',
    paddingBottom: 22,
    color: 'black',
  },
  deleteAccount: {
    backgroundColor: '#F63535',
    width: 155,
    height: 57,
    borderRadius: 64,
    marginTop: 32,
  },
  cameras: {
    position: 'absolute',
    top: 50,
    left: 45,
    color: 'white',
    opacity: 0.5,
  },
});
