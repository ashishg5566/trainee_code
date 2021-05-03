import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
       backgroundColor:'#e0e0e0',
      alignItems:'center'
    },
    
      formcontainer:{
          width:'100%',
        //   backgroundColor:'red',
          alignItems:'center',
          marginTop:'40@ms'
          },
      button:{
        backgroundColor:'#4E387E',
        width:'310@ms',
        alignItems:'center',
        borderRadius:'10@ms',
        marginTop:'30@ms',
        justifyContent:'center',
        height:'55@ms',
         },
         buttontext:{
          color:"white",
          fontSize:'16@ms',
           },
      
 })
export default styles;