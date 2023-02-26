import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  imageStyle: {
    height: 220,
    width: "100%",
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 22,
    marginTop: 10,
    marginLeft: 10,
  },
  paragraphStyle: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
  },
  iconContainer: {
    // flex: 1,
    marginTop: 10,
    marginLeft: 10,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
    // justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
