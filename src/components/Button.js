import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const Button = ({
  title,
  color = '#FFF',
  onPress,
  btnStyle,
  disabled,
  loading = false,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.button, btnStyle]}>
        <Text style={[styles.text, {color}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#02B9AE',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
  },
});

export default Button;
