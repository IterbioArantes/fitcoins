import React from 'react';
import {StatusBar} from 'react-native';

import { Routes } from './src/routes';
import { Register } from './src/screens/cfa_cadastro';

export default function App(){
  return(
    <>
      <StatusBar barStyle='light-content'/>
      <Routes/>
    </>
    //<Register />
  );
}