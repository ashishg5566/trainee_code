import React, { Component,FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
 import Homescreen from '../container/AppScreen/homescreen/Homescreen'
import Dashboard from '../container/AppScreen/Dashboard.tsx';
import About from '../container/AppScreen/aboutscreen/About.tsx';
import Contact from '../container/AppScreen/contactscreen/Contact.tsx';
import Detail from '../container/AppScreen/detailscreen/Detail.tsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
 
 
const Tab = createBottomTabNavigator();
 
 
     
// create a component
const Tabnavigation: FC = () => {
    return (
      <Tab.Navigator 
      
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === 'Home') {
      //       iconName = focused
      //         ? 'ios-information-circle'
      //         : 'ios-information-circle-outline';
      //     } else if (route.name === 'Settings') {
      //       iconName = focused ? 'ios-list-box' : 'ios-list';
      //     }

      //     // You can return any component that you like here!
      //     return  <Icon name="home"  color="grey" size={20}/>
      //   },
      // })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
         labelStyle: { padding: 0, margin: 0, border: 0 },
        // tabStyle: { padding: 0, margin: 0, border: 0 },
      }}
      lazy={true}
      // style={{ padding: 10, marginTop: 10, border: 0 }}
      
      
      
      >
  <Tab.Screen name="Home" component={Homescreen}
   
   options={{
    tabBarIcon: ({ color}) => (
      <View style={{ flex: 1 }}>
       <Icon name="home"  color="grey" size={20}/>
      </View>
    )
  }}
   
   />
  <Tab.Screen name="Message" component={Contact} 
   
   options={{
    
   
    tabBarIcon: ({focused}) => (
      <View style={{ flex: 1 }}>
       <Icon name="envelope-square"  focused={focused} color="grey" size={20}/>
      </View>
    )
  }}
  />
  <Tab.Screen name="Cap" component={About}
   
   options={{
    
    tabBarIcon: ({ color}) => (
      <View style={{ flex: 1 }}>
       <Icon name="graduation-cap"  color="grey" size={20}/>
      </View>
    )
  }}
  
  
  />
  <Tab.Screen name="User" component={Detail} 
  options={{
    tabBarIcon: ({ color}) => (
      <View style={{ flex: 1 }}>
       <Icon name="user"  color="grey" size={20}/>
      </View>
    )
  }}
  
  
  />
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
