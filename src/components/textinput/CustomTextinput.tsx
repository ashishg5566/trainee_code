
import React, { Component, FC } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import styles from './styles';
// create a component
const CustomTextinput: FC = ({ text, onChangeText, placeholder, secureTextEntry,label, customStyle,
}) => {
    return (
        <View>
            <View style={styles.SectionStyle}>
            <TextInput
                   //multiline={true}
                   secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    style={{ flex: 1,backgroundColor:'white',justifyContent:'center'}}
                    onChangeText={onChangeText}
                    label={label}
                     value={text}
                    type="outlined"
                    underlineColor={'white'}
                   />
                   
                <Text style={styles.icontext}>M</Text>
                {/* {error && <Text>{error}</Text>} */}
                 </View>
        </View>
         );
};
export default CustomTextinput;
