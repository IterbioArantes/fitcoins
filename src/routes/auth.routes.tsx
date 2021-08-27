import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Index } from '../screens/index';
import { Register } from '../screens/cfa_cadastro';
import { Perfil1 } from '../screens/perfil1';
import { Perfil2 } from '../screens/perfil2';
import { Perfil3 } from '../screens/perfil3';
import { Home } from '../screens/home';
import { Profile } from '../screens/cfa_profile';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
            headerMode="none"
        >
            <Screen
                name="Index"
                component={Index}
            />            
            <Screen
                name="Register"
                component={Register}
            />
            <Screen
                name="Perfil1"
                component={Perfil1}
            />
            <Screen
                name="Perfil2"
                component={Perfil2}
            />
            <Screen
                name="Perfil3"
                component={Perfil3}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Profile"
                component={Profile}
            />            
            
        </Navigator>
    )
}
