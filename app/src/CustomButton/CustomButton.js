import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import colors from "../Constants/colors";

const themeAdapter = (theme, property) => {
  const design = {
    primary: {
      backgroundColor: colors.primary,
      borderWidth: 2,
      borderColor: colors.primary,
    },
    outline: {
      backgroundColor: colors.light,
      borderColor: "green",
      borderWidth: 2,
    },
  };

  const text = {
    primary: {
      color: colors.light,
    },
    outline: {
      color: colors.primary,
    },
  };
  return property === "button" ? design[theme] : text[theme];
};

export default function CustomButton(props) {
  const {
    onPress,
    title = "Save",
    theme,
    size,
    customStyle = { button: {}, text: {} },
  } = props;
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      width: size == "md" ? 200 : size == "lg" ? 300 : 100,
      ...themeAdapter(theme, "button"),
      ...customStyle.button,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      ...themeAdapter(theme, "text"),
      ...customStyle.text,
    },
  });

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
