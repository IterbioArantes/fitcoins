import React, {useState} from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/cfa_cadastro_style';
import seta from '../../assets/seta.png';

export function Register(){

  const navigation = useNavigation();

  function backIndex() {
    navigation.goBack();
  }

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordDif, setPasswordDif] = useState('');
  const [passwordDif1, setPasswordDif1] = useState('');

  function emailValidator(email:string){
    if(email){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(String(email))){
        setEmailError('');
        return true
      } else {
        setEmailError('E-mail Inválido');
        return false
      }
    } else {
      setEmailError('');
      return false
    } 
  }

  function samePassword(password1:string,password2:string){
    if(password1){
      if(password1.length < 6){
        setPasswordDif1('A senha deve conter no mínimo 6 caracteres');
        return false
      }else{
        setPasswordDif1('');
        if(password1 && password2){
          if(password1 == password2){
            setPasswordDif('');
            return true
          } else {
            setPasswordDif('As senhas não conferem');
            return false
          }
        } else {
          setPasswordDif('');
          return false
        }
      }
    } else{
      setPasswordDif1('');
      return false
    }
  }

  function validatedFields(functionEmail:boolean,functionPassword:boolean){
    if(functionEmail && functionPassword){
      Alert.alert('Cadastro Realizado')
    } else {
      Alert.alert('Campos Inválidos')
    }
  }

  return(
    <View>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={backIndex}>
            <Image source={seta} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.title}>
            Cadastre-se
        </Text>
      </View>
      <View style={styles.container}>

        <TextInput onChangeText={(email) => {setEmail(email);emailValidator(email);}} placeholder = "Email" style={styles.input} />
        <Text style={styles.error}>{emailError}</Text>
        <TextInput onChangeText={(password1) => {setPassword1(password1);samePassword(password1,password2);}} secureTextEntry={true} placeholder = "Senha" style={styles.input} />
        <Text style={styles.error}>{passwordDif1}</Text>
        <TextInput onChangeText={(password2) => {setPassword2(password2);samePassword(password1,password2);}} secureTextEntry={true} placeholder = "Confirme a Senha" style={styles.input} />
        <Text style={styles.error}>{passwordDif}</Text>

        <TouchableOpacity onPress={() => validatedFields(emailValidator(email),samePassword(password1,password2))} style={styles.containerEnter}>
           <Text style={styles.titleEnter}>
               Entrar
           </Text>
       </TouchableOpacity>
      </View>
    </View>
  );
}