import styles from "./ListingStyle";
import { Text, View, Image, FlatList, Pressable } from "react-native";
import API_ENDPOINT from "../../Constants/apiEndpoint";
import React, { useEffect, useState } from "react";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import restaurantService from "../../Services/restaurant";
import CustomButton from "../../Components/CustomButton/CustomButton";

export default function ListingScreen({ route, navigation }) {
  const [restaurants, setRestaurants] = useState([]);

  const objToArray = async (json) => {
    let keys = Object.keys(json);
    let array = [];
    for (let key of keys) {
      array.push(json[key]);
    }
    // console.log("############ OBJ TO ARRAY", json);
    return array;
  };

  const fillRestaurants = async () => {
    try {
      let data = await restaurantService.findAll(route.params.user.token);
      let formattedArray = await objToArray(data["data"]);
      setRestaurants(
        formattedArray.map((restaurant, index) => {
          return {
            name: restaurant.name,
            numberOfRates: parseInt(restaurant.numberOfRates),
            categories: restaurant.categories.join(" "),
            image: `${API_ENDPOINT}data/${restaurant.image}`,
            id: parseInt(index + 1),
            stars: parseInt(restaurant.stars),
            adress: restaurant.adress,
            ratings: restaurant.ratings,
          };
        })
      );

      console.log(restaurants);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fillRestaurants();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>Restaurants of Calais</Text>
        <Pressable
          onPress={(e) => {
            navigation.navigate("Login");
          }}
          style ={
            styles.logoutBtn
          }
        ><Text style={styles.innerText}>Logout</Text></Pressable>
      </View>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantCard info={item} />;
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
