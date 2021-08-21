import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
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
    
    return(
        
        <View style={styles.contentAll}>

            <View style={styles.contentLogo}>
                <Image source={logo} style={styles.logo}/>
            </View>
            <TouchableOpacity style={styles.buttonMenu}>
                <Image source={buttonMenu}/>
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <View style={{alignItems:'center',marginTop:44}}>
                <View style={styles.contentRooms}>
                    <Text style={{color:'white',fontSize:18,marginBottom:13}}>         Comece Agora Mesmo {'\n'} Sua Aula Ou Encontre Seu Grupo</Text>
                    <View style={{flexDirection:'row',justifyContent: 'space-between',width:'100%'}}>
                        <TouchableOpacity style={styles.buttonsRooms}>
                            <Text style={styles.textbuttonsRooms}>Aulas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonsRooms}>
                            <Text style={styles.textbuttonsRooms}>Grupo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View> 
    )
}