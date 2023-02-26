// Dependencies
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

// Constants
import colors from "./src/Constants/colors";
// Screens
import Welcome from "./src/Screens/Welcome/Welcome";
import LoginScreen from "./src/Screens/Login/LoginScreen";
import ListingScreen from "./src/Screens/Listing/ListingScreen";
const Stack = createStackNavigator();

function RootStack() {
  const [user, setUser] = useState({});

  return (
    <Stack.Navigator
      initialRouteName="Welcome" // awl page tban
      screenOptions={({ navigation }) => ({
        // title: "Welcome",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.tabBg,
        },
        headerTintColor: colors.light,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        // options={{ user: { ...user } }}
        initialParams={{ setUser: setUser, user: { ...user } }}
      />
      <Stack.Screen
        name="Listing"
        component={ListingScreen}
        // options={{ user: { ...user }, setUser: setUser }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    // In app component, add this to the render
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
