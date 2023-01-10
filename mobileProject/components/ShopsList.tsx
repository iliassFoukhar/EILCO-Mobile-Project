import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Header from './Header';
import RestaurantCard from './RestaurantCard';
const restaurants = [
    {
      name: 'The Muffin Man Bakery',
      categories: 'Desserts, Cakes and Bakery',
      deliveryTime: '35',
      distance: '3.7 km',
      image: require('../assets/the-muffin-man-bakery.jpg'),
      id: 1,
      stars : 3
    },
    {
      name: 'Central Perk Coffee House',
      categories: 'Beverages, Desserts, Cakes and Bakery',
      deliveryTime: '45',
      distance: '4.3 km',
      image: require('../assets/central-perk.jpg'),
      id: 2,
      stars : 2
    },
    {
      name: 'WildBread Bakery',
      categories: 'Cakes and Bakery, American, Sandwiches, Burgers',
      deliveryTime: '25',
      distance: '3 km',
      image: require('../assets/wildbread-bakery.jpg'),
      id: 3,
      stars:2
    },
    {
      name: "McDonald's",
      categories: 'Fast Food, Burgers, Desserts',
      deliveryTime: '20',
      distance: '2.5 km',
      image: require('../assets/mcdo.jpg'),
      id: 4,
      stars:4
    },
    {
      name: 'Jollibee',
      categories: 'Fast Food, Burgers, Desserts',
      deliveryTime: '25',
      distance: '3.1 km',
      image: require('../assets/jollibee.jpg'),
      id: 5,
      stars:5
    },
  ];
export default function ShopsList() {
    const users = [
        {
           name: 'brynn',
           avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
       ];
    return (
<View style = {styles.container}>
<Header label="Available restaurants in Calais" />
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

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
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
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  container: {
    backgroundColor: "#fff",
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
});
