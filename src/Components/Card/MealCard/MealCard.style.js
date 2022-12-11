import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        margin:10,

    },
    image:{
        height: Dimensions.get("window").height / 4.5,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "transparent",
        
    },
    text:{
        
        zIndex: 1,
        position:"absolute",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        bottom:0,
        width:"100%",
        textAlign:"right",
        color:'white',
        fontSize:25,
        fontWeight:"bold",
        height:35,
        paddingRight:10,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
    }

})