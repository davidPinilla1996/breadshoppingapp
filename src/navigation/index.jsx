//importamos el NavigationContainer
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./tabs";
import AuthNavigator from "./auth";
import { useSelector } from "react-redux";

//voy a declarar mi componente que le voy a llamar AppNavigator por que este va a ser el que va a contener toda la navegacion de mi App 

const AppNavigator = () => {
    const userId = useSelector((state) => state.auth.userId);
    return <NavigationContainer>{userId ? <TabsNavigator /> : <AuthNavigator />}</NavigationContainer>
    };
    
//exportamos el arbol de navegacion
export default AppNavigator; 
