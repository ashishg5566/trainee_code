//import liraries
import React, { Component, FC } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity ,Image,TextInput} from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
// create a component
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const Dashboard: FC = ({ 
}) => {
    return (
         <View style={styles.container}> 
           <View style={styles.header}>
              <View> 
                 <Icon name="arrow-left" size={20}  color="white" style={{color:'white',alignSelf:'flex-start'}}/>
              </View>
              <View> 
                   <Text style={styles.headerTitle}>Post Detailed</Text>
              </View>
               <View>

          </View>
          </View>
          <Card style={styles.cardContent}>
             <View style={styles.cardcontent1}>
                 <View style={{flexDirection:'row'}}> 
                    <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profileimage}  /> 
                     <Text style={styles.nametext}>Simmi Sharma</Text>
                 </View>
                  <Icon name="ellipsis-v"  color="grey" size={28}/>
            </View>
             <View style={styles.cardcontent2}>
                <Text style={styles.titletext}>Title of the Project</Text>
                <Text style={{color:'grey',fontWeight:'bold',fontSize:16}}>432</Text>
            </View>
            <View style={styles.cardvideocontent}>
                <Image source={require('../../../Assets/images/video.jpg')} style={{width:'100%',borderRadius:15}}  /> 
           </View>
            <Paragraph style={styles.cardparagraphcontent}>
                 Lorem ipsum is simply dummy text of the print and simply type setting industry.
           </Paragraph>
           <View style={styles.cardcontent3}>
            {/* <Icon name="like" size={20} color="black"style={{alignSelf:'center',padding:5}}/> */}
                <Icon name="thumbs-up" size={25} color="grey"/>
                 <View style={{flexDirection:'row' }}> 
                     <Text style={{fontWeight:'bold',color:'grey',marginLeft:50,fontSize:16}}  >665</Text>
                      <Icon name="comment" size={24} color="grey" style={{marginLeft:20}}/>
                </View>
                 <View style={{flexDirection:'row'}}> 
                      <Text style={{fontWeight:'bold',marginRight:15,color:'grey',fontSize:16}}>Share</Text>
                      <Icon name="share-alt" size={24} color="grey"/>
                </View>
            </View>
            <View style={styles.cardcontent4}>
                 <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  /> 
                 <View >
                      <Text style={styles.profiletext}>Raushel</Text>
                      <Paragraph style={styles.profileparagraph}>
                          Lorem ipsum is simply dummy text of the printing and simply type setting industry
                      </Paragraph>
                </View>
            </View>
             <View style={styles.cardcontent4}>
                  <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic} /> 
                  <View >
                     <Text style={styles.profiletext}>Nikhil</Text>
                      <Paragraph style={styles.profileparagraph}>
                        Lorem ipsum is simply dummy text of the printing and simply type setting industry
                   </Paragraph>
                </View>
            </View>
            <TextInput
              placeholder="Write here..."
               style={{marginTop:20,borderRadius:10,backgroundColor:'lightgrey',padding:15,fontSize:18}}
             />
          </Card>
    </View>
       
         );
};
export default Dashboard;
