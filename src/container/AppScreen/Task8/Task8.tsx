import React, { Component,FC } from 'react';
import { Text, View,FlatList,Image,TouchableOpacity,ImageBackground ,ScrollView} from 'react-native';
import {CustomHeader} from '../../../components/Customheader';
import styles from './styles.tsx';
 import Icon from 'react-native-vector-icons/FontAwesome';
  import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
  import {Customcard} from '../../../components/card';
  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
  function ImageScreen() {
    return (
       <View style={{backgroundColor:'#ecf0f1',paddingBottom:10}}>
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
      <View style={{backgroundColor:'#ecf0f1',paddingBottom:10}}>
          <Customcard/>
      </View>
    );
  }
  const Tab = createMaterialTopTabNavigator();
  const Task8: FC = (props) => {
  return (
       
    <View style={styles.container}> 
       <CustomHeader title="School Profile" icon1="bars" icon2="envelope"/>
          <ScrollView>
                 <View style={styles.schoolcontainer}>
                     <View>
                        <Image source={require('../../../Assets/images/college1.jpg')} style={styles.profilepic}  />
                     </View>
                     <View style={styles.textcontainer}>
                         <Text style={styles.schooltext}>ABC School</Text>
                         <View style={styles.followerscontent}> 
                            <Text style={{fontWeight:'bold',textAlign:'center'}}>20K</Text>
                            <Text>Followers</Text>
                         </View>
                     </View>
                     <View style={styles.buttoncontainer}>
                        <TouchableOpacity style={styles.followbutton}>
                            <Text style={styles.followtext}>Follow</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.addbuddybutton}>
                            <Text style={styles.addposttext}>Add Post</Text>
                       </TouchableOpacity>
                     </View>
              </View>
              <View style={styles.addresscontainer}>
                  <Text style={styles.addresstext}>Address : </Text>
                  <Text style={{color:'black'}}>H-146/147 sector 63</Text>
           </View>
           <View style={styles.paragraphcontainer}>
             <Text style={{color:'black',textAlign:'justify'}}> <Text style={styles.overviewtext}>Overview of School : </Text>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum 
                 has been the industr's standard of dummy text ever since the 15000s,when an unknown printer took a galley of type and 
                 scrambled it to make a type specimen
              </Text>
          </View>
          
          <View style={[styles.totalstudentcontainer,{backgroundColor:'honeydew'}]}>
              <Text style={{fontSize:15}}>Number of Students</Text>
              <Text style={[styles.numbertext,{color:'green'}]}>1,758</Text>
          </View>
          <View style={[styles.totalstudentcontainer,{backgroundColor:'lightgrey'}]}>
              <Text style={{fontSize:15}}>Number of alumni on ZatchUp</Text>
              <Text style={[styles.numbertext,{color:'#4E387E'}]} >950</Text>
          </View>
          <View style={styles.button2container}>
              <TouchableOpacity style={styles.button}>
                  <Text style={{color:'#4E387E'}}>Donations</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Text style={{color:'green'}}>Lectures</Text>
              </TouchableOpacity>
         </View>
          <Card style={styles.cardContent}>
               <View style={styles.cardtitlecontent}>
                   
                       <Text style={styles.cardtitletext}>Posts</Text>
                       <View style={{borderBottomWidth:1,borderBottomColor:'lightgrey',marginTop:8}}></View>
                   
             </View>
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
                        showIcon: true,
                        activeTintColor:'#4E387E',
                         inactiveTintColor:'grey',
                         indicatorStyle: {
                          opacity: 0
                          },
                          tabStyle: {
                             height:50,
                              alignSelf:'center',
                             
                               },
                            style: {height:60,
                             
                              paddingTop:10,
                              borderWidth:1,
                              borderColor:'white',
                              backgroundColor:'white',
                              width:'90%',
                              alignSelf:'center',
                               borderBottomEndRadius:10,
                               borderBottomLeftRadius:10,
                               shadowColor:'white',
                               elevation:0,
                               marginTop:0
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
export default Task8;