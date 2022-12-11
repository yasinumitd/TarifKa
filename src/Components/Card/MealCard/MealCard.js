import React from "react";
import { View,Text,Image } from "react-native"; 
import styles from './MealCard.style'
function MealCard({meal}){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: meal.strMealThumb}}/>
            <Text style={styles.text}> {meal.strMeal}</Text>
        </View>
    )
}

export default MealCard;