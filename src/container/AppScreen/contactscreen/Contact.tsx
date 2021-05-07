 //import liraries
import React, { Component,FC,useState} from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles.tsx';
import { TextInput } from 'react-native-paper';
import {CustomDropdown,CustomTextArea,Customheader} from '../../../components/textinput';
// create a component
const Contact: FC = () => {
    
    return (
        <View style={styles.container}> 
           <View style={styles.content1}>
           <View style={styles.header}>
                <View> 
                    <Icon name="bars" size={20}  color="white" style={{color:'white',alignSelf:'flex-start'}}/>
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
                  <View style={styles.textcontent}>
                      <Text style={styles.nametext}>Simmi Sharma</Text>
                 
                  <CustomDropdown  label1="Friends"
                                  value1="0"  label2="Akash" value2="1" label3="Rohit" value3="2"
                                    style={{width:145,fontSize:10,height:50}}/>
                  
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
                  <Icon name="camera" size={40}  color="white" style={styles.cameraicon}/>
                    <Text style={styles.cameratext}>Add</Text>
                    <Text style={styles.cameratext}>Photo/Video</Text>
                 </View>
        </View>
         <View style={styles.textinputcontainer}>
            <View style={styles.SectionStyle}>
                <TextInput
                   placeholder="Tag People"
                    style={{flex:1,backgroundColor:'white',justifyContent:'center',margin:5}}
                     label="Tag People"
                     underlineColor={'white'}
                     left={<TextInput.Icon name="user-friends" color={"#ff0000"} ></TextInput.Icon>}
                   />
             </View>
             <TouchableOpacity style={styles.postbutton}>
                 <Text style={styles.posttext}>Post</Text>
             </TouchableOpacity>

        </View>
           
    </View>
</View>
    );
};

// define your styles
 

//make this component available to the app
 
 
export default Contact;