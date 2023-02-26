import { StyleSheet } from "react-native";
import colors from "../../Constants/colors";
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
    marginBottom: 10,
  },
  paragraphStyle: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
  },
  iconContainer: {
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
    alignItems: "center",
  },
  ratingsContainer: {
    marginLeft: 10,

    marginRight: 10,
    marginTop: 20,
    flex: 1,
    alignItems: "center",
  },
  ratingContainer: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    marginbottom: 20,

    width: 300,
  },

  username: {
    fontSize: 11,
  },
  stars: {
    textAlign: "right",
    fontSize: 12,
    flex: 1,
    justifyContent: "center",
  },
  comment: {
    textAlign: "center",
  },
});
export default styles;
