// Dependencies
const router = require("express").Router();

// Models
const RestaurantModel = require("../Models/restaurants");

// Middlewares
const security = require("../Middlewares/security");

/* NOTE Route to get all restaurants from DB
    @params null
    body null
*/
router.get("/", security.isAuthenticated, async (req, res) => {
  try {
    const items = await RestaurantModel.find();
    res.status(200).json({ data: { ...items }, success: true });
  } catch (err) {
    console.log("\n\n\n\n");
    console.error("Error in Restaurant route Get All");
    console.error(err);
    console.log("\n\n\n\n");
    res.status(500).json({ message: err.message, error: true });
  }
});

/* NOTE Route to get a specific restaurant using it's id
    @params :id of the wanted restaurant
    @body null
*/
router.get("/:id", async (req, res) => {
  try {
    restaurant = await RestaurantModel.findById(req.params.id);
    if (restaurant == null) {
      return res
        .status(404)
        .json({ message: "Cannot find restaurant", error: true });
    }
    res.status(200).json({
      success: true,
      data: restaurant,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

/* NOTE Route to create a new restaurant
 *  @params null
 *  @body
 *      name : String : name of the restaurant
 *      image : String : direct path to the restaurant's logo
 *      user : String : email of the user who added the restaurant
 *      categories : Array<String> : Categories in String
 *
 */
router.post("/", async (req, res) => {
  const restaurant = new RestaurantModel({
    name: req.body.name,
    image: req.body.image,
    user: req.body.user,
    stars: 0,
    numberOfRates: 0,
    categories: req.body.categories,
    ratings: [],
    adress: req.body.adress || "62100, Calais",
  });
  try {
    const newRestaurant = await restaurant.save();
    res.status(201).json({ data: { ...newRestaurant, success: true } });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* NOTE Route to rate a restaurant
 *    @body
 *     restaurantId : String
 *     comment : String :
 *     stars : Number
 */
router.post("/rate", security.isAuthenticated, async (req, res) => {
  try {
    // get necessary data
    let { restaurantId, comment, stars } = req.body;

    // Get the restaurant object
    let restaurant = await RestaurantModel.findById(restaurantId);

    // Store the rating object
    let ratingObject = {
      user: req.userId,
      stars: stars,
      comment: comment,
      first_name: req.first_name,
      last_name: req.last_name,
    };
    restaurant.ratings.push(ratingObject);

    // Update the number of ratings & the average
    if (restaurant.numberOfRates !== 0) {
      restaurant.stars =
        parseFloat(restaurant.stars * restaurant.numberOfRates) +
        parseFloat(stars);
      restaurant.numberOfRates += 1;
      restaurant.stars = parseFloat(
        restaurant.stars / restaurant.numberOfRates
      );
    } else {
      restaurant.numberOfRates = 1;
      restaurant.stars = parseInt(stars);
    }

    // Save the update
    restaurant.save();
    res.status(201).json({
      data: {
        rating: { ...ratingObject },
        restaurant: { ...restaurant },
      },
      success: true,
    });
  } catch (err) {
    console.error("\n\nError route POST /restaurant/rate");
    console.error(err);
    res.status(500).json({
      error: true,
      message: err,
      rating: null,
    });
  }
});

/* NOTE Route to create a rate a restaurant
 *    @params
 *     restaurantId : String
 */

router.get("/rate/:id", security.isAuthenticated, async (req, res) => {
  try {
    let restaurant = await RestaurantModel.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: {
        stars: restaurant.stars,
        numberOfRates: restaurant.numberOfRates,
        ratings: [...restaurant.ratings],
      },
    });
  } catch (err) {
    console.error("\n\nError route GET /restaurant/rate");
    console.error(err);
    res.status(500).json({
      error: true,
      message: err,
      data: {},
    });
  }
});

module.exports = router;
