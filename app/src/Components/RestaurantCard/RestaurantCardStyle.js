import colors from "../../Constants/colors";
import { StyleSheet, Dimensions } from "react-native";
const deviceWidth = Math.round(Dimensions.get("window").width);
const offset = 50;
const radius = 10;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: colors.secondary,
    height: 220,
    borderRadius: radius,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 120,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 20,
    color: colors.light,
    fontWeight: "800",
  },
  categoryStyle: {
    fontWeight: "200",
  },
  infoStyle: {
    color: colors.secondary,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: "row",
    marginTop: 10,
  },
});
export default styles;
