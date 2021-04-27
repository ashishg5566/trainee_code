import React, { Component,FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
 import Homescreen from '../container/AppScreen/homescreen/Homescreen'
import Dashboard from '../container/AppScreen/Dashboard.tsx';
import About from '../container/AppScreen/aboutscreen/About.tsx';
import Contact from '../container/AppScreen/contactscreen/Contact.tsx';
import Detail from '../container/AppScreen/detailscreen/Detail.tsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
 
const Tab = createBottomTabNavigator();
 
 
     
// create a component
const Tabnavigation: FC = () => {
    return (
      <Tab.Navigator screenOptions={{
      }}>
  <Tab.Screen name="Home" component={Homescreen}
   
   />
  <Tab.Screen name="contact" component={Contact} 
  />
  <Tab.Screen name="about" component={About} />
  <Tab.Screen name="detail" component={Detail} />
</Tab.Navigator>
);
        
    
};
 
// define your styles
 //make this component available to the app
const styles = StyleSheet.create({
      container: {
          flex:1,
       }
 });
 
export default Tabnavigation;
