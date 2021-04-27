import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
       backgroundColor:'white',
     },
    maincontainer1:{
      width:'100%',
      backgroundColor:'#e0e0e0',
      alignItems:'center',
      height:'410@ms'
    },
      maincontainer2:{
      width:'100%',
      backgroundColor:'#e0e0e0',
      marginTop:'5@ms',
      padding:'20@ms',
      alignItems:'center',
      height:'100%'
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
     picker:{
        width: '150@ms',
         marginTop: '25@ms',
        // marginLeft:'20@ms',
        // marginRight:'20@ms',
         height:'50@ms',
         margin:5,
         borderRadius: '10@ms',
        backgroundColor:'white',
        justifyContent:'center',
        borderWidth:3,
        borderColor:'lightgray',
        color:'lightgray',
         },
        pickerItem:{
         color:'#A9A9A9'
       },
      addresstextinputstyle:{
        width: '310@ms',
        marginTop: '8@ms',
        borderWidth:3,
        borderColor:'lightgray',
        // marginLeft:'20@ms',
        // marginRight:'20@ms',
         height:'90@ms',
         margin:'5@ms',
         borderRadius: '10@ms',
        backgroundColor:'white',
         },
       addressinput:{
        fontSize:'14@ms',
        padding:'12@ms',
        color:'lightgray'
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