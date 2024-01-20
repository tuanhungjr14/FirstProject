import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const State = () => {
  const [name, setName] = useState('Hung');
  return <Text>My name is {name}</Text>;
};

export default State;

const styles = StyleSheet.create({});
