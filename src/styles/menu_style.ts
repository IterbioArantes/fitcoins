import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    content:{
        height:'100%',
        width:'100%',
        backgroundColor: "#A26CAB",
        paddingBottom:400,
    },
    contentLogo:{
        alignItems:'center',
        marginTop:40,
        marginBottom:40
    },
    logo:{
        width: 120,
        height: 120
    },
    button:{
        width:'100%',
        height:60,
        paddingLeft: 24,
        paddingRight: 12,
        paddingBottom: 16,
        paddingTop:16,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    border:{
        borderColor: "#763082",
        borderBottomWidth:1,
    },
    texto:{
        color:"white",
        fontSize: 20,
    },
    icons:{
        height:45,
        width:45
    }
});