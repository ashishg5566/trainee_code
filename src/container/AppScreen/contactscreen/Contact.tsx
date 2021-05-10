 //import liraries
import React, { Component,FC,useState} from 'react';
import { View, Text, TouchableOpacity,Image,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles.tsx';
import { TextInput } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
 
 const Contact: FC = () => {
     return (
       
        <View style={styles.container}> 
          
           <View style={styles.content1}>
           <View style={styles.header}>
                <View> 
                    <Icon name="bars" size={20}  color="white"/>
                </View>
                 <View> 
                    <Text style={styles.headerTitle}>Create Post</Text>
                 </View>
                 <View>
                </View>
             </View>
              <View style={styles.profilecontent}>
                  <View>
                     <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic} /> 
                  </View>
                  <View>
                        <Text style={styles.nametext}>Simmi Sharma</Text>
                        <View style={styles.dropdownpicker}> 
                            <Picker
                               style={styles.pickerItem}
                               >
                               <Picker.Item label="Friends" value="0" />
                               <Picker.Item label="raj" value="1" />
                               <Picker.Item label="aanya" value="2" />
                            </Picker>
                         </View>
                   </View>
              </View>
              <View style={styles.paragraphcontent}>
                 <Text style={styles.paragraphtext}>
                   ipsum lorem is simply dummy text of the printing and typesetting industry lorem ipsum has been 
                   the indusry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type
                   and scrambled it to make a type specimen book.
                 </Text>
             </View>
         </View>
         <View style={styles.content2}>
             <View style={styles.cameracontainer}>
                 <View style={styles.cameracontent}> 
                  <Icon name="camera" size={35}  color="white" style={styles.cameraicon}/>
                    <Text style={styles.cameratext}>Add</Text>
                    <Text style={styles.cameratext}>Photo/Video</Text>
                 </View>
        </View>
         <View style={styles.textinputcontainer}>
              <TextInput
                     placeholder="Tag People"
                     style={styles.textinput}
                     label="Tag People"
                     underlineColor={'transparent'}
                     left={<TextInput.Icon name="user-friends" color={"#ff0000"} ></TextInput.Icon>}
                   />
              <TouchableOpacity style={styles.postbutton}>
                 <Text style={styles.posttext}>Post</Text>
             </TouchableOpacity>
         </View>
    </View>
     
</View>
 
    );
};
export default Contact;