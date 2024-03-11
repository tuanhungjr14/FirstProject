import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';

const lifeCycle = () => {
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
};

export default lifeCycle;

const styles = StyleSheet.create({});
