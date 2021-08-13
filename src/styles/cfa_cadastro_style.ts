import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    topBar:{
        width: 375,
        height: 80,
        backgroundColor: '#07055C',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title:{
        flex:1,
        width:19,
        color:'white',
        fontSize: 20,
        marginLeft: 75
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
        backgroundColor: '#07055C',
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