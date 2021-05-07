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
const Tabnavigation: FC = () => {
    return (
      <Tab.Navigator 
      
        tabBarOptions={{


          style: {
            backgroundColor: 'white',
            //borderBottomWidth: 2,
            borderBottomColor: '#D3D3D3',
            paddingVertical: 2,
            height: 70,
            justifyContent:'center',
            alignContent:'center'
          },
        showLabel: false,
        activeTintColor: '#4E387E',
        inactiveTintColor: 'gray',
        tabStyle: {
          //backgroundColor: 'yellow',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
            marginBottom: 0,
          paddingBottom: 0,
          padding:10,
             },
         
       
      }}
      lazy={true}
       >
      <Tab.Screen name="Home" component={Homescreen}
      options={{
       tabBarIcon: ({ color}) => (
      <View style={{ flex: 1 }}>
       <Icon name="home"  color={color} size={28}/>
      </View>
      )
      }}
    />
     <Tab.Screen name="Message" component={Contact} 
        options={{
        tabBarIcon: ({color}) => (
      <View style={{ flex: 1 }}>
       <Icon name="envelope-square" color={color} size={28}/>
      </View>
    )
  }}
  />
  <Tab.Screen name="Cap" component={About}
   options={{
     tabBarIcon: ({ color}) => (
      <View style={{ flex: 1 }}>
       <Icon name="graduation-cap"  color={color} size={28}/>
      </View>
    )
  }}
  
  
  />
  <Tab.Screen name="User" component={Detail} 
  options={{
    tabBarIcon: ({ color}) => (
      <View style={{ flex: 1 }}>
       <Icon name="user"  color={color} size={28}/>
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
