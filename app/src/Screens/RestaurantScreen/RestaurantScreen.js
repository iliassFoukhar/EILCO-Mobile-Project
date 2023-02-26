import { Text, View, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./RestaurantStyle";
import IconLabel from "../../Components/IconLabel/IconLabel";
import CustomButton from "../../Components/CustomButton/CustomButton";
import restaurantService from "../../Services/restaurant";

const iconColor = "#6c5ce7";

export default function RestaurantScreen({ route, navigation }) {
  const details = route.params.details;
  const [rating, setRating] = useState();
  const [comment, setComment] = useState("");

  const handleRate = async () => {
    let x = parseInt(rating);
    if (x > 5) x = 5;
    else if (x < 0) x = 0;
    setRating(x);
    let response = await restaurantService.rate(
      details.restaurantId,
      comment,
      rating,
      route.params.user.token
    );
    if (response === true) {
      await route.params.fillRestaurants();
      navigation.navigate("Listing");
    }
  };
  useEffect(() => {
    console.log(details);
  }, []);
  return (
    <ScrollView>
      <View>
        <Image style={styles.imageStyle} source={{ uri: details.image }} />
        <Text style={styles.titleStyle}>{details.name}</Text>
        <Text style={styles.paragraphStyle}>Adress: {details.adress}</Text>
        <Text style={styles.paragraphStyle}>
          Categories: {details.categories}
        </Text>
        <View style={styles.iconContainer}>
          <IconLabel
            name="ios-time"
            label={details.numberOfRates + " review"}
            color={iconColor}
            stars={details.stars}
          />
        </View>
        {details.ratings.length === 0 ? (
          <Text style={styles.paragraphStyle}>No ratings</Text>
        ) : (
          <Text>Ratings: </Text>
        )}
        {/* // Rating form */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Rating from 1 to 5"
            placeholderTextColor="#999"
            onChangeText={(r) => {
              let x = parseInt(r);
              if (x > 5) x = 5;
              else if (x < 0) r = 0;
              setRating(x);
            }}
            value={rating}
          />
          <TextInput
            style={styles.input}
            placeholder="Comment (Optional)"
            placeholderTextColor="#999"
            onChangeText={(text) => setComment(text)}
            value={comment}
          />
          <CustomButton
            title="Rate"
            theme="primary"
            size="lg"
            onPress={handleRate}
          />
        </View>
      </View>
    </ScrollView>
  );
}
