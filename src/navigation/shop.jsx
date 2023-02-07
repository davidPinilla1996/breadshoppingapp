//nos permite crear el arbol de navegacion inicialmente para poder trabajar 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//importamos cada una de las pantallas que vamos a estar utilizando
import { Categories, Products, ProductDetail } from "../screens/index";
import { THEME } from "../constants/theme";

//vamos a inicializar el stack de navegacion
//el stack de navegacion se inicializa con la funcion de createNativeStackNavigator() y va a contener todas la panatallas que vamos a usar;
const Stack = createNativeStackNavigator();


//vamos a declarar este stack o arbol de navegacion
const ShopNavigator = () => {
    //esto va a retornar un componente de react
    return (
        //vamos a trabajar con este stack que inicializamos mas arriba y vamos a acceder al Navigator para indicarle 
        //cual es la ruta inicial de mi app
        //la ruta inicial de mi app va a ser Categories
        <Stack.Navigator 
            initialRouteName="Categories" 
            screenOptions={{
            headerStyle: {
              backgroundColor: THEME.colors.white
            }, 
            headerTintColor: THEME.colors.secundary,
            navigationBarColor: THEME.colors.secundary,
            headerTitleStyle: {
                fontFamily: "Aboreto-Regular",
                color: THEME.colors.title
            }
        }}>
            {/* le vamos a indicar cuales son las pantallas con la que vamos a trabajar, el nombre de ellas y el que vamos a utilizar o vamos a
            mostrar*/}
                                                                {/* con la propiedad options podemos ocultar el header o cabezera */}
            <Stack.Screen name="Categories" component={Categories} options={{
           //dentro del options tiene un objeto de configuracion en el cual le pasamos una propiedad que se llama headerShown
          // en false para ocultar la cabezera
              headerShown: false
            }}
            />
            <Stack.Screen 
                name="Products" 
                component={Products} 
                options={({ route }) => ({
                    title: route.params.title,
                })}/>
            <Stack.Screen 
               name="ProductDetail" 
               component={ProductDetail} 
               options={({route}) => ({
                    title: route.params.title,
               })}/>
        </Stack.Navigator>
    )
}


//exportamos el ShopNavigator para poder utilizarlo luego
export default ShopNavigator;
