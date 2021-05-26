 
import React, { Component,FC,useState } from 'react';
import { View, Text, TouchableOpacity,Button,TextInput } from 'react-native';
import styles from './styles.tsx';
import Modal from 'react-native-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
const Task10: FC = () => {
    const [isModalVisible, setModalVisible] = useState(false);
   const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
return(
    <KeyboardAwareScrollView> 
            
           <Modal isVisible={isModalVisible}  style={{margin:0,flexDirection: 'column',justifyContent: 'flex-end'}}
            onBackdropPress={() => setModalVisible(false)}
            
            onSwipeComplete={() => setModalVisible(false)}
            swipeDirection="down"
            >
           
             <View style={styles.modalcontainer}>
                <View style={{marginBottom:30}}> 
                   <Text style={styles.modaltext1}>Reset Your Password</Text>
                </View>
                   
                    <View style={styles.SectionStyle}>
                       <TextInput
                       autoFocus={true}
                      
                         placeholder="Enter New Password"
                          style={{ flex: 1,fontSize:15,  }}
                        />
                        <Icon name="eye" size={18} color="grey" style={styles.modalicon}/>
                    </View>
                     <View style={styles.SectionStyle}>
                       <TextInput
                        placeholder="Confirmed Password"
                        style={{ flex: 1,fontSize:15}}
                     />
                    <Icon name="eye" size={18} color="gray" style={styles.modalicon}/>
                </View>
     
                <TouchableOpacity style={styles.modalupdatebutton} onPress={toggleModal} >
                     <Text style={styles.modalupdatetext}>Change Password</Text>
               </TouchableOpacity>
              </View>
             </Modal>
              <TouchableOpacity style={styles.button} onPress={toggleModal}>
                     <Text style={styles.buttontext}>open modal</Text>
                      </TouchableOpacity>
           </KeyboardAwareScrollView>
     );
};
 export default Task10;