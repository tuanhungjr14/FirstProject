import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  DeviceEventEmitter,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import {useDispatch} from 'react-redux';
import {removeUserInfo} from '../../src/redux/reducers/userSlice';

const HomeScreen = ({navigation}) => {
  firebase.initializeApp();
  useEffect(() => {
    database()
      .ref('login')
      .on('value', snap => {
        if (snap.val()) {
          snap.forEach(item => {
            console.log(item.val());
          });
        } else {
          console.log('Can not connect to database');
        }
      });
  }, []);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=10',
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('loginData');
      DeviceEventEmitter.emit('update');
    } catch (error) {}
  };

  const onLogout = () => {
    dispatch(removeUserInfo(null));
  };

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
        <Text style={{flex: 1, textAlign: 'center', fontSize: 20}}>Home</Text>
        <View style={{marginRight: 16}} />
      </View>
      <View>
        <TouchableOpacity
          onPress={removeData}
          style={{
            height: 40,
            backgroundColor: 'red',
            alignItems: 'center',
            jViewustifyContent: 'center',
            marginTop: 32,
          }}>
          <Text style={styles.buttonText}>Xoa du lieu</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Octicons
          name="x-circle-fill"
          size={33}
          color={'black'}
          style={{position: 'absolute', left: 180, top: 255}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.statusText}>Chưa kết nối xe</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onLogout} style={styles.button}>
          <Text style={styles.buttonText}>Kết nối với xe của bạn</Text>
        </TouchableOpacity>
      </View>
      {data && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataText}>
            Data from server: {JSON.stringify(data)}
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  textContainer: {
    color: 'black',

    width: 113,
    height: 20,
    top: 398,
    left: 140,
    alignItems: 'center',

    position: 'absolute',
  },
  buttonContainer: {
    top: 455,
    left: 86.5,
    borderRadius: 64,

    alignItems: 'center',

    position: 'absolute',
  },
  button: {
    backgroundColor: '#02B9AE',
    flex: 1,
    height: '100%',
    height: 57,
    width: 221,
    borderRadius: 64,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  dataContainer: {
    flex: 1,
  },
  dataText: {
    color: 'red',
  },
});
