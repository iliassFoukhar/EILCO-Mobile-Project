import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, useWindowDimensions } from 'react-native';
import logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons.js'
const SignUPScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const {height} = useWindowDimensions();
    const onRegisterPressed =() =>{
        console.warn("onRegisterPressed");
    }
    const onTermsOfUsePressed =() =>{
        console.warn("onTermsOfUsePressed");
    }
    const onPrivacyPressed =() =>{
        console.warn("onPrivacyPressed");
    }
    

    const onSignInPress =() =>{
        console.warn("onSignInPress");
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
        
        <Text style={styles.title}>Create an account</Text>
        
        <CustomInput placeholder="Usename" value={username} setValue={setUsername}  />
        <CustomInput placeholder="Email" value={email} setValue={setEmail}  />
        <CustomInput placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/>
        
        <CustomButton text="Register" onPress={onRegisterPressed}/>

        

        
        
        
        <SocialSignInButtons />
        
        <CustomButton text="Have an account? Sign in" onPress={onSignInPress} />
        <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({

    root :{
        alignContent: 'center',
        padding :20,
        },
    title: {
        
        fontSize: 24,
        fontWeight: 'bold', 
        color: '#FFC5CB' ,
        margin: 10,
    },

    text: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 18,
    },
    link :{
        color :'#FFC5CB',
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default SignUPScreen;




