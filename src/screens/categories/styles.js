import { StatusBar, StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";


 export const styles = StyleSheet.create({
        image: {
            height: "100%",
       },
        titleCategories: {
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
       },
       img: {
          width: 130,
          height: 130,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          
       },
        textTitle: {
            fontSize: 30,
            color: THEME.colors.colorText,
            fontFamily: 'CinzelDecorative-Bold',
            marginRight: 8,
        },
        textTitleTitle: {
          fontSize: 30,
          color: THEME.colors.colorText,
          fontFamily: 'CinzelDecorative-Bold',
          marginLeft: 8,
        },
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
            paddingBottom: 80
        },
          contentContainerList: {
            paddingBottom: 80,
            paddingTop: 30
        }
});