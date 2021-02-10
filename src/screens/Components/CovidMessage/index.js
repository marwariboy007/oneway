import React from 'react';
import { Text, View } from 'react-native';
import HomeStyle from '../../../Home/style';

const CovidMessage = ({
    params,
}) => (
    <View style={HomeStyle.container}>
        <Text style={HomeStyle.title}>CovidMessage</Text>
        <Text style={HomeStyle.text}>Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.
Use  to show the individual deprecation warnings.</Text>
<Text style={HomeStyle.learnmore}>Learn More...</Text>
    </View>
);

export default CovidMessage;
