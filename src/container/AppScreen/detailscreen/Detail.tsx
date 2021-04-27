//import liraries
import React, { Component,FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.tsx';
import { ScaledSheet } from 'react-native-size-matters';
// create a component
const Detail: FC = () => {
    return (
        <View style={styles.container}>
        <View style={{width:'100%',backgroundColor:'white'}}> 
                  <View style={styles.titlecontainer}>
                          {/* /<Text style={{color:'white',fontSize:20,marginLeft:10}}>Back</Text> */}
                          <Text style={styles.titletext}>EI Information</Text>
                  </View>
                  <View style={styles.textcontent}>
                    <Text style={styles.titletext2}>Delhi Public School</Text>
                    <Text style={styles.addresstext}>A-100,Sector 28 Noida, Uttar Pradesh (201301)</Text>
                 </View>
                 <View  style={styles.textcontent}>
                     <Text style={styles.titletext2} >Batch & Grade Details</Text>
                       
                       <View style={styles.gradecontainer1}> 
                         <View><Text style={styles.gradetext}>Grade :</Text></View>
                         <View><Text><Text style={styles.batchno}>  5th</Text> (Batch 2015-2016)</Text>
                         <Text style={styles.yeartext}>Complete in 1 year</Text>
                         </View> 
                         
                       </View>
                 </View>
                  <View style={styles.gradecontainer2}> 
                         <View><Text  style={styles.gradetext}>Grade :</Text></View>
                         <View><Text><Text style={styles.batchno}>  6th</Text> (Batch 2016-2017)</Text> 
                         <Text style={styles.yeartext}>Complete in 2 year</Text>

                         </View> 
                       </View>
                 </View>
              
            <TouchableOpacity style={styles.savebutton}>
                <Text style={styles.savebuttontext}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
 

//make this component available to the app
 
 
export default Detail;