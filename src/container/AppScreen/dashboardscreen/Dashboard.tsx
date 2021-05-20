 
import React, { Component, FC,useState } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity ,Image,TextInput,ScrollView} from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import {CustomHeader} from '../../../components/Customheader';
import styles from './styles';
import Modal from 'react-native-modal';
 import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const Dashboard: FC = ({ navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    return (
         <View style={styles.container}> 
          <Modal isVisible={isModalVisible}>
              <View style={styles.mainmodalcontainer}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View style={styles.modalcontent}>
                    <Icon name="share-alt" size={28} color="grey" style={{marginRight:10}}/>
                    <Text style={styles.modaltext}>Share</Text>
                 </View>
                  <View style={styles.bordercontent}>
                  </View>
                   <View style={styles.modalcontent}>
                   <Icon name="repeat" size={28} color="grey" style={{marginRight:10,marginLeft:10}}/>
                    <Text style={styles.modaltext}>Repost</Text>
                     </View>
                 </View>
              </View>
              
           </Modal>
             <CustomHeader title="Post Detailed" icon1="arrow-left"/>
          
         
         <ScrollView  > 
         <View style={{alignItems:'center',paddingBottom:30}}> 
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
                     <TouchableOpacity onPress={toggleModal}>  
                         <Text style={{fontWeight:'bold',marginRight:15,color:'grey',fontSize:16}}>Share</Text>
                     </TouchableOpacity>
                      <Icon name="share-alt" size={24} color="grey"/>
                </View>
            </View>
            <View style={styles.cardcontent4}>
                 <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  /> 
                 <View style={styles.paragraphcontent}>
                      <Text style={styles.profiletext}>Raushel</Text>
                      <Paragraph style={styles.profileparagraph}>
                          Lorem ipsum is simply dummy text of the printing and simply type setting industry
                      </Paragraph>
                </View>
            </View>
             <View style={styles.cardcontent4}>
                  <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic} /> 
                  <View style={styles.paragraphcontent}>
                     <Text style={styles.profiletext}>Nikhil</Text>
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
          </ScrollView>
    </View>
       
         );
};
export default Dashboard;
