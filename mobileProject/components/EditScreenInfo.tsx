import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import Colors, { BASE_URL } from '../constants/Colors';
import ShopsList from './ShopsList';
import { Text, View } from './Themed';
//import ShopsList from './shopsList';
var isSignedIn = false;
export default function EditScreenInfo({}: { }) {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
//handleHelpPress();
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [isSignedIn, setIsSignedIn] = useState(false);
function login(email:string,password:string){
  if(userExists(email,password))
    console.warn("User exist,", email);
  else
    console.warn("User does not exist, sign up");
    return false
 
}
const onLogin =() =>{
  login(email,password);
  //console.warn("username " + email);
}

function userExists(email: string, password: string) : boolean {
  let isSignIn = false
  fetch(BASE_URL+"api/user/login", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  
      email : email,
      password : password
    }),
  }).then(response => response.json()).then(json =>
    {
    if(json.success)
      setIsSignedIn(true);
    return json.success;
  })
  .catch(error => {
    console.error("Wrong Email or password");
    return false;
  });
  return isSignIn;
}

  if(!isSignedIn){
  return (
    <View>
        <View style={styles.container}>
        <Image source={require("../assets/images/logo.png")} style={styles.image} />
      <StatusBar />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          //value="email"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          //value = "password"
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity style={styles.loginBtn} onPress={onLogin} >
        <Text>LOGIN</Text> 
      </TouchableOpacity> 
    </View>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
        </Text>

    </View>
  );}
  else{
    return(<View>
      <ShopsList></ShopsList>
    </View>);
  }
}

function handleHelpPress() {
    isSignedIn = !isSignedIn
  
  return <EditScreenInfo></EditScreenInfo>
}


const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});

