import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, useWindowDimensions } from 'react-native';
import logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons.js'

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const onSignInPressed =() =>{
        console.warn("Sign in");
    }
    
    const onForgotPasswordPressed =() =>{
        console.warn("Forgot password?");
    }
    const onSignInFacebook =() =>{
        console.warn("Sign in with Facebook");
    }
    const onSignUp =() =>{
        console.warn("Don't have an account?");
    }
  return (
    <View style={styles .root}>
        <Text></Text>
        
        <Image source={logo} 
        style= {[styles.logo]} resizeMede = "contain" />
        
        <CustomInput placeholder="Usename" value={username} setValue={setUsername}  />
        <CustomInput placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/>
        <CustomButton text="Sign in" onPress={onSignInPressed}/>

        

        <SocialSignInButtons />
        <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} />
        <CustomButton text="Don't have an account?" onPress={onSignUp} />
        
        
    </View>
  );
}

const styles = StyleSheet.create({

    root :{
        alignContent: 'center',
        padding :20,
        },
    logo: {
        
        
    },
    
});

export default SignInScreen;




