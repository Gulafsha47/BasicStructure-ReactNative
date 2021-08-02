import React from 'react';
import {Text, TextInput, View} from 'react-native';
const cat = () => {
  return (
    <View>
      <Text>custom components</Text>
      <TextInput
        STYLES={{height: 48, borderColor: 'red', borderWidth: 1}}
        defaultValue="Name me!"
      />
    </View>
  );
};

export default cat;
