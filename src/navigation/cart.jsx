import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { THEME } from '../constants/theme';
//importamos la vista del carrito
import { Cart } from '../screens';

//inicialisamos nuestro stack de navegacion llamando a la funcion  createNativeStackNavigator
const Stack = createNativeStackNavigator();

//declaramos nuestro stack navigator
const CartNavigator = () => {
    //nuestro stack de navegacion necesita 
    return (
        //Lo que necesita nuestro stack para funcionar es inicializar el navegador 
        <Stack.Navigator 
        //le indicamos cual es su ruta inicial 
           initialRouteName="Cart"
           //le agregamos algunas configuraciones
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
        <Stack.Screen
        //le indicamos a que pantalla pertence
           name="Cart"
        //le indicamos a que componente pertenece
           component={Cart} />
        </Stack.Navigator>
    )
}

export default CartNavigator;
