import React, {useState} from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from "react-native";


const SignupScreen = () => {
  const [password, setPassword, confirmPassword, setConfirmPassword] = useState('');
  
  
  
  
  return (
    <SafeAreaView style={styles.safeViewStyle}>
      
      <View style={styles.logoView}>
      <Image source={require('../../assets/store_logo.png')} style={styles.logoStyle} />      
      </View> 

      <View style={{marginTop: 10}}>
      <Text style={styles.textStyle}>Be our member!</Text>
      </View>

      
      <View style={styles.supViewStyle1}>      
      <TextInput
        style={styles.inputFirst}
        placeholder="Firstname"
        placeholderTextColor={'#2b2d42'}
        autoCorrect={false}
        
      />
      <TextInput
        style={styles.inputLast}
        placeholder="Lastname"
        placeholderTextColor={'#2b2d42'}
        autoCorrect={false}
       
      />   
      
      </View>

      <View style={styles.supViewStyle2}>      
      <TextInput
        style={styles.inputEmail}        
        placeholder="Email"
        placeholderTextColor={'#2b2d42'}
        autoCorrect={false}
        autoCapitalize="none"
        
      />

      
      <TextInput
        style={styles.inputPass}
        placeholder="Password"
        name="password"
        textContentType="newPassword"       
        value={password}
        placeholderTextColor={'#2b2d42'}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
        enablesReturnKeyAutomatically
        onChangeText={(newValue) => setPassword (newValue)}      
        

      />
           
      <Text style={styles.textStyle2}> Must contain 8 characters (letters, numbers, & #!$@*) </Text>
      
      <TextInput
        style={styles.inputPass}
        placeholder="Confirm Password"
        //name="Confirm password"
        textContentType="confirmPassword"      
        value={confirmPassword}
        placeholderTextColor={'#2b2d42'}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
        enablesReturnKeyAutomaticallysds
   
        //onChangeText={password => setPassword (newValue)}
        
      /> 

      <TouchableOpacity
        style={styles.supButton}>           
        
        <Text style={styles.supBtnText}>Signup</Text>

      </TouchableOpacity>
     </View> 
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeViewStyle: {
    borderColor: 'black',
    backgroundColor: 'white',
    alignItems: 'center',// horizontal alignment
    justifyContent: 'flex-start', //vertical alignment
    flex: 1, 
   
   
  },
  logoView: {
    height:150,
    width: 350, 
    alignItems: 'center',// horizontal alignment
    justifyContent: 'center', //vertical alignment
    borderBottomWidth: 2,
    borderBottomColor: '#00000e',
    marginTop: 30,
  
  },
  logoStyle: {
    height: 100,
    width: 220,
    marginBottom: 5,
    
  },
  textStyle: {
    fontFamily: "Times New Roman",
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginBottom: 20,
   
  }, 
  supViewStyle1: {
    height:90,
    width: 400, 
    alignItems: 'flext-start',// horizontal alignment
    justifyContent: 'center', //vertical alignment
    marginTop: 0,
    // borderColor: 'black',
    // borderWidth: 1,
    // borderStyle: 'solid',
    flexDirection: 'row',
   
  },  
  
  inputFirst: {
    height: 45,
    width: 155,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor:"#d9d9d9",
    paddingLeft: 10,
    color: 'black',
 
  },
  inputLast: {
    height: 45,
    width: 155,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor:"#d9d9d9",
    paddingLeft: 10,
    color: 'black',
    marginLeft: 10,
 
  },
  supViewStyle2: {
    height:300,
    width: 400, 
    alignItems: 'center',// horizontal alignment
    justifyContent: 'flex-start', //vertical alignment
    marginTop: -22,
    // borderColor: 'black',
    // borderWidth: 1,
    // borderStyle: 'solid',
    flexDirection: 'column',

  },
  inputEmail: {
    height: 45,
    width: 320,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor:"#d9d9d9",
    paddingLeft: 10,
    color: 'black',
 
  },
  inputPass: {
    height: 45,
    width: 320,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor:"#d9d9d9",
    paddingLeft: 10,
    color: 'black',
  
  },
  
  
  textStyle2: {
    fontStyle: 'italic',
    fontSize: 12,
    flexDirection: 'row',
   

  },
    supButton: {
      height: 45,
      width: 320,
      borderRadius: 8,
      marginTop: 50,
      backgroundColor: '#f9a620',     
      marginTop: 25,      
      alignItems: 'center',
      justifyContent: 'center'

 
  },
  supBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  }
  
 
});

export default SignupScreen;
