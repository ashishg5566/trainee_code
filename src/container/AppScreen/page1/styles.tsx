import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
       backgroundColor:'#e0e0e0',
     },
    maincontainer1:{
      flex:1,
      backgroundColor:'#e0e0e0',
      alignItems:'center',
     // height:'410@ms',
      
    },
      maincontainer2:{
      flex:1,
      backgroundColor:'#e0e0e0',
      marginTop:'5@ms',
      padding:'20@ms',
      alignItems:'center',
      height:'357@ms'
    },
    gradeContainer:{
      flexDirection:'row',
      borderBottomWidth: 1,
      borderColor:'lightgray',
      padding:'5@ms',
      margin:'6@ms'
     },
    gradetext:{
      fontWeight:'bold',
      fontSize:'16@ms'
    },
    editcontainer:{
      marginLeft:'80@ms',
      padding:5
     },
    batchtext:{
      fontWeight:'bold',
      fontSize:'16@ms'
     },
     
       
      submitbutton:{
      marginTop:'30@ms',
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
    yeartext:{
      marginTop:'3@ms',
      marginLeft:'12@ms',
      color:'#4E387E'

    },
    })
export default styles;