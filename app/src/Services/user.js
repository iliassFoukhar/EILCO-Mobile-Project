import API_ENDPOINT from "../Constants/apiEndpoint";

const register = async (first_name, last_name, email, password) =>{
return await fetch(API_ENDPOINT + "api/user/register", {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    first_name: first_name,
    last_name: last_name,
    email : email,
    password : password
  })
}).then((response) => response.json())
.then((json) => {
  console.log("FROM PROMISE , ", json);
  return true;
})
.catch((err) => {
  console.error("An error occured while trying to authenticate");
  return false;
});;
}

const authenticate = (email, password) => {
  fetch(API_ENDPOINT + "api/user/login", {
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
      console.log("FROM PROMISE , ", json);
      return json.success;
    })
    .catch((err) => {
      console.error("An error occured while trying to authenticate");
      return false;
    });
};

const userService = {
  authenticate: authenticate,
  register : register,
};

export default userService;
