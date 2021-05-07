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
          // backgroundColor:'yellow',
           padding:'20@ms'
         },
         profilepic:{
           height:'90@ms',
           width:'90@ms',
           borderRadius:'50@ms'

         },
         nametext:{
           fontWeight:'bold',
           fontSize:'18@ms'

         },
         textcontent:{
           marginTop:'6@ms',
           marginLeft:'10@ms'

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
      // backgroundColor:'yellow',
       width:'100%',
       marginTop:'20@ms',
       marginLeft:'40@ms',
     
     },
     cameracontent:{
       height:'120@ms',
       width:'130@ms',
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
       //backgroundColor:'yellow',
       width:'100%',
        alignItems:'center',
        marginTop:'20@ms'
     },
     SectionStyle: {
      flexDirection: 'row',
      width: '300@ms',
      backgroundColor: '#fff',
      height: '55@ms',
     borderRadius:'10@ms',
     borderColor:'lightgray',
      borderWidth:1,
      
       },
        
       postbutton:{
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'#4E387E',
         width:'305@ms',
         borderRadius:'10@ms',
         height:'55@ms',
         marginTop:'15@ms'

       },
       posttext:{
         color:'white'
       }

})
export default styles;