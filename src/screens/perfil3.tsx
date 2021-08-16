import React, {useState,useRef} from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/perfis_style';

export function Perfil3(){

    const textInput1 = useRef<TextInput>(null) 
    const textInput2 = useRef<TextInput>(null);
    const textInput3 = useRef<TextInput>(null);

    function clickDate(){
        textInput1.current?.focus();
    }

    function clickHeigh() {
        textInput2.current?.focus();
    }

    function clickWeight() {
        textInput3.current?.focus();
    }

    const [styleGener,setStyleGener] = useState(styles.detailGener);
    const [styleGener2,setStyleGener2] = useState(styles.detailGener);

    function styleGenerValidateM(){
        if(styleGener2 == styles.detailGenerPressed){
            setStyleGener2(styles.detailGener)
        }
        if(styleGener == styles.detailGener){
            setStyleGener(styles.detailGenerPressed)
        } else {
            setStyleGener(styles.detailGener)
        }
    }

    function styleGenerValidateW(){
        if(styleGener == styles.detailGenerPressed){
            setStyleGener(styles.detailGener)
        }
        if(styleGener2 == styles.detailGener){
            setStyleGener2(styles.detailGenerPressed)
        } else {
            setStyleGener2(styles.detailGener)
        }
    }

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    function onToggleSwitch(){
        setIsSwitchOn(!isSwitchOn);
    }

    return(
        <>
            <View style={styles.content}>
                <Text style={styles.titles1}>Etapa 3 de 3</Text>

                <Text style={{fontSize:24,marginTop:20}}>Detalhes Pessoais</Text>
                <Text style={{fontSize:16,width:300,marginTop:17}}>Deixe-nos saber de você para melhores recomendações e uma melhor interação dentro da plataforma</Text>
            </View>
            <View style={styles.content3}>
                <View style={styles.detailsContent}>
                    <Text style={{fontSize:20,color:'#707070',marginBottom:3}}>Google Fit</Text>
                </View>
                <View style={{marginBottom:24,justifyContent:'space-between',flexDirection:'row'}}>
                    <Text style={{fontSize:14,color:'#707070',marginTop:4}}>Permita acesso aos seus parametros</Text>
                    <Switch value={isSwitchOn} onValueChange={() => onToggleSwitch()} />
                </View>
                <View style={styles.separator2}></View>
                <TouchableOpacity onPress={()=>clickDate()} style={styles.detailsContentPress}>
                    <Text style={styles.detailsTitle}>Aniversário</Text>
                    <View style={styles.detailsContent}>
                        <TextInput style={{fontSize:18,color:'#480F31'}} placeholder={'dd/mm/yyyy'} ref={textInput1}></TextInput>
                    </View>
                </TouchableOpacity>
                <View style={styles.separator2}></View>           
                <TouchableOpacity onPress={()=>clickHeigh()} style={styles.detailsContentPress}>
                    <Text style={styles.detailsTitle}>Altura</Text>
                    <View style={styles.detailsContent}>
                        <TextInput ref={textInput2} maxLength = {3} keyboardType={'numeric'} style={styles.detailInput}></TextInput>
                        <Text style={styles.detailsDesc}>cm</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.separator2}></View>
                <TouchableOpacity onPress={()=>clickWeight()} style={styles.detailsContentPress}>
                    <Text style={styles.detailsTitle}>Peso</Text>
                    <View style={styles.detailsContent}>
                        <TextInput ref={textInput3} maxLength = {3} keyboardType={'numeric'} style={styles.detailInput}></TextInput>
                        <Text style={styles.detailsDesc}>kg</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.separator2}></View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:24}}>
                    <Text style={styles.detailsTitle}>Gênero</Text>
                    <View style={styles.detailsContent}>
                        <TouchableOpacity onPress={()=> styleGenerValidateM()}>
                            <Text style={styleGener}>Homem</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> styleGenerValidateW()}>
                            <Text style={styleGener2}>Mulher</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <TouchableOpacity onPress={() => Alert.alert('aaa')} style={styles.button2}>
                    <Text style={styles.buttonTitle}>Começar</Text>
                </TouchableOpacity>
                <View style={styles.flexDots}>
                    <View style={styles.noColorDot}></View>
                    <View style={styles.noColorDot}></View>
                    <View style={styles.colorDot}></View>
                </View>
            </View>
        </>
    )
}