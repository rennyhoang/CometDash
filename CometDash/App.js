import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, PermissionsAndroid, Pressable, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './components/SignIn';
import { useFonts } from "expo-font";
import Geolocation from 'react-native-geolocation-service';

const Stack = createNativeStackNavigator();


export default function App() {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  /*const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("./assets/fonts/Roboto_Regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }*/
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome!'}}
        />
        <Stack.Screen
              name="Sign In"
              component={SignIns}
              options={{ headerShown: false }}
            />
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Sign In', {name: 'Jane'})
      }
    />
  );
};

const SignIns = ({navigation}) => {
  return (
    <SignIn></SignIn>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
