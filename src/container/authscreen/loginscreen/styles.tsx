import { ScaledSheet } from 'react-native-size-matters';
export default ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
         },
         signinButtonStyle:{
          width: '310@ms',
          height: '55@ms',
          justifyContent:'center',
          alignItems:'center',
          margin: '40@ms',
          backgroundColor:'#4E387E',
          borderRadius: '10@ms' ,
         },
      signinTextStyle:{
        color:'white',
        fontWeight:'bold'
       },
      forgotPasswordTextStyle:{
        fontStyle: 'italic',
        fontWeight:'bold',
        color:'gray',
        fontSize:'14@ms'
        },
  socialButtonStyle:{
      flexDirection:'row',
      justifyContent:'center',
       margin: '25@ms', 
       padding:'10@ms'
  },
  signupText:{
    fontWeight:'bold',
        color:'gray',
        fontSize:'14@ms',
        marginTop:'30@ms'

  }
        
});