import React, { useState } from 'react';
import {SafeAreaView,} from 'react-native';

import Gasoline from './Components/InputGasoline/gasoline';
import Ethanol from './Components/InputEthanol/ethanol';
import ButtonResult from './Components/ButtonCalc/button';
import Result from './Components/Result/result';
import Image from './Components/ImgResult/imgresult';

import { Style } from './style';

export default function App() {

  const [ethanol, setEthanol] = useState(0);
  const [gasoline, setGasoline] = useState(0);
  const [result, setResult] = useState('');


  return (
    
    <SafeAreaView style = {Style.container}>

      <Gasoline
        setGasoline = { setGasoline }
      />

      <Ethanol
        setEthanol = {setEthanol}
      />

      <ButtonResult
        ethanol = {ethanol}
        gasoline = {gasoline}
        setResult = {setResult}
      />

      <Result
        result = {result}
      />

      <Image
        result = {result.charAt(0)}
      />

    </SafeAreaView>

  );
}