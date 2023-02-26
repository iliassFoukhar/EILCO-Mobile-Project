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
import RegisterScreen from "./src/Screens/Signup/RegisterScreen";
import { LogBox } from "react-native";
import RestaurantScreen from "./src/Screens/RestaurantScreen/RestaurantScreen";

// Navigator stack
const Stack = createStackNavigator();

// Ignore warnings
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

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
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{ setUser: setUser, user: { ...user } }}
      />
      <Stack.Screen name="Signup" component={RegisterScreen} />
      <Stack.Screen
        name="Listing"
        component={ListingScreen}
        initialParams={{ setUser: setUser, user: { ...user } }}
      />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantScreen}
        initialParams={{ setUser: setUser, user: { ...user } }}
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
