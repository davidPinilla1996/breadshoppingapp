import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./cart";
import OrdersNavigator  from "./orders";
import ShopNavigator from "./shop";
import { THEME } from "../constants/theme";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';  

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
                  title:"Shop",
                  tabBarIcon: ({ focused }) => (
                    <Fontisto 
                    name={focused ? "shopping-store" : "shopping-store"} 
                    size={24} 
                    color={THEME.colors.primary} 
                    />
                  ),                  
                }}
                />
                <BottomTab.Screen 
                name="OrdersTab" 
                component={OrdersNavigator} 
                options={{
                  title:"Orders",
                  tabBarIcon: ({ focused }) => (
                    <Ionicons name="file-tray-full" size={24} color={THEME.colors.primary} />
                  )   
                }}
                />
                <BottomTab.Screen 
                name="CartTab" 
                component={CartNavigator} 
                options={{
                  title:"Cart",
                  tabBarIcon: ({ focused }) => (
                    <FontAwesome name="cart-arrow-down" size={24} color={THEME.colors.primary} />
                  )   
                }}
                />
            </BottomTab.Navigator>
  );
};

export default Tabs;