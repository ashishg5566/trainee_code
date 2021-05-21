
import React, { Component,FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
 import Homescreen from '../container/AppScreen/Homescreen'
import Dashboard from '../container/AppScreen/dashboardscreen/Dashboard.tsx';
import Information1 from '../container/AppScreen/page1/Information1.tsx';
import Information2 from '../container/AppScreen/page2/Information2.tsx';
import Information3 from '../container/AppScreen/page3/Information3.tsx';
import Task1 from '../container/AppScreen/Task1/Task1.tsx';
import Task2 from '../container/AppScreen/Task2/Task2.tsx';
import Task3 from '../container/AppScreen/Task3/Task3.tsx';
import Task4 from '../container/AppScreen/Task4/Task4.tsx';
import Task5 from '../container/AppScreen/Task5/Task5.tsx';
import Task6 from '../container/AppScreen/Task6/Task6.tsx';
import Task7 from '../container/AppScreen/Task7/Task7.tsx';
import Task8 from '../container/AppScreen/Task8/Task8.tsx';
import Task9 from '../container/AppScreen/Task9/Task9.tsx';
import About from '../container/AppScreen/aboutscreen/About.tsx';
 
 
import Contact from '../container/AppScreen/contactscreen/Contact.tsx';
import Detail from '../container/AppScreen/detailscreen/Detail.tsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Tabnavigation from './Tabnavigation.tsx'
 
const Drawer = createDrawerNavigator();
 
// create a component
const Drawernavigation: FC = () => {
    return (
        <View style={styles.container}>
               
      <Drawer.Navigator initialRouteName="Tabnav"
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}
    >
      <Drawer.Screen name="Tabnav" component={Tabnavigation} 
       />
       <Drawer.Screen name="Dashboard" component={Dashboard} 
        />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="information1" component={Information1} />
        <Drawer.Screen name="information2" component={Information2} />
        <Drawer.Screen name="information3" component={Information3} />
        <Drawer.Screen name="Task1" component={Task1} />
        <Drawer.Screen name="Task2" component={Task2} />
        <Drawer.Screen name="Task3" component={Task3} />
        <Drawer.Screen name="Task4" component={Task4} />
        <Drawer.Screen name="Task5" component={Task5} />
        <Drawer.Screen name="Task6" component={Task6} />
        <Drawer.Screen name="Task7" component={Task7} />
        <Drawer.Screen name="Task8" component={Task8} />
        <Drawer.Screen name="Task9" component={Task9} />
      </Drawer.Navigator>
        
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
 
export default Drawernavigation;
