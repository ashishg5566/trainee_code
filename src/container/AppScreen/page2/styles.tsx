import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    
    maincontainer:{
      flex:1,
      backgroundColor:'#e0e0e0',
      alignItems:'center',
       
      
       },
     submitbutton:{
      marginTop:'25@ms',
      backgroundColor:'#4E387E',
      width:'310@ms',
      height:'55@ms',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:'10@ms',
      alignSelf:'center'
      },
    submittext:{
      color:'white',
      fontSize:'18@ms'
       },
    
     batchtextcontainer:{
       width:'100%',
      marginTop:'20@ms',
      

     },
    addbatchtext:{
      fontWeight:'bold',
      fontSize:'18@ms',
       textAlign:'center'

    },
    
    
         addmorecontainer:{
          flexDirection:'row',
         
          marginTop:'10@ms',
          
          //alignSelf:'center',
         // paddingLeft:'@ms',
          width:'100%',
          paddingLeft:'35@ms',
            alignItems:"center"
         },
         addmorebutton:{
          backgroundColor:'#4E387E',
          width:'35@ms',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:'10@ms',
          height:'35@ms',
          
         },
         addmorebuttontext:{
          color:'white',
        fontSize:'24@ms',
          
         },
         addmoreschooltext:{
          color:'#4E387E',
          fontWeight:'bold',
          fontSize:'15@ms',
        
          marginLeft:'12@ms'

         }
         
     })
export default styles;