import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

import { styles } from '../styles/carteira_styles';
import logo from '../../assets/logos/Fit.png'
import buttonMenu from '../../assets/buttonMenu.png'

import { Profile } from './cfa_profile';
import { Index } from '.';
import { Friends } from './friends';
import { FitCoins } from './fitCoins';

export function Carteira(){

    const navigation = useNavigation();

    function toMenu(){
        navigation.goBack();
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
            <View style={{alignItems:'center',marginTop:320}}>
                <View style={styles.contentRooms}>
                    <View style={styles.buttonsRoomsHeader}>
                        <Text style={styles.textbuttonsRoomsHeader}>Carteira</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent: 'space-between',width:'100%', paddingTop: 30}}>
                        <View style={styles.buttonsRooms}>
                            <Text style={styles.textbuttonsRooms}>Saldo </Text>
                            <Text style={styles.textbuttonsRooms}>R$00,00 </Text>
                        </View>
                        <View style={styles.buttonsRooms}>
                            <Text style={styles.textbuttonsRooms}>Bônus</Text>
                            <Text style={styles.textbuttonsRooms}>R$00,00 </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View> 
    )
}