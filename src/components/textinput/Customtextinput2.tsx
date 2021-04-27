import React, { Component, FC } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import styles from './styles';
// create a component
const Customtextinput2: FC = ({ value, onChangeText, placeholder, secureTextEntry,label }) => {
    return (
        <View>
            <View style={styles.customtextinput2}>
            <TextInput
                   //multiline={true}
                   secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    style={{ flex: 1 ,fontSize:15,marginLeft:10}}
                    value={value}
                    mode="flat"
				   label={label}
                   //style={styles.inputStyle}
                   />
             </View>
        </View>
         );
};
export default Customtextinput2;
