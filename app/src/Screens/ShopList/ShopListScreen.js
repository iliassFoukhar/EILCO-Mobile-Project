import styles from "./ShopListStyle";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image,FlatList } from "react-native";
import React from "react";
import RestaurantCard from "../../Components/Restaurant/RestaurantCard"
const restaurants = [
    {
      name: 'The Muffin Man Bakery',
      categories: 'Desserts, Cakes and Bakery',
      deliveryTime: '35',
      distance: '3.7 km',
      image: require('../../Assets/the-muffin-man-bakery.jpg'),
      id: 1,
      stars : 3
    },
    {
      name: 'Central Perk Coffee House',
      categories: 'Beverages, Desserts, Cakes and Bakery',
      deliveryTime: '45',
      distance: '4.3 km',
      image: require('../../Assets/central-perk.jpg'),
      id: 2,
      stars : 2
    },
    {
      name: 'WildBread Bakery',
      categories: 'Cakes and Bakery, American, Sandwiches, Burgers',
      deliveryTime: '25',
      distance: '3 km',
      image: require('../../Assets/wildbread-bakery.jpg'),
      id: 3,
      stars:2
    },
    {
      name: "McDonald's",
      categories: 'Fast Food, Burgers, Desserts',
      deliveryTime: '20',
      distance: '2.5 km',
      image: require('../../Assets/mcdo.jpg'),
      id: 4,
      stars:4
    },
    {
      name: 'Jollibee',
      categories: 'Fast Food, Burgers, Desserts',
      deliveryTime: '25',
      distance: '3.1 km',
      image: require('../../Assets/jollibee.jpg'),
      id: 5,
      stars:5
    },
  ];
export default function ShopList() {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
              {/* <Card /> */}
              <FlatList
                data={restaurants}
                renderItem={({ item }) => {
                  return <RestaurantCard info={item} />;
                }}
                keyExtractor={(restaurant) => restaurant.id.toString()}
                showsVerticalScrollIndicator={false}
              />
        
            </View>
    );
  }