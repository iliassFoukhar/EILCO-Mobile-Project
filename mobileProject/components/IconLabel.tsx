import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const totalStars = 5;
const gainedStars = 2;
interface Props {
    name: any
    label: string
    color: any
    stars:number
  }
export default function IconLabel( props:Props ){
  return (
    <View style={styles.container}>
      {
        Array.from({length: props.stars}, (x, i) => {
         return(
          <MaterialIcons key={i} name="star" size={30} color="#FFA000"/>
         )
        })

      }

      {

        Array.from({length: totalStars - props.stars}, (x, i) => {
         return(
          <MaterialIcons key={i} name="star-border" size={30} color="#FFA000" />
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
    marginRight: 2,
  },
});
