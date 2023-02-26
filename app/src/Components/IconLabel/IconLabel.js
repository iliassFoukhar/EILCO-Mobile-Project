import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../../Constants/colors";
const totalStars = 5;

export default function IconLabel( props){
  return (
    <View style={styles.container}>
      {
        Array.from({length: props.stars}, (x, i) => {
         return(
          <MaterialIcons key={i} name="star" size={24} colors={colors.light}/>
         )
        })

      }

      {

        Array.from({length: totalStars - props.stars}, (x, i) => {
         return(
          <MaterialIcons key={i} name="star-border" size={24} color={colors.primary} />
         )
        })

      }
      <Text style={styles.labelStyle}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 12,
  },
  iconStyle: {
    marginRight: 10,
  },
});
