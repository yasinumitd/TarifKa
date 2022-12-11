import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from './Pages/Categories'
import Meals from "./Pages/Meals";
import Detail from './Pages/Detail'
const Stack = createNativeStackNavigator();

function Router(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesScreen" component={Categories}/>
        <Stack.Screen name="MealsScreen" component={Meals}/>
        <Stack.Screen name="DetailScreen" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;