import React from 'react';

import {
    View,
    Text
} from 'react-native';

import { Style } from './Styles/style';


export default Result = props =>  {

    return (

        <View>

            <Text style = { Style.result}>  
                Resultado da comparação: {props.result}
            </Text>

        </View>
    )
}