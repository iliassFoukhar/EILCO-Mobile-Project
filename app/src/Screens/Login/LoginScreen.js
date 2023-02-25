import React, { useState } from "react";
import { KeyboardAvoidingView, Image, TextInput } from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton";
import styles from "./LoginStyle";
import userService from "../../Services/user";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setError] = useState("");
  const handleLogin = async () => {
    let res = userService.authenticate(email, password);
    if (res === true) console.log("Authenticated");
    else console.log("NOT");
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
