import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Header = ({
  title,
  color = 'black',
  onPress,
  headerStyle,
  leftIcon = (
    <MaterialCommunityIcons
      name="chevron-left-circle"
      size={27}
      style={{color: 'black'}}
    />
  ),
  rightIcon = (
    <MaterialCommunityIcons
      name="home-circle"
      size={27}
      style={{color: 'black'}}
    />
  ),
}) => {
  const navigation = useNavigation();
  const goBackToPreScreen = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.header, headerStyle]}>
      <TouchableOpacity onPress={goBackToPreScreen}>
        {leftIcon}
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          fontSize: 30,
          color: 'black',
        }}>
        {title}
      </Text>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Tabs', {
            screen: 'Home',
          })
        }>
        {rightIcon}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 26,
    paddingTop: StatusBar.currentHeight,
  },
});
