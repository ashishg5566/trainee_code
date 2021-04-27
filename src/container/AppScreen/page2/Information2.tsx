//import liraries
import React, { Component,FC,useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.tsx';
import {Picker} from '@react-native-picker/picker';
import {CustomDropdown,Customtextinput2,Customheader} from '../../../components/textinput';
import { TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';  
 // create a component
const Information2: FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        
           <View style={styles.maincontainer}> 
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
                                <Picker.Item label="State" value="Graduation" />
                                <Picker.Item label="Higher Education" value="HE" />
                                <Picker.Item label="aSAAS" value="aSaas" />
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
                                     <Picker.Item label="City" value="Graduation" />
                                     <Picker.Item label="Higher Education" value="HE" />
                                     <Picker.Item label="aSAAS" value="aSaas" />
                                 </Picker>
                            </View> 
                     </View>
                     <CustomDropdown  label1="Select School Name" value1="one"  label2="vps" value2="two" label3="modern" value3="three" />
                      <View style={styles.addresstextinputstyle}>
                            <TextInput placeholder="Enter Your Address"  style={styles.addressinput} />
                     </View>
                     <CustomDropdown  label1="Select Board/University" value1="one"  label2="vps" value2="two" label3="modern" value3="three" />
                        <Text style={styles.addbatchtext}>Add Batch</Text>
                    <View style={styles.gradepickercontainer}>
                          <View
                             style={styles.gradepicker}>
                             <Picker
                               style={styles.pickerItem}
                              selectedValue={selectedLanguage}
                               onValueChange={(itemValue, itemIndex) =>
                               setSelectedLanguage(itemValue)
                                 }
                                   >
                               <Picker.Item label="Select Grade" value="Graduation" />
                               <Picker.Item label="Higher Education" value="HE" />
                               <Picker.Item label="aSAAS" value="aSaas" />
                            </Picker>
                            </View> 
                          <View style={styles.SectionStyle}>
                             <TextInput
                               placeholder="From"
                                  style={{ flex: 1 }}
                                   />
                                 <Icon name="date" size={20} color="gray" style={{margin:10}}/>
                               </View>
                          </View>
                       <View style={{flexDirection:'row'}}>
                        <View
                             style={styles.gradepicker}>
                             <Picker
                             style={styles.pickerItem}
                              selectedValue={selectedLanguage}
                               onValueChange={(itemValue, itemIndex) =>
                               setSelectedLanguage(itemValue)
                                 }
                                  >
                               <Picker.Item label="Select Grade" value="Graduation" />
                               <Picker.Item label="Higher Education" value="HE" />
                               <Picker.Item label="aSAAS" value="aSaas" />
                            </Picker>
                     </View> 
             <View style={styles.SectionStyle}>
            <TextInput
                   placeholder="To"
                    style={{ flex: 1 }}
                   />
                  <Icon name="date" size={20} color="gray" style={{margin:10}}/>
                 </View>
                 </View>
                <View style={styles.addmorecontainer}>
                    <TouchableOpacity style={styles.addmorebutton}>
                        <Text style={styles.addmorebuttontext}>+</Text>
                    </TouchableOpacity>
                     <Text style={styles.addmoreschooltext}>Add More Schools</Text>
                 </View>
                <TouchableOpacity style={styles.submitbutton}>
                     <Text style={styles.submittext}>Continue</Text>
              </TouchableOpacity>
       </View>
   
     );
};
export default Information2;