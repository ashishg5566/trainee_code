import React, {FC,useState } from 'react';
import { View, Text, TouchableOpacity,ScrollView} from 'react-native';
import styles from './styles.tsx';
 import {CustomDropdown,CustomTextArea} from '../../../components/textinput';
 import {CustomHeader} from '../../../components/Customheader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Custombutton} from '../../../components/Custombutton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
 const Information1: FC = () => {
       const [selectedState, setSelectedState] = useState();
       const [selectedCity,setselectedCity]=useState('');
       const [selectedSchool,setselectedSchool]=useState('');
       const [selectedBoard,setselectedBoard]=useState('');
       const[address,setaddress]=useState('')
   const submit = () => {
   if (!selectedState) {
     alert('please select state')
     return;
 }
   if (!selectedCity) {
     alert('please select city')
     return;
   }
   if (!selectedSchool) {
   alert('please select school')
   return;
   }
   if (!address) {
      alert('please enter your address')
    return;
   }
    if (!selectedBoard) {
     alert('please select board and city')
       return;
     }
     alert('Success');
 };
 return (
      
       <View style={styles.container}>
             
             <View style={{width:'100%'}}> 
                        <CustomHeader title="EI Information"/>
                   </View>
                 
     <ScrollView> 
          <View style={{backgroundColor:'white'}}> 
         <View style={styles.maincontainer1}> 
         
         
                   
                   <View style={{flexDirection:'row'}}>
                            <CustomDropdown  label1="State"
                                  value1="0"  label2="Bombay" value2="1" label3="Gujarat" value3="2"
                                   selectedValue={selectedSchool} 
                                   onValueChange={(Value)=>setSelectedState(Value)} 
                                    style={{width:160}}/>
                              <CustomDropdown  label1="City"
                                   value1="0"  label2="Noida" value2="1" label3="Ghaziabad" value3="2"
                                    selectedValue={selectedCity}
                                    onValueChange={(Value)=>setselectedCity(Value)}
                                    style={{width:160}}/>
                             </View>
                            <CustomDropdown  label1="Select School Name" value1="0"  label2="VPS" value2="1" label3="modern" value3="2"selectedValue={selectedSchool} onValueChange={(selectedValue)=>setselectedSchool(selectedValue)}/>
                            <CustomTextArea   value={address}
                                  onChangeText={(text)=>setaddress(text)}
                                  label="Enter Your Address"/>
                            <CustomDropdown  label1="Select Board/University" value1="0"  label2="CBSE" value2="1" label3="AKTU" value3="2" selectedValue={selectedBoard} onValueChange={(selectedValue)=>setselectedBoard(selectedValue)}/>
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
                  <View style={{marginTop:30}}> 
                
                  <Custombutton title="Submit" onPress={submit}/>
                  </View>
                  
           </View>
           </View>
           </ScrollView> 
     </View>
    
     );
};
 export default Information1;