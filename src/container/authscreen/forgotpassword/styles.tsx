import { ScaledSheet } from 'react-native-size-matters';
export default ScaledSheet.create({
    container: {
        flex: 1,
         },
          backbuttonText:{
         color:'white',
          marginTop:'10@ms',
          fontWeight:'bold'
         },
       backbutton:{
        backgroundColor:'#4E387E',
        width:'65@ms',
        height:'40@ms',
        color:'white',
        borderTopRightRadius:'30@ms',
        borderBottomRightRadius:'30@ms',
        marginTop:'30@ms',
       },
       signupStyle:{
        width: '310@ms',
        height: '55@ms',
        justifyContent:'center',
        alignItems:'center',
        margin: '40@ms',
        backgroundColor:'#4E387E',
        borderRadius: '10@ms' ,
      },
       signupText:{
      color:'white',
      fontWeight:'bold'
  },
  text:{
    color:'gray',
    fontSize:  '14@ms',
    marginTop: '60@ms',
    marginBottom: '40@ms',
    textAlign: 'center'
  }

      
});