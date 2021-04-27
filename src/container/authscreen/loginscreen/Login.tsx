 import React, { Component,FC,useState} from 'react';
 import styles from './styles.tsx';
 import { View, Text, StyleSheet,TextInput, TouchableOpacity,Image} from 'react-native';
 import {CustomTextinput} from '../../../components/textinput';
 import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Icon from 'react-native-vector-icons/FontAwesome';  
 const Login: FC = ({navigation}) => {
   const [Email,setEmail]=useState(''); 
   const [Password,setPasswordText]=useState(''); 
   const [emailerror,setEmailError]=useState(''); 
   const [passworderror,setPasswordTextError]=useState(''); 
   const onChangeText = (text, type) => {
      //this pattern checks for emoji
      var pattern = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/;
      if (type === "Email") {
      if (!pattern.test(text)) { 
      setEmail(text.replace(/[^A-Za-z0-9@_.]/g, ""));
      setEmailError("Enter valid Email");
      }
       }
      if (type === "Password") {
         setPasswordText(
         text.replace(/[^A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[^_`{|}~]/g, "")
         );
         setPasswordTextError("Enter Valid Password");
         }
         };
    return (
    <KeyboardAwareScrollView> 
      <View style={styles.container}>
       <Image source={require('../../../Assets/images/profile.jpg')} style={{marginBottom:40,width: 150, height: 150,marginTop:50,borderRadius:100}}  /> 
          <CustomTextinput  label="Enter Email" 
          value={Email} 
          onChangeText={(text) => onChangeText(text, "Email")}
            />
           <Text style={{color:'red'}}>{emailerror}</Text>
           <CustomTextinput  
             label="Enter Password"
            value={Password} 
              onChangeText={(text) => onChangeText(text, "Password")}
              
           />
            <Text style={{color:'red'}}>{passworderror}</Text>
           
           <TouchableOpacity style={styles.signinButtonStyle} >
                <Text style={styles.signinTextStyle} onPress={() => navigation.navigate('navbar')}>Sign In</Text>
              </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPasswordButtonStyle} onPress={() => navigation.navigate('forgotpassword')}>
                <Text style={styles.forgotPasswordTextStyle} >Forgot Password ?</Text>
          </TouchableOpacity>
          <View style={styles.socialButtonStyle}>
               <TouchableOpacity>
                 <Image source={require('../../../Assets/images/facebook.png')} style={{margin:14,width: 50, height: 50,borderRadius:40, backgroundColor: '#fff'}}  /> 
              </TouchableOpacity>
              <TouchableOpacity >
                 <Image source={require('../../../Assets/images/mail1.png')} style={{margin:14,width: 50, height: 50,borderRadius:40, backgroundColor: '#fff'}}  /> 
              </TouchableOpacity>
          </View>  
          <TouchableOpacity style={styles.signupButtonStyle}  onPress={() => navigation.navigate('signup')}>
             <Text style={styles.signupText}>Don't have an account?<Text style={{color:'#4E387E'}}>Sign Up</Text></Text>
          </TouchableOpacity>
      </View>
      </KeyboardAwareScrollView>
     );
 };
export default Login;
 