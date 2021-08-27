import React from 'react';
import {StatusBar} from 'react-native';

import { Routes } from './src/routes';
import { Register } from './src/screens/cfa_cadastro';
import { Perfil1 } from './src/screens/perfil1';
import { Perfil2 } from './src/screens/perfil2';
import { Perfil3 } from './src/screens/perfil3';
import { Home } from './src/screens/home';
import { Profile } from './src/screens/cfa_profile';

export default function App(){
  return(
    <>
      <StatusBar barStyle='light-content'/>
      <Routes/>
    </>
    //<Perfil1/>
    //<Register/>    
  );
}