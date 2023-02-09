import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";


 export const styles = StyleSheet.create({
        container: {
          flex: 1,
          height: 90,
          width: 375,
          backgroundColor: THEME.colors.gray,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: THEME.colors.black,
          paddingVertical: 10,
          paddingHorizontal: 20,
          shadowColor: '#000',
          shadowOffset: {
          width: 0,
          height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
          margin: 10,
      },
      headerContainer: {},
      date: {
       fontSize: 16,
       fontFamily: 'Aboreto-Regular',
       color: THEME.colors.white
      },
      contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
        alignItems: "center"
      },
      total: {
        fontSize: 16,
        fontFamily: 'Aboreto-Regular',
      }
});