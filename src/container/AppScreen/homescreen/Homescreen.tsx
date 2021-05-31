 //import liraries
import React, { Component,FC,useState } from 'react';
import { View, Text, TouchableOpacity,ScrollView,Image, StyleSheet,FlatList } from 'react-native';
import styles from './styles.tsx';
import {Customcard,Smallcustomcard} from '../../../components/card';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomHeader} from '../../../components/Customheader'; 
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const DATA = [
    {
      id: '1',
      name: 'Ankit Sharma',
       image:"https://bootdey.com/img/Content/avatar/avatar4.png",
       alumni:"Alumni",
       batchmates:'Batchmates 2009-10'
    },
    {
      id: '2',
      name: 'Nitesh',
      image:"https://bootdey.com/img/Content/avatar/avatar4.png",
       batchmates:'Batchmates 2009-10'
      },
    {
      id: '3',
      name: 'Rohit',
      image:"https://bootdey.com/img/Content/avatar/avatar4.png",
      alumni:"",
       batchmates:'Batchmates 2009-18'
    },
    {
        id: '4',
        name: 'Ria Jain',
        image:"https://bootdey.com/img/Content/avatar/avatar4.png",
        alumni:"",
         batchmates:'Batchmates 2009-18'
      },
  ];
// create a component
const Homescreen: FC = ({navigation}) => {  
    return (
       
        <View style={styles.container}>
             
               <CustomHeader title="Zatchup" icon1="bars" icon2="search" icon3="bell"/>
        <ScrollView  > 
         <View style={{alignItems:'center',paddingBottom:30}}> 
          <Customcard/>
          <View style={styles.textcontainer}>
              <Text style={styles.text}>Suggetions</Text>
               <Text style={styles.text}>View All</Text>
          </View>
          <FlatList
            horizontal={true}
             style={{width:'94%'}}
              data={DATA}
               renderItem={({ item }) =>  
              <Card style={styles.smallcardcontent}>
                   <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.smallcardimage}  /> 
                   <Text style={styles.studentnametext}>{item.name}</Text>
                   <Text style={styles.batchmatetext}>{item.batchmates}</Text>
                    <TouchableOpacity style={styles.addbuddybutton}>
                        <Text style={{color:'white',fontSize:10}}>Add Buddy</Text>
                  </TouchableOpacity>
             </Card>
           }
           keyExtractor={item => item.id}
          />
         <Card style={styles.cardcontainer}>
            <View style={{flexDirection:'row',  justifyContent: 'space-between',}}>
                  <View style={{flexDirection:'row'}}> 
                      <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  /> 
                      <View style={styles.nametextstyle}> 
                         <Text style={styles.nametext}>Loreal</Text>
                      </View>
                  </View>
                     <Icon name="ellipsis-v"  color="grey" size={20}/>
            </View>
            <Image source={require('../../../Assets/images/loreal.jpg')} style={styles.bigimage}  /> 
            <Paragraph style={styles.cardparagrap}>
                 Lorem ipsum is simply dummy text of the printing and simply type setting industry
             </Paragraph>
             <View style={styles.iconcontainer}>
                   <Icon name="thumbs-up" size={15} color="grey"/>
                   <View style={{flexDirection:'row' }}> 
                   <View style={styles.icontext}> 
                     <Text>665</Text>
                    </View>
                     <Icon name="comment" color="grey" size={15} style={styles.icon}/>
                 </View>
                  <View style={{flexDirection:'row'}}> 
                     <View style={styles.icontext}> 
                        <Text style={{color:'grey',fontWeight:'bold'}}>Share</Text>
                     </View>
                       <Icon name="share-alt"  color="grey" size={15} style={styles.icon} />
                </View>
             </View>
         </Card>
       </View>
     </ScrollView>
 </View>
  
                
    );
};
export default Homescreen;