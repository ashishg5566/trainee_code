import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
     
    
    //modal
    modalcontainer:{
      alignItems:'center',
      backgroundColor:'white',
      borderTopLeftRadius:'26@ms',
      borderTopEndRadius:'25@ms',
      height:'340@ms',
      width:'100%',
      margin:0 
     },
      modaltext1:{
      color:'gray',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:'18@ms',
      marginTop:'30@ms'

    },
    modaltext2:{
      color:'gray',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:'16@ms',
      marginTop:'40@ms'

    },
    modaltext3:{
      color:'gray',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:'15@ms',
      marginTop:'10@ms'
    },
    modalupdatebutton:{
      marginTop:'30@ms',
      width:'310@ms',
      backgroundColor:'#4E387E',
      height:'55@ms', 
      justifyContent:'center', 
      alignItems:'center',
      borderRadius:'10@ms'

    },
    modalupdatetext:{
      color:'white',
      fontSize:'18@ms'

    },
    modalicon:{
      margin:'10@ms'
    },
    SectionStyle: {
      flexDirection: 'row',
      // justifyContent:'center',
      width: '150@ms',
      backgroundColor: '#fff',
      height: '55@ms',
      borderRadius: '10@ms' ,
      margin: '8@ms',
       borderColor:'lightgray',
      borderWidth:3,
      padding:'5@ms'
      },
      

 })
export default styles;