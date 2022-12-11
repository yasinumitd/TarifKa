import React from "react";
import { View,Text } from "react-native";
import Config from "react-native-config";
function Detail(){
    return(
        <View>
            <Text>{Config.API_URL}</Text>
        </View>
    )
}

export default Detail;