import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import OnOffButton from '../../components/OnOffButton';
import Header from '../../components/Header';

const ImeiScan = () => {
  const navigation = useNavigation();
  const goBackToPreScreen = () => {
    navigation.goBack();
  };

  const onReadQRCode = e => {
    console.log('Scanned QR code:', e);
  };
  return (
    <View style={styles.container}>
      <Header title="Quét Imei" onPress="Tabs" />
      <View>
        <TouchableOpacity style={styles.cameras}>
          <Text>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text>IMEI</Text>
        </TouchableOpacity>
        <OnOffButton />
      </View>
    </View>
  );
};

export default ImeiScan;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  button: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F0EFF0',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
  },
  buttons: {
    backgroundColor: '#F0EFF0',
    width: 341,
    height: 57,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  cameras: {
    backgroundColor: '#F0EFF0',
    width: 341,
    height: 347,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
