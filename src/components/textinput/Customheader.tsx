
import React, { Component, FC } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import styles from './styles';
// create a component
const Customheader: FC = ({title}) => {
    return (
        <View>
             <View style={styles.titlecontainer}>
                        <Text style={styles.titletext}>{title}</Text>
                  </View>
            
        </View>
         );
};
export default Customheader;
