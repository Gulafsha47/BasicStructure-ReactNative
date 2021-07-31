import React from 'react';
import {Text, View} from 'react-native';

const Greeting = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Hello{props.name}!</Text>
    </View>
  );
};

export default App = () => {
  return (
    <View style={{alignItems: 'center', top: 50}}>
      <Greeting name="Hello" />
      <Greeting name="Gulafsha" />
      <Greeting name="Khanam" />
    </View>
  );
};
