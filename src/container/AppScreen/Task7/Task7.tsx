import React, { Component,FC,useState} from 'react';
import { View, Text, TouchableOpacity,Image,ScrollView ,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomHeader} from '../../../components/Customheader';
import {Custombutton} from '../../../components/Custombutton';
 
import styles from './styles.tsx';
import { TextInput } from 'react-native-paper';
const DATA = [
    {
      id: '1',
      name: 'Aakash',
       image:"https://bootdey.com/img/Content/avatar/avatar4.png",
       alumni:"Alumni",
       batchmates:'Batchmates 2009-10'
    },
    {
      id: '2',
      name: 'Prashant',
      image:"https://bootdey.com/img/Content/avatar/avatar4.png",
       batchmates:'Batchmates 2009-10'
      },
    {
      id: '3',
      name: 'Amit',
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
      {
        id: '5',
        name: 'Rohit',
        image:"https://bootdey.com/img/Content/avatar/avatar4.png",
        alumni:"",
         batchmates:'Batchmates 2009-18'
      },
      {
        id: '6',
        name: 'Rama',
        image:"https://bootdey.com/img/Content/avatar/avatar4.png",
        alumni:"",
         batchmates:'Batchmates 2009-18'
      },
      {
        id: '7',
        name: 'Neha',
        image:"https://bootdey.com/img/Content/avatar/avatar4.png",
        alumni:"",
         batchmates:'Batchmates 2009-18'
      },
      {
        id: '8',
        name: 'Anjali',
        image:"https://bootdey.com/img/Content/avatar/avatar4.png",
        alumni:"",
         batchmates:'Batchmates 2009-18'
      },
      {
        id: '9',
        name: 'Ashok ',
        image:"https://bootdey.com/img/Content/avatar/avatar4.png",
        alumni:"",
         batchmates:'Batchmates 2009-18'
      },
      {
        id: '10',
        name: 'Priya',
        image:"https://bootdey.com/img/Content/avatar/avatar4.png",
        alumni:"",
         batchmates:'Batchmates 2009-18'
      },
  ];
 
 
const Task7: FC = ({navigation}) => {
     return (
       <View style={styles.container}> 
             <CustomHeader title="Create Group Chat" icon1="arrow-left" icon2="ellipsis-v"/>
             <View style={styles.content1}>
                  <View style={styles.cameracontainer}>
                       <Icon name="camera" size={50}  color="black"/>
                  </View>
                  <TextInput
                           placeholder="Enter Group Name"
                           theme={{
                           colors: {
                           primary: 'white',
                             },
                           }}
                           style={styles.textinput}
                           underlineColor={'trannsparent'}
                        />
              </View>
              <View style={styles.separator}>
             </View>
              <View style={styles.participants}> 
                      <Text style={styles.participanttext}>Number of participants:10</Text>
             </View>
             <View> 
              <FlatList
                 // horizontal={true}
                  // initialNumToRender={10}
                  // maxToRenderPerBatch={10}
                  numColumns={5}
                   style={styles.flatlist}
                    data={DATA}
                    renderItem={({ item }) =>  
                      <View style={styles.flatlistitem} >
                       <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.flatlistimage}  /> 
                           <Text style={{textAlign:'center'}}>{item.name}</Text>
                       </View> 
                     }
                    keyExtractor={item => item.id}
                />
              </View>
              <View style={styles.addmorecontent}> 
                 <TouchableOpacity style={styles.addmore}>
                   <Text style={styles.addmoretext}>+</Text>
                 </TouchableOpacity>
                   <Text>Add More</Text>
            </View> 
         
         
         <Custombutton title="Create Group"/>
</View>
 
    );
};
export default Task7;