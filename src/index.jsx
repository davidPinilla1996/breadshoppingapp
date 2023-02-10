import { useFonts } from "expo-font";
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
//importamos nuestro AppAppNavigator que contiene todo el tema de la navegacion
import AppNavigator from "./navigation";
import { THEME } from "../src/constants/theme";

const App = () => {
  //usamos este componente para sabar si a cargado o no la fuente
  const [loaded] = useFonts({
     //le indicamos donde esta la fuente y que fuente queremos cargar
    "Aboreto-Regular": require("../assets/fonts/Aboreto-Regular.ttf"),
    "CinzelDecorative-Bold": require("../assets/fonts/CinzelDecorative-Bold.ttf"),
    "KaushanScript-Regular": require("../assets/fonts/KaushanScript-Regular.ttf")
  });

if (!loaded) {
   return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={THEME.colors.primary} />
    </View>
   )
}
//y el AppNavigator es lo que yo voy a mostrar en mi App
  return <AppNavigator />;
}

export default App;