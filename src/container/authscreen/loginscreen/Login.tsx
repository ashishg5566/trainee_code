 import React, {FC,useState} from 'react';
 import styles from './styles.tsx';
 import { View, Text,  TouchableOpacity,Image, Alert} from 'react-native';
 import {CustomTextinput} from '../../../components/textinput';
 import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
 const Login: FC = ({navigation}) => {
   const [Email,setEmail]=useState(''); 
   const [Password,setPassword]=useState(''); 
   const [emailerror,setEmailError]=useState(''); 
   const [passwordError,setPasswordError]=useState(''); 
   const [message,setMessage]=useState(''); 
   const signin=async()=>{
       if(Email!=""&&Password!=""){
          await fetch('http://172.105.61.231:3000/api/subadmin/login/',{
             method:'POST',
             headers:{
               // 'Accept':'vary',
               'Content-Type':'application/json',
                 },
             body:JSON.stringify(
                {
                   "username":Email,
                   "password":Password
                } )
             } ).then(response=>response.json())
             .then(responseJson=>{
               console.log(responseJson)
            //   setMessage(responseJson.detail);
             })
             }
        if(Email!=""){
         alert(Email)
         setEmailError('')
      }else{
         setEmailError('Please Enter email')

      }
      if(Password!=""){
         alert(Password)
         setPasswordError('')
      }else{
         setPasswordError('Please Enter Password')

      }

   }
 return (
    <KeyboardAwareScrollView> 
      <View style={styles.container}>
        <Image source={require('../../../Assets/images/profile.jpg')} style={{marginBottom:40,width: 150, height: 150,marginTop:50,borderRadius:100}}  /> 
         <Text style={{color:'green'}}>{message}</Text>
          <CustomTextinput   
          placeholder="Enter Email"
              value={Email} 
               onChangeText={(Email) => setEmail(Email)}
            />
          <Text style={{color:'red'}}>{emailerror}</Text> 
           <CustomTextinput  
            //  label="Enter Password"
            placeholder="Enter Password"
               value={Password} 
               onChangeText={(Password) => setPassword(Password)}
               />
            <Text style={{color:'red'}}>{passwordError}</Text> 
             <TouchableOpacity style={styles.signinButtonStyle} onPress={() => navigation.navigate('navbar')}>
             {/* <TouchableOpacity style={styles.signinButtonStyle} onPress={signin}> */}
                  <Text style={styles.signinTextStyle} >Sign In</Text>
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
 