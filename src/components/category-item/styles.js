import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";


 export const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginHorizontal: 20,
            marginVertical: 10,
            height: 120,
        },
        contentContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            shadowColor: "#826251",
            shadowOffset: {
	           width: 0,
	           height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24,
            padding: 10,
            borderWidth: 3,
            borderColor: THEME.colors.primary,
         },
         title: {
            fontSize: 30,
            fontFamily: "KaushanScript-Regular",
            color: THEME.colors.colorText
         }
});