import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
container: {
     flex:1
},
SectionStyle: {
  flexDirection: 'row',
  
  width: '310@ms',
  //  alignItems: 'center',
  backgroundColor: '#fff',
  height: '55@ms',
  borderRadius: '10@ms' ,
  margin: '6@ms',
  padding:'8@ms',
  borderColor:'lightgray',
  borderWidth:1,
   marginTop:'14@ms',
  shadowColor: 'black',
  shadowOffset: {
  width: '10@ms',
  height:  '10@ms',
   },
  shadowOpacity: 0.29,
 shadowRadius: 5.22,
 elevation: 10,
   },
   icontext:{
     margin:'10@ms'


   },
   dropdownpicker:{
    color:'lightgray',
      
      width: '310@ms',
      marginTop: '10@ms',
      borderWidth:'3@ms',
      borderColor:'lightgray',
      // marginLeft:'20@ms',
      // marginRight:'20@ms',
       height:'55@ms',
       margin:5,
       borderRadius: '10@ms',
      backgroundColor:'white',
      justifyContent:'center',
      
 
      

  },
  pickerItem:{
    color:'#A9A9A9',
    flex:1,
    

  },
  customtextinput2:{
   
  width: '310@ms',
  //  alignItems: 'center',
  backgroundColor: 'white',
  height: '55@ms',
  borderRadius: '10@ms' ,
  margin: '8@ms',
  padding:'4@ms',
  borderColor:'lightgray',
  borderWidth:3,
   justifyContent:'center'
   },
   //custom header
   titlecontainer:{
    borderBottomRightRadius :'20@ms',
    borderBottomLeftRadius :'15@ms',
     backgroundColor:'#4E387E',
    height:'80@ms',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'

  },
  titletext:{
    color:'white',
    fontSize:'18@ms',
    textAlign:'center'

  },

  
   
   
})
export default styles;