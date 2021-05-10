import React, { Component,FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
 import Homescreen from '../container/AppScreen/homescreen/Homescreen'
import Dashboard from '../container/AppScreen/dashboardscreen/Dashboard.tsx';
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
            // //borderBottomWidth: 2,
            // borderBottomColor: '#D3D3D3',
            // paddingVertical: 2,
            // height: 70,
            // justifyContent:'center',
            // alignContent:'center'
            borderTopWidth: 0,
            paddingTop: 3,
            paddingBottom: 4,
            height: 82,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 20,
            shadowOffset: { width: 0, height: 0 }
          },
        showLabel: false,
        activeTintColor: '#4E387E',
        inactiveTintColor: 'gray',
        tabStyle: {
         // backgroundColor: 'yellow',
          //flex: 1,
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   alignSelf: 'center',
        //     marginBottom: 0,
        //  paddingBottom: 0,
          padding:10,
             },
         
       
      }}
      // lazy={true}
      
       >
      <Tab.Screen name="Home" component={Homescreen}
      options={{
        tabBarLabel: '',
       tabBarIcon: ({ color}) => (
      <View >
       <Icon name="home"  color={color} size={28}/>
      </View>
      )
      }}
    />
     <Tab.Screen name="Message" component={Dashboard} 
        options={{
          tabBarLabel: '',
        tabBarIcon: ({color}) => (
      <View>
       <Icon name="envelope-square" color={color} size={28}/>
      </View>
    )
  }}
  />
   <Tab.Screen
    name="Add"
    options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
            <View
            style={{
                position: 'absolute',
                bottom: 6, // space from bottombar
                height: 70,
                width: 70,
                borderRadius: 68,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
            <Icon name="plus-circle" color={color} size={60}/>
            </View>
        )
    }}
    component={Contact}/>
  <Tab.Screen name="Cap" component={About}
   options={{
    tabBarLabel: '',
     tabBarIcon: ({ color}) => (
      <View >
       <Icon name="graduation-cap"  color={color} size={28}/>
      </View>
    )
  }}
  
  
  />
  <Tab.Screen name="User" component={Detail} 
  options={{
    tabBarLabel: '',
    tabBarIcon: ({ color}) => (
      <View>
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
