import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ImeiScan = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{}}>
          <AntDesign name="leftcircle" />
        </TouchableOpacity>
        <Text
          style={{
            backgroundColor: 'red',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          Quét IMEI
        </Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#F0EFF0',
            width: 341,
            height: 347,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#F0EFF0',
            width: 341,
            height: 57,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text>IMEI</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImeiScan;

const styles = StyleSheet.create({
  container: {flex: 1},
});
