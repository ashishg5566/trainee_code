
import React, { Component, FC } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import styles from './styles';
// create a component
const Customheader: FC = ({title,leftticon,righticon,icon1,icon2,icon3}) => {
    return (
        <View>
              <View style={styles.header}>
                <View> 
                    <TouchableOpacity>
                         <Icon name={icon1} size={20}  color="white"/>
                    </TouchableOpacity>
                </View>
                 <View> 
                    <Text style={styles.headerTitle}>{title}</Text>
                 </View>
                 <View style={{flexDirection:'row'}}>
                   <Icon name={icon2} size={20}  color="white" style={{marginRight:10}}/>
                   <Icon name={icon3} size={20}  color="white"/>
                </View>
             </View>
        </View>
         );
};
export default Customheader;