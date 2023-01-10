import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
interface Props {
    label: string

  }
export default function Header (props : Props){
  // console.log(label);

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{props.label}</Text>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 90,
    backgroundColor: '#FF6699',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 24,
    fontWeight: '700',
  },
});
