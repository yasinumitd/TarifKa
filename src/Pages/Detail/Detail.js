import React from "react";
import { View,Text, FlatList, Linking } from "react-native";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";
import styles from './Detail.style'
import DetailCard from "../../Components/Card/DetailCard";

function Detail({route}){
    const {strMeal} = route.params;
    const {loading,error,data} = useFetch(`${Config.SEARCH}=${strMeal}`)

    if(loading){
        return <Loading/>
    }
    if(error){
        return<Error />
    }
    function handleYoutube(strYoutube){
        try {
            Linking.openURL(strYoutube);
        } catch (error) {
            return <Error />
        }
        
    }
    renderMeal = ({item}) => <DetailCard meal={item} openYoutube={()=>handleYoutube(item.strYoutube)}/>
    return(
        <View style={styles.container}>
           <FlatList
           data={data.meals}
           renderItem={renderMeal}
           />
        </View>
    )
}

export default Detail;