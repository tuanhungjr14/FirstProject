import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import firebaseApp from './Component/FirebaseConfig'; // Import firebaseConfig.js file

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng kí</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
