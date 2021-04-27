//import liraries
import React, { Component,FC,useState } from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';
import styles from './styles.tsx';
import {CustomDropdown,Customtextinput2,Customheader} from '../../../components/textinput';
import Modal from 'react-native-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Information3: FC = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [userid,setuserid]=useState('');
    const [userrollno,setuserrollno]=useState('');
    const [userfathername,setuserfathername]=useState('');
    const [usermothername,setusermothername]=useState('');
    // const [option,setoption]=useState('');
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
       const submit = () => {
        //Check for the Name TextInput
        if (!userid.trim()) {
          alert('Please Enter user id');
          return;
        }
        //Check for the Email TextInput
        if (!userrollno.trim()) {
          alert('Please Enter roll no');
          return;
        }
        if (!userfathername.trim()) {
            alert('Please Enter father name');
            return;
          }
          if (!usermothername.trim()) {
            alert('Please Enter mother name');
            return;
          }
        //Checked Successfully
        //Do whatever you want
        alert('Success');
      };

      
return (
    <KeyboardAwareScrollView> 
         <View style={styles.container}>
            <Modal isVisible={isModalVisible} style={{alignItems:'center'}}>
                 <View style={styles.modalcontainer}>
                    <Text style={styles.modaltext1}>Welcome To ZatchUP</Text>
                     <Text style={styles.modaltext2}>ABC school has registered you as their student{'\n'}as <Text style={{fontWeight:'bold'}}>Mr. PRASHANT</Text> studying in class <Text style={{fontWeight:'bold'}}>XII</Text>.</Text>
                     <Text style={styles.modaltext2}>Please continue to confirm,{'\n'}If this is not you,{'\n'}please reject and continue as a{'\n'}New User</Text> 
                     <View style={styles.modalbuttons}> 
                      <TouchableOpacity  style={styles.continuebutton}>
                         <Text style={{color:'white'}}>Continue</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={toggleModal} style={styles.rejectbutton}>
                         <Text style={{color:'red'}}>Reject</Text>
                    </TouchableOpacity>
                   </View>
                </View>
             </Modal>
              <View style={{width:'100%'}}> 
                   <Customheader title="Current School Information"/>
                   </View>
                    <View  style={styles.formcontainer}>
                      <CustomDropdown  label1="Current Class/Course" value1="one"  label2="vps" value2="two" label3="modern" value3="three" />
                      <Customtextinput2  placeholder="Enter User's EI ID Number"  onChangeText={(value)=>setuserid(value)}/>
                      <Customtextinput2  placeholder="Enter User's Roll Number"  onChangeText={(value)=>setuserrollno(value)}/>
                      <Customtextinput2  placeholder="Enter Father's Name" onChangeText={(value)=>setuserfathername(value)}/>
                      <Customtextinput2  placeholder="Enter Mother's Name" onChangeText={(value)=>setusermothername(value)} />
                      {/* <TouchableOpacity style={styles.button} onPress={toggleModal}> */}
                      <TouchableOpacity style={styles.button} onPress={submit}>
                          <Text style={styles.buttontext}>Send to EI for Approval</Text>
                      </TouchableOpacity>
                 </View>
            </View>
            </KeyboardAwareScrollView>
     );
};
 export default Information3;