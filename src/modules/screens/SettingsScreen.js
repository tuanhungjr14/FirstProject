import {StyleSheet, View} from 'react-native';
import React from 'react';
import SettingMenu from '../../components/SettingMenu';
import Header from '../../components/Header';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        title="Cài đặt"
        leftIcon={false}
        rightIcon={false}
        headerStyle={{paddingBottom: 70}}
      />
      <SettingMenu title="Tài khoản" iconName="user" onPress="AccountScreen" />
      <SettingMenu
        title="Cài đặt ngôn ngữ"
        iconName="language"
        onPress="LanguageScreen"
      />
      <SettingMenu title="Hướng dẫn sử dụng" iconName="book" />
      <SettingMenu title="Phản hồi " iconName="commenting-o" />
      <SettingMenu title="Cập nhật" iconName="commenting-o" />
      <SettingMenu
        title="Cảnh báo"
        iconName="info-circle"
        line={false}
        angleRights={{paddingLeft: 220}}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 26,
    backgroundColor: 'white',
  },
  angleRight: {
    color: 'black',
    fontSize: 26,
    paddingTop: 22,
  },
  icon: {
    color: 'black',
    paddingVertical: 22,
    paddingRight: 22,
    fontSize: 26,
  },
  menuStyle: {
    paddingHorizontal: 30,
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
