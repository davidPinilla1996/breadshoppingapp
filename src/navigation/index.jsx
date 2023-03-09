//importamos el NavigationContainer
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import TabsNavigator from "./tabs";
import AuthNavigator from "./auth";

//voy a declarar mi componente que le voy a llamar AppNavigator por que este va a ser el que va a contener toda la navegacion de mi App 

const AppNavigator = () => {
    //esto me va a retornar el NavigationContainer
    const [userId, setUserId] = useState(null);
    return (
        <NavigationContainer>
            {
            userId ? <TabsNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
        );
    };
    
//exportamos el arbol de navegacion
export default AppNavigator; 
