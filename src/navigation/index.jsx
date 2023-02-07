//importamos el NavigationContainer
import { NavigationContainer } from "@react-navigation/native";
//Y para este NavigationContainer vamos a importar o decirle cual es el arrbol de navegacion que esta relacionado o con el cual
//se va a mostar nuestra app que es el ShopNavigator
import  ShopNavigator  from "./shop";

//voy a declarar mi componente que le voy a llamar AppNavigator por que este va a ser el que va a contener toda la navegacion de mi App 

const AppNavigator = () => {
    //esto me va a retornar el NavigationContainer
    return (
        //Este arbol de navegacion va a contener los arboles que yo tenga en este caso es solo uno ShopNavigator
        <NavigationContainer>
            <ShopNavigator />
        </NavigationContainer>
        );
    };
    
//exportamos el arbol de navegacion
export default AppNavigator; 
