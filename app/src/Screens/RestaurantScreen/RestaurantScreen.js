import { Text, View, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./RestaurantStyle";
import IconLabel from "../../Components/IconLabel/IconLabel";
import CustomButton from "../../Components/CustomButton/CustomButton";
const iconColor = "#6c5ce7";

export default function RestaurantScreen({ route, navigation }) {
  const details = route.params.details;
  const [rating, setRating] = useState();
  const [comment, setComment] = useState("");

  const handleRate = () => {
    console.log("RATE BTN Pressed");
    console.log(rating);
    console.log(comment);
  };
  useEffect(() => {}, []);
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
              r = parseInt(r);
              if (r > 5) r = 5;
              else if (r < 0) r = 0;
              setRating(r);
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
