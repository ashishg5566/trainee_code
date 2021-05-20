import * as React from 'react';
import { Text, View,FlatList,Image,TouchableOpacity } from 'react-native';
import styles from './styles.tsx';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import {CustomHeader} from '../../../components/Customheader';
  import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
      name: 'Tanya',
      image:"https://bootdey.com/img/Content/avatar/avatar4.png",
      alumni:"",
       batchmates:'Schoolmates 2009-18'
      },
    {
      id: '3',
      name: 'Ria Jain',
      image:"https://bootdey.com/img/Content/avatar/avatar4.png",
      alumni:"",
       batchmates:'Schoolmates 2009-18'
    },
  ];
function SameSchoolScreen() {
  return (
    <View style={{paddingLeft:15,paddingRight:15}} >
     <FlatList
         style={{alignSelf:'center',width:'100%'}}
            data={DATA}
              renderItem={({ item }) =>  
                 <View style={styles.cardcontent}>
                 <View style={{flexDirection:'row',marginTop:8}}>
                    <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  />
                      <View style={{marginLeft:14}}> 
                       <Text style={styles.buddyname}>{item.name}</Text>
                       <Text style={styles.buddyalumni}>{item.alumni}</Text>
                        <Text style={styles.buddybatchmates}>{item.batchmates}</Text>
                    </View>
                 </View>
                 <View style={{alignSelf:'center'}}>
                     <TouchableOpacity style={styles.addbuddybutton}>
                         <Text style={{color:'green'}}>Add Buddy</Text>
                     </TouchableOpacity>
                 </View> 
                </View> 
             
          }
           keyExtractor={item => item.id}
          />
     
       </View>
      );
     }

function ContactScreen() {
  return (
    <View style={{paddingLeft:15,paddingRight:15}}>
      <FlatList
        style={{alignSelf:'center',width:'100%'}}
       data={DATA}
        renderItem={({ item }) =>  
         
          <View style={styles.cardcontent}>
             <View style={{flexDirection:'row',marginTop:8}}>
                <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  />
                 <View style={{marginLeft:14}}> 
                    <Text style={styles.buddyname}>{item.name}</Text>
                    <Text style={styles.buddyalumni}>{item.alumni}</Text>
                    </View>
                </View>
               <View style={{alignSelf:'center'}}>
                  <TouchableOpacity style={styles.addbuddybutton}>
                      <Text style={{color:'green'}}>Add Buddy</Text>
                 </TouchableOpacity>
              </View> 
           </View> 
           
          }
           keyExtractor={item => item.id}
          />
      </View>
  );
}

const Tab = createMaterialTopTabNavigator();
export default function About({navigation}) {
  return (
    <View style={styles.container}> 
            <CustomHeader title="Suggetions" icon1="arrow-left" />
    <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 17 ,textTransform: 'none'
            // color:'white'
        },
        // activeBackgroundColor: '#ff6900',
           activeTintColor:'white',
            inactiveTintColor:'grey',
             indicatorStyle: {
             backgroundColor:'#4E387E',
             height:'100%',
             width:'50%',
             
             
          //   borderBottomWidth: 0,
          // borderBottomLeftRadius: 0,
          //   borderBottomRightRadius: 0,
            
             
               },
        //   pressColor: 'white',
        tabStyle: {},
        
            style: { margin:12 ,justifyContent:'center',borderRadius:5},
           }}
           >
        <Tab.Screen name="Same School" component={SameSchoolScreen} 
         />
           <Tab.Screen name="Contacts" component={ContactScreen} />
          </Tab.Navigator>
     </View>
     );
}