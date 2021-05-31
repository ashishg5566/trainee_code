import React, { Component,FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
import Login from  "../container/authscreen/loginscreen/Login.tsx";
import Changepassword from  "../container/authscreen/Changepasswordscreen/Changepassword.tsx";
import Signup from  "../container/authscreen/signupscreen/Signup.tsx";
import Forgot from  "../container/authscreen/forgotpassword/Forgot.tsx";
import Otpscreen from  "../container/authscreen/otpscreen/Otpscreen.tsx";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
// create a component
const Authnavigation: FC = () => {
    return (
        <View style={styles.container}>
     <Stack.Navigator
     
     >
      <Stack.Screen name="Login Page" component={Login} 
       options={{headerShown: false}}
      />
       <Stack.Screen name="signup" component={Signup} 
        options={{headerShown: false}}
      />
       <Stack.Screen name="forgotpassword" component={Forgot}
        options={{headerShown: false}} 
      />
       <Stack.Screen name="Otpscreen" component={Otpscreen}
        options={{headerShown: false}} 
      />
       
    </Stack.Navigator>  
        </View>
    );
};

// define your styles
 

//make this component available to the app
const styles = StyleSheet.create({
      container: {
          flex:1,
     
   }
 });
 
export default Authnavigation;
