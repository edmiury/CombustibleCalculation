import React from 'react';

import { View, Text, TouchableHighlight } from 'react-native';

import { Style } from './Styles/style';

export default ButtonCalc = props => {

    const finalResult = () => {

        const ethanol = Number.parseFloat(props.ethanol);
        const gasoline = Number.parseFloat(props.gasoline);

        if ( ethanol === 0 || !ethanol) {
            alert('Valores do etanol inválidos!');
            return
        }

        if (gasoline === 0 || !gasoline ) {
            alert('Valores da gasolina inválidos!');
            return
        }

        let res;
        let calc = ((ethanol / gasoline) * 100).toFixed(1);

        if (calc > 70) {
            res = 'Gasolina';
        } else {
            res = 'Etanol';
        }
        
        alert(`Ao calcular os valores notamos que o Etanol está em ${calc}% da Gasolina , portando a melhor opção é ${res}`);

        props.setResult(res);
    } 

    return (
                   
        <View>

            <TouchableHighlight
                style={Style.button}
                onPress={() => finalResult()}
            >

                <Text style={{
                    color: '#fff',
                    fontSize: 15
                }}>
                    Calcular os preços
                </Text>

            </TouchableHighlight>

        </View>
        
    );
}