/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/Home/HomeScreen';


const App= () => {
  return (
    <>      
       <HomeScreen/>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
