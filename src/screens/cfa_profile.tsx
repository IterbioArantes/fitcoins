/* TELA CFA_PROFILE do FitCoins */

import React, {useState,useRef} from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, Image, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/cfa_profile_style';

export function Profile(){

    const navigation = useNavigation();

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
    const [sexo, setSexo] = useState('');

    const [styleCond,setStyleCond] = useState(styles.detailCond);
    const [styleCond2,setStyleCond2] = useState(styles.detailCond);
    const [styleCond3,setStyleCond3] = useState(styles.detailCond);
    const [cond, setCond] = useState('');

    const [aniversario, setAniversario] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    function styleGenerValidateM(){
        if(styleGener2 == styles.detailGenerPressed){
            setStyleGener2(styles.detailGener)
        }
        if(styleGener == styles.detailGener){
            setStyleGener(styles.detailGenerPressed)
            setSexo('Homem')
        } else {
            setStyleGener(styles.detailGener)
            setSexo('')
        }
    }

    function styleGenerValidateW(){
        if(styleGener == styles.detailGenerPressed){
            setStyleGener(styles.detailGener)
        }
        if(styleGener2 == styles.detailGener){
            setStyleGener2(styles.detailGenerPressed)
            setSexo('Mulher')
        } else {
            setStyleGener2(styles.detailGener)
            setSexo('')
        }
    }

    function styleCondValidateB(){
        setStyleCond(styles.detailCondPressed)
        setStyleCond2(styles.detailCond)
        setStyleCond3(styles.detailCond)
        setCond('Iniciante')        
       
    }
    function styleCondValidateI(){
        setStyleCond2(styles.detailCondPressed)
        setStyleCond(styles.detailCond)
        setStyleCond3(styles.detailCond)
        setCond('Intermediario')
    }
    function styleCondValidateA(){
        setStyleCond3(styles.detailCondPressed)
        setStyleCond2(styles.detailCond)
        setStyleCond(styles.detailCond)
        setCond('Avancado')      
    }

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    function onToggleSwitch(){
        setIsSwitchOn(!isSwitchOn);
    }

    function toHome(){
        navigation.navigate('Home');
    }

    const json_voorhees = {
        aniversario: aniversario,
        altura: altura,
        peso: peso,
        genero: sexo,
        cond: cond
    }

    return(
        <>
            <View style={styles.barra}>
                <StatusBar barStyle='light-content'/>
                <Text style={styles.entrar}>Editar perfil</Text>
            </View>
            <TouchableOpacity
                onPress={() => Alert.alert('Seta Esquerda','Sai pra lá!')}
                style={styles.seta}>
                <Image 
                    source={require('../../assets/seta.png')} 
                />       
            </TouchableOpacity>  
            <View style={styles.content3}>
                <TouchableOpacity onPress={()=>clickDate()} style={styles.detailsContentPress}>
                    <Text style={styles.detailsTitle}>Aniversário</Text>
                    <View style={styles.detailsContent}>
                        <TextInput style={{fontSize:18,color:'#480F31'}} placeholder={'dd/mm/yyyy'} 
                            ref={textInput1} onChangeText= {(aniversario) => setAniversario(aniversario)}></TextInput>
                    </View>
                </TouchableOpacity>
                <View style={styles.separator2}></View>           
                <TouchableOpacity onPress={()=>clickHeigh()} style={styles.detailsContentPress}>
                    <Text style={styles.detailsTitle}>Altura</Text>
                    <View style={styles.detailsContent}>
                        <TextInput ref={textInput2} maxLength = {3} keyboardType={'numeric'} 
                            style={styles.detailInput} onChangeText= {(altura) => setAltura(altura)}></TextInput>
                        <Text style={styles.detailsDesc}>cm</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.separator2}></View>
                <TouchableOpacity onPress={()=>clickWeight()} style={styles.detailsContentPress}>
                    <Text style={styles.detailsTitle}>Peso</Text>
                    <View style={styles.detailsContent}>
                        <TextInput ref={textInput3} maxLength = {3} keyboardType={'numeric'} 
                            style={styles.detailInput} onChangeText= {(peso) => setPeso(peso)}></TextInput>
                        <Text style={styles.detailsDesc}>kg</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.separator2}></View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:24, marginBottom: 24}}>
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
                <View style={styles.separator2}></View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:24,  marginBottom: 24}}>
                    <Text style={styles.detailsTitle}>Cond.</Text>
                    <View style={styles.detailsContent}>
                        <TouchableOpacity onPress={()=> styleCondValidateB()}>
                            <Text style={styleCond}>Iniciante</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> styleCondValidateI()}>
                            <Text style={styleCond2}>Intermed.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> styleCondValidateA()}>
                            <Text style={styleCond3}>Avançado</Text>
                        </TouchableOpacity>
                    </View>                    
                </View>
                <View style={styles.separator2}></View>                 
            </View>            
            <View style={styles.content}>
                <TouchableOpacity onPress={toHome} style={styles.button2}>
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