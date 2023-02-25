import colors from "../../Constants/colors";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "stretch",
  },
});
export default styles;
