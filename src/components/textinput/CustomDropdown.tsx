import React, { Component, FC,useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import styles from './styles';
import { colors } from 'react-native-elements';
// create a component
const CustomDropdown: FC = ({ value1,value2,value3,label1,label2,label3, onValueChange,selectedValue,style,label,value}) => {
    
    return (
        <View>
                  <View
                           style={[styles.dropdownpicker,style]}>
                            <Picker
                          //  mode="dropdown"
                            //iosHeader="Select one"
                         // itemStyle={ backgroundColor: 'red', height:40}
                              style={styles.pickerItem}
                            //style={[styles.pickerItem, {color: 'red', backgroundColor: 'blue'}]}
                              selectedValue={selectedValue}
                                onValueChange={onValueChange} 
                                >
                               <Picker.Item  style={{color:'blue'}}  label={label1} value={value1}  />
                               <Picker.Item style={{color:'blue',backgroundColor:'white'}}  label={label2} value={value2} />
                               <Picker.Item  style={{color:'blue',backgroundColor:'white'}} label={label3} value={value3} />
                            </Picker>
                     </View>

{/* <View
                           style={[styles.dropdownpicker,style]}>
                            <Picker
                            //mode="dropdown"
                            //iosHeader="Select one"
                         // itemStyle={ backgroundColor: 'red', height:40}
                              style={styles.pickerItem}
                            //style={[styles.pickerItem, {color: 'red', backgroundColor: 'blue'}]}
                              selectedValue={selectedValue}
                                onValueChange={onValueChange} 
                                >
                               <Picker.Item  style={{color:'blue'}}  label={label} value={value}  />
                              
                            </Picker>
                     </View>
              */}
        </View>
         );
};
export default CustomDropdown;
