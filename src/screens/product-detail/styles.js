import { StyleSheet } from "react-native";
import { THEME } from "../src/constants/theme";


 export const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: THEME.colors.bachground,
          alignItems: 'center',
          justifyContent: 'center',
        },
        title: {
          fontSize: 20,
          fontFamily: 'Aboreto-Regular',
          color: THEME.colors.while,
          padding: 10
        }
});