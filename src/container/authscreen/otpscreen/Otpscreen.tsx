//import liraries
import React, {FC,useState} from 'react';
import { View, Text, TouchableOpacity,TextInput,ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles.tsx';
import {Custombutton} from '../../../components/Custombutton';
import OtpInputs from 'react-native-otp-inputs';
const Otpscreen: FC = ({route}) => {
   //const [otperror, setotperror] = React.useState('');
   const [otp,setOtp]=useState(''); 
   const [message,setMessage]=useState([]); 
   const submit=async()=>{
    if(otp!=""){
       await fetch('http://172.105.61.231:3000/api/subadmin/otp-verify/',{
          method:'POST',
          headers:{
            //'Accept':'vary',
            'Content-Type':'application/json',
              },
          body:JSON.stringify(
             {
               "username":route.params.paramKey,
                "phone_otp":otp
             } )
          } ).then(response=>response.json())
          .then(responseJson=>{
            console.log(responseJson)
            
          // setMessage(responseJson.message);
          })
          }
        }
 return (
      <View style={styles.container}> 
        <View style={styles.backbuttoncontainer}>
            <Icon name="arrow-left" size={24} color="white" style={{marginRight:10}}/>
        </View>
       

      <View style={styles.messagecontainer}> 
         <ImageBackground source={require('../../../Assets/images/message.jpg')} style={styles.backgroundimage}>
          <Icon
           name="check"
           size={22}
           color='white'
           style={styles.backicon}
          >
         </Icon>
         </ImageBackground>
     </View>
     <View style={styles.textcontainer}> 
            <Text style={styles.text}>Enter OTP that received on your phone number.</Text>
    </View>
    <Text style={{textAlign:'center',marginTop:10}}>{route.params.paramKey}</Text>
     {/* <Text style={{textAlign:'center'}}>{message}</Text> */}
     
       <View style={{ paddingHorizontal: '9%', marginVertical: '15%' }}>
        <OtpInputs
          inputContainerStyles={styles.OtpinputContainer}
          inputStyles={styles.otpinput}
          handleChange={otp => setOtp(otp)}
        />
        </View>
     <View style={{marginTop:50}}> 
        <Custombutton title="Submit"  onPress={submit}/>
    </View>   
        <TouchableOpacity style={styles.resendbutton}>
           <Text style={styles.resendtext}>Resend Code</Text>
        </TouchableOpacity>
    </View>
 
    );
};
export default Otpscreen;