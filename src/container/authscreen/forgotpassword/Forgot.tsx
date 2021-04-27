import React, { Component,FC } from 'react';
 import { View, Text, StyleSheet,TextInput, TouchableOpacity,Image} from 'react-native';
 import styles from './styles.tsx';
import {CustomTextinput} from '../../../components/textinput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  //   import {CustomTextinput} from './components/textinput/Index.tsx';
// create a component
 const Forgot: FC = ({navigation}) => {
     return(
        <KeyboardAwareScrollView> 
          <View style={styles.container}> 
          <TouchableOpacity  onPress={() => navigation.goBack()} style={styles.backbutton}>
                    <Text  style={styles.backbuttonText}>Back</Text>
                 </TouchableOpacity>
                  <View style={{flex:1,alignItems:'center'}}>
                   <Image source={require('../../../Assets/images/profile.jpg')} style={{width: 200, height: 200,marginTop:50,borderRadius:100}}  /> 
                    <Text style={styles.text}>Enter your registered Mobile Number or {"\n"}Email Id to reset your password.</Text>
                    <CustomTextinput label="Email Id or Mobile Number"/>
                    <TouchableOpacity style={styles.signupStyle}  >
                        <Text style={styles.signupText}>Submit</Text>
                  </TouchableOpacity>
              </View>
           </View>
        </KeyboardAwareScrollView>
     );
 };
 export default Forgot;
 