import colors from "../../Constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
  container: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  header: {
    fontSize: 22,
    marginTop: 10,
    color: colors.primary,
    borderRadius: 20,
    borderColor: colors.primary,
    borderLeftColor: "none",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
  },
  row: {
    backgroundColor: "#FFF",
    alignItems: "flex-start",
    justifyContent:"space-between",
    flexDirection : "row"
  },
  logoutBtn : {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor : "#D9534F",
    //width : 30,
    marginLeft : 10,
    marginTop : 10,
    
    
  },
  innerText : {
    color:  "#F7F7F7"
  }
});
export default styles;
