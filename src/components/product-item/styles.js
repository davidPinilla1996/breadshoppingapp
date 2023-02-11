import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";


 export const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 10,
          marginTop: 30, 
          marginHorizontal: 25,
          borderTopLeftRadius: 30,
          borderBottomRightRadius: 30,
          height: 190,
          backgroundColor: THEME.colors.secundary,
          borderWidth: 3,
          borderColor: THEME.colors.primary
        },
        contentContainer: {
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        },
        title: {
          fontFamily: "CinzelDecorative-Bold",
          fontSize: 18,
          color: THEME.colors.white,
          margin: 10
        },
        textDescription: {
          fontFamily: "KaushanScript-Regular",
          fontSize: 19,
          color: THEME.colors.white
        },
        detailsContainer: {
          flexDirection: 'row',
          justifyContent: "center"
        },
        price: {
          fontFamily: "CinzelDecorative-Bold",
          fontSize: 16,
          marginTop: 10,
          marginRight: 25,
          color: THEME.colors.white,
        },
        weight: {
          fontFamily: "CinzelDecorative-Bold",
          fontSize: 16,
          marginTop: 10,
          marginLeft: 25,
          color: THEME.colors.white
        }
});