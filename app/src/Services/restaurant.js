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

const rate = async (restaurantId, comment, stars, token) => {
  return await fetch(API_ENDPOINT + "api/restaurant/rate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      restaurantId: restaurantId,
      comment: comment,
      stars: parseInt(stars),
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("FROM PROMISE , ", json);
      return true;
    })
    .catch((err) => {
      console.error("An error occured while trying to authenticate");
      return false;
    });
};

const restaurantService = {
  findAll: findAll,
  rate: rate,
};

export default restaurantService;
