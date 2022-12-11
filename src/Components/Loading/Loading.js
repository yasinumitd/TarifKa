import React from "react";
import AnimatedLottieView from "lottie-react-native";

function Loading(){
    return(
        <AnimatedLottieView 
        source={require('../../Assests/loading.json')}
        autoPlay
        />
    )
}

export default Loading;