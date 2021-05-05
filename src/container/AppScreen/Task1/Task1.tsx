import * as React from 'react';
import { Text, View,FlatList,Image,TouchableOpacity,ImageBackground ,ScrollView} from 'react-native';
import styles from './styles.tsx';
 import Icon from 'react-native-vector-icons/FontAwesome';
  import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
  import {Customcard} from '../../../components/card';
  export default function Task1() {
  return (
      <ScrollView> 
    <View style={styles.container}> 
      <ImageBackground source={require(' ../../../Assets/images/back.jpg')} style={styles.backgroundImage} >
             <View style={styles.header}>
                <View> 
                    <Icon name="bars" size={20}  color="white" style={{color:'white',alignSelf:'flex-start'}}/>
                </View>
                 <View> 
                    <Text style={styles.headerTitle}>Profile</Text>
                 </View>
                 <View>
                </View>
             </View>
          </ImageBackground>
          <View style={styles.profilecontainer}>
               <View> 
                  <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  />
               </View>
               <View style={styles.profiletextcontainer}>
                  <View style={{flexDirection:"row"}}> 
                     <Text style={styles.nametext}>Neha Sharma</Text>
                     <Icon name="check-circle" size={18}  color="#4E387E" style={{margin:5}}/>
                 </View>
                  <Text style={{color:'grey',fontWeight:'bold'}}>You were in same class in 2019</Text>
               </View>
                <View style={styles.messageicon}> 
                     <Icon name="envelope" size={24} color="grey"/>
                </View>
          </View>
           <View style={styles.likecontainer}>
             <View>
                 <Text style={{fontWeight:'bold',marginLeft:15}}>
                     20K
                 </Text>
                 <Text>
                    Followers 
                 </Text>
             </View>
              <View>
              <Text style={{fontWeight:'bold',marginLeft:10}}>
                   205
                 </Text>
                 <Text>
                    Buddies
                 </Text>
             </View>
              <View> 
                   <TouchableOpacity style={styles.followbutton}>
                        <Text style={{color:'white',fontSize:10}}>Follow</Text>
                    </TouchableOpacity>
              </View>
              <View>
                     <TouchableOpacity style={styles.addbuddybutton}>
                        <Text style={{color:'grey',fontSize:10}}>Add Buddy</Text>
                    </TouchableOpacity>

               </View>
           </View>
           <Card style={styles.cardContent}>
               <View style={styles.cardtitlecontent}>
                   <View>
                       <Text style={styles.cardtitletext}>Education</Text>
                  </View>
                   <View>
                       <Icon name="edit" size={25}  color="grey"/>
                  </View>
               </View>
               
                <View style={ styles.borderstyle} >
              </View>
                <View style={styles.textcontainer}>
                  <View style={{flexDirection:'row'}}> 
                   <Text style={styles.schooltext}>
                       Delhi Public School
                  </Text>
                  <Icon name="check-circle" size={17}  color="#4E387E" style={{marginLeft:5,marginTop:2}}/>
                  </View>
                   <Text style={styles.textcontent}>
                       <Text style={styles.boldtext}>6th</Text>(Batch 2016-2017) 
                   </Text >
                   <Text style={styles.textcontent}>
                      <Text style={styles.boldtext}>7th</Text>(Batch 2017-2018) 
                   </Text>
               </View>
                <View style={ styles.borderstyle} >
              </View>
               <View style={styles.textcontainer}>
                   <Text style={styles.schooltext}>
                       Army Public School
                  </Text>
                   <Text style={styles.textcontent}>
                       <Text style={styles.boldtext}>8th</Text>(Batch 2010-2019) 
                   </Text >
                   <Text style={styles.textcontent}>
                      <Text style={styles.boldtext}>9th</Text>(Batch 2019-2020) 
                   </Text>
                   <Text style={styles.currentschoolText}>
                      Current School
                   </Text>
               </View>
          </Card>
          <Card style={styles.cardContent}>
               <View style={styles.cardtitlecontent}>
                   <View>
                       <Text style={styles.cardtitletext}>Personal Information</Text>
                  </View>
                   <View>
                       <Icon name="edit" size={25}  color="grey"/>
                  </View>
               </View>
              
                <View style={ styles.borderstyle} >
              </View>
                <View style={styles.textcontainer}>
                   
                   <Text style={styles.personalinfocontent}>
                       <Text style={styles.boldtext}>DOB:</Text>30/Oct/1997
                    </Text >
                    <Text style={styles.personalinfocontent}>
                       <Text style={styles.boldtext}>Email:</Text>Simmi.sh@gmail.com
                    </Text >
                    <Text style={styles.personalinfocontent}>
                       <Text style={styles.boldtext}>Profession:</Text>Student
                    </Text >
             
               </View>
          </Card>
          <Card style={styles.cardContent}>
               <View style={styles.cardtitlecontent}>
                   <View>
                       <Text style={styles.cardtitletext}>Posts</Text>
                   </View>
                    <View>
                   </View>
               </View>
               
                <View style={ styles.borderstyle} >
              </View>
               <View style={styles.icons}>
                 <Icon name="th" size={30}  color="grey"/>
                 <View style={{borderLeftWidth:1,  borderLeftColor: '#DCDCDC',}}></View>
                 <Icon name="image" size={30}  color="black"/>
               </View>
          </Card>
          <Customcard/>
</View>
</ScrollView>
     );
}