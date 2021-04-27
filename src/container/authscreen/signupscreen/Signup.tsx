//import liraries
import React, { Component,FC,useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
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
   if (!textFirstNameValue.trim()) {
      alert('Please Enter First Name');
      return;
    }
    //Check for the Email TextInput
    if (!textLastNameValue.trim()) {
      alert('Please Enter Last Name');
      return;
    }
    
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!textEmailValue.trim()) {
      
       if (!emailRegex.test(textEmailValue)) {
      alert('please enter valid email');
      return;
       
      } 
    }
      else{
        alert('Enter email')
        return;
      } 
    
      if (!PhoneValue.trim()) {
      alert('Please Enter Phone number');
      return;
    }
    if (!dob.trim()) {
      alert('Please Enter dob');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter password');
      return;
    }
    if (!confirmpassword.trim()) {
      alert('Please Enter confirmpassword');
      return;
    }
    //Checked Successfully
    //Do whatever you want
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
                     <View style={styles.namesectionStyle}>
                      <TextInput
                        style={{ flex: 1,backgroundColor:'white',justifyContent:'center'}}
                       label="First Name"
                      //  value='settextFirstNameValue'
                       maxLength={20}
                       underlineColor={'white'}
                       value={textFirstNameValue}
                       onChangeText={(text)=>settextFirstNameValue(text)}
                      />
                     <Text style={styles.icontext}>M</Text>
               {/* <Icon name="md-beer" type="ionicon" color="#887700" style={styles.iconStyle} /> */}
                 </View>
                  <View style={styles.namesectionStyle}>
                 <TextInput
                     style={{ flex: 1,backgroundColor:'white',justifyContent:'center'}}
                     label=" Last Name"
                    underlineColorAndroid="transparent"
                    value={textLastNameValue}
                    onChangeText={(value)=>settextLastNameValue(value)}
                    underlineColor={'white'}
                  />
                  <Text style={styles.icontext}>M</Text>
               </View>
         </View>
         <CustomTextinput label="Enter Your Email Id"  value={textEmailValue} onChangeText={(value)=>settextEmailValue(value)}
         onChange
           />
         <CustomTextinput label="Enter Your Phone Number"   value={PhoneValue} onChangeText={(value)=>setPhoneValue(value)}  />
         <CustomTextinput label="Enter DOB"   value={dob} onChangeText={(value)=>setdob(value)}/>
         <CustomTextinput label="Enter Password" value={password} onChangeText={(value)=>setpassword(value)}/>
         <CustomTextinput label="Confirm Password"  value={confirmpassword} onChangeText={(value)=>setconfirmpassword(value)}
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
