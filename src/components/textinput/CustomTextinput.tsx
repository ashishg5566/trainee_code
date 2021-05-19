
import React, { Component, FC } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
// create a component
const CustomTextinput: FC = ({  value, onChangeText, placeholder, secureTextEntry,label,lefticon,righticon,style,
}) => {
    return (
        <View>
         <View style={[styles.SectionStyle,style]}>
            <TextInput
              style={{flex:1,backgroundColor:'white',justifyContent:'center',margin:2,  overflow: 'hidden'}}
                    // outline:none
                   secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    label={label}
                     value={value}
                     selectionColor='red'
                     underlineColor='#fff'
                     theme={{
                        colors: {
                        primary: 'white',
                        },
                     }}
                     underlineColorAndroid="transparent"
                     borderWidth={0}
                      right={<TextInput.Icon name="info" color={"#ff0000"} onPress={() => {}} />}
                   />
                    {/* {error && <Text>{error}</Text>} */}
                 </View>
        </View>
         );
};
export default CustomTextinput;
