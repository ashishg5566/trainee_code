import React, { Component,FC ,useState} from 'react';
import { Text, View,FlatList,Image,TouchableOpacity,ImageBackground ,ScrollView} from 'react-native';
import styles from './styles';
import {  Validate,CustomStatusBar } from '../../../components';
import {Custombutton} from '../../../components/Custombutton';
import {TextField} from '../../../components/TextField';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../../actions/user-actions-types';
import ProgressLoader from 'rn-progress-loader';
function resetPassword() {
   const [oldPassword, setoldPassword] = useState('');
   const [newPassword, setnewPassword] = useState('');
   const [confirmPassword, setconfirmPassword] = useState('');
   const [entry, setEntery] = useState('');
   const [isLoading, setLoading] = useState(false);
   const [SecureTextEntry, setSecureTextEntry] = useState(true);

   const dispatch = useDispatch();

   React.useEffect(() => {
    //  console.log('rtyuigfghj', props)
   }, []);
   const submit = async () => {
      const newPasswordError = Validate("password", newPassword);
      const passwordError = Validate("password", oldPassword);
      const confirmPasswordError = Validate(
        "confirm_password",
        confirmPassword, newPassword
      );
      if (passwordError || confirmPasswordError) {
           Toast.show( passwordError || confirmPasswordError||newPasswordError , Toast.SHORT);
            return false;
        }
        else {
         const data = {
          "confirm_password":confirmPassword,
             "old_password":oldPassword,
             "password":newPassword,
           
              
            }
            setLoading(true);
            dispatch(
              userActions.resetPassword({
                data,
                callback: ({ result, error }) => {
      
                  if (result.status === "True") {
                    console.warn(
                       JSON.stringify(result.status, undefined, 2),
                       
                    );
                   
                    setLoading(false);
                  }
                  if (!error) {
                      console.warn(JSON.stringify(error, undefined, 2));
                      setLoading(false);
                     }
                    else {
                       setLoading(false);
                       console.warn(JSON.stringify(error, undefined, 2));
                    }
                  },
                }),
              );
            }
          };
  
  
  
  const renderIndicator = () => {
      return (
        <View style={{}}>
  
          <ProgressLoader
            visible={true}
            isModal={true} isHUD={true}
            //hudColor={"#ffffff00"}
            hudColor={"#4B2A6A"}
            style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
            color={"white"} />
        </View>
      );
    }
  


    return (
       <View style={styles.container}>
           <CustomStatusBar />
            {isLoading && renderIndicator()}
            <View style={{backgroundColor:'white',padding:5,margin:10,paddingTop:15,paddingBottom:10}}> 
          <View style={{alignItems:'center'}}> 
             <Text style={styles.changepasswordText}>Change Password</Text>
          </View>
          <View style={{marginTop:10}}> 
             <Text style={styles.passwordText}>Old Password</Text>
             <TextField 
                secureTextEntry={SecureTextEntry}
                 onIconPress={() => {
                setSecureTextEntry(!SecureTextEntry)
              }}
             imageIcon="eye" placeholder="Enter Old Password"
               onChangeText={val => setoldPassword(val)} value={oldPassword}
          />
          </View>
          <View style={{marginTop:10}}> 
             <Text  style={styles.passwordText}>New Password</Text>
             <TextField 
             secureTextEntry={SecureTextEntry}
             onIconPress={() => {
            setSecureTextEntry(!SecureTextEntry)
          }}
             
             imageIcon="eye" placeholder="Enter Password"
             onChangeText={val => setnewPassword(val)} value={newPassword}
          />
          </View>
          <View style={{marginTop:10}}> 
              <Text style={styles.passwordText}>Confirm Password</Text>
              <TextField 
              
              secureTextEntry={SecureTextEntry}
                 onIconPress={() => {
                setSecureTextEntry(!SecureTextEntry)
              }}
              imageIcon="eye" placeholder="Confirm Password"
              onChangeText={val => setconfirmPassword(val)} value={confirmPassword}
          />
            </View>
            <View style={{marginTop:20}}> 
               <Custombutton title="Submit" onPress={submit} />
           </View>
       </View>


      </View>
   
 
     );
}
export default resetPassword;