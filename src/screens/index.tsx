/* TELA DE LOGIN CFA_Login2.jsx do FitCoins */

import React from 'react';
import { Text, TextInput, View, Image, Alert, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

 /* Fontes e estados para caixa de digitação */ 
import { useFonts } from 'expo-font';
import { useState } from 'react';

import { styles } from '../styles/index_styles';
import { color } from 'react-native-reanimated';


export function Index() {

  const navigation = useNavigation();

  function toRegister() {
    navigation.navigate('Register');
  }

  function toPerfil1() {
    navigation.navigate('Perfil1');
  }

  /* Estados para caixa de digitação */
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [escondeSenha, setEscondeSenha] = useState(true);  
  
  // Ativação das fontes para estilos 
  const [loaded] = useFonts({
    Quicksand: require('../../assets/fonts/Quicksand_Bold.otf'),
    Inter: require('../../assets/fonts/Inter-Regular.ttf')
  });
  if (!loaded) {
    return null;
  }

  const json_voorhees = {
    email: input,
    senha: input2
  }

  return (

    /* View principal para prevenir subida indesejada do teclado (iOS) */
    <View
     style={{backgroundColor: '#C5A2CB'}}>
      <View style={styles.barra}>
        <Text style={styles.entrar}>Entrar</Text>
      </View>
      <View>
        <TextInput 
          style={styles.email}
          placeholder='Email'
          placeholderTextColor= '#707070'
          value= {input}
          onChangeText= {(texto_email) => setInput(texto_email)}>                            
        </TextInput>
      </View>
      <View>
        <TextInput 
          style={styles.senha}
          placeholder='Senha'
          placeholderTextColor= '#707070'
          value= {input2}
          onChangeText= {(texto_senha) => setInput2(texto_senha)}
          secureTextEntry= {escondeSenha}>           
        </TextInput>
      </View>
      <TouchableOpacity 
        onPress={() => Alert.alert('Entrar com Google','Google sabe de tudo!')}
        style={styles.botaoGoogle}>
        <Text style={styles.cortextologin}>Entrar com Google</Text>        
      </TouchableOpacity>            
      <Image 
        style={styles.logo1}
        source={require('../../assets/logos/google.png')} 
      />       
      <TouchableOpacity
        onPress={toRegister}
        style={styles.botaoNaoCadastrado}>
        <Text style={styles.cortextologin}>Não sou cadastrado</Text>               
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={toPerfil1}      
        style={styles.botaologin}>
        <Text style={styles.cortextologin2}>Entrar</Text>
      </TouchableOpacity>  
    </View>      
  );
}