import React, {FC,useState,useEffect } from 'react';
import { View, Text, TouchableOpacity,ScrollView} from 'react-native';
import styles from './styles.tsx';
 import {CustomDropdown,CustomTextArea} from '../../../components/textinput';
 import {CustomHeader} from '../../../components/Customheader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Custombutton} from '../../../components/Custombutton';
import {Picker} from '@react-native-picker/picker';
const Information1: FC = () => {
       const [selectedState, setSelectedState] = useState();
       const [selectedCity,setselectedCity]=useState('');
       const [selectedSchool,setselectedSchool]=useState('');
       const [selectedBoard,setselectedBoard]=useState('');
       const[address,setaddress]=useState('');
       // Picker.item List
        const [values, setValues] = useState([]);
        const [cityvalues, setcityValues] = useState([]);
        const [schoolvalues, setschoolValues] = useState([]);
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
 const getStateData =  () => {
  fetch('http://172.105.61.231:3000/api/user/getallstate', {
              method: 'GET',
              //Request Type
            })
            
         .then(response => response.json())
         .then(responseJson => {
             setValues(responseJson.results)
         })
         .catch((error) => {
             console.error(error);
           });
};
const getCityData = () => {
  fetch('http://172.105.61.231:3000/api/user/getcitybystateid/12/', {
             method: 'GET',
             //Request Type
           })
           
        .then(response => response.json())
        .then(responseJson => {
            setcityValues(responseJson.results)
        })
        .catch((error) => {
            console.error(error);
          });
};
const getSchoolData = () => {
  fetch('http://172.105.61.231:3000/api/ei/getschoollistwithcity/291/', {
             method: 'GET',
             //Request Type
           })
           
        .then(response => response.json())
        .then(responseJson => {
            setschoolValues(responseJson.results)
        })
        .catch((error) => {
            console.error(error);
          });
};
useEffect(() => {
  getStateData();
  getCityData();
  getSchoolData();
}, []);
//  useEffect(() => {
//    fetch('http://172.105.61.231:3000/api/user/getallstate', {
//           method: 'GET',
//           //Request Type
//         })
        
//      .then(response => response.json())
//      .then(responseJson => {
//          setValues(responseJson.results)
//      })
//      .catch((error) => {
//          console.error(error);
//        });
// }, []);
// useEffect(() => {
//   fetch('http://172.105.61.231:3000/api/user/getcitybystateid/25/', {
//          method: 'GET',
//          //Request Type
//        })
       
//     .then(response => response.json())
//     .then(responseJson => {
//         setcityValues(responseJson.results)
//     })
//     .catch((error) => {
//         console.error(error);
//       });
// }, []);
  return (
       <View style={styles.container}>
                <View style={{width:'100%'}}> 
                        <CustomHeader title="EI Information"/>
                   </View>
                 
     <ScrollView> 
          <View style={{backgroundColor:'white'}}> 
         <View style={styles.maincontainer1}> 
               <View style={{flexDirection:'row'}}>
                            {/* <CustomDropdown  label1="State"
                                  value1="0"  label2="Bombay" value2="1" label3="Gujarat" value3="2"
                                   selectedValue={selectedState} 
                                   onValueChange={(Value)=>setSelectedState(Value)} 
                                    style={{width:160}}/> */}
                                    <View style={{paddingLeft:5,marginTop:12,backgroundColor:'white',height:62,borderRadius:10,borderWidth:3,borderColor:'lightgrey'}}> 
                                     <Picker
                                     // mode="dropdown"
                                        selectedValue={selectedState ? selectedState.id : null}
                                        style={{ width:155 ,color:'grey'}}
                                        onValueChange={(itemValue) => setSelectedState({ id: itemValue })}>
                                             <Picker.Item  style={{color:'blue',backgroundColor:'white'}} value={0} label="State"/>
                                       { values.map((value, i) => {
                                         return <Picker.Item  style={{color:'blue',backgroundColor:'white'}} key={i} value={value.id} label={value.state} />
                                 })}
                               </Picker>
                               </View>
                                  <View style={{paddingLeft:4,marginTop:12,backgroundColor:'white',height:62,borderRadius:10,borderWidth:3,borderColor:'lightgrey'}}> 
                                     <Picker
                                     // mode="dropdown"
                                        selectedValue={selectedCity ? selectedCity.id : null}
                                        style={{ width:155 ,color:'grey'}}
                                        onValueChange={(itemValue) => setselectedCity({ id: itemValue })}>
                                             <Picker.Item  style={{color:'blue',backgroundColor:'white'}} value={0} label="City"/>
                                       { cityvalues.map((value, i) => {
                          
                                       return <Picker.Item style={{color:'blue',backgroundColor:'white'}} key={i} value={value.id} label={value.city} />
                                 })}
                               </Picker>
                               </View>
                             </View>
                           
                            {/* <CustomDropdown  label1="Select School Name" value1="0"  label2="VPS" value2="1" label3="modern" value3="2"selectedValue={selectedSchool} onValueChange={(selectedValue)=>setselectedSchool(selectedValue)}/> */}
                            <View style={{paddingLeft:4,marginTop:12,backgroundColor:'white',height:62,borderRadius:10,borderWidth:3,borderColor:'lightgrey'}}> 
                                     <Picker
                                     // mode="dropdown"
                                        selectedValue={selectedSchool ? selectedSchool.id : null}
                                        style={{ width:330 ,color:'grey'}}
                                        onValueChange={(itemValue) => setselectedSchool({ id: itemValue })}>
                                             <Picker.Item value={0} label="Select School Name" style={{color:'blue',backgroundColor:'white'}} />
                                       { schoolvalues.map((value, i) => {
                                         return <Picker.Item key={i}  style={{color:'blue',backgroundColor:'white'}} value={value.id} label={value.school} />
                                 })}
                               </Picker>
                               </View>
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