import React, { Component,FC,useState } from 'react';
import {  View,FlatList,Image,TouchableOpacity,ImageBackground ,ScrollView,Switch} from 'react-native';
import {CustomHeader} from '../../../components/Customheader';
import {Custombutton} from '../../../components/Custombutton';
import { RadioButton, Text } from 'react-native-paper';
import styles from './styles.tsx';  
const Task9: FC = (props) => {
      const [value, setValue] = React.useState('first');
      const [isEnabled, setIsEnabled] = useState(false);
      const toggleSwitch = () => setIsEnabled(previousState => !previousState);
 return (
     <View style={styles.container}> 
      <View style={{backgroundColor:'white'}}> 
           <CustomHeader title="Privacy Policy" icon1="arrow-left"/>
          <View style={styles.lastseentextcontent}>
            <Text style={styles.lastseentext}>Last Seen will be visible to</Text>
          </View>
          <View style={styles.radiobuttoncontainer}>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={styles.radiocontent}>
                    <RadioButton value="first" color="#4E387E" />
                    <Text style={styles.radiotext}>Everyone</Text>
                </View>
                <View style={styles.radiocontent}>
                    <RadioButton value="second"  color="#4E387E"/>
                    <Text  style={styles.radiotext}>My Buddies</Text>
                </View>
                <View style={styles.radiocontent}>
                     <RadioButton value="third" color="#4E387E"/>
                     <Text  style={styles.radiotext}>Nobody</Text>
                </View>
              </RadioButton.Group>
            </View>
         </View>
          <View style={styles.readrecipienttextcontent}>
                <Text style={styles.readrecipienttext}>Read Recipient</Text>
                <View style={styles.switchcontent}> 
                 <Switch
                  trackColor={{ false: "#3CB371", true: "#3CB371"}}
                  thumbColor={isEnabled ? "white" : "grey"}
                  ios_backgroundColor="#3e3e3e"
                   onValueChange={toggleSwitch}
                    value={isEnabled}
                   />
          </View>
         </View>
         <View style={styles.savebuttoncontent}> 
                 <Custombutton title="Save"/>
         </View>
</View>
   
 
     );
}
export default Task9;