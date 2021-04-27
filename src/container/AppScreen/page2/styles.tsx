import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    
    maincontainer:{
      width:'100%',
      backgroundColor:'#e0e0e0',
      alignItems:'center',
      height:'100%',
      
    },
    
   picker:{
        width: '150@ms',
         marginTop: '25@ms',
        // marginLeft:'20@ms',
        // marginRight:'20@ms',
         height:'55@ms',
         margin:'5@ms',
         borderRadius: '10@ms',
        backgroundColor:'white',
        justifyContent:'center',
        borderWidth:'3@ms',
        borderColor:'lightgray',
        color:'lightgray'
       },
        pickerItem:{
        color:'#A9A9A9'
        },
       submitbutton:{
      marginTop:'25@ms',
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
    gradepicker:{
        width: '190@ms',
        marginTop: '8@ms',
       // marginLeft:'20@ms',
       // marginRight:'20@ms',
        height:'50@ms',
        margin:'5@ms',
        borderRadius: '10@ms',
       backgroundColor:'white',
       justifyContent:'center',
       borderWidth:3,
       borderColor:'lightgray',
     
    },
    gradepickercontainer:{
      flexDirection:'row',
      marginTop:'15@ms'

    },
    addbatchtext:{
      fontWeight:'bold',
      fontSize:18,
      marginTop:20

    },
    addresstextinputstyle:{
        width: '310@ms',
        marginTop: '8@ms',
        borderWidth:'3@ms',
        borderColor:'lightgray',
        // marginLeft:'20@ms',
        // marginRight:'20@ms',
         height:'90@ms',
         margin:5,
         borderRadius: '10@ms',
        backgroundColor:'white',
         },
    addressinput:{
      fontSize:'14@ms',
      padding:'16@ms',
      color:'lightgray'
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '110@ms',
        //  alignItems: 'center',
        backgroundColor: '#fff',
        height: '50@ms',
        borderRadius: '10@ms' ,
        margin: '8@ms',
        borderColor:'lightgray',
        borderWidth:3,
        padding:'5@ms'
         
        
         },
         addmorecontainer:{
          flexDirection:'row',
          marginRight:'120@ms',
          padding:'10@ms'

         },
         addmorebutton:{
          backgroundColor:'#4E387E',
          width:'35@ms',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:'10@ms',
          height:'35@ms',
          
         },
         addmorebuttontext:{
          color:'white',
        fontSize:'24@ms',
          
         },
         addmoreschooltext:{
          color:'#4E387E',
          fontWeight:'bold',
          fontSize:'15@ms',
          marginTop:'6@ms',
          marginLeft:'12@ms'

         }
         
     })
export default styles;