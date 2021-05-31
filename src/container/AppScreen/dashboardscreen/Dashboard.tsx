import React, {  FC,useState } from 'react';
import { View, Text,TouchableOpacity ,Image,TextInput,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomHeader} from '../../../components/Customheader';
import {Customprofile} from '../../../components/Customprofile';
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
          <Modal isVisible={isModalVisible}   onBackdropPress={() => setModalVisible(false)}>
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
              
          <Card style={styles.cardContent}>
             <View style={styles.cardcontent1}>
                 <View style={{flexDirection:'row',alignItems:'center'}}> 
                    <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profileimage}  /> 
                     <View style={styles.nametextcontent}> 
                        <Text style={styles.nametext}>Simmi Sharma</Text>
                     </View>
                 </View>
                  <Icon name="ellipsis-v"  color="grey" size={28}/>
             </View>
             <View style={styles.cardcontent2}>
                <Text style={styles.titletext}>Title of the Project</Text>
                <Text style={styles.titletext}>432</Text>
            </View>
            <View style={styles.cardvideocontent}>
                <Image source={require('../../../Assets/images/video.jpg')} style={{width:360,borderRadius:15,resizeMode:'cover'}}  /> 
           </View>
            <Paragraph style={styles.cardparagraphcontent}>
                 Lorem ipsum is simply dummy text of the print and simply type setting industry.
           </Paragraph>
           <View style={styles.cardcontent3}>
           
                <Icon name="thumbs-up" size={25} color="grey"/>
                 <View style={styles.commentsection}> 
                     <Text style={styles.text} >665</Text>
                      <Icon name="comment" size={24} color="grey" style={{marginLeft:8}}/>
                </View>
                 <View style={{flexDirection:'row'}}> 
                     <TouchableOpacity onPress={toggleModal}>  
                         <Text style={[styles.text,{marginRight:8}]} >Share</Text>
                     </TouchableOpacity>
                      <Icon name="share-alt" size={24} color="grey"/>
                </View>
            </View>
            <Customprofile name="Raushel"
               paragraph="Lorem ipsum is simply dummy text of the printing and simply type setting industry" />
            <Customprofile name="Nikhil"
               paragraph="Lorem ipsum is simply dummy text of the printing and simply type setting industry"/>
             <TextInput
              placeholder="Write here..."
               style={styles.textinput}
             />
          </Card>   
          </ScrollView>
    </View>
       
         );
};
export default Dashboard;
