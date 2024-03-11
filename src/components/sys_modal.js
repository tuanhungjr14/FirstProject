import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const SysModal = ({message, visible, onHide}) => {
  return (
    //Modal is a float window
    <Modal visible={visible} transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(00,00,00,.5)',
          justifyContent: 'center',
          alignContent: 'center',
          padding: 20,
        }}>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: 'black'}}>Alert</Text>
          </View>
          <View>
            <Text>{message}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                padding: 23,
                backgroundColor: '#02B9AE',
                borderRadius: 20,
                width: 341,
                alignSelf: 'center',
              }}
              onPress={onHide}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SysModal;

const styles = StyleSheet.create({});
