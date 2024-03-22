import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
const LanguageScreen = () => {
  const navigation = useNavigation();
  const goBackToPreScreen = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Header title="Ngôn ngữ" headerStyle={styles.headers} onPress={'Tabs'} />
      <View>
        <TouchableOpacity style={styles.buttons}>
          <Text style={{color: 'black'}}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={{color: 'black'}}>Tiếng Việt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  buttons: {
    backgroundColor: '#F0EFF0',
    borderRadius: 20,
    paddingBottom: 10,
    width: 341,
    height: 57,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  headers: {
    paddingBottom: 40,
  },
});
