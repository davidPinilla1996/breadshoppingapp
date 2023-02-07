import { StatusBar, StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";


 export const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: THEME.colors.bachground,
          marginTop: StatusBar.currentHeight
        },
          title: {
            fontSize: 20,
            fontFamily: 'Aboreto-Regular',
            color: THEME.colors.while,
            padding: 10
          },
        containerList: {
          flex: 1,
          paddingBottom: 60
        },
        contentContainerList: {
          paddingBottom: 80,
          paddingTop: 40
        }
});