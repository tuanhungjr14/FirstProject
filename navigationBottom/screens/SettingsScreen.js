import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AccountScreen from './SettingsComponent/AccountScreen';

const Stack = createNativeStackNavigator();
const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 30, paddingBottom: 46}}>Cài Đặt</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome name="user" style={styles.icon}></FontAwesome>
            <View>
              <Text style={styles.textColumn}>Tài khoản</Text>
              <View style={styles.textLine} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome name="user" style={styles.icon}></FontAwesome>
          <View>
            <Text style={styles.textColumn}>Cài đặt ngôn ngữ</Text>
            <View style={styles.textLine} />
          </View>
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome name="user" style={styles.icon}></FontAwesome>
          <View>
            <Text style={styles.textColumn}>Hướng dẫn sử dụng</Text>
            <View style={styles.textLine} />
          </View>
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome name="user" style={styles.icon}></FontAwesome>
          <View>
            <Text style={styles.textColumn}>Phản hồi</Text>
            <View style={styles.textLine} />
          </View>
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome name="user" style={styles.icon}></FontAwesome>
          <View>
            <Text style={styles.textColumn}>Cập nhật</Text>
            <View style={styles.textLine} />
          </View>
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome name="user" style={styles.icon}></FontAwesome>
          <View>
            <Text style={styles.textColumn}>Giới thiệu</Text>
            <View style={styles.textLine} />
          </View>
        </View>
      </View>
    </View>
  );
};
const App = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountScreen"
        options={{headerShown: false}}
        component={AccountScreen}
      />
    </Stack.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 30,
    paddingRight: 26,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  icon: {
    paddingTop: 22,
    paddingRight: 22,
    fontSize: 26,
  },
  textColumn: {
    fontSize: 16,
    color: 'black',
    paddingTop: 22,
  },
  textLine: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    width: 295,
    alignItems: 'center',
    paddingBottom: 22,
    color: 'black',
  },
});
