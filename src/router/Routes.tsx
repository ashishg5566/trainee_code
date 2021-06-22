import React, { Component,FC } from 'react';
 import { View, Text, StyleSheet } from 'react-native';
 import Drawernavigation from  "./Drawernavigation.tsx";
 import Authnavigation from  "./Authnavigation.tsx";
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
  
 // create a component
 const Routes: FC = () => {
     return (
         <View style={styles.container}>
            
             {/* <Navigation/> */}
             <Stack.Navigator initialRouteName="Auth"
              screenOptions={{
                headerShown: false
              }}
             > 
             <Stack.Screen name="Auth" component={Authnavigation}
             
             />
            <Stack.Screen name="navbar" component={Drawernavigation} 
              
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
  
 export default Routes;
 