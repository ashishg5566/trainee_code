import React, { Component, FC } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity ,Image} from 'react-native';

// create a component
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import styles from './styles';
const Smallcustomcard: FC = ({ 
}) => {
    return (
           <Card style={styles.smallcardcontent}>
                <Image source={require('../../Assets/images/pic.jpg')} style={styles.smallcardimage}  /> 
                <Text style={{textAlign:'center',fontWeight:'bold',color:'grey',fontSize:10}}>Nitesh</Text>
                <Text style={{fontSize:9,textAlign:'center',color:'grey'}}>Batchmates 2009-10</Text>
                <TouchableOpacity style={styles.addbuddybutton}>
                    <Text style={{color:'white',fontSize:10}}>Add Buddy</Text>

                </TouchableOpacity>

         </Card>
       
         );
};
export default Smallcustomcard;
