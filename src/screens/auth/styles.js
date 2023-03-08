import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

 export const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        content: {
            width: '80%',
            maxWidth: 400,
            padding: 15,
            borderColor: THEME.colors.primary,
            borderWidth: 1,
            backgroundColor: THEME.colors.white,
            borderRadius: 5
        },
        title: {
            fontSize: 18,
            fontFamily: 'Aboreto-Regular',
            textAlign: 'center',
        },
        label: {
          fontSize: 14,
          fontFamily: 'Aboreto-Regular',
          paddingVertical: 10, 
        },
        input: {
            height: 45,
            borderBottomColor: THEME.colors.primary,
            borderBottomWidth: 1,
            width: "90%",
            fontFamily: 'Aboreto-Regular',
            paddingVertical: 5
        },
        prompt: {
           width: "100%",
           alignItems: "center",
           marginVertical: 10
        },
        promptButton: {
            width: "100%",
            backgroundColor: THEME.colors.secundary,
            borderWidth: 1,
            borderColor: THEME.colors.primary,
            padding: 10,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center"
        },
        promptMessage: {
            fontSize: 14,
            fontFamily: 'Aboreto-Regular',
            color: THEME.colors.white 
        },
});