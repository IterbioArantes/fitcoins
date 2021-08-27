/* TELA CFA_PROFILE do FitCoins */

import React from 'react';
import { StatusBar, Text, TextInput, 
    View, Image, Alert, TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AntDesign, Feather,Ionicons, FontAwesome } from '@expo/vector-icons';

 /* Fontes e estados para caixa de digitação */ 
import { useFonts } from 'expo-font';
import { useState } from 'react';

import { styles } from '../styles/cfa_profile_style';

export function Profile() {

  /* Estados para caixa de digitação */
  const [data_nasc, setData_nasc] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState("");  

  //Botões checkbox
  const [valor_genero, setValor_genero] = React.useState('first');
  const [valor_cond, setValor_cond] = React.useState('first');
  
  // Ativação das fontes para estilos 
  const [loaded] = useFonts({
    Quicksand: require('../../assets/fonts/Quicksand_Bold.otf'),
    Inter: require('../../assets/fonts/Inter-Regular.ttf')
  });
  if (!loaded) {
    return null;
  }

  return (

    <View>
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
      <View
        style={styles.caixa}>
        <Text style={styles.textos_caixas}>Aniversário</Text> 
        <TextInput 
          style={styles.digita}
          placeholder='DD/MM/AAAA'
          placeholderTextColor= '#A4A2AA'
          value= {data_nasc}
          onChangeText= {(texto_data_nasc) => setData_nasc(texto_data_nasc)}>                        
        </TextInput>
      </View>
      <View
        style={styles.caixa}>    
        <Text style={styles.textos_caixas}>Altura</Text>
        <TextInput 
          style={styles.digita}
          placeholder='m'
          placeholderTextColor= '#A4A2AA'
          value= {altura}
          onChangeText= {(texto_altura) => setAltura(texto_altura)}>                 
        </TextInput>
      </View>
      <View
        style={styles.caixa}>
        <Text style={styles.textos_caixas}>Peso</Text>
        <TextInput 
          style={styles.digita}
          placeholder='kg'
          placeholderTextColor= '#A4A2AA'
          value= {peso}
          onChangeText= {(texto_peso) => setPeso(texto_peso)}>                  
        </TextInput>
      </View>  
      <View
        style={styles.botao_grupo}>
        <Text style={styles.texto_1}>Gênero</Text>
        <RadioButton.Group 
          onValueChange={newValue => setValor_genero(newValue)} 
          value={valor_genero}>
          <View
            style={styles.botao1}>
            <Text style={styles.textos_botoes}>Masculino</Text>
            <RadioButton 
              value="masculino"
              color = '#707070'/>
          </View>
          <View
            style={styles.botao2}>
            <Text style={styles.textos_botoes}>Feminino</Text>
            <RadioButton 
              value="feminino"
              color = '#707070'/>
          </View>
          <View
            style={styles.botao3}>
            <Text style={styles.textos_botoes}>Não declarado</Text>
            <RadioButton 
              value="indefinido"
              color = '#707070'/>
          </View>
        </RadioButton.Group>
      </View>
      <View
        style={styles.botao_grupo}>
        <Text style={styles.texto_2}>Condicionamento</Text>
        <RadioButton.Group 
          onValueChange={newValue => setValor_cond(newValue)} 
          value={valor_cond}>
          <View
            style={styles.botao4}>
            <Text style={styles.textos_botoes}>Iniciante</Text>
            <RadioButton 
              value="iniciante"
              color = '#707070'/>
          </View>
          <View
            style={styles.botao5}>
            <Text style={styles.textos_botoes}>Intermediário</Text>
            <RadioButton 
              value="intermediario"
              color = '#707070'/>
          </View>
          <View
            style={styles.botao6}>
            <Text style={styles.textos_botoes}>Avançado</Text>
            <RadioButton 
              value="avancado"
              color = '#707070'/>
          </View>
        </RadioButton.Group>
      </View>
      <TouchableOpacity
        style={styles.salvar}
        onPress={() => Alert.alert('Salvar Dados','Writing 640 KB Floppy Disc')}>
        <Text
          style={styles.texto_salvar}>
          Salvar Dados
        </Text>        
      </TouchableOpacity> 
      <View
        style={styles.barra_icones}>
        <View
          style={styles.icone_barra}>
          <Ionicons.Button name="body" 
            color="#707070" 
            backgroundColor='#FFFF' 
            onPress={() => Alert.alert('Exercício','Mexa-se!')}>
          </Ionicons.Button> 
        </View>
        <View
          style={styles.icone_barra}>
          <FontAwesome.Button name="search" 
            color="#707070" 
            backgroundColor='#FFFF' 
            onPress={() => Alert.alert('Pesquisar','Aonde???!')}>
          </FontAwesome.Button> 
        </View>
        <View
          style={styles.icone_barra}>
          <Feather.Button name="home" 
            color="#707070" 
            backgroundColor='#FFFF' 
            onPress={() => Alert.alert('Home','Volta ao início da bagaça')}>
          </Feather.Button> 
        </View>
        <View
          style={styles.icone_barra}>
          <Feather.Button name="play-circle" 
            color="#707070" 
            backgroundColor='#FFFF' 
            onPress={() => Alert.alert('Play','Meteflix')}>
          </Feather.Button> 
        </View>
        <View
          style={styles.icone_barra}>
          <Feather.Button name="more-horizontal" 
            color="#707070" 
            backgroundColor='#FFFF' 
            onPress={() => Alert.alert('Três Pontinhos','Configura!')}>
          </Feather.Button> 
        </View>

      </View>
        
    </View>      
  );
}
