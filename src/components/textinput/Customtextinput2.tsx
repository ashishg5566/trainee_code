import React, { Component, FC } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
// create a component
const CustomTextInput2: FC = ({  value, onChangeText, placeholder, secureTextEntry,label,lefticon,righticon,style,
}) => {
    return (
        <View>
         <View style={[styles.SectionStyle3,style]}>
            <TextInput
                   //multiline={true}
                   secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    style={{flex:1,backgroundColor:'white',justifyContent:'center',margin:2}}
                    onChangeText={onChangeText}
                    label={label}
                     value={value}
                     underlineColor={'white'}
                     theme={{
                        colors: {
                        primary: 'white',
                        },
                     }}
                     />
                    {/* {error && <Text>{error}</Text>} */}
                 </View>
        </View>
         );
};
export default CustomTextInput2;
