import React from 'react';

import {
    View,
    Text,
    TextInput
} from 'react-native';

import { Style } from './Styles/style';

export default Gasoline = props => {
    
    return (

        <View>

            <Text>
                Digite o preço da gasolina ↓
            </Text>
            <TextInput
                style={Style.txt}
                keyboardType='numeric'
                onChangeText = { text => props.setGasoline(text)}
            />
            
        </View>
    )
}