import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Index } from '../screens/index';
import { Register } from '../screens/cfa_cadastro';

const { Navigator, Screen} = createStackNavigator();

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
        </Navigator>
    )
}