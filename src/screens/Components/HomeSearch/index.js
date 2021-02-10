import React from 'react';
import { Text, View } from 'react-native';
import HomeStyle from '../../Home/style';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import HomeSearchstyles from './style';
const HomeSearch = ({
    params,
}) => (
    <View>
        <View style={HomeSearchstyles.Inputbox}>
            <Text style={HomeSearchstyles.InputText}>Where to</Text>
            <View style={HomeSearchstyles.timer}>
            < AntDesign name={'clockcircle'} size={16}></AntDesign>
                <Text>Now</Text>
                <MaterialIcons name={'keyboard-arrow-down'} size={16}></MaterialIcons >
            </View>
        </View>

        <View style={HomeSearchstyles.row}> 
        <View style={HomeSearchstyles.iconContainer}>
            <AntDesign name={"clockcircle"} color={"#fff"} size={16}></AntDesign>
        </View>
        <Text style={HomeSearchstyles.destinationText}>Spin Night Club   </Text>

        </View>

{/* Bottom Heme */}
        <View style={HomeSearchstyles.row}> 
        <View style={[HomeSearchstyles.iconContainer,{backgroundColor:"#218cff"}]} >
            <Entypo name={"home"} color={"#fff"}  size={16}></Entypo>
        </View>
        <Text style={HomeSearchstyles.destinationText}>Home   </Text>

        </View>
    
    </View>
);

export default HomeSearch;
