import React, { Component,FC,useState } from 'react';
 import { View, Text, StyleSheet,TextInput, TouchableOpacity,Image} from 'react-native';
 import styles from './styles.tsx';
import {CustomTextinput} from '../../../components/textinput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  //   import {CustomTextinput} from './components/textinput/Index.tsx';
// create a component
 const Forgot: FC = ({navigation}) => {
   const [Email,setEmail]=useState(''); 
   const submit = () => {{
      if (!Email) {
         alert('Please enter your Email or OTP')
         return;
       }
       if (Email!== "undefined") {
         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
         if (!pattern.test(Email)) {
          alert('please enter valid email')
          return;
          }
         }
      }}
     return(
        <KeyboardAwareScrollView> 
          <View style={styles.container}> 
          <TouchableOpacity  onPress={() => navigation.goBack()} style={styles.backbutton}>
                    <Text  style={styles.backbuttonText}>Back</Text>
                 </TouchableOpacity>
                  <View style={{flex:1,alignItems:'center'}}>
                   <Image source={require('../../../Assets/images/profile.jpg')} style={{width: 200, height: 200,marginTop:50,borderRadius:100}}  /> 
                    <Text style={styles.text}>Enter your registered Mobile Number or {"\n"}Email Id to reset your password.</Text>
                    <CustomTextinput label="Email Id or Mobile Number"  value={Email} onChangeText={(value)=>setEmail(value)}/>
                    <TouchableOpacity style={styles.signupStyle} onPress={submit} >
                        <Text style={styles.signupText}>Submit</Text>
                  </TouchableOpacity>
              </View>
           </View>
        </KeyboardAwareScrollView>
     );
 };
 export default Forgot;
 