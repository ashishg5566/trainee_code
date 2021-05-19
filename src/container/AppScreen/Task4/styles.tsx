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
            //borderWidth:1,
            fontWeight:'bold'

          },
          usericoncontainer:{
              marginTop:'25@ms',
               paddingLeft:'20@ms',
              flexDirection:'row'
           },
          usericon:{
            backgroundColor:'#4E387E',
            height:'60@ms',
            width:'60@ms',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'40@ms'
           },
          
          text:{
              fontSize:'15@ms',
              fontWeight:'bold',
              alignSelf:'center',
              marginLeft:'25@ms'
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
          deleteicon:{
              backgroundColor:'darkred',
              width:'30@ms',
              height:'30@ms',
              justifyContent:'center',
              alignItems:'center',
              borderRadius:'20@ms'
          },
          buttoncontainer:{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center',
              marginTop:'30@ms'
          },
          deletebutton:{
              backgroundColor:'darkred',
              height:'50@ms',
              width:'140@ms',
              borderRadius:'10@ms',
              justifyContent:'center',
              alignItems:'center',
              margin:'8@ms'
          },
          exitbutton:{
            backgroundColor:'white',
            height:'50@ms',
            width:'140@ms',
            borderRadius:'10@ms',
            justifyContent:'center',
            alignItems:'center',
            margin:8,
            borderColor:'darkred',
            borderWidth:1,
            shadowColor: 'black',
            shadowOffset: {
             width: '10@ms',
             height:  '10@ms',
              },
             shadowOpacity: 0.29,
             shadowRadius: 5.22,
              elevation: '3@ms',
        },
          deletetext:{
              color:'white',
              fontSize:'15@ms',
              fontWeight:'bold'
          },
          exittext:{
            color:'darkred',
            fontSize:'15@ms',
            fontWeight:'bold'
        }

         
})
export default styles;