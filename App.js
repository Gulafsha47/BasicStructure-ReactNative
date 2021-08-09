import React from 'react';
import {Image, ScrollView, Text} from 'react-native';
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 50,
  height: 50,
};
const App = () => (
  <ScrollView>
    <Text style={{fontSize: 40}}>scroll me </Text>

    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />

    <Text style={{fontSize: 40}}>If You Like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />

    <Text style={{fontSize: 80}}>scroll me down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />

    <Text style={{fontSize: 50}}>Welcome to the react-native</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
  </ScrollView>
);
export default App;
