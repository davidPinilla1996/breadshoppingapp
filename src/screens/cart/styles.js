import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
       flex: 1,
       backgroundColor: THEME.colors.white
    },
    footer: {
        backgroundColor: THEME.colors.white,
        borderTopColor: THEME.colors.black,
        borderTopWidth: 1,
        paddingVertical: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttonConfirm:{
      backgroundColor: THEME.colors.primary,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    buttonConfirmText: {
      color: THEME.colors.white,
      fontSize: 15,
      fontFamily: 'Aboreto-Regular'
    },
    totalContainer: {
      flex: 0.4,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    totalText:{
        color: THEME.colors.white,
        fontSize: 15,
        fontFamily: 'Aboreto-Regular'
    },
    totalPrice: {
        color: THEME.colors.white,
        fontSize: 15,
        fontFamily: 'Aboreto-Regular'
    }
});