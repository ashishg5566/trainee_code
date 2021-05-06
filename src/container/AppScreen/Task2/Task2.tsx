import * as React from 'react';
import { Text, View,FlatList,Image,TouchableOpacity,ImageBackground ,ScrollView,TextInput} from 'react-native';
import styles from './styles.tsx';
 import Icon from 'react-native-vector-icons/FontAwesome';
  
  export default function Task2() {
  return (
      <ScrollView> 
    <View style={styles.container}> 
     
             <View style={styles.header}>
                <View> 
                    <Icon name="arrow-left" size={20}  color="white" style={{color:'white',alignSelf:'flex-start'}}/>
                </View>
                 <View> 
                    <Text style={styles.headerTitle}>Project Details</Text>
                 </View>
                 <View>
                 <Icon name="ellipsis-v" size={20}  color="white" style={{color:'white',alignSelf:'flex-end'}}/>
                </View>
             </View>
             <View style={styles.schoolProfile}>
                 <View >
                   <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  />
                 </View>
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
                <View>
                    <Text style={{fontSize:14,color:'green', borderBottomWidth:1, borderBottomColor: 'green',fontWeight:'bold'}}>View Progress</Text>
                </View>
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
           <View style={styles.content7}>
               <View>
                  <Image source={require('../../../Assets/images/pic.jpeg')} style={styles.profilepic}  />
               </View>
                <View style={styles.profiledesc}>
                    <Text style={styles.nametext}>
                        Raushel
                   </Text>
                    <Text style={styles.paragraphtext2}> 
                        ipsum lorem is simply dummy text of the printing and typesetting industry 
                   </Text>
                  </View>
               </View>
               <View style={styles.content8}>
               <TextInput
                placeholder="Write here..."
               style={styles.textinput2}
             />
               </View>
               </View>
</ScrollView>
     );
}