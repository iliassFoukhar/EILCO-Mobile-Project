import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, useWindowDimensions, Pressable } from 'react-native';
import logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons.js'
const ConfirmEmailScreen = () => {
    
    const [code, setCode] = useState('');
    
    const onConfirmPressed =() =>{
        console.warn("onConfirmPressed");
    }
    const onSignInPress =() =>{
        console.warn("onSignInPress");
    }
    const onResendPress =() =>{
        console.warn("onResendPress");
    }

    const onTermsOfUsePressed =() =>{
        console.warn("onTermsOfUsePressed");
    }

    const onPrivacyPressed =() =>{
        console.warn("onPrivacyPressed");
    }

    const showButton = false;
    
  return (
    <View style={styles.root}>
        <Text></Text>
        <Text></Text>
        
        
        <Text style={styles.title}>confirm your email</Text>
        
        <CustomInput  placeholder="received code" value={code} setValue={setCode}  />
        <Text></Text>
        
        <CustomButton  text="Confirm" onPress={onConfirmPressed}/>

        <Text></Text>

        
        <CustomButton style={styles.container} text="Resend Code" onPress={onResendPress}/>
        <Text></Text>
        
        <CustomButton  text="Back to Sign in" onPress={onSignInPress} />
        {showButton &&<CustomButton  text="Terms of use" onPress={onTermsOfUsePressed} />}
        <Text></Text>
        <Text></Text>

        {/* <CustomButton  text="Privacy Policy" onPress={onPrivacyPressed} /> */}
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        
        

    </View>
  );
}

const styles = StyleSheet.create({

    
    root :{
        alignContent: 'center',
        padding :12,
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 100,
        marginVertical:5 ,
        },
    title: {
        
        fontSize: 40,
        fontWeight: 'bold', 
        color: '#FFC5CB' ,
        margin: 10,
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18,
    },
    
    
    
});

export default ConfirmEmailScreen;




