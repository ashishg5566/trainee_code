//import liraries
import React, { Component,FC } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native';
 
// create a component
const Changepassword: FC = ({navigation}) => {
    return (
        
        <View style={styles.container}>
             <Text>Change Password</Text>
            <TextInput
              placeholder="Enter Email"
                keyboardType="numeric"
                  />
                   <TextInput
              placeholder="Enter New Password"
                keyboardType="numeric"
                  />
                   <TextInput
              placeholder="Enter Old Password"
                keyboardType="numeric"
                  />
                
               <TouchableOpacity style={{backgroundColor:'red',width:100,height:40,alignItems:'center',justifyContent:'center'}}
               
               >
                   <Text>Change Password</Text>
               </TouchableOpacity>
        </View>
    );
};

// define your styles
 

//make this component available to the app
const styles = StyleSheet.create({
      container: {
          flex:1,
     marginTop: 32,
     paddingHorizontal: 24,
   }
 });
 
export default Changepassword;