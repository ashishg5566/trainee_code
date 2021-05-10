import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
       backgroundColor:'lightgrey',
      },
    content1:{
          width:'100%',
          backgroundColor:'white',
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
              alignItems:'center'
         },
         profilecontent:{
           flexDirection:'row',
           padding:'20@ms'
         },
         profilepic:{
           height:'80@ms',
           width:'80@ms',
           borderRadius:'50@ms'

         },
         nametext:{
           fontWeight:'bold',
           fontSize:'18@ms',
           marginLeft:'16@ms'

         },
         pickerItem:{
          color:'grey',
          borderWidth:1,
          borderColor:'red',
          fontSize:8
          
        },
        dropdownpicker:{
          width: '135@ms',
           marginTop: '10@ms',
           borderWidth:'3@ms',
           borderColor:'lightgray',
           height:'35@ms',
            marginLeft:'10@ms',
            borderRadius: '10@ms',
           backgroundColor:'white',
           justifyContent:'center',
          },
         
         paragraphcontent:{
            alignItems:'center',
            paddingLeft:'24@ms',
            paddingRight:'24@ms',
            marginBottom:'25@ms'
         },
         paragraphtext:{
          textAlign:'auto',
          fontSize:'15@ms',
          color:'grey'

         },
     content2:{
       width:'100%'
     
     },
     cameracontainer:{
       width:'100%',
       marginTop:'20@ms',
       marginLeft:'40@ms',
     
     },
     cameracontent:{
       height:'110@ms',
       width:'120@ms',
       backgroundColor:'#4E387E',
       borderRadius:'15@ms',
        alignItems:'center',
       justifyContent:'center'

     },
     cameratext:{
       color:'white',
       fontSize:'15@ms',
       textAlign:'center'
     },
     cameraicon:{
       marginBottom:'10@ms'

     },
     textinputcontainer:{
      width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'20@ms'
     },
      textinput:{
        width:'80%',
        borderTopEndRadius:'10@ms',
        borderTopLeftRadius:'10@ms',
       borderRadius: '10@ms',
       height: '57@ms',
       backgroundColor:'white',
       fontSize:'15@ms',
        borderWidth:1,
       fontWeight:'bold'

      },
       postbutton:{
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'#4E387E',
         width:'80%',
         borderRadius:'10@ms',
         height:'55@ms',
         marginTop:'15@ms'

       },
       posttext:{
         color:'white'
       },
       
      

})
export default styles;