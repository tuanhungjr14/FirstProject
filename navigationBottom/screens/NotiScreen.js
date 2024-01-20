import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NotiScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          width: 150,
          height: 21,
          fontWeight: 'bold',
          justifyContent: 'center',
          top: 32,
          flex: 1,
        }}>
        Thông báo
      </Text>
      <View>
        <View style={styles.flexNoti}>
          <MaterialIcons name="electric-bolt" style={styles.items} />
          <Text style={{textAlign: 'center'}}>Điện áp ắc quy thấp</Text>
          <Text>text text text text texttexttexttexttexttexttexttext</Text>
        </View>
        <View style={styles.flexNoti}>
          <Text>Lỗi hệ thống</Text>
          <Text>text text text text texttexttexttexttexttexttexttext</Text>
        </View>
        <View style={styles.flexNoti}>
          <Text>Lỗi hệ thống</Text>
          <Text>text text text text texttexttexttexttexttexttexttext</Text>
        </View>
      </View>
    </View>
  );
};

export default NotiScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  items: {
    alignItems: 'flex-start',
  },
  headerNoti: {
    fontSize: 16,
    backgroundColor: 'red',
  },
  flexNoti: {
    backgroundColor: '#F0EFF0',
    justifyContent: 'space-around',
    flex: 1,
    borderRadius: 20,
    width: 341,
    height: 106,
  },
});
