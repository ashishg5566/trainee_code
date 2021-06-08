
import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
       backgroundColor:'#ecf0f1',
      },
      backbuttoncontainer:{
        backgroundColor:'#4E387E',
        width:'80@ms',
        alignItems:'center',
        marginTop:'40@ms', 
        borderTopRightRadius:'30@ms',
        borderBottomRightRadius:'30@ms',
        height:'45@ms',
        justifyContent:'center'
      },
      messagecontainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightgrey',
        width:'200@ms',
        height:'130@ms',
        marginBottom:0,
        alignSelf:'center',
        borderTopLeftRadius:'100@ms',
        borderTopEndRadius:'100@ms'
      },
      backgroundimage:{
        width: '80@ms', 
        height: '80@ms',
        marginTop:'40@ms',
      },
      backicon:{
        backgroundColor:'#4E387E',
        width:'30@ms',
        borderRadius:'20@ms',
        padding:'4@ms'
      },
      textcontainer:{
        alignItems:'center',
        marginTop:'70@ms'
      },
      text:{
        fontSize:'14@ms',
        fontWeight:'bold',
        color:'grey'
      },
      textinputcontainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'30@ms'
      },
      textinput:{
        borderColor:'lightgrey',
        borderWidth:2,
        height:'60@ms',
        width:'60@ms',
        backgroundColor:'white',
        borderRadius:'10@ms',
        margin:'5@ms'

      },
      textinputcontent:{
        fontSize:'24@ms',
        textAlign:'center',
        fontWeight:'bold'
      },
      resendbutton:{
          alignItems:'center',
          marginTop:'20@ms'
          

      },
      resendtext:{
        fontSize:'16@ms',
        borderBottomWidth:1,
        borderBottomColor:'#4E387E',
        color:'#4E387E'
      },
      otpContainer:{
        paddingHorizontal:'9%',marginVertical:'15%',  justifyContent: 'center',
        alignItems: 'center',
    },
    OtpinputContainer:{
        backgroundColor:'#fff',borderRadius: 15,width:'20%',marginRight:'4%',height:60,  justifyContent: 'center',
        alignItems: 'center',borderWidth:1,borderColor:'grey'
    },
    otpinput:{
        alignSelf:'center',fontFamily:'Lato-Regular',fontSize:20,textAlign:'center'
    },
       
          
        
         

         
})
export default styles;