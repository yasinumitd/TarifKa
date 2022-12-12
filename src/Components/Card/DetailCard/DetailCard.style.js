import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        height: Dimensions.get("window").height / 2.5,
        
    },
    name:{
        fontSize:25,
        fontWeight:"bold",
        color:'red',
        paddingLeft:5
    },
    country:{
        fontSize:20,
        fontWeight:"bold",
        color:'red',
        paddingLeft:5
    },separator: {
        marginVertical: 2,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth
      },
      instruction:{
        padding:5,
        fontSize: 15,
        fontWeight:"bold"
      },
      button:{
        backgroundColor: "red",
        alignItems:"center",
        margin:15,
        borderRadius:10
      },
      buttonText:{
        color: 'white',
        fontSize:20,
        fontWeight:"bold",
        margin:7
      }
})