import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontFamily: 'TiltNeon-Regular',
        marginVertical: 5,
        color: THEME.colors.secundary,
    },
    subLabel: {
        fontSize:12,
        fontFamily: 'TiltNeon-Regular',
        color: THEME.colors.secundary,
        marginVertical:  5,
    },
});