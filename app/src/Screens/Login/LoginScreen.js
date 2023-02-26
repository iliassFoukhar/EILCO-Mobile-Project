import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Image, TextInput, Platform } from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton";
import styles from "./LoginStyle";
import userService from "../../Services/user";
import toast from "../../Utils/toast";

const LoginScreen = ({ route, navigation }) => {
  const setUser = route.params.setUser;
  const user = route.params.user;
  const [newUser, setNewUser] = useState(user ? { ...user } : {});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (newUser?.hasOwnProperty("token")) {
      navigation.navigate("Listing");
    }
  }, [newUser]);

  const handleLogin = async () => {
    let res = await userService.authenticate(email, password);

    if (res.success === true) {
      setUser({
        email: res.user.credentials.email,
        token: res.token,
        first_name: res.user.information.first_name,
        last_name: res.user.information.last_name,
      });
      setNewUser({
        email: res.user.credentials.email,
        token: res.token,
        first_name: res.user.information.first_name,
        last_name: res.user.information.last_name,
      });
    } else toast("Authentication", "Email or password wrong!");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image source={require("../../Assets/logo.png")} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <CustomButton
        title="Login"
        theme="primary"
        size="lg"
        onPress={handleLogin}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
