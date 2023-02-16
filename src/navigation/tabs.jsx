import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./cart";
import OrdersNavigator  from "./orders";
import ShopNavigator from "./shop";
import { THEME } from "../constants/theme";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { FontAwesome } from '@expo/vector-icons';  

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  const cart = useSelector((state) => state.cart.items);
  return (  
  <BottomTab.Navigator 
             initialRouteName="ShopTab"
             screenOptions={{
                 headerShown: false,
                 tabBarLabelStyle: {
                    fontFamily: "KaushanScript-Regular",
                    fontSize: 15,
                 },
                 tabBarActiveTintColor: THEME.colors.primary,
                 tabBarInactiveTintColor: THEME.colors.secundary,
                 }}>
             <BottomTab.Screen 
                  name="ShopTab" 
                  component={ShopNavigator} 
                  options={{
                      title:"Shop",
                  tabBarIcon: () => (
                  <Fontisto 
                      name={"shopping-store"} 
                      size={22} 
                      color={THEME.colors.secundary} 
                  />
                   ),                  
                 }}
                />
             <BottomTab.Screen 
                  name="OrdersTab" 
                  component={OrdersNavigator} 
                  options={{
                     title:"Orders",
                     tabBarIcon: () => (
                    <Ionicons name="file-tray-full" size={24} color={THEME.colors.secundary} />
                     )   
                  }}
              />
             <BottomTab.Screen 
                  name="CartTab" 
                  component={CartNavigator} 
                  options={{
                     title:"Cart",
                  tabBarIcon: () => (
                     <FontAwesome name="cart-arrow-down" size={24} color={THEME.colors.secundary} />
                   ),
                   tabBarBadge: cart.length,
                   tabBarBadgeStyle: {
                    backgroundColor: THEME.colors.primary,
                    color: THEME.colors.colorText,
                    fontFamily: "Aboreto-Regular",
                    fontSize: 11,
                   }
                 }}
             />
       </BottomTab.Navigator>
  );
};

export default Tabs;