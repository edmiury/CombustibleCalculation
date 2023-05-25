import React from "react";

import {
    View,
    Image
} from 'react-native';

import { Style } from './Styles/style';
    
export default ImgResult = props => {

    return (
        <View>
            
            {
                props.result === '' ?
                    <Image
                        style={Style.img}
                        source={require('../../assets/bomb.png')}
                    />
                    :
                    props.result === 'E' ?
                        < Image
                            style={Style.img}
                            source={require('../../assets/bombE.png')}
                        />
                        :
                        <Image
                            style={Style.img}
                            source={require('../../assets/bombG.png')}
                        />
                
            }

        </View>
    );
}