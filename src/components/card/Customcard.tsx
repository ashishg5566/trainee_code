import React, { Component, FC } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity ,Image} from 'react-native';
import { TextInput } from 'react-native-paper';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
// create a component
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const Customcard: FC = ({  value, onChangeText, placeholder, secureTextEntry,label,lefticon,righticon,style,name,title,like
}) => {
    return (
 <Card style={styles.cardcontent}>
          <View style={styles.cardcontent1}>
            <View style={{flexDirection:'row'}}> 
              <Image source={require('../../Assets/images/pic.jpeg')} style={styles.profilepic}  /> 
              <Text style={styles.nametext}>{name}</Text>
              </View>
              <Icon name="ellipsis-v"  color="grey" size={20}/>
         </View>
         <View style={styles.cardcontent2}>
             <Text style={{color:'grey',fontSize:13,fontWeight:'bold'}}>{title}</Text>
             <Text style={{color:'grey',fontWeight:'bold'}}>{like}</Text>
         
          </View>
         <Image source={require('../../Assets/images/video.jpg')} style={{width:'100%',height:150,borderRadius:15,marginTop:10}}  /> 
         
             <Paragraph style={{color:'gray',marginTop:5,fontSize:11,fontWeight:'bold',textAlign:'justify'}}>
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
       
         );
};
export default Customcard;
