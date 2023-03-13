import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme/index";

export const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   input: {
    height: 45,
    borderBottomColor: THEME.colors.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: 'TiltNeon-Regular',
    marginBottom: 10
   },
   message: {
    marginVertical: 5,
   },
   helpperText: {
     fontSize: 12,
     fontFamily: 'TiltNeon-Regular',
     color: THEME.colors.primary,
   },
});