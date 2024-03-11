import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NotiScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 40,
          textAlign: 'center',
          alignItems: 'center',
          marginBottom: 35,
          paddingBottom: 10,
          color: 'black',
        }}>
        Thông báo
      </Text>

      <View>
        <TouchableOpacity>
          <View style={styles.flexNoti}>
            <View>
              <MaterialIcons
                name="electric-bolt"
                size={34}
                style={styles.items}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headerNoti}>Điện áp ắc quy thấp</Text>
              <Text style={styles.hour}>20:22</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.flexNoti}>
            <View>
              <MaterialIcons
                name="electric-bolt"
                size={34}
                style={styles.items}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headerNoti}>Điện áp ắc quy thấp</Text>
              <Text style={styles.hour}>20:22</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.flexNoti}>
            <View>
              <MaterialIcons
                name="electric-bolt"
                size={34}
                style={styles.items}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headerNoti}>Điện áp ắc quy thấp</Text>
              <Text style={styles.hour}>20:22</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: 'white',
  },
  hour: {
    alignItems: 'flex-end',

    paddingLeft: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  items: {
    alignItems: 'flex-start',
    flex: 1,
    marginVertical: 36,
    marginHorizontal: 27,
    color: 'black',
  },
  headerNoti: {
    fontSize: 16,
    alignItems: 'flex-start',
    fontWeight: 'bold',
    color: 'black',
  },
  flexNoti: {
    backgroundColor: '#F0EFF0',
    marginVertical: 10,
    borderRadius: 20,
    width: 341,
    height: 106,
    flexDirection: 'row',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },
});
