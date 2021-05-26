import React, { Component, FC,useState } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity ,Image,TextInput,ScrollView} from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
import {Customprofile} from '../../../components/Customprofile';
import styles from './styles';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const Task3: FC = ({ navigation}) => {
    return (
     // <ScrollView> 
    <View style={styles.container}> 
             <View style={styles.header}>
                <View> 
                <TouchableOpacity  onPress={() => navigation.goBack()} >
                  <Icon name="arrow-left" size={20}  color="white"/>
                  </TouchableOpacity>
               </View>
                <View> 
                   <Text style={styles.headerTitle}>Project Funding</Text>
                </View>
                 <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <Icon name="search" size={25}  color="white" style={{marginRight:10}}/>
                    <Icon name="history" size={25}  color="white"/>
                </View>
             </View>
           <ScrollView> 
             {/* <View style={{alignItems:'center',paddingBottom:30}}>  */}
                <Card style={styles.cardContainer}>
                   <View style={styles.content1}>   
                       <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profileimage}  /> 
                      <Text style={styles.nametext}>Delhi Public School</Text>
                 </View>
                    <View style={styles.separator}>
                 </View>
                 <Text style={styles.titletext}>Title of the Project</Text>
                 
                  <View style={styles.videocontent}>
                      <Image source={require('../../../Assets/images/video.jpg')} style={{width:360,borderRadius:15,resizeMode:'cover'}}  /> 
                 </View>
                 <Paragraph style={styles.paragraphcontent}>
                      Lorem ipsum is simply dummy text of the print and simply type setting industry.
                </Paragraph>
                 <View style={styles.fundingContent}>
                   <View> 
                     <View style={styles.fundingtextcontent}>
                        <Text style={styles.fundtext}>Funding Required : </Text>
                        <Text style={styles.amounttext}> Rs 3,00,000 </Text>
                   </View>
                   <View style={styles.fundingtextcontent}>
                      <Text style={styles.fundtext}>Funding Collected : </Text>
                      <Text style={styles.amounttext}>Rs 3,00,000 </Text>
                   </View>
                </View>
                 <TouchableOpacity style={styles.fundbutton}>
                        <Text style={{color:'white'}}>Fund</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator}>
             </View>
             <View style={styles.content3}>
              <View style={{flexDirection:'row' }}> 
                   <Text style={styles.icontext}>30</Text>
                   <Icon name="thumbs-up" size={25} color="#4E387E"  style={styles.icon}/>
               </View>
                <View style={{flexDirection:'row' }}> 
                     <Text style={styles.icontext}>665</Text>
                      <Icon name="comment" size={24} color="grey"  style={styles.icon}/>
                </View>
                 <View style={{flexDirection:'row'}}> 
                     <TouchableOpacity>  
                         <Text style={styles.icontext}>Share</Text>
                     </TouchableOpacity>
                      <Icon name="share-alt" size={24} color="grey" style={styles.icon}/>
                </View>
            </View>
            <View style={styles.separator}>
           </View>
           <Customprofile name="Nikhil" 
              paragraph="Lorem ipsum is simply dummy text of the printing and simply type setting industry"/>
             <TextInput
              placeholder="Write here..."
               style={styles.textinput}
             />
       </Card>
       {/* </View> */}
       </ScrollView>
   </View>
   
   
         );
};
export default Task3;
