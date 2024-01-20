import React from 'react';
import {Text, View} from 'react-native';

const ExampleState = props => {
  console.log(props, 'props');
  return (
    <View>
      <Text>ExampleState</Text>
    </View>
  );
};

export default ExampleState;
