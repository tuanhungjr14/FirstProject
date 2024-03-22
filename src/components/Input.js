import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const Input = ({
  title,
  value,
  onChangeText,
  icon,
  eye = false,
  secure = true,
}) => {
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={styles.input}>
      <FontAwesome size={25} name={icon} style={{paddingLeft: 25}} />
      <View style={styles.line} />
      <TextInput
        style={{flex: 1}}
        placeholder={title}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secure && !getPasswordVisible}
      />
      {eye && (
        <TouchableOpacity
          onPress={() => setPasswordVisible(!getPasswordVisible)}>
          <Entypo
            name="eye"
            size={20}
            color="black"
            style={{paddingHorizontal: 25}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
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
  line: {
    width: 1,
    height: 30,
    backgroundColor: 'black',
    marginHorizontal: 13,
  },
});
