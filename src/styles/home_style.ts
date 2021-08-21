import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contentAll:{
        width:'100%',
        height: '100%',
        backgroundColor: '#C5A2CB',
    },
    contentLogo:{
        alignItems:'center',
        marginBottom: 40
    },
    logo:{
        width: 120,
        height: 120
    },
    separator:{
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width:'100%'
    },
    contentRooms:{
        width: '87.2%',
        height: 159,
        backgroundColor: '#87235F',
        borderRadius: 25,
        alignItems: 'center',
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 17,
        paddingTop: 17
    },
    buttonsRooms:{
        width: 130,
        height: 61,
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
        justifyContent:'center'
    }
});