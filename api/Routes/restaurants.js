// Dependencies
const router = require("express").Router();
// Models
const RestaurantModel = require("../Models/restaurants");

/* NOTE Route to get all restaurants from DB
    @params null
    body null
*/
router.get("/", async (req, res) => {
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
    @params null
    @body 
        name : String : name of the restaurant
        image : String : direct path to the restaurant's logo
        user : String : email of the user who added the restaurant
        categories : Array<String> : Categories in String
*/
router.post("/", async (req, res) => {
  const restaurant = new RestaurantModel({
    name: req.body.name,
    image: req.body.image,
    user: req.body.user,
    stars: 0,
    numberOfRates: 0,
    categories: req.body.categories,
  });
  try {
    const newRestaurant = await restaurant.save();
    res.status(201).json({ data: { ...newRestaurant, success: true } });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
