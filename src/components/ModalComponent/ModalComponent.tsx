import React, { useState, useEffect} from 'react'
import { View, Text, TextInput,TouchableOpacity } from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
interface AppProps {
  onPress: () => any;
  isvisible?: boolean;
  modeltype?: string;
  onBackdropPress:boolean;
  navigation: any;
}
 
const ModalComponent= (props: AppProps)=>{
  const [password,setpassword]=useState('')
   return (
      <View>
        {props.modeltype == 'bottom' && <Modal
          testID={'modal'}

          isVisible={props.isvisible}
          onSwipeComplete={props.onPress}
          onBackdropPress={props.onBackdropPress}
          swipeDirection={['up', 'left', 'right', 'down']}
          style={styles.bottomModel}>
             <View style={styles.bottommodalcontainer}>
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
                     <View style={styles.SectionStyle1}>
                       <TextInput
                         autoFocus={true}
                        placeholder="Confirmed Password"
                        style={{ flex: 1,fontSize:15}}
                     />
                      <Icon name="eye" size={18} color="gray" style={styles.modalicon}/>
                  </View>
                  <TouchableOpacity style={styles.modalupdatebutton}>
                     <Text style={styles.modalupdatetext}>Change Password</Text>
                </TouchableOpacity>
              </View>
          
        </Modal>}
     </View>

    );
  
}


export default ModalComponent