import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    topBar:{
        width: '100%',
        height: 80,
        backgroundColor: '#480F31',
        alignItems: 'center',
        flexDirection: 'row', 
    },
    title:{
        color:'white',
        fontSize: 20,
        marginLeft: '21.5%'
    },
    icon:{
        marginLeft: 27,
        width:25,
        height:25
    },
    container: {
        marginTop: 32,
        justifyContent: 'center',
        width: '85%',
        marginLeft:'7.5%'
    },
    input: {
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 10,
    },
    error:{
        color: 'red',
        marginTop: 3,
        marginBottom: 3,
        fontSize: 15,
        marginLeft:2

    },
    containerEnter:{
        height: 50,
        backgroundColor: '#480F31',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 30,
        marginTop: 280,   
    },
    titleEnter:{
        color: 'white',
        fontSize: 20
    }
});