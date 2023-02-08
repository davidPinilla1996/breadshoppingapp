//importamos el NavigationContainer
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./tabs";

//voy a declarar mi componente que le voy a llamar AppNavigator por que este va a ser el que va a contener toda la navegacion de mi App 

const AppNavigator = () => {
    //esto me va a retornar el NavigationContainer
    return (
        //Este arbol de navegacion va a contener los arboles que yo tenga en este caso es solo uno ShopNavigator
        <NavigationContainer>
            <TabsNavigator />
        </NavigationContainer>
        );
    };
    
//exportamos el arbol de navegacion
export default AppNavigator; 
