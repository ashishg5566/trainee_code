import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
      backgroundColor:'#DCDCDC',
      alignItems:'center'
    },
    titletext1:{
      color:'white',
      fontSize:'16@ms',
      textAlign:'center'
    },
    titletext2:{
      fontWeight:'bold',
      fontSize:'17@ms'
    },
    textcontent:{
      borderBottomWidth: '1@ms',
      borderColor:'#DCDCDC',
     margin:'14@ms'

    },
    titlecontainer:{
      borderBottomRightRadius :'20@ms',
      borderBottomLeftRadius :'15@ms',
      width:'100%',
      backgroundColor:'#4E387E',
      height:'80@ms',
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center',
      marginBottom:'20@ms'

    },
    titletext:{
      color:'white',
      fontSize:'20@ms',
      textAlign:'center'

    },
    addresstext:{
      marginTop:'8@ms',
      fontSize:'14@ms',
      color:'gray',
      marginBottom:'15@ms'

    },
    gradecontainer1:{
      flexDirection:'row',
      padding:'10@ms',
      marginLeft:'20@ms',
      marginTop:'5@ms'

    },
    gradecontainer2:{
      flexDirection:'row',
      padding:'10@ms',
      marginLeft:'38@ms',
     },
     gradetext:{
      fontWeight:'bold',
      fontSize:'16@ms',
     },
    batchno:{
      fontWeight:'bold',
      fontSize:'15@ms',
      
   },
    yeartext:{
      marginTop:'3@ms',
      marginLeft:'12@ms',
      color:'#4E387E'

    },
    savebutton:{
      marginTop:'80@ms',
      backgroundColor:'#4E387E',
      width:'310@ms',
      height:'55@ms',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:'10@ms'
    },
    savebuttontext:{
      color:'white',
      fontSize:'18@ms'
    },
     
  })
export default styles;