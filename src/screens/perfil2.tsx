import React, {useState} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  CheckBox  from '@react-native-community/checkbox'

import { styles } from '../styles/perfis_style';

export function Perfil2(){

    const navigation = useNavigation();

    function toPerfil3(){
        navigation.navigate('Perfil3');
    }

    const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false);

    function validateToggleCheckBox(key:number){
        if(key == 1){
            if(toggleCheckBox1 == true){
                setToggleCheckBox1(false)
            }else{
                setToggleCheckBox2(false)
                setToggleCheckBox3(false)
                setToggleCheckBox1(true)
            }
        } else if (key == 2){
            if(toggleCheckBox2 == true){
                setToggleCheckBox2(false)
            }else{
                setToggleCheckBox1(false)
                setToggleCheckBox3(false)
                setToggleCheckBox2(true)
            }
        } else if (key == 3){
            if(toggleCheckBox3 == true){
                setToggleCheckBox3(false)
            } else {
                setToggleCheckBox1(false)
                setToggleCheckBox2(false)
                setToggleCheckBox3(true)
            }
        }
    }

    return(
        <>
            <View style={styles.content}>
                <Text style={styles.titles1}>Etapa 2 de 3</Text>
                <Text style={{fontSize:18,marginTop:33}}>Selecione seu condicionamento</Text>
            </View>
            <View style={styles.content2}>
                <Text style={styles.conditionType}>Iniciante</Text>
                <View style={styles.checkBoxContainer}>
                    <Text style={styles.descConditionType}>Baixo condicionamento físico</Text>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox1}
                        onValueChange={() => validateToggleCheckBox(1)}
                    />
                </View>
                <View style={styles.separator}></View>
                <Text style={styles.conditionType}>Intermediário</Text>
                <View style={styles.checkBoxContainer}>
                    <Text style={styles.descConditionType}>Condicionamento razoável</Text>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox2}
                        onValueChange={() => validateToggleCheckBox(2)}
                    />
                </View>
                <View style={styles.separator}></View>
                <Text style={styles.conditionType}>Avançado</Text>
                <View style={styles.checkBoxContainer}>
                    <Text style={styles.descConditionType}>Tem um ótimo condicionamento</Text>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox3}
                        onValueChange={() => validateToggleCheckBox(3)}
                    />
                </View>
            </View>
            <View style={styles.content}>
                <TouchableOpacity onPress={toPerfil3} style={styles.button}>
                    <Text style={styles.buttonTitle}>Próximo</Text>
                </TouchableOpacity>
                <View style={styles.flexDots}>
                    <View style={styles.noColorDot}></View>
                    <View style={styles.colorDot}></View>
                    <View style={styles.noColorDot}></View>
                </View>
            </View>
        </>
    )
}