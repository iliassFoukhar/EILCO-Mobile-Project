import API_ENDPOINT from "../Constants/apiEndpoint";

const findAll = async (token) => {
  return await fetch(API_ENDPOINT + "api/restaurant/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  })
    .then((response) => response.json())
    .catch((err) => {
      console.error("An error occured while trying to authenticate");
      return { success: false, message: err, data: [] };
    });
};

const restaurantService = {
  findAll: findAll,
};

export default restaurantService;
