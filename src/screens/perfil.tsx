import React, { useState  } from 'react';
import { Touchable } from 'react-native';
import { View,Text, Image,TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import { styles } from '../styles/perfil_style';

export function Perfis(){

    const carrousel = [
        {
            key: '1',
            title1: 'Etapa 1 de 3',
            title2: 'Bem vindo ao \n App Fitcoins',
            title3: 'Comece agora',
            text: 'Profissionais especializados lhe \n ajudarão a alcançar seus objetivos',
            image: require('../../assets/logos/perfil.png')
        },
        {
            key: '2',
            title1: 'Etapa 2 de 3',
            title2: 'Selecione seu condicionamento',
            title3: 'Próximo',
        },
        {
            key: '3',
            title1: 'Etapa 3 de 3',
            title2: 'Detalhes Pessoais',
            title3: 'Começar',
            text: 'Deixe-nos saber de você para melhores recomendações e uma melhor  interação dentro da plataforma.',
        }

    ]

    function renderSlides({item}){
        return(
            <View style={styles.content}>
                <Text style={styles.titles1}>{item.title1}</Text>
                <Image
                    source={item.image}
                    style={styles.image}
                />
                <Text style={{fontSize:24,marginBottom:13}}>{item.title2}</Text>
                <Text style={{fontSize:16,textAlign:'center'}}>{item.text}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>{item.title3}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return(

        <AppIntroSlider
            renderItem={renderSlides}
            data={carrousel}
            activeDotStyle={{
                backgroundColor: '#480F31',
                width:13,
                height:13,
                borderRadius:13    
            }}
        />
    )
}