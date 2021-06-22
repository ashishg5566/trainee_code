import React, { useState, useEffect } from 'react'
import { Text, View, Dimensions } from 'react-native';
import styles from './styles';
 
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomStatusBar,  CustomHeader} from '../../../components';
const screenWidth = Dimensions.get('window').width;
interface ApprovalScreenProps { navigation: any }
const contactUs = (props: ApprovalScreenProps) => {
 return (
        <View style={styles.container}> 
            <CustomStatusBar />
            <CustomHeader Title={'Contact Us'} />
            <View style={styles.contactContainer}>
                <Icon name="phone" size={80} color={'purple'} />
                <Text style={styles.text}>+ 91 9876543210</Text>
            </View>
            <View style={[styles.contactContainer,{marginTop:'8%'}]}>
                <Icon name="envelope" size={80} color={'purple'} />
                <Text style={styles.text}>admin@zatchup.com</Text>
            </View>
     </View>
    );
};

export default contactUs;