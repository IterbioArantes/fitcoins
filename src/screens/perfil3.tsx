import React, {useState} from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/perfis_style';

export function Perfil3(){

    return(
        <View style={styles.content}>
            <Text style={styles.titles1}>Etapa 3 de 3</Text>

            <Text style={{fontSize:24,marginBottom:13}}>Bem vindo ao {'\n'} App Fitcoins</Text>
            <Text style={{fontSize:16,textAlign:'center'}}>Profissionais especializados lhe {'\n'} ajudarão a alcançar seus objetivos</Text>
            <TouchableOpacity onPress={() => Alert.alert('aaa')} style={styles.button}>
                <Text style={styles.buttonTitle}>Comece Agora</Text>
            </TouchableOpacity>
            <View style={styles.flexDots}>
                <View style={styles.noColorDot}></View>
                <View style={styles.noColorDot}></View>
                <View style={styles.colorDot}></View>
            </View>
        </View>
    )
}