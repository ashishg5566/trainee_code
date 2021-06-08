import { Platform, Dimensions } from 'react-native';
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
// const screenWidth = Dimensions.get('window').width;
// const screenHeight = Math.round(Dimensions.get('window').height);
export default ScaledSheet.create({

    bottomModel: {
        justifyContent: 'flex-end',
        margin: 0,
    }, 
     //modal
    bottommodalcontainer:{
      alignItems:'center',
      backgroundColor:'white',
      borderTopLeftRadius:'26@ms',
      borderTopEndRadius:'25@ms',
      height:'340@ms',
      //width:'100%',
      margin:0 
     },
      modaltext1:{
      color:'gray',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:'16@ms',
      marginTop:'30@ms'

    },
     modalupdatebutton:{
      marginTop:'30@ms',
      width:'310@ms',
      backgroundColor:'#4E387E',
      height:'50@ms', 
      justifyContent:'center', 
      alignItems:'center',
      borderRadius:'10@ms'

    },
    modalupdatetext:{
      color:'white',
      fontSize:'14@ms'

    },
    modalicon:{
      margin:'10@ms'
    },
    SectionStyle: {
      flexDirection: 'row',
       width: '310@ms',
      backgroundColor: 'white',
      height: '50@ms',
      borderRadius: '10@ms' ,
      margin: '8@ms',
      padding:'5@ms',
      shadowColor: 'black',
      elevation: '5@ms',
       },
    SectionStyle1: {
        flexDirection: 'row',
        width: '310@ms',
        backgroundColor: 'white',
        height: '50@ms',
        borderRadius: '10@ms' ,
        margin: '10@ms',
        borderWidth:1.5,
        padding:'5@ms',
        borderColor:'lightgrey'
   },






});