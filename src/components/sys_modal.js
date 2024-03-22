import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const SysModal = ({message, visible, onHide}) => {
  return (
    //Modal is a float window
    <Modal visible={visible} transparent={true}>
      <View style={styles.background}>
        <View style={styles.border}>
          <View style={styles.titleStyle}>
            <Text style={styles.titleFont}>Thông Báo</Text>
          </View>
          <View>
            <Text>{message}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.closeBtn} onPress={onHide}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SysModal;

const styles = StyleSheet.create({
  closeBtn: {
    alignItems: 'center',
    padding: 23,
    backgroundColor: '#02B9AE',
    borderRadius: 20,
    width: 341,
    alignSelf: 'center',
  },
  titleStyle: {alignItems: 'center'},
  background: {
    flex: 1,
    backgroundColor: 'rgba(00,00,00,.5)',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
  },
  titleFont: {fontSize: 20, color: 'black'},
  border: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});
