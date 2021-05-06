import React, { Component, FC,useState } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity ,Image,TextInput} from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Modal from 'react-native-modal';
 import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const Task3: FC = ({ 
}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    return (
         <View style={styles.container}> 
           <View style={styles.header}>
              <View> 
                 <Icon name="arrow-left" size={20}  color="white" style={{color:'white',alignSelf:'flex-start'}}/>
              </View>
              <View> 
                   <Text style={styles.headerTitle}>Project Funding</Text>
              </View>
             
               <View style={{flexDirection:'row'}}>
               <Icon name="search" size={25}  color="white" style={{marginRight:15}} />
              <Icon name="history" size={25}  color="white"/>
             </View>
          </View>
          <Card style={styles.cardContent}>
             <View style={styles.cardcontent1}>
                 <View style={{flexDirection:'row'}}> 
                    <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profileimage}  /> 
                     <Text style={styles.nametext}>Delhi Public School</Text>
                 </View>
                   
            </View>
             <View style={styles.cardcontent2}>
                <Text style={styles.titletext}>Title of the Project</Text>
                 
            </View>
            <View style={styles.cardvideocontent}>
                <Image source={require('../../../Assets/images/video.jpg')} style={{width:'100%',borderRadius:15}}  /> 
           </View>
            <Paragraph style={styles.cardparagraphcontent}>
                 Lorem ipsum is simply dummy text of the print and simply type setting industry.
           </Paragraph>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <View> 
               <View style={{flexDirection:'row',marginTop:10}}>
                   <Text style={styles.fundtext}>Funding Required : </Text>
                   <Text style={styles.amounttext}> Rs 3,00,000 </Text>
                </View>
                <View style={{flexDirection:'row',marginTop:8}}>
                   <Text style={styles.fundtext}>Funding Collected : </Text>
                   <Text style={styles.amounttext}>Rs 3,00,000 </Text>
                </View>
              </View>
                <View>
                    <TouchableOpacity style={{marginTop:25,height:42,justifyContent:'center',alignItems:'center',width:100,borderRadius:15,backgroundColor:'green'}}>
                        <Text style={{color:'white'}}>Fund</Text>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={styles.cardcontent3}>
            {/* <Icon name="like" size={20} color="black"style={{alignSelf:'center',padding:5}}/> */}
               <View style={{flexDirection:'row' }}> 
               <Text style={{fontWeight:'bold',color:'#4E387E',fontSize:16,marginRight:8,marginTop:2}}  >30</Text>
                <Icon name="thumbs-up" size={25} color="#4E387E"/>
               </View>
                 <View style={{flexDirection:'row' }}> 
                     <Text style={{fontWeight:'bold',color:'grey',marginLeft:30,fontSize:16}}  >665</Text>
                      <Icon name="comment" size={24} color="grey" style={{marginLeft:20}}/>
                </View>
                 <View style={{flexDirection:'row'}}> 
                     <TouchableOpacity onPress={toggleModal}>  
                         <Text style={{fontWeight:'bold',marginRight:15,color:'grey',fontSize:16}}>Share</Text>
                     </TouchableOpacity>
                      <Icon name="share-alt" size={24} color="grey"/>
                </View>
            </View>
            <View style={styles.cardcontent4}>
                  <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic} /> 
                  <View >
                     <Text style={styles.profiletext}>Raushel</Text>
                      <Paragraph style={styles.profileparagraph}>
                        Lorem ipsum is simply dummy text of the printing and simply type setting industry
                   </Paragraph>
                </View>
            </View>
           
            <TextInput
              placeholder="Write here..."
               style={styles.textinput}
             />
          </Card>
    </View>
       
         );
};
export default Task3;
