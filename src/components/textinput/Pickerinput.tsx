import React, { Component, FC,useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

// create a component
const Pickerinput: FC = ({ label,value }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View>
            <Picker
//   selectedValue={selectedLanguage}
//   onValueChange={(itemValue, itemIndex) =>
//     setSelectedLanguage(itemValue)
//   }
  >
  <Picker.Item label="label"  value={value} />
  <Picker.Item label=""  value={value}/>
</Picker>
            
        </View>
        



    );
};
export default Pickerinput;
