import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          height: '10%',
          backgroundColor: 'powderblue',
        }}
      />

      <View
        style={{
          width: '60%',
          height: '20%',
          backgroundColor: 'skyblue',
        }}
      />

      <View
        style={{
          width: '30%',
          height: '20%',
          backgroundColor: 'steelblue',
        }}
      />
    </View>
  );
};
export default App;
