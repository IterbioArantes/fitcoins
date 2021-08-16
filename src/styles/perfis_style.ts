import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    content:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    content2:{
        marginLeft:22,
        marginRight:22,
        marginTop:77
    },
    content3:{
        marginLeft:22,
        marginRight:22,
        marginTop:20
    },
    detailsContent:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    detailsContentPress:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:19,
        marginBottom: 19
    },
    detailsTitle:{
        fontSize:20,
        color: '#707070',
    },
    detailInput:{
        width:35,
        fontSize:18,
        color:'#480F31'
    },
    detailGener:{
        fontSize:18,
        color:'#480F31',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 3
    },
    detailGenerPressed:{
        fontSize:18,
        color:'white',
        backgroundColor: '#480F31',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 3
    },
    detailsDesc:{
        fontSize:18,
        color: '#480F31',
        marginTop: 1
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
    button2:{
        height: 50,
        backgroundColor: '#480F31',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 30,
        width: '85%',
        marginTop: 37
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
    separator2:{
        borderBottomColor: 'gray',
        borderBottomWidth: 1
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