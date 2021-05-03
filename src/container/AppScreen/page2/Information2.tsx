//import liraries
import React, { Component,FC,useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.tsx';
 import {CustomDropdown,CustomTextArea,Customheader} from '../../../components/textinput';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';  
 // create a component
const Information2: FC = () => {
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
if (!setselectedCity) {
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
        
           <View style={styles.maincontainer}> 
              <View style={{width:'100%',position:'absolute'}}> 
                        <Customheader title="EI Information"/>
                   </View>
                   <View style={{flexDirection:'row',marginTop:100}}>
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
                                  onChangeText={(value)=>setaddress(value)}
                                  label="Enter Your Address"/>
                     <CustomDropdown  label1="Select Board/University" value1="0"  label2="CBSE" value2="1" label3="AKTU" value3="2" selectedValue={selectedBoard} onValueChange={(selectedValue)=>setselectedBoard(selectedValue)}/>
                     <Text style={styles.addbatchtext}>Add Batch</Text>
                  <View style={{flexDirection:'row'}}>
                        <CustomDropdown  label1="Select Grade"
                                  value1="0"  label2="Higher education" value2="1" label3="aSaas" value3="2"
                                   selectedValue={selectedSchool} 
                                   onValueChange={(Value)=>setSelectedState(Value)} 
                                    style={{width:200}}/>
                                  <View style={styles.SectionStyle}>
                                     <TextInput
                                      style={{flex:1,backgroundColor:'white',justifyContent:'center'}}
                                      label="From"
                                      underlineColorAndroid="transparent"
                                      underlineColor={'white'}
                                      />
                                      <Icon name="date" size={20} color="gray" style={{margin:10}}/>
                                  </View>
                         </View>
                         <View style={{flexDirection:'row'}}>
                                  <CustomDropdown  label1="Select Grade"
                                  value1="0"  label2="Higher education" value2="1" label3="aSaas" value3="2"
                                   selectedValue={selectedSchool} 
                                   onValueChange={(Value)=>setSelectedState(Value)} 
                                    style={{width:200}}/>
                                   <View style={styles.SectionStyle}>
                                      <TextInput
                                        style={{flex:1,backgroundColor:'white',color:'lightgray',justifyContent:'center'}}
                                         label="To"
                                         underlineColorAndroid="transparent"
                                         underlineColor={'white'}
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
                          <TouchableOpacity style={styles.submitbutton} onPress={submit}>
                             <Text style={styles.submittext}>Continue</Text>
                        </TouchableOpacity>
               </View>
   
     );
};
export default Information2;