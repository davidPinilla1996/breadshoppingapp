import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

 export const styles = StyleSheet.create({
        KeybordContainer: {
            flex: 1
        },
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
            borderRadius: 5,
            minHeight: 330
        },
        title: {
            fontSize: 18,
            fontFamily: 'TiltNeon-Regular',
            textAlign: 'center',
        },
        label: {
          fontSize: 14,
          fontFamily: 'TiltNeon-Regular',
          marginVertical: 5
        },
        buttonContainer: {
          marginVertical: 10
        },
        prompt: {
           width: "100%",
           alignItems: "center",
           marginVertical: 20 
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
            fontFamily: 'TiltNeon-Regular',
            color: THEME.colors.white 
        },
});