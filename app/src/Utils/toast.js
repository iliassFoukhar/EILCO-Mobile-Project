import { Platform, Alert, ToastAndroid } from "react-native";

const showToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

const toast = (message_title, message) => {
  if (Platform.OS === "ios") {
    Alert.alert(message_title, message, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  } else {
    showToast(message);
  }
};

export default toast;
