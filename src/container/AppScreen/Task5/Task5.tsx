//import liraries
import React, { Component,FC,useState} from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles.tsx';
import { TextInput } from 'react-native-paper';
// create a component
const Task5: FC = () => {
   return (
        <View style={styles.container}> 
           
           <View style={styles.header}>
                <View> 
                    <Icon name="arrow-left" size={20}  color="white"/>
                </View>
                 <View> 
                    <Text style={styles.headerTitle}>Create Group Chat</Text>
                 </View>
                 <View>
                </View>
            </View>
            <View style={styles.imagecontainer}>
               <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profileimage}  /> 
               <View style={styles.cameraicon}> 
                  <Icon name="camera" size={25}  color="white" />
               </View>
          </View>
          <View style={styles.textinputcontainer}>
             <TextInput
              placeholder="ABC Group"
               style={styles.textinput}
            //    label="ABC Group"
               underlineColor={'transparent'}
               />
           </View>
          <View style={styles.profilecontainer}>
               <View style={styles.userprofile}>
                     <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.userimage}  /> 
                     <Text style={styles.text}>Akash</Text>
              </View>
               <View>
                   <Text style={{color:'#4E387E',fontWeight:'bold',fontSize:16}}>Admin</Text>
              </View>
          </View>
          <View style={styles.profilecontainer}>
               <View style={styles.userprofile}>
                     <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.userimage}  /> 
                     <Text style={styles.text}>Prashant</Text>
               </View>
         </View>
          <View style={styles.profilecontainer}>
               <View style={styles.userprofile}>
                     <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.userimage}  /> 
                      <Text style={styles.text}>Amit</Text>
               </View>
          </View>
          <View style={styles.buttoncontainer}>
               <TouchableOpacity style={styles.exitbutton}>
                   <Text style={styles.exittext}>Exit Group</Text>
             </TouchableOpacity>
          </View>
</View>
    );
};
export default Task5;