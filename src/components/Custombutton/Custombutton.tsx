import React, { Component, FC } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import styles from './styles';
// create a component
const Custombutton: FC = ({title}) => {
    return (
        <View>
               <TouchableOpacity style={styles.savebutton}>
                <Text style={styles.savebuttontext}>{title}</Text>
            </TouchableOpacity>
               
        </View>
         );
};
export default Custombutton;