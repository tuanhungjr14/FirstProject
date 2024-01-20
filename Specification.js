import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Specification = () => {
  return (
    <View>
      <Text style={styles.mainContent}>Thông số xe</Text>
      <Image
        source={{
          uri: 'https://th.bing.com/th/id/R.4ca3f99e8e565b7d3f14eb6f45fee8f8?rik=qiDC%2fEu%2b35xXLg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-qZ59SPa69x0%2fUnIZyp6PQrI%2fAAAAAAAAAx0%2f8igRK5-A4HQ%2fs1600%2fSport-cars-picture%2b(2).jpg&ehk=p7ucdHLBhluy77O9iOisO8hLTzzUaN1IinxAefAFfOM%3d&risl=&pid=ImgRaw&r=0',
        }}
        style={{width: 341, height: 164, marginHorizontal: 26, marginTop: 30}}
      />
      <View style={styles.specContainer}>
        <Text>VIN</Text>
        <Text>Thông số</Text>
        <Text>DashBoard</Text>
      </View>
      <View>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      </View>
    </View>
  );
};

export default Specification;

const styles = StyleSheet.create({
  mainContent: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    marginTop: 80,
    backgroundColor: 'red',
  },
  specContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 26,
    marginTop: 10,
    color: 'black',
    fontSize: 16,
  },
});
