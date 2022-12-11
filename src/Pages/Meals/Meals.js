import React from "react";
import { View,FlatList,Text} from "react-native";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import Loading from '../../Components/Loading'
import Error from '../../Components/Error'
import MealCard from "../../Components/Card/MealCard";
import styles from './Meals.style'
function Meals({route}){

    const {strCategory} =route.params;
    const {loading,data,error} = useFetch(`${Config.FILTER}=${strCategory}`)
    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    const renderMeals = ({item}) => <MealCard meal={item}/>
    
    return(
        <View style ={styles.container} >
            <FlatList 
            data={data.meals}
            renderItem={renderMeals}/>
        </View>
    )
}

export default Meals;