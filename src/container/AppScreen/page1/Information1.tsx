 
import React, { Component,FC,useState } from 'react';
import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import styles from './styles.tsx';
import {Picker} from '@react-native-picker/picker';
import {CustomDropdown,Customtextinput2,Customheader} from '../../../components/textinput';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';  
const Information1: FC = () => {
       const [selectedLanguage, setSelectedLanguage] = useState();
       const [isModalVisible, setModalVisible] = useState(false);
       const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }
    return (
      <KeyboardAwareScrollView> 
       <View style={styles.container}>
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
         <View style={styles.maincontainer1}> 
                  <View style={{width:'100%'}}> 
                        <Customheader title="EI Information"/>
                   </View>
                   <View style={{flexDirection:'row'}}>
                             <View
                                  style={styles.picker}>
                                     <Picker
                                       style={styles.pickerItem}
                                       selectedValue={selectedLanguage}
                                        onValueChange={(itemValue, itemIndex) =>
                                         setSelectedLanguage(itemValue)
                                         }
                                        >
                                     <Picker.Item label="State" value="0" />
                                     <Picker.Item label="Bombay" value="1" />
                                     <Picker.Item label="Gujaret" value="2" />
                                 </Picker>
                            </View>
                             <View
                                  style={styles.picker}>
                                     <Picker
                                       style={styles.pickerItem}
                                       selectedValue={selectedLanguage}
                                        onValueChange={(itemValue, itemIndex) =>
                                         setSelectedLanguage(itemValue)
                                         }
                                        >
                                     <Picker.Item label="City" value="0" />
                                     <Picker.Item label="Noida" value="1" />
                                     <Picker.Item label="Ghaziabad" value="2" />
                                 </Picker>
                            </View> 
                     </View>
                      <CustomDropdown  label1="Select School Name" value1="0"  label2="VPS" value2="1" label3="modern" value3="2" />
                      <View style={styles.addresstextinputstyle}>
                            <TextInput placeholder="Enter Your Address" style={styles.addressinput} />
                      </View>
                     <CustomDropdown  label1="Select Board/University" value1="0"  label2="CBSE" value2="1" label3="AKTU" value3="2" />
          </View>
          <View style={styles.maincontainer2}> 
               <View style={styles.gradeContainer}> 
                  <View><Text style={styles.gradetext}>Grade :</Text></View>
                  <View><Text style={{fontSize:15}}><Text style={ styles.batchtext}>  5th</Text> (Batch 2015-2016)</Text>
                       <Text style={styles.yeartext}>Complete in 1 year</Text>
                   </View> 
                   <View style={styles.editcontainer}> 
                       <Icon name="edit" size={25} color="gray"/>
                    </View>
               </View>
                <View style={styles.gradeContainer}> 
                     <View><Text style={styles.gradetext}>Grade :</Text></View>
                      <View><Text style={{fontSize:15}}><Text style={styles.batchtext}>  6th</Text> (Batch 2016-2017)</Text>
                       <Text style={styles.yeartext}>Complete in 2 year</Text>
                       </View>  
                        <View style={styles.editcontainer}> 
                           <Icon name="edit" size={25} color="gray"/>
                        </View>
                 </View>
                  <View style={{flexDirection:'row',padding:10}}> 
                       <View><Text style={styles.gradetext}>Grade :</Text></View>
                       <View><Text style={{fontSize:15}}><Text  style={styles.batchtext}>  7th</Text> (Batch 2017-2018)</Text>
                       <Text style={styles.yeartext}>Complete in 2 year</Text>
                       </View> 
                        <View style={styles.editcontainer}> 
                           <Icon name="edit" size={25} color="gray"/>
                      </View>
                  </View>
                  <TouchableOpacity style={styles.submitbutton} onPress={toggleModal} >
                        <Text style={styles.submittext}>Submit</Text>
                  </TouchableOpacity>
           </View>
     </View>
    </KeyboardAwareScrollView> 
     );
};
 export default Information1;