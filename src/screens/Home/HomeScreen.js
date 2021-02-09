import React from 'react';
import { Text, View } from 'react-native';
import CovidMessage from '../Components/HomeMap/CovidMessage';
import HomeMap from '../Components/HomeMap/HomeMap';

const HomeScreen = ({    params,}) => (
    <View>
        
        <HomeMap/>
        <CovidMessage/>     
           <Text>Home </Text> 
    </View>);

export default HomeScreen;