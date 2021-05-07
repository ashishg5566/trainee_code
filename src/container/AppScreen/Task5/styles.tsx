import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
       backgroundColor:'lightgrey',
      },
    
       header:{
        borderBottomRightRadius :'20@ms',
        borderBottomLeftRadius :'15@ms',
        backgroundColor:'#4E387E',
        height:'80@ms',
        flexDirection:'row',           
         padding:'15@ms',
         width:'100%',
         justifyContent:'space-between',
         alignItems:'center',
         
         },
         headerTitle:{
           color:'white',
           fontSize:'20@ms',
           alignItems:'center',
           flexDirection:'row'
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
           marginBottom:'30@ms'
         },
         textinput:{
             borderTopEndRadius:'15@ms',
            borderTopLeftRadius:'15@ms',
            borderRadius:'20@ms',
            backgroundColor:'white',
            padding:'15@ms',
            fontSize:'15@ms',
            width:'270@ms',
            height:'25@ms',
            textAlign:'center',
           borderWidth:1,
           borderColor:'grey',
           color:'grey'
            

          },
          
          
          textcontent:{
            //   marginTop:20,
            alignSelf:'center',
            marginLeft:'25@ms'

          },
          text:{
              fontSize:'15@ms',
              fontWeight:'bold',
              
             },
          profilecontainer:{
             // backgroundColor:'yellow',
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              marginTop:'10@ms',
              paddingLeft:'20@ms',
              paddingRight:'20@ms'
               },
          userimage:{
            height:'60@ms',
            width:'60@ms',
            borderRadius:'80@ms'

          },
          userprofile:{
               flexDirection:'row'
          },
          buttoncontainer:{
                alignItems:'center',
              justifyContent:'center',
              marginTop:'80@ms'
          },
          
          exitbutton:{
            backgroundColor:'white',
            height:'60@ms',
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
            fontSize:'15@ms'
        }

         
})
export default styles;