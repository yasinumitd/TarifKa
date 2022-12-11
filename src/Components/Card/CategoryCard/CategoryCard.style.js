import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        backgroundColor:'white',
        flexDirection:"row",
        padding:5,
        alignItems: 'center',
        borderWidth: 0.5,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        alignItems:"center"
        
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
    },
    text:{
        fontWeight:"bold",
        fontSize:25,
        marginLeft:20
    }
})