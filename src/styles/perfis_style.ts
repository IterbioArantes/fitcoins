import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    content:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    content2:{
        marginLeft:22,
        marginRight:22,
        marginTop:77
    },
    titles1:{
        textAlign: 'center',
        color:  '#051A98',
        fontSize: 20,
        marginTop: 38
    },
    image:{
        height:245,
        width:209,
        marginTop: 70,
        marginBottom: 38
    },
    button:{
        height: 50,
        backgroundColor: '#480F31',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 30,
        width: '85%',
        marginTop: 60
    },
    buttonTitle:{
        color: 'white',
        fontSize: 20
    },
    conditionType:{
        color: '#707070',
        fontSize: 20
    },
    descConditionType:{
        fontSize: 18,
    },
    colorDot:{
        backgroundColor: '#480F31',
        width:13,
        height:13,
        borderRadius:13,
        
    },
    noColorDot:{
        backgroundColor: '#949397',
        width:13,
        height:13,
        borderRadius:13,

    },
    flexDots:{
        flexDirection: "row",
        marginTop:30,
        width:73,
        justifyContent: 'space-evenly'
    },
    separator:{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginLeft:5,
        marginRight:5,
        marginTop: 38,
        marginBottom: 18
    },
    checkBoxContainer:{
        marginTop:12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkBox:{
        width:10,
        height:10
    }
});