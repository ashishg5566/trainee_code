//import liraries
import React, { Component,FC,useState } from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';
import styles from './styles.tsx';
import {CustomDropdown,CustomTextInput2,Customheader} from '../../../components/textinput';
import Modal from 'react-native-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Modal1: FC = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
return(
    <KeyboardAwareScrollView> 
            
           <Modal isVisible={isModalVisible}  style={{margin:0,flexDirection: 'column',justifyContent: 'flex-end'}}>
             <View style={styles.modalcontainer}>
                <Text style={styles.modaltext1}>Update your Batch Details</Text>
                <Text style={styles.modaltext2}>Batch Year</Text>
                <View style={{flexDirection:'row',marginTop:12}}> 
                 <View style={styles.SectionStyle}>
                  <TextInput
                    placeholder="7/04/2015"
                    style={{ flex: 1}}
                       />
                    <Icon name="date" size={25} color="gray" style={styles.modalicon}/>
                   </View>
                   <View style={styles.SectionStyle}>
                    <TextInput
                    placeholder="6/04/2017"
                    style={{ flex: 1}}
                     />
                    <Icon name="date" size={25} color="gray" style={styles.modalicon}/>
                </View>
              </View> 
               <Text style={styles.modaltext3}>Completed in 2 Years</Text>
                <TouchableOpacity style={styles.modalupdatebutton} onPress={toggleModal} >
                <Text style={styles.modalupdatetext}>Update</Text>
               </TouchableOpacity>
           </View>
             </Modal>
              <TouchableOpacity style={styles.button} onPress={toggleModal}>
                     <Text style={styles.buttontext}>open modal</Text>
                      </TouchableOpacity>
              
            </KeyboardAwareScrollView>
     );
};
 export default Modal1;