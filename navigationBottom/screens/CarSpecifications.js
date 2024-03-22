import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CarSpecifications = () => {
  const [isActive, setIsActive] = useState(false);
  const goBackToPreScreen = () => {
    navigation.goBack();
  };

  const handlePress = () => {
    setIsActive(!isActive);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 26,
          paddingTop: StatusBar.currentHeight,
        }}>
        <TouchableOpacity onPress={goBackToPreScreen}>
          <MaterialCommunityIcons
            name="chevron-left-circle"
            size={27}
            style={{color: 'black'}}
          />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 30,
            color: 'black',
          }}>
          Thêm thông số xe
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
          <MaterialCommunityIcons
            name="home-circle"
            size={27}
            style={{color: 'black'}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={styles.carImg}
          source={require('/DevPro/React Native/Project/FirstProject/assets/car.png')}
        />
      </View>
      <ScrollView>
        <View style={{marginLeft: 26, marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.textColumn}>Tốc độ xe</Text>
              <View style={styles.textLine} />
            </View>
            <View>
              <TouchableOpacity onPress={handlePress} style={{paddingTop: 10}}>
                <View
                  style={[
                    styles.button,
                    isActive ? styles.activeButton : null,
                  ]}>
                  <View
                    style={[
                      styles.circle,
                      isActive ? styles.activeCircle : null,
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.textColumn}>Tài khoản</Text>
            <View style={styles.textLine} />
          </View>
          <View>
            <Text style={styles.textColumn}>Tài khoản</Text>
            <View style={styles.textLine} />
          </View>
          <View>
            <Text style={styles.textColumn}>Tài khoản</Text>
            <View style={styles.textLine} />
          </View>
          <View>
            <Text style={styles.textColumn}>Tài khoản</Text>
            <View style={styles.textLine} />
          </View>
          <View>
            <Text style={styles.textColumn}>Tài khoản</Text>
            <View style={styles.textLine} />
          </View>
          <View>
            <Text style={styles.textColumn}>Tài khoản</Text>
            <View style={styles.textLine} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CarSpecifications;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFF'},
  textColumn: {
    fontSize: 16,
    color: 'black',
    paddingTop: 22,
  },
  textLine: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    width: 341,
    alignItems: 'center',
    paddingBottom: 22,
    color: 'black',
  },
  carImg: {width: 314, height: 164, alignSelf: 'center'},
  button: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F0EFF0',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
  },
  activeButton: {
    backgroundColor: '#02B9AE',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  activeCircle: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
});
