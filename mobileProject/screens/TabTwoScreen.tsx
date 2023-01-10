import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { SafeAreaView, VirtualizedList, StatusBar } from 'react-native';
import { Text, View } from '../components/Themed';
import ShopsList from '../components/ShopsList';

const Item = (title : any) => (
  <View>
    <Text style={styles.title}>{"saad"}</Text>
  </View>
);

const getItemCount = () => 50;
const getItem = (data: any, index: number) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index+1}`
});
const cards:any = []

export default function TabTwoScreen() {
  return (
    <View>
  <ShopsList></ShopsList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
