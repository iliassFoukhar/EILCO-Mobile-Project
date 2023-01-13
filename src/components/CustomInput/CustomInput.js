import { StyleSheet, Text, View, SafeAreaView, Image, useWindowDimensions, TextInput } from 'react-native';
import React from 'react';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {

  return (
    <View style ={styles.container}>
        
        <TextInput 
        value = {value}
        onChangeText = {setValue}
        placeholder={placeholder}
        style={styles.input} 
        secureTextEntry={secureTextEntry}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height : '6%',
    borderColor: '#e8e8e8',
    borderWidth: 3,
    borderColor :  '#FFC5CB',
    borderRadius: 100,

    paddingHorizontal: 135,
    marginVertical: 13 ,
  },
  input: {},
});


export default CustomInput;




