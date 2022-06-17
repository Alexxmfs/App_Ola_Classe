import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import 'react-native-gesture-handler';

import FirstIntroduction from "./src/Screens/FirstIntroduction";
import SecondIntroduction from "./src/Screens/SecondIntroduction";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  const [loaded] = useFonts({
  InterBold: require("./assets/fonts/Inter-Bold.ttf"),
  InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
  InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
  InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  
  if(!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName="FirstIntroduction">
        <Stack.Screen name="FirstIntroduction" component={FirstIntroduction} />
        <Stack.Screen name="SecondIntroduction" component={SecondIntroduction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;


//requireNativeComponent "RNGGestureHandlerRootView" was not found in the UIManager.