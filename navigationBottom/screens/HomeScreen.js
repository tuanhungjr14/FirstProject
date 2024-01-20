import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=10',
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Octicons name="x-circle-fill" size={33} color={'black'} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.statusText}>Chưa kết nối xe</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={fetchData} style={styles.button}>
          <Text style={styles.buttonText}>Kết nối với xe của bạn</Text>
        </TouchableOpacity>
      </View>
      {data && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataText}>
            Data from server: {JSON.stringify(data)}
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  textContainer: {
    color: 'black',

    width: 113,
    height: 20,
    top: 398,
    left: 140,
    alignItems: 'center',

    position: 'absolute',
  },
  buttonContainer: {
    top: 455,
    left: 86.5,
    borderRadius: 64,

    alignItems: 'center',

    position: 'absolute',
  },
  button: {
    backgroundColor: '#02B9AE',
    flex: 1,
    height: '100%',
    height: 57,
    width: 221,
    borderRadius: 64,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  dataContainer: {
    flex: 1,
  },
  dataText: {
    color: 'red',
  },
});
