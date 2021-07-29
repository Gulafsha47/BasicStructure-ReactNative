import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  function login() {
    alert('Login function');
  }
  return (
    <View>
      <Text style={{fontSize: 40}}> Function Component</Text>
      <Button title="login" onPress={login} />
    </View>
  );
};

export default App;
