import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Button, Linking } from 'react-native';
import { createDrawerNavigator  } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

import { styles } from '../styles/home_style';
import logo from '../../assets/logos/Fit.png'
import buttonMenu from '../../assets/buttonMenu.png'

import { Profile } from './cfa_profile';
import { Index } from '.';
import { Friends } from './friends';
import { FitCoins } from './fitCoins';

export function Home(){

    const navigation = useNavigation();

    function toCarteira(){
        Linking.openURL("https://meet.jit.si/ProjetaoFiticoins");
    }

    function toMenu(){
        navigation.navigate('Menu');
    }
    
    return(
        
        <View style={styles.contentAll}>

            <View style={styles.contentLogo}>
                <Image source={logo} style={styles.logo}/>
            </View>
            <TouchableOpacity onPress={toMenu} style={styles.buttonMenu}>
                <Image source={buttonMenu}/>
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <View style={{alignItems:'center',marginTop:44}}>
                <View style={styles.contentRooms}>
                    <Text style={{color:'white',fontSize:18,marginBottom:13}}>         Comece Agora Mesmo {'\n'} Sua Aula Ou Encontre Seu Grupo</Text>
                    <View>
                        <TouchableOpacity onPress={toCarteira} style={styles.buttonsRooms}>
                            <Text style={styles.textbuttonsRooms}> Encontrar Aula</Text>
                        </TouchableOpacity>                        
                    </View>
                </View>
            </View>
        </View> 
    )
}