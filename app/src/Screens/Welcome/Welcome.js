import { Text, View, Image } from "react-native";
import React from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
import styles from "./WelcomeStyle";
import { useNavigation } from "@react-navigation/native";

// export default class Welcome extends Component {

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Image
        source={require("../../Assets/logo.png")}
        style={styles.image}
        theme="primary"
      />
      <CustomButton
        onPress={(e) => {
          navigation.navigate("Login");
        }}
        title="Login"
        theme="primary"
        size="md"
        customStyle={{ button: { marginBottom: 10 } }}
      />
      <CustomButton
        onPress={(e) => {
          navigation.navigate("Signup");
        }}
        title="Sign up"
        theme="outline"
        size="md"
      />
       <CustomButton
        onPress={(e) => {
          navigation.navigate("shopList");
        }}
        title="ShopList"
        theme="outline"
        size="md"
      />
    </View>
  );
}
