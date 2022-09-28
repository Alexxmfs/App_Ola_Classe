import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import profile from './Screens/profile';
import publicarPost from './Screens/publicarPost';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="profile">
        <Stack.Screen name="profile" component={profile} />
        <Stack.Screen name="publicarPost" component={publicarPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
