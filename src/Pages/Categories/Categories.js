import React from "react";
import { View,Text, FlatList } from "react-native";
import Config from "react-native-config";
import styles from './Categories.style'
import useFetch from '../../hooks/useFetch'
import Loading from '../../Components/Loading'
import Error from '../../Components/Error'
import CategoryCard from "../../Components/Card/CategoryCard";

function Categories({navigation}){
    const {loading,error,data}= useFetch(Config.CATEGORIES)

    const handleSelect= (strCategory)=>{
        navigation.navigate("MealsScreen",{strCategory})
    }

    if(loading){
        return <Loading />
    }
    if(error){
        return<Error />
    }
    const renderCategory = ({item})=> <CategoryCard category={item} onSelect={() => handleSelect(item.strCategory)}/>
    return(
        <View style={styles.container}>
            <FlatList 
            data={data.categories}
            renderItem={renderCategory}
            />
        </View>
    )
}

export default Categories;