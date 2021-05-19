import React, { Component, FC } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
// create a component
const CustomTextArea: FC = ({  value, onChangeText, placeholder, secureTextEntry,label,lefticon,righticon,style,
}) => {
    return (
        <View>
         <View style={[styles.SectionStyle2,style]}>
            <TextInput
                     secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    multiline={true}
                    style={{flex:1,backgroundColor:'white',justifyContent:'center',margin:2}}
                    onChangeText={onChangeText}
                    label={label}
                     value={value}
                     underlineColor={'white'}
                     numberOfLines={10}
                     theme={{
                      colors: {
                      primary: 'white',
                      },
                   }}
                     
                   />
                   
                 </View>
        </View>
         );
};
export default CustomTextArea;
