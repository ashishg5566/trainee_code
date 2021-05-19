//import liraries
import React, { Component,FC,useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
//import { CheckBox } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { CheckBox } from 'react-native-elements'
import CheckBox from '@react-native-community/checkbox';
import styles from './styles.tsx';
import {CustomTextinput} from '../../../components/textinput';
const Login: FC = ({navigation}) => {
  const [textFirstNameValue,settextFirstNameValue]=useState('');
  const [textLastNameValue,settextLastNameValue]=useState('');
  const [textEmailValue,settextEmailValue]=useState('');
  const [PhoneValue,setPhoneValue]=useState('');
  const [dob,setdob]=useState(''); 
  const [password,setpassword]=useState('');
  const [confirmpassword,setconfirmpassword]=useState('');
  const checkTextInput = () => {
   if (!textFirstNameValue) {
        alert('please enter your first name')
        return;
    }
     if (!textLastNameValue) {
      alert('Please Enter Last Name');
      return;
     }
    if (!textEmailValue) {
      alert('Please Enter Your Email');
      return;
     }
     if (textEmailValue!== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(textEmailValue)) {
       alert('please enter valid email')
       return;
       }
      }
     if (!PhoneValue) {
      alert('Please Enter Phone number');
      return;
      }
      if (PhoneValue!== "undefined") {
          var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(PhoneValue)) {
              alert('enter only number')
              return;
             }else if(PhoneValue.length != 10){
           alert('enter valid phone number')
           return;
       }
       }
       if (!dob) {
      alert('Please Enter dob');
      return;
       }
       if (!password) {
        alert('Please Enter confirmpassword');
        return;
        return;
       }
       if (!confirmpassword) {
        alert('Please Enter confirmpassword');
        return;
       }
      
      if (password !== "undefined" && password!== "undefined") {
        if (password != confirmpassword) {
        alert('password and confirm password are not matching')
        return;
     }
     }
   alert('Success');
  };
 return (
      <KeyboardAwareScrollView> 
        <View style={styles.container}>
           <View style={styles.header}>
                 <TouchableOpacity  onPress={() => navigation.goBack()} style={styles.backbutton}>
                    <Text  style={styles.backbuttonText}>Back</Text>
                 </TouchableOpacity>
                 <Text style={styles.signupTitle}>Sign Up</Text>
           </View>
            <View style={styles.formcontainer}>
                <View style={styles.nameinputcontainer} > 
                <CustomTextinput 
               // label="First Name" 
               placeholder="First Name"
                style={{width:160,margin:5}}
                value={textFirstNameValue}
                 maxLength={20}
                 onChangeText={(text)=>settextFirstNameValue(text)}
               />
               <CustomTextinput 
              // label="First Name" 
              placeholder="Last Name"
               style={{width:160,margin:5}}
                value={textLastNameValue}
                 maxLength={20}
                 onChangeText={(text)=>settextLastNameValue(text)}
               />
             </View>
         <CustomTextinput 
        //  label="Enter Your Email Id"  
        placeholder=" Enter Your Email Id"
         value={textEmailValue}
          onChangeText={(value)=>settextEmailValue(value)} />
         <CustomTextinput 
        //  label="Enter Your Phone Number"  
        placeholder="Enter Your Phone Number"
          value={PhoneValue} onChangeText={(value)=>setPhoneValue(value)}  />
         <CustomTextinput
          // label="Enter DOB"   
          placeholder="Enter DOB"
         value={dob} onChangeText={(value)=>setdob(value)}/>
         <CustomTextinput 
        //  label="Enter Password" 
        placeholder="Enter Password"
         value={password} onChangeText={(value)=>setpassword(value)}/>
         <CustomTextinput 
        //  label="Confirm Password"  
        placeholder="Confirm Password"
         value={confirmpassword} 
         onChangeText={(value)=>setconfirmpassword(value)}
         />
         <View style={{flexDirection:'row',marginTop:20}}> 
           <CheckBox
             disabled={false}
            //  value={toggleCheckBox}
              // onValueChange={(newValue) => setToggleCheckBox(newValue)}
             />
               <Text style={{padding:6,fontSize:15}}>I agree with terms and conditions</Text>
        </View>
       <TouchableOpacity style={styles.signupStyle} onPress={checkTextInput}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
 </View>
</KeyboardAwareScrollView>
  );
};
export default Login;
