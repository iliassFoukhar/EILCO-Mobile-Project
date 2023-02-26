import React, { useState } from "react";
import { KeyboardAvoidingView, Image, TextInput } from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton";
import styles from "./RegisterStyle.";
import userService from "../../Services/user";

const RegisterScreen = () => {

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setError] = useState("");
  const handleRegister= async () => {
    let res = await userService.register(first_name, last_name, email, password);
    console.log("res " + JSON.stringify(res));
    if (res === true) console.log("Registered");
    else console.log("Register failed");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image source={require("../../Assets/logo.png")} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="first name"
        placeholderTextColor="#999"
        onChangeText={(text) => setFirst_name(text)}
        value={first_name}
      />
      <TextInput
        style={styles.input}
        placeholder="last name"
        placeholderTextColor="#999"
        onChangeText={(text) => setLast_name(text)}
        value={last_name}
      />
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
        title="Register"
        theme="primary"
        size="lg"
        onPress={handleRegister}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
