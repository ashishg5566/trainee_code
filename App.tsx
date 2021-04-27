 //import liraries
 import 'react-native-gesture-handler';
 import React, { Component,FC } from 'react';
 import { View, Text, StyleSheet } from 'react-native';
  
 import Index from  "./src/router/Index.tsx";
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
  
 // create a component
 const App: FC = () => {
     return (
         <View style={styles.container}>
              
              <Index/> 
             
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
  
 export default App;
 