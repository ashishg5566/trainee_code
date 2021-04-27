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
      //modal
      modalcontainer:{
        marginTop:'80@ms',
        width:'100%',
        backgroundColor:'white',
        borderRadius:'15@ms',
        height:'380@ms',
        padding:'10@ms',
        alignItems:'center'

      },
      continuebutton:{
        margin:'8@ms',
        height:'60@ms',
        borderRadius:'10@ms',
        width:'150@ms',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#228C22'

      },
      rejectbutton:{
        backgroundColor:'#ffffff',
        margin:'8@ms',
        height:'60@ms',
        borderRadius:'10@ms',
        borderColor:'red',
        borderWidth:1,
        width:'150@ms',
        justifyContent:'center',
        alignItems:'center'

      },
      modalbuttons:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:'30@ms'

      },
      modaltext1:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:'18@ms',
        marginTop:'30@ms',
        color:'gray',
        
      },
      modaltext2:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:'13@ms',
        color:'gray',
        marginTop:'30@ms'

      }
 })
export default styles;