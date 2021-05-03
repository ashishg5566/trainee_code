//import liraries
import React, { Component,FC,useState } from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';
import styles from './styles.tsx';
import {CustomDropdown,CustomTextInput2,Customheader} from '../../../components/textinput';
import Modal from 'react-native-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Modal2: FC = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
return(
    <KeyboardAwareScrollView> 
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
              <TouchableOpacity style={styles.button} onPress={toggleModal}>
                     <Text style={styles.buttontext}>open modal</Text>
                      </TouchableOpacity>
              
            </KeyboardAwareScrollView>
     );
};
 export default Modal2;