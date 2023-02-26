import API_ENDPOINT from "../Constants/apiEndpoint";

const authenticate = async (email, password) => {
  return await fetch(API_ENDPOINT + "api/user/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.error("An error occured while trying to authenticate");
      console.error(err);
      return { success: false };
    });
};

const userService = {
  authenticate: authenticate,
};

export default userService;
