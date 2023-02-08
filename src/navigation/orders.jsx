import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { THEME } from "../constants/theme";
import { Orders } from "../screens";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
      <Stack.Navigator
         initialRouteName="Orders"
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
            component={Orders} />
         </Stack.Navigator>
    )
}

export default OrdersNavigator;
