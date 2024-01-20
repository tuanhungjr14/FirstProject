import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

const Profile = () => {
  const [name, setName] = useState('Hung');
  const Click = () => {
    setName('Pro');
  };
  return (
    <View>
      <Text>my name is {name}</Text>
      <Button title="Update" onPress={Click} style={background:green&rbrace; />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {padding: 8, background: 'green'},
});
