import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./cart";
import OrdersNavigator  from "./orders";
import ShopNavigator from "./shop";
import { THEME } from "../constants/theme";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return (
           <BottomTab.Navigator 
           initialRouteName="ShopTab"
           screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
               fontFamily: "Aboreto-Regular",
               fontSize: 12
            },
            tabBarActiveTintColor: THEME.colors.primary,
            tabBarInactiveTintColor: THEME.colors.text
           }}>
                <BottomTab.Screen 
                name="ShopTab" 
                component={ShopNavigator} 
                options={{
                  title:"Shop"
                }}
                />
                <BottomTab.Screen 
                name="OrdersTab" 
                component={OrdersNavigator} 
                options={{
                  title:"Orders"
                }}
                />
                <BottomTab.Screen 
                name="CartTab" 
                component={CartNavigator} 
                options={{
                  title:"Cart"
                }}
                />
            </BottomTab.Navigator>
  );
};

export default Tabs;