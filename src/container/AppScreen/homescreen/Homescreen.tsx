 //import liraries
import React, { Component,FC,useState } from 'react';
import { View, Text, TouchableOpacity,ScrollView,Image, StyleSheet } from 'react-native';
import styles from './styles.tsx';
import {Customcard,Smallcustomcard} from '../../../components/card';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
// create a component
const Homescreen: FC = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
             <View style={styles.header}>
                 <Icon name="bars" size={20}  color="white" style={{color:'white',alignSelf:'center'}}/>
                 <Text style={styles.headertitle}>ZatchUp</Text>
                 <View style={{flexDirection:'row'}}> 
                    <Icon name="search" size={20} style={{color:'white',alignSelf:'center',marginRight:15}}/>
                    <Icon name="bell" size={20} color="white" style={{alignSelf:'center',padding:5}}/>
                 </View>
            </View>
           <Card style={styles.cardcontent}>
             <View style={styles.cardcontent1}>
                 <View style={{flexDirection:'row'}}> 
                    <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  /> 
                    <Text style={styles.nametext}>Simmi Sharma</Text>
                </View>
                 <Icon name="ellipsis-v"  color="grey" size={20}/>
            </View>
            <View style={styles.cardcontent2}>
                <Text style={{color:'grey',fontSize:13,fontWeight:'bold'}}>Title of the Project</Text>
                <Text style={{color:'grey',fontWeight:'bold'}}>655</Text>
            </View>
             <Image source={require('../../../Assets/images/video.jpg')} style={{width:'100%',height:150,borderRadius:15}}  /> 
             <Paragraph style={styles.cardparagrap}>
                 Lorem ipsum is simply dummy text of the printing and simply type setting industry
             </Paragraph>
             <View style={styles.cardcontent3}>
                <Icon name="thumbs-up" size={15} color="grey"/>
                <View style={{flexDirection:'row' }}> 
                   <Text style={{marginLeft:35}}>665</Text>
                    <Icon name="comment" color="grey" size={15} style={{marginLeft:15}}/>
               </View>
                <View style={{flexDirection:'row'}}> 
                   <Text style={{marginRight:10,fontWeight:'bold',color:'grey'}}>Share</Text>
                   <Icon name="share-alt"  color="grey" size={15}/>
              </View>
            </View>
        </Card>
         <View style={styles.textcontainer}>
              <Text style={styles.text1}>Suggetions</Text>
               <Text style={styles.text2}>View All</Text>
        </View>
        <View style={{flexDirection:'row'}}> 
           <Smallcustomcard/>
            <Smallcustomcard/>
           <Smallcustomcard/>
       </View>
       <Card style={styles.cardcontent}>
          <View style={{flexDirection:'row', 
                 justifyContent: 'space-between',}}>
            <View style={{flexDirection:'row'}}> 
                 <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  /> 
                  <Text style={styles.nametext}>Loreal</Text>
            </View>
                  <Icon name="ellipsis-v"  color="grey" size={20}/>
            </View>
            <Image source={require('../../../Assets/images/loreal.jpg')} style={{width:'100%',height:150,borderRadius:15,marginTop:6}}  /> 
            <Paragraph style={styles.cardparagrap}>
                 Lorem ipsum is simply dummy text of the printing and simply type setting industry
             </Paragraph>
             <View style={styles.cardcontent3}>
                   <Icon name="thumbs-up" size={15} color="grey"/>
                 <View style={{flexDirection:'row' }}> 
                    <Text style={{marginLeft:35}}>665</Text>
                     <Icon name="comment" color="grey" size={15} style={{marginLeft:15}}/>
                 </View>
                  <View style={{flexDirection:'row'}}> 
                      <Text style={{marginRight:10,fontWeight:'bold',color:'grey'}}>Share</Text>
                       <Icon name="share-alt"  color="grey" size={15}/>
                </View>
             </View>
       </Card>
     </View>
  </ScrollView>
                
    );
};
export default Homescreen;