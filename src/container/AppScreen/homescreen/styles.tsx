import { ScaledSheet } from 'react-native-size-matters';
import { Colors} from '../../../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const styles = ScaledSheet.create({
     container:{
        flex:1,
        backgroundColor:Colors.$backgroundColor,
       },
       textcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
         marginTop:'10@ms',
        marginBottom:'10@ms',
        paddingLeft:'7%',
        paddingRight:'7%'
      },
      text:{
         fontFamily:'lato-regular',
        color:'black',
        fontSize: hp(2.0),

      },
      smallcardcontent:{
        width:'110@ms',
        height:'145@ms',
        borderRadius:'20@ms',
        alignItems:'center',
        margin:'5@ms',
        justifyContent:'center'
    
      },
      studentnametext:{
         textAlign:'center',
         fontWeight:'bold',
         color:'grey',
         fontSize: hp(1.5),
         marginTop:'5@ms'
      },
      batchmatetext:{
        fontSize: hp(1.2),
        textAlign:'center',
        color:'grey'

      },

      smallcardimage:{
        width:'110@ms',
         height:'65@ms',
        borderTopRightRadius:'20@ms',
       position:'relative',
        borderTopLeftRadius:'20@ms',
        resizeMode:'cover'
    
      },
      addbuddybutton:{
        height:'25@ms',
        backgroundColor:Colors.$BtnBackgroundColor,
        justifyContent:'center',
        alignItems:'center',
        width:'65@ms',
        borderRadius:'5@ms',
        marginTop:'10@ms',
         alignSelf:'center'
    
      },
       
      cardcontainer:{
        width:'92%',
        marginTop:'8@ms',
        borderRadius:'20@ms',
        padding:'12@ms',
        

       },
       nametextstyle:{
          alignItems:'center',
          marginLeft:30
           },
      
      nametext:{
        fontWeight:'bold',
         fontSize:'15@ms',
        color:'black'
    
      },
      bigimage:{
        width:'100%',
        height:'150@ms',
        borderRadius:'15@ms',
        marginTop:'6@ms'

      },
      profilepic:{
        width:'35@ms', 
        height: '35@ms',
        borderRadius:'20@ms'
    
      },
       
      
      iconcontainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:'5@ms',
        padding:'6@ms'
    
      },
      cardparagrap:{
        color:'gray',
        marginTop:'5@ms',
        fontSize:'11@ms',
        fontWeight:'bold',
        textAlign:'justify'

      },
      icontext:{
        marginRight:'15@ms'

      },
      
      })
export default styles;