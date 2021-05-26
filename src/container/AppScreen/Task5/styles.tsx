import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
       backgroundColor:'lightgrey',
      },
      imagecontainer:{
            // backgroundColor:'pink',
             flexDirection:'row',
             alignItems:'center',
             justifyContent:'center',
             marginTop:'15@ms'
         },
         profileimage:{
             height:'140@ms',
             width:'140@ms',
             borderRadius:'80@ms'
         },
         cameraicon:{
             backgroundColor:'#4E387E',
             width:'50@ms',
             height:'50@ms',
             justifyContent:'center',
             alignItems:'center',
             borderRadius:'40@ms',
             marginTop:'60@ms',
             marginLeft:'-45@ms'

         },
         textinputcontainer:{
            marginTop:'15@ms',
            justifyContent:'center',
            alignItems:'center',
             marginBottom:'30@ms',
         },
         textinput:{
           shadowColor: 'black',
           shadowOffset: {
           width: '10@ms',
           height:  '10@ms',
            },
           shadowOpacity: 0.29,
           shadowRadius: 5.22,
           elevation: '10@ms',
           borderTopEndRadius:'8@ms',
           borderTopLeftRadius:'8@ms',
           borderRadius: '10@ms',
           height: '50@ms',
           backgroundColor:'white',
           fontSize:'15@ms',
           width:'275@ms',
           textAlign:'center',
           borderColor:'grey',
           color:'grey',
           overflow: 'hidden',
           fontWeight:'bold'
          },
           text:{
              fontSize:'15@ms',
              fontWeight:'bold',
              marginLeft:'25@ms',
            },
          profilecontainer:{
             flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              marginTop:'10@ms',
              paddingLeft:'20@ms',
              paddingRight:'20@ms'
               },
               userprofile:{
                flexDirection:'row',
                alignItems:'center'
           },
          userimage:{
            height:'60@ms',
            width:'60@ms',
            borderRadius:'80@ms'

          },
          
          buttoncontainer:{
                alignItems:'center',
              justifyContent:'center',
              marginTop:'55@ms',
              paddingBottom:'10@ms'
          },
          
          exitbutton:{
            backgroundColor:'white',
            height:'55@ms',
            width:'250@ms',
            borderRadius:'10@ms',
            justifyContent:'center',
            alignItems:'center',
            margin:8,
            borderColor:'darkred',
            borderWidth:1
        },
         
          exittext:{
            color:'darkred',
            fontSize:'15@ms',
            fontWeight:'bold'
        }

         
})
export default styles;