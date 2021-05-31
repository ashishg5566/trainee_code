//import liraries
import React, { Component,FC,useState} from 'react';
import { View, Text, TouchableOpacity,Image,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles.tsx';
import { TextInput } from 'react-native-paper';
import {CustomHeader} from '../../../components/Customheader';
// create a component
const Task4: FC = ({navigation}) => {
     return (
      <View style={styles.container}> 
              <CustomHeader title="Create Group Chat" icon1="arrow-left" />
         <ScrollView>
            <View style={styles.imagecontainer}>
               <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profileimage}  /> 
               <View style={styles.cameraicon}> 
                  <Icon name="camera" size={25}  color="white" />
               </View>
          </View>
          <View style={styles.textinputcontainer}>
             <TextInput
              placeholder="ABC Group"
              theme={{
                colors: {
                primary: 'white',
                },
             }}
               style={styles.textinput}
               underlineColor={'trannsparent'}
               />
           </View>
           <View style={styles.usericoncontainer}>
               <View style={styles.usericon}>
                  <Icon name="user-plus" size={25}  color="white" />
               </View>
                 <Text style={styles.text}>Add Participants</Text>
          </View>
          <View style={styles.profilecontainer}>
               <View style={styles.userprofile}>
                     <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.userimage}  /> 
                     <Text style={styles.text}>Akash</Text>
              </View>
               <View style={styles.deleteicon}>
                   <Icon name="trash" size={20}  color="white" />
              </View>
          </View>
          <View style={styles.profilecontainer}>
               <View style={styles.userprofile}>
                     <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.userimage}  /> 
                     <Text style={styles.text}>Prashant</Text>
              </View>
               <View style={styles.deleteicon}>
                   <Icon name="trash" size={20}  color="white" />
              </View>
          </View>
          <View style={styles.profilecontainer}>
               <View style={styles.userprofile}>
                     <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.userimage}  /> 
                     <Text style={styles.text}>Amit</Text>
             </View>
               <View style={styles.deleteicon}>
                   <Icon name="trash" size={20}  color="white" />
              </View>
          </View>
          <View style={styles.buttoncontainer}>
              <TouchableOpacity style={styles.deletebutton}>
                  <Text style={styles.deletetext}>Delete Group</Text>
             </TouchableOpacity>
              <TouchableOpacity style={styles.exitbutton}>
                 <Text style={styles.exittext}>Exit Group</Text>
             </TouchableOpacity>
          </View>
    </ScrollView>
</View>
  
    );
};
export default Task4;