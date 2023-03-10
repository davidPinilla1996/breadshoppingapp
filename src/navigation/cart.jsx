import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { THEME } from "../constants/theme";
import { Cart } from "../screens";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
      <Stack.Navigator
         initialRouteName="Cart"
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
            name="Cart"
            component={Cart} />
         </Stack.Navigator>
    )
}

export default CartNavigator;
