import React, { Component,FC } from 'react';
import { Text, View,FlatList,Image,TouchableOpacity,ImageBackground ,ScrollView} from 'react-native';
import styles from './styles.tsx';
 import Icon from 'react-native-vector-icons/FontAwesome';
  import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
  import {Customcard} from '../../../components/card';
  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
  function ImageScreen() {
    return (
       <View style={{backgroundColor:'lightgray',paddingBottom:10}}>
         <View style={styles.picContainer}>
         <Image source={require('../../../Assets/images/college1.jpg')} style={styles.image}  />
         <Image source={require('../../../Assets/images/college2.jpg')} style={styles.image}  />
        </View>
         <View style={styles.picContainer}>
         <Image source={require('../../../Assets/images/college3.jpg')} style={styles.image}  />
         <Image source={require('../../../Assets/images/college4.jpg')} style={styles.image}  />

         </View>
      </View>
       );
  }
  function ProfileScreen() {
    return (
      <View style={{backgroundColor:'lightgrey',paddingBottom:10}}>
          <Customcard/>
      </View>
    );
  }
  const Tab = createMaterialTopTabNavigator();
  const Task1: FC = (props) => {
  return (
       
    <View style={styles.container}> 
      
      <ImageBackground source={require(' ../../../Assets/images/back.jpg')} style={{height:83}} > 
         
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
             
             <ScrollView>
             <ImageBackground source={require(' ../../../Assets/images/back.jpg')} style={styles.backgroundImage} > 
             
              
             </ImageBackground>
            
          
         
          <View style={styles.profilecontainer}>
               <View style={{flexDirection:'row'}}> 
                  <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  />
              
              
               <View style={styles.profiletextcontainer}>
                  <View style={{flexDirection:"row"}}> 
                     <Text style={styles.nametext}>Neha Sharma</Text>
                     <Icon name="check-circle" size={18}  color="#4E387E" style={{margin:5}}/>
                 </View>
                  <Text style={{color:'grey',fontWeight:'bold'}}>You were in same class in 2019</Text>
               </View>
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
                        <Text style={{color:'white',fontSize:12}}>Follow</Text>
                    </TouchableOpacity>
              </View>
              <View>
                     <TouchableOpacity style={styles.addbuddybutton}>
                        <Text style={{color:'grey',fontSize:12}}>Add Buddy</Text>
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
                       <Text style={styles.boldtext}>6th</Text> (Batch 2016-2017) 
                   </Text >
                   <Text style={styles.textcontent}>
                      <Text style={styles.boldtext}>7th</Text> (Batch 2017-2018) 
                   </Text>
               </View>
                <View style={ styles.borderstyle} >
              </View>
               <View style={styles.textcontainer}>
                   <Text style={styles.schooltext}>
                       Army Public School
                  </Text>
                   <Text style={styles.textcontent}>
                       <Text style={styles.boldtext}>8th</Text> (Batch 2010-2019) 
                   </Text >
                   <Text style={styles.textcontent}>
                      <Text style={styles.boldtext}>9th</Text> (Batch 2019-2020) 
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
                       <Text style={styles.boldtext}>DOB : </Text>30/Oct/1997
                    </Text >
                    <Text style={styles.personalinfocontent}>
                       <Text style={styles.boldtext}>Email : </Text>Simmi.sh@gmail.com
                    </Text >
                    <Text style={styles.personalinfocontent}>
                       <Text style={styles.boldtext}>Profession : </Text>Student
                    </Text >
           </View>
          </Card>
          <Card style={styles.cardContent2}>
               <View style={styles.cardtitlecontent}>
                   <View>
                       <Text style={styles.cardtitletext}>Posts</Text>
                   </View>
                   
               </View>
               
               
                {/* <View style={ styles.borderstyle} >
              </View> */}
              </Card>
                
            <Tab.Navigator
                  tabBarOptions={{
                    iconStyle:{
                      height:50,
                      width:50,
                      justifyContent:'center',
                      alignItems:'center'

                       },
                       showLabel: false,
                      // pressColor: "#FDF5F1",
                        showIcon: true,
                        activeTintColor:'#4E387E',
                         inactiveTintColor:'grey',
                         indicatorStyle: {
                            //backgroundColor:'white',
                            //width:150,
                            opacity: 0
                          },
                          tabStyle: {
                            //width:160,
                            height:50,
                           //backgroundColor:'red',
                             alignSelf:'center',
                               },
                            style: {height:70,
                              paddingTop:10,
                              backgroundColor:'white',
                              width:'92%',
                              alignSelf:'center',
                               borderBottomEndRadius:10,
                               borderBottomLeftRadius:10
                              },
                           }}
                        >
            <Tab.Screen name="th" component={ImageScreen} 
                options={{ 
                 tabBarIcon: ({ color }) => (
                  <Icon name='th' size={30} color={color} />
                 )
               
          }}
           />
           <Tab.Screen name="Profile" component={ProfileScreen} 
           options={{
            tabBarIcon: ({ color }) => (
                <Icon name='image' size={30} color={ color }/>
            )
             }}
           />
          </Tab.Navigator>
        
          </ScrollView> 
      </View>
   
 
     );
}
export default Task1;