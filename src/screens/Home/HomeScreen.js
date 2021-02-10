import React from 'react';
import { Text, View } from 'react-native';
import CovidMessage from '../Components/HomeMap/CovidMessage';
import HomeMap from '../Components/HomeMap/HomeMap';
import HomeSearch from '../Components/HomeSearch';

const HomeScreen = ({    params,}) => (
    <View>
        
        <HomeMap/>
        <CovidMessage/>    
        <HomeSearch></HomeSearch> 
           <Text>Home </Text> 
    </View>);

export default HomeScreen;