const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SignIn from "./screens/SignIn";
import Notifications from "./screens/Notifications";
import Group from "./screens/Group";
import Driver from "./screens/Driver";
import GroupInfo from "./screens/GroupInfo";
import RiderInfo from "./screens/RiderInfo";
import DriverInfo from "./screens/DriverInfo";
import Settings from "./screens/Settings";
import Rider from "./screens/Rider";
import Leaderboard from "./screens/Leaderboard";
import PaymentInformation from "./screens/PaymentInformation";
import PaymentOptions from "./screens/PaymentOptions";
import Notifications1 from "./screens/Notifications1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Driver"
              component={Driver}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupInfo"
              component={GroupInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RiderInfo"
              component={RiderInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DriverInfo"
              component={DriverInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rider"
              component={Rider}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Leaderboard"
              component={Leaderboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentInformation"
              component={PaymentInformation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentOptions"
              component={PaymentOptions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications1"
              component={Notifications1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
