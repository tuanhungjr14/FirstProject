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
import {useDispatch} from 'react-redux';
import {removeUserInfo} from '../../redux/reducers/userSlice';
import {useNavigation} from '@react-navigation/core';
import Button from '../../components/Button';

const HomeScreen = () => {
  // firebase.initializeApp();
  // useEffect(() => {
  //   database()
  //     .ref('login')
  //     .on('value', snap => {
  //       if (snap.val()) {
  //         snap.forEach(item => {
  //           console.log(item.val());
  //         });
  //       } else {
  //         console.log('Can not connect to database');
  //       }
  //     });
  // }, []);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
      <View>
        <Octicons
          name="x-circle-fill"
          size={33}
          color={'black'}
          style={{alignSelf: 'center', paddingTop: 205}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.statusText}>Chưa kết nối xe</Text>
      </View>

      <Button
        title="Kết nối với xe của bạn"
        color="white"
        onPress={() => navigation.navigate('ImeiScan')}
        btnStyle={{
          width: 221,
          height: 57,
          marginTop: 23,
          borderRadius: 64,
        }}
      />
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
    alignSelf: 'center',
    marginTop: 140,
  },
  buttonContainer: {
    borderRadius: 64,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#02B9AE',
    marginTop: 47,
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
