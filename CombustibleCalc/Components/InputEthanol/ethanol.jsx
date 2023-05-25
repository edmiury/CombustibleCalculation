import React from 'react';

import { View, Text, TextInput } from 'react-native';

import {Style} from './Styles/style'

export default Ethanol = props => {

    return (
        
        <View>

            <Text>  
                Digite o preço do etanol ↓
            </Text>
            <TextInput
                style={Style.txt}
                keyboardType='numeric'
                onChangeText = {text => props.setEthanol(text)}
            />

        </View>

    )
}