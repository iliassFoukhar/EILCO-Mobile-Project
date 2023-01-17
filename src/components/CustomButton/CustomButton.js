import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';


const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {


    return (
        <Pressable onPress={onPress} style={styles.container}> 
            <Text style={styles.text}> {text} </Text>
        </Pressable>
      );
  };

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#FFC5CB',
    
    padding: 14,
    alignItems: 'center',
    width: '100%',
    height : '12%',
    // justifyContent: 'center',
    borderRadius: 100,
    marginVertical:5 ,
  },


  text:{
    fontSize: 16,
    fontWeight: '900',
    marginVertical: 6 ,
  },

  

}); 

export default CustomButton;



