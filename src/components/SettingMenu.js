import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
const SettingMenu = ({
  title,
  iconName,
  onPress,
  menuStyle,
  line = true,
  angleRights,
}) => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <FontAwesome name={iconName} style={[styles.icon, menuStyle]} />
      <View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(onPress)}
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textColumn}>{title}</Text>
            <FontAwesome
              name="angle-right"
              style={[styles.angleRight, angleRights]}
            />
          </TouchableOpacity>
        </View>
        {line && <View style={styles.textLine} />}
      </View>
    </View>
  );
};

export default SettingMenu;

const styles = StyleSheet.create({
  textLine: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    width: 295,
    alignItems: 'center',
    paddingBottom: 22,
    color: 'black',
  },
  angleRight: {
    color: 'black',
    fontSize: 26,
    paddingTop: 22,
  },
  textColumn: {
    fontSize: 16,
    color: 'black',
    paddingTop: 22,
  },
  icon: {
    color: 'black',
    paddingVertical: 22,
    paddingRight: 29,
    fontSize: 26,
  },
});
