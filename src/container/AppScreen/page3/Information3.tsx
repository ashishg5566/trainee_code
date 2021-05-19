//import liraries
import React, { Component,FC,useState } from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';
import styles from './styles.tsx';
import {CustomDropdown,CustomTextInput2,Customheader} from '../../../components/textinput';
 import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Information3: FC = () => {
    const [userid,setuserid]=useState('');
    const [userrollno,setuserrollno]=useState('');
    const [userfathername,setuserfathername]=useState('');
    const [usermothername,setusermothername]=useState('');
    const [selectedSchool,setselectedSchool]=useState('');
      const submit = () => {
        if (!selectedSchool) {
          alert('please select school')
          return;
      }
        if (!userid) {
          alert('please enter your user id number')
          return;
        }
        if (userid!== "undefined") {
          var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(userid)) {
              alert('enter only number')
              return;
             }else if(userid.length != 5){
           alert('enter valid id  number')
           return;
       }
       }
        
   if (!userrollno) {
        alert('please enter your roll number')
        return;
        }
        if (userrollno!== "undefined") {
          var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(userrollno)) {
              alert('enter only number')
              return;
             }else if(userrollno.length != 10){
           alert('enter valid roll number')
           return;
       }
       }
         if (!userfathername) {
          alert('please enter your father name')
            return;
          }
          if (!usermothername) {
            alert('please enter your Mother name')
          return;
         }
        alert('Success');
      };
return (
     
         <View style={styles.container}>
                <View style={{width:'100%'}}> 
                   <Customheader title="Current School Information"/>
                   </View>
                   <KeyboardAwareScrollView> 
                    <View  style={styles.formcontainer}>
                        <CustomDropdown  label1="Current Class/Course" value1="one"  label2="vps" value2="two" label3="modern" value3="three"  selectedValue={selectedSchool}
                           onValueChange={(selectedValue)=>setselectedSchool(selectedValue)}
                          />
                         <CustomTextInput2  label="Enter User's EI ID Number" value={userid}  onChangeText={(value)=>setuserid(value)}/>
                         <CustomTextInput2  label="Enter User's Roll Number" value={userrollno}  onChangeText={(value)=>setuserrollno(value)}/>
                         <CustomTextInput2  label="Enter Father's Name" value={userfathername} onChangeText={(value)=>setuserfathername(value)}/>
                         <CustomTextInput2  label="Enter Mother's Name"value={usermothername}  onChangeText={(value)=>setusermothername(value)} />
                          {/* <TouchableOpacity style={styles.button} onPress={toggleModal}> */}
                          <TouchableOpacity style={styles.button} onPress={submit}>
                          <Text style={styles.buttontext}>Send to EI for Approval</Text>
                         </TouchableOpacity>
                    </View>
                 </KeyboardAwareScrollView>
            </View>
           
     );
};
 export default Information3;