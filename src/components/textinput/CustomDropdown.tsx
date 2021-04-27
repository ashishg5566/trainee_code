import React, { Component, FC,useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import styles from './styles';
// create a component
const CustomDropdown: FC = ({ value1,value2,value3,label1,label2,label3, onChangeText, secureTextEntry }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View>
             <View
                           style={styles.dropdownpicker}>
                            <Picker
                              style={styles.pickerItem}
                              selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                               setSelectedLanguage(itemValue)
                                 }
                                 >
                               <Picker.Item label={label1} value={value1} />
                               <Picker.Item label={label2} value={value2} />
                               <Picker.Item label={label3} value={value3} />
                            </Picker>
                     </View>
             
        </View>
         );
};
export default CustomDropdown;
