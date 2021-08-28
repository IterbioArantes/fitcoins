import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/menu_style'
import logo from '../../assets/logos/Fit.png'
import classes from '../../assets/logos/aula-online.png'
import edit from '../../assets/logos/editar.png'
import money_1 from '../../assets/logos/money_1.png'
import wallet from '../../assets/logos/wallet.png'
import exit from '../../assets/logos/sair.png'

export function Menu(){

    const navigation = useNavigation();

    function toClass(){
        navigation.navigate("Class")
    }

    function toFriends(){
        navigation.navigate("Friends")
    }

    function toWallet(){
        navigation.navigate("Carteira")
    }
    function toFitCoins(){
        navigation.navigate("FitCoins")
    }

    function toProfile(){
        navigation.navigate("Profile")
    }

    function toExit(){
        navigation.navigate("Index")
    }

    return(
        <>
            <View style={styles.content}>
                <View style={styles.contentLogo}>
                    <Image source={logo} style={styles.logo}/>
                </View>
                <TouchableOpacity onPress={toClass} style={[styles.button1,styles.button]}>
                    <Text style={styles.texto}>Aulas</Text>
                    <Image source={classes} style={styles.icons}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={toFriends} style={styles.button}>
                    <Text style={styles.texto}>Amigos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toWallet} style={styles.button}>
                    <Text style={styles.texto}>Carteira</Text>
                    <Image source={wallet} style={styles.icons}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={toFitCoins} style={styles.button}>
                    <Text style={styles.texto}>FitCoins</Text>
                    <Image source={money_1} style={styles.icons}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={toProfile} style={styles.button}>
                    <Text style={styles.texto}>Editar Perfil</Text>
                    <Image source={edit} style={styles.icons}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={toExit} style={styles.button}>
                    <Text style={styles.texto}>Sair</Text>
                    <Image source={exit} style={styles.icons}/>
                </TouchableOpacity>
            </View>
        </>
    )
}