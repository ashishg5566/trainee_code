 //import liraries
import React, { Component,FC,useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.tsx';
// create a component
const Homescreen: FC = () => {
    return (
        <View style={styles.container}>
           <Text>Home Page</Text>
       </View>
             
    );
};
export default Homescreen;