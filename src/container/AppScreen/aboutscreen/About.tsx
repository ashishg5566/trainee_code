import * as React from 'react';
import { Text, View,FlatList,Image,TouchableOpacity } from 'react-native';
import styles from './styles.tsx';
 import Icon from 'react-native-vector-icons/FontAwesome';
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
    <View  >
     <FlatList
        style={{width:'100%'}}
            data={DATA}
              renderItem={({ item }) =>  
              <Card style={styles.cardcontainer}>
               <View style={styles.cardcontent}>
                 <View style={{flexDirection:'row'}}>
                    <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  />
                      <View style={{marginLeft:20}}> 
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
              </Card>
          }
           keyExtractor={item => item.id}
          />
     
       </View>
      );
     }

function ContactScreen() {
  return (
    <View>
      <FlatList
       style={{width:'100%'}}
       data={DATA}
        renderItem={({ item }) =>  
          <Card style={styles.cardcontainer}>
          <View style={styles.cardcontent}>
             <View style={{flexDirection:'row'}}>
                <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  />
                 <View style={{marginLeft:20}}> 
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
           </Card>
          }
           keyExtractor={item => item.id}
          />
      </View>
  );
}

const Tab = createMaterialTopTabNavigator();
export default function About() {
  return (
    <View style={styles.container}> 
       <View style={styles.header}>
           <View> 
              <Icon name="arrow-left" size={20}  color="white" style={{color:'white',alignSelf:'flex-start'}}/>
           </View>
            <View> 
               <Text style={styles.headerTitle}>Suggetions</Text>
           </View>
            <View>
           </View>
       </View>
    <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 17 ,textTransform: 'none'
            // color:'white'
        },
           activeTintColor:'white',
            inactiveTintColor:'grey',
             indicatorStyle: {
             backgroundColor:'#4E387E',
             height:'100%',
          //   borderBottomWidth: 0,
          // borderBottomLeftRadius: 0,
          //   borderBottomRightRadius: 0,
             borderRadius:6
               },
        //   pressColor: 'white',
        // tabStyle: { backgroundColor: '#36A7E7', borderRadius: 30, margin: 12, justifyContent: 'center', alignContent: 'center' },
            style: { margin:12,height:68 ,justifyContent:'center',borderRadius:6},
           }}
           >
        <Tab.Screen name="Same School" component={SameSchoolScreen} 
         />
           <Tab.Screen name="Contacts" component={ContactScreen} />
          </Tab.Navigator>
     </View>
     );
}