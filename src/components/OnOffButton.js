import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const OnOffButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    setIsActive(!isActive);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        style={{paddingTop: 20, paddingLeft: 20}}>
        <View style={[styles.button, isActive ? styles.activeButton : null]}>
          <View
            style={[styles.circle, isActive ? styles.activeCircle : null]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OnOffButton;

const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: '#02B9AE',
  },
  activeCircle: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
});
