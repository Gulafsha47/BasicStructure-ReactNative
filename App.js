import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const App = () => {
  return (
    <View style={{padding: 30}}>
      <View>
        <TextInput
          placeholder="course goal"
          style={{borderColor: 'black', borderWidth: 1}}
        />
        <Button title="Add" />
      </View>
    </View>
  );
};
export default App;
