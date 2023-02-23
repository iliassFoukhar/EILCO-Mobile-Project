import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, useWindowDimensions, Pressable } from 'react-native';
import logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons.js'
const NewPasswordScreen = () => {
    
    const [code, setCode] = useState('');
    const [NewPassword, setNewPassword] = useState('');
   
    const onSubmitPressed =() =>{
        console.warn("onSubmitPressed");
    }
    
    const onSignInPress =() =>{
        console.warn("onSignInPress");
    }
    const showButton = false;
    
  return (
    <View style={styles.root}>
        <Text></Text>
        
        
        
        <Text style={styles.title}>Reset Password</Text>
        
        <CustomInput  placeholder="New code" value={code} setValue={setCode}  />
        <CustomInput  placeholder="confirm code" value={NewPassword} setValue={setNewPassword}  />

        
        
        <CustomButton  text="Submit" onPress={onSubmitPressed}/>
        <CustomButton  text="Back to Sign in" onPress={onSignInPress} />

        
        
        <Text></Text>
        <Text></Text>
       
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
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
        fontSize: 50,
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

export default NewPasswordScreen;




