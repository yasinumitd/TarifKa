import React from "react";
import { View,Image,Text, TouchableOpacity } from "react-native";
import styles from './DetailCard.style'

function DetailCard({meal, openYoutube}){
    const Separator = () => (
        <View style={styles.separator} />
      );
    return(

        <View style={styles.container}>
            <Image style={styles.image} source={{uri:meal.strMealThumb}}/>
            <Text style={styles.name}>{meal.strMeal}</Text>
            <Text style={styles.country}>{meal.strArea}</Text>
            <Separator></Separator>
        <View>
            <Text style={styles.instruction}>{meal.strInstructions}</Text>
            <TouchableOpacity onPress={openYoutube} style={styles.button}>
                <Text style={styles.buttonText}>Whatch on Youtube</Text>
            </TouchableOpacity>
        </View>
        </View>
   
        
    )
}

export default DetailCard;