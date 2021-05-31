//import liraries
import React, { Component,FC,useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.tsx';
 import {CustomDropdown,CustomTextArea} from '../../../components/textinput';
 import {CustomHeader} from '../../../components/Customheader';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';  
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView } from 'react-native-gesture-handler';
import {Custombutton} from '../../../components/Custombutton';
 // create a component
const Information2: FC = () => {
    const [selectedState, setSelectedState] = useState();
    const [selectedCity,setselectedCity]=useState('');
    const [selectedSchool,setselectedSchool]=useState('');
    const [selectedBoard,setselectedBoard]=useState('');
     const[address,setaddress]=useState('')
     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };
    
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
                     <View style={{width:'100%',position:'relative'}}> 
                             <CustomHeader title="EI Information"/>
                    </View>
                    <ScrollView> 
                    <View style={{flexDirection:'row',alignItems:"center",width:'100%',justifyContent:'center'}}>
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
                             <CustomDropdown  label1="Select School Name" value1="0"  label2="VPS" value2="1" label3="modern" value3="2"selectedValue={selectedSchool} onValueChange={(selectedValue)=>setselectedSchool(selectedValue)}
                             style={{alignSelf:'center'}}
                             />
                             <CustomTextArea   value={address}
                                  onChangeText={(value)=>setaddress(value)}
                                  label="Enter Your Address" 
                                  style={{alignSelf:'center'}}

                                  />
                             <CustomDropdown  label1="Select Board/University" value1="0"  label2="CBSE" value2="1" label3="AKTU" value3="2" selectedValue={selectedBoard} onValueChange={(selectedValue)=>setselectedBoard(selectedValue)}
                               style={{alignSelf:'center'}}
                             />
                             <View style={styles.batchtextcontainer}> 
                                 <Text style={styles.addbatchtext}>Add Batch</Text>
                             </View>
                            <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                <CustomDropdown  label1="Select Grade"
                                     value1="0"  label2="Higher education" value2="1" label3="aSaas" value3="2"
                                      selectedValue={selectedSchool} 
                                       onValueChange={(Value)=>setSelectedState(Value)} 
                                       style={{width:200}}/>
                                    <View> 
                                    <TouchableOpacity style={{marginTop:5,borderColor:'lightgrey',borderWidth:3,backgroundColor:'white',width:120,justifyContent:'center',height:58,padding:12,borderRadius:10}}>
                                        <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
                                          <Text style={{color:'grey',fontSize:15}}>From</Text>
                                          <Icon name="calendar" size={20}  color="grey"  onPress={showDatePicker} /> 
                                        </View>
                                     </TouchableOpacity>
                                            <DateTimePickerModal
                                               isVisible={isDatePickerVisible}
                                                 mode="date"
                                                   onConfirm={handleConfirm}
                                                 onCancel={hideDatePicker}
                                              />
                                          </View>
                               </View>
                         <View style={{flexDirection:'row',width:'100%',justifyContent:'center',alignItems:'center'}}>
                                  <CustomDropdown  label1="Select Grade"
                                  value1="0"  label2="Higher education" value2="1" label3="aSaas" value3="2"
                                   selectedValue={selectedSchool} 
                                   onValueChange={(Value)=>setSelectedState(Value)} 
                                    style={{width:200}}/>
                                     <View> 
                                    <TouchableOpacity style={{marginTop:5,borderColor:'lightgrey',borderWidth:3,backgroundColor:'white',width:120,justifyContent:'center',height:57,padding:12,borderRadius:10}}>
                                        <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
                                          <Text style={{color:'grey',fontSize:15}}>To</Text>
                                          <Icon name="calendar" size={20}  color="grey" onPress={showDatePicker} /> 
                                        </View>
                                     </TouchableOpacity>
                                            <DateTimePickerModal
                                               isVisible={isDatePickerVisible}
                                                 mode="date"
                                                   onConfirm={handleConfirm}
                                                 onCancel={hideDatePicker}
                                              />
                                          </View>
                                     </View>
                          <View style={styles.addmorecontainer}>
                             <TouchableOpacity style={styles.addmorebutton}>
                               <Text style={styles.addmorebuttontext}>+</Text>
                             </TouchableOpacity>
                                 <Text style={styles.addmoreschooltext}>Add More Schools</Text>
                          </View>
                          <View style={{marginTop:30}}> 
                          <Custombutton title="Continue" onPress={submit}/>
                          </View>
                        </ScrollView> 

                      </View>
               
     );
};
export default Information2;