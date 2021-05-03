import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    
    maincontainer:{
      width:'100%',
      backgroundColor:'#e0e0e0',
      alignItems:'center',
      height:'100%',
       },
     submitbutton:{
      marginTop:'25@ms',
      backgroundColor:'#4E387E',
      width:'310@ms',
      height:'55@ms',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:'10@ms'
      },
    submittext:{
      color:'white',
      fontSize:'18@ms'
       },
    
     
    addbatchtext:{
      fontWeight:'bold',
      fontSize:18,
      marginTop:20

    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '110@ms',
        //  alignItems: 'center',
        backgroundColor: '#fff',
        height: '52@ms',
        borderRadius: '10@ms' ,
        margin: '8@ms',
        borderColor:'lightgray',
        borderWidth:3,
        padding:'5@ms'
         
        
         },
         addmorecontainer:{
          flexDirection:'row',
          marginRight:'120@ms',
          padding:'10@ms'

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
          marginTop:'6@ms',
          marginLeft:'12@ms'

         }
         
     })
export default styles;