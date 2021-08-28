import { StyleSheet } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

export const styles = StyleSheet.create({
    contentAll:{
        width:'100%',
        height: '100%',
        backgroundColor: '#C5A2CB',
    },
    contentLogo:{
        alignItems:'center'
    },
    logo:{
        width: 120,
        height: 120
    },
    separator:{
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width:'100%',
        alignItems:"center"
    },
    menuSuperior:{
        borderBottomColor: '#4B006A',
        borderBottomWidth: 3,
        width:'50%',
        alignItems:"center",
        fontSize:10,
   

    },
    topListleft:{
        fontSize:10,
        alignItems:'flex-start'
    },
    textTopLeft:{
        fontSize:20,
        color:'rgb(255, 255, 255)'
    },
    professor:{
        color:"#4B006A",
        fontSize:12
    },
    contentRooms:{
        width: '87.2%',
        height: 145,
        backgroundColor: 'rgb(138, 113, 142)',
        borderRadius: 25,
    
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 17,
        paddingTop: 17,
        marginTop:15
    },
    bottonList:{
        justifyContent:"space-between",
        flexDirection:"row"

     
    },
    buttonsRooms:{
        width: 130,
        height: 30,
        backgroundColor:'#480F31',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbuttonsRooms:{
        color: 'white',
        fontSize: 20
    },
    buttonMenu:{
        width:50,
        height:50,
        borderTopRightRadius:20,
        backgroundColor:'#87235F',
        alignItems: 'center',
        justifyContent:'center',
    }
});