import EncryptedStorage from "react-native-encrypted-storage";

async function storeUserSession(user, token) {
  try {
    return await EncryptedStorage.setItem(
      "user_session",
      JSON.stringify({
        email: user.credentials.email,
        token: token,
        first_name: user.information.first_name,
        last_name: user.information.last_name,
      })
    );
  } catch (error) {
    console.error("An error occured while storing the user session");
    console.error(error);
    return false;
  }
}

async function retrieveUserSession() {
  try {
    return await EncryptedStorage.getItem("user_session");
  } catch (error) {
    console.error("An error occured while trying to retrieve user session");
    console.error(error);
    return false;
  }
}

async function removeUserSession() {
  try {
    await EncryptedStorage.removeItem("user_session");
    return true;
  } catch (error) {
    console.error("An error occured while trying to logout the user session");
    console.error(error);
    return false;
  }
}

const auth = {
  authenticate: storeUserSession,
  isAuthenticated: retrieveUserSession,
  logout: removeUserSession,
};

export default auth;
