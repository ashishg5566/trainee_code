import * as React from 'react';
import { Text, View,FlatList,Image,TouchableOpacity,ImageBackground ,ScrollView,TextInput} from 'react-native';
import styles from './styles.tsx';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import {CustomHeader} from '../../../components/Customheader';
 import {Customprofile} from '../../../components/Customprofile';
export default function Task2({navigation}) {
  return (
     <View style={styles.container}> 
      <CustomHeader title="Project Detail" icon1="arrow-left" icon2="ellipsis-v"/>
         <ScrollView> 
             <View style={styles.schoolProfile}>
                  <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  />
                  <View style={styles.schoolprofileText}>
                     <Text style={styles.schoolnameText}>
                         Delhi Public School
                     </Text>
                 </View>
             </View>
             <View style={ styles.borderstyle} >
             </View>
             <View style={styles.projectTitle}>
                 <Text style={styles.titleText}>
                    Title of the Project
                 </Text>
            </View>
            <View style={styles.bigImageContainer}>
               <Image source={require('../../../Assets/images/loreal.jpg')} style={styles.bigImage}  />
            </View>
            <View style={ styles.separator} >
            </View>
            <View style={styles.content1}>
            {/* <Icon name="like" size={20} color="black"style={{alignSelf:'center',padding:5}}/> */}
               <View style={{flexDirection:'row'}}> 
                   <Text  style={styles.thumbText}>30</Text>
                   <Icon name="thumbs-up" size={22} color="#4E387E" style={styles.thumbicon}/>
               </View>
                <View style={{flexDirection:'row' }}> 
                    <Text  style={styles.iconText}>665</Text>
                    <Icon name="comment" size={22} color="grey" style={styles.icon}/>
                </View>
                 <View style={{flexDirection:'row'}}> 
                     <Text style={styles.iconText}>Share</Text>
                     <Icon name="share-alt" size={22} color="grey" style={styles.icon}/>
                </View>
            </View>
             <View style={ styles.separator} >
            </View>
            <View style={styles.content2}>
                <View style={{flexDirection:'row'}}>
                   <Text style={styles.fundingtext}>Funding Required: </Text>
                   <Text style={styles.fundingamounttext} >Rs 3,00,000 </Text>
                </View>
                 <Text style={styles.viewprogressText}>View Progress</Text>
         </View>
           <View style={ styles.separator} >
           </View>
           <View style={styles.content3}>
               <Text style={styles.paragraphtext}>
                   ipsum lorem is simply dummy text of the printing and typesetting industry lorem ipsum has been 
                   the indusry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type
                   and scrambled it to make a type specimen book.
                </Text>
           </View>
           <View style={ styles.separator} >
           </View>
           <View style={styles.content4}>
               <Text style={styles.reviewtext}>Reviewed by : </Text>
               <Text style={styles.nametext}>Ashish Gupta</Text>
               <Text>(CA)</Text>
           </View>
           <View style={ styles.separator} >
           </View>
           <View style={styles.content5}>
               <View style={styles.fundingtextcontent}>
                   <Text style={styles.fundingtext}>Funding Collected : </Text>
                   <Text style={styles.fundingamounttext}>Rs 3,00,000</Text>

               </View>
                <View style={styles.fundingtextcontent}>
                     <Text style={styles.fundingtext}>Funding required to Start : </Text>
                     <Text style={styles.fundingamounttext}>Rs 1,00,000</Text>
               </View>
           </View>
           <View style={ styles.separator} >
           </View>
           <View style={styles.content6}>
                 <TextInput
                      placeholder="Enter Account"
                      style={styles.textinput1}
                    />
                    <TouchableOpacity style={styles.fundbutton}>
                        <Text  style={styles.fundbuttontext}>Fund</Text>
                    </TouchableOpacity>
            </View>
            <View style={ styles.separator} >
           </View>
           <Customprofile name="Nikhil"
               paragraph="Lorem ipsum is simply dummy text of the printing and simply type setting industry"/>
               <View style={styles.content8}>
               <TextInput
                placeholder="Write here..."
               style={styles.textinput2}
             />
               </View>
               </ScrollView>
               </View>
 
     );
}