import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, useWindowDimensions } from 'react-native';
import logo from '../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';

const SocialSignInButtons = () => {
    
    const onSignInFacebook =() =>{
        console.warn("Sign in with Facebook");
    }
  return (
    < >
        <CustomButton text="Sign in with Facebook" onPress={onSignInFacebook}/>
    </>
  );
}



export default SocialSignInButtons ;




