import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';

const arr = [
  {
    id: 1,
    icon: 'electric-bolt',
    title: 'Điện áp ắc quy thấp',
    time: '20:22',
    content:
      'content content content content content content content content content content content content content content content content content content content content',
  },

  {
    id: 2,
    icon: 'electric-bolt',
    title: 'Lỗi hệ thống',
    time: '20:22',
    content: 'content  ',
  },
  {
    id: 3,
    icon: 'electric-bolt',
    title: 'Lỗi hệ thống',
    time: '20:22',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
  },
  {
    id: 4,
    icon: 'electric-bolt',
    title: 'Điện áp ắc quy thấp',
    time: '20:22',
    content:
      'content content content content content content content content content content content content content content content content content content content content',
  },
  {
    id: 5,
    icon: 'electric-bolt',
    title: 'Điện áp ắc quy thấp',
    time: '20:22',
    content:
      'content content content content content content content content content content content ',
  },
  {
    id: 6,
    icon: 'electric-bolt',
    title: 'Điện áp ắc quy thấp',
    time: '20:22',
    content: 'content content content content content content ',
  },
];

const NotiScreen = () => {
  const [listItems, setlistItems] = useState(arr);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          flex: 1,
          backgroundColor: '#F0EFF0',
          paddingVertical: 14,
          paddingHorizontal: 24,
          flexDirection: 'row',
          marginHorizontal: 24,
          borderRadius: 16,
          marginTop: 14,
          alignItems: 'center',
        }}>
        <MaterialIcons name={item.icon} size={30} color={'black'} />

        <View style={{marginLeft: 16, flex: 1}}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Text style={{flex: 1}}>{item.title}</Text>
            <Text>{item.time}</Text>
          </View>

          <View style={{flex: 1}}>
            <Text numberOfLines={3} style={{lineHeight: 20, marginTop: 4}}>
              {item.content}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Thông báo"
        rightIcon={false}
        leftIcon={false}
        headerStyle={{paddingVertical: 70}}
      />
      <FlatList
        data={listItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NotiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  hour: {
    paddingLeft: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  items: {
    marginVertical: 36,
    marginHorizontal: 27,
    color: 'black',
  },
  headerNoti: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
  },
  flexNoti: {
    backgroundColor: '#F0EFF0',
    marginVertical: 10,
    borderRadius: 20,
    height: 106,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 16,
  },
  textContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
