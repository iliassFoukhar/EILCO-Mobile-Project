import styles from "./RestaurantCardStyle";
import { Text, View, Image, Pressable } from "react-native";
import IconLabel from "../IconLabel/IconLabel"
const iconColor = '#6c5ce7';
export default function RestaurantCard(props) {
  const { name, categories, deliveryTime, distance, image,stars } = props.info;
  const ShowDetails = () =>{console.log("im presed")}
  return (
    <Pressable onPress={ShowDetails}>
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={image} />
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>{name}</Text>
          <Text style={styles.categoryStyle}>{categories}</Text>

          <View style={styles.iconLabelStyle}>
            <IconLabel name="ios-time" label={deliveryTime + " review"} color={iconColor} stars = {stars} />
          </View>
        </View>
      </View>
    </View>
    </Pressable>
  );
};