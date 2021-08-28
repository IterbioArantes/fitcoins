import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Button, Linking } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { useNavigation } from '@react-navigation/core';

import { styles } from '../styles/salas_style';
import logo from '../../assets/logos/Fit.png'
import buttonMenu from '../../assets/buttonMenu.png'

import { Profile } from './cfa_profile';
import { Index } from '.';
import { Friends } from './friends';
import { FitCoins } from './fitCoins';
import { Routes } from '../routes'

export function Aulas() {

    function entrar() {

    }
    const navigation = useNavigation();
    const salas = [{
        titulo: "Flexão",
        professor: "Otavio",
        qtdalunos: 5,
        id: 1
    },
    {
        titulo: "Aerobico",
        professor: "Livio",
        qtdalunos: 5,
        id: 2
    },
    {
        titulo: "Funcional",
        professor: "Simone",
        qtdalunos: 4,
        id: 3
    }]

    function participarAula() {
        Linking.openURL("https://meet.jit.si/ProjetaoFiticoins")
    }




    return (

        <View style={styles.contentAll}>

            <View style={styles.contentLogo}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate("Home")}>
                    <Image source={buttonMenu} />
                </TouchableOpacity>
                <View style={styles.menuSuperior}><Text>Salas</Text></View>
                <View style={styles.separator}>
                

                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 44 }}>
                {salas.map((listaSalas) =>
                    <View key={listaSalas.id} style={styles.contentRooms}>

                        <View style={styles.topListleft}>
                            <Text style={{ color: "#480F31" }}>Grupo</Text>
                            <Text style={styles.textTopLeft}>{listaSalas.titulo}</Text>
                        </View>

                        <Text>{listaSalas.qtdalunos}</Text>

                        <View style={styles.bottonList}>
                            <Text style={styles.professor}>Professor {listaSalas.professor}</Text>
                            <TouchableOpacity onPress={participarAula} style={styles.buttonsRooms}>
                                <Text style={styles.textbuttonsRooms}> Participar </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

            </View>
        </View>
    )
}