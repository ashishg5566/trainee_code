import React, { Component, FC } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import styles from './styles';
// create a component
const Customprofile: FC = ({name,paragraph}) => {
    return (
        <View>
                <View style={styles.cardcontent4}>
                 <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  /> 
                 <View style={styles.paragraphcontent}>
                      <Text style={styles.profiletext}>{name}</Text>
                      <Text style={styles.profileparagraph}>
                         {paragraph}
                      </Text>
                </View>
            </View>
        </View>
         );
};
export default Customprofile;