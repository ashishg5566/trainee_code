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
         padding:'20@ms',
         flexDirection:'row',
         alignItems:'center',
         position:'relative',
          //position:'absolute',
          width:'100%',
          justifyContent: 'space-between',
      },
      headertitle:{
        alignSelf:'center',
        color:'white',
        fontSize:'18@ms',
        marginLeft:'50@ms'

      },
      searchicon:{
        marginRight:'20@ms'
      },
      textcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'92%',
         marginTop:'10@ms',
        marginBottom:'10@ms'
      },
      text:{
        fontWeight:'bold',
        color:'black',
        fontSize:'11@ms'

      },
      smallcardcontent:{
        width:'110@ms',
        height:'145@ms',
        borderRadius:'20@ms',
        alignItems:'center',
        margin:'5@ms',
        justifyContent:'center'
    
      },
      studentnametext:{
         textAlign:'center',
         fontWeight:'bold',
         color:'grey',
         fontSize:'11@ms',
         marginTop:'5@ms'
      },
      batchmatetext:{
        fontSize:'10@ms',
        textAlign:'center',
        color:'grey'

      },

      smallcardimage:{
        width:'110@ms',
         height:'65@ms',
        borderTopRightRadius:'20@ms',
       position:'relative',
        borderTopLeftRadius:'20@ms'
    
      },
      addbuddybutton:{
        height:'25@ms',
        backgroundColor:'#4E387E',
        justifyContent:'center',
        alignItems:'center',
        width:'65@ms',
        borderRadius:'5@ms',
        marginTop:'10@ms',
         alignSelf:'center'
    
      },
       
      cardcontainer:{
        width:'94%',
        marginTop:'8@ms',
        borderRadius:'20@ms',
        padding:'12@ms',
        

       },
       nametextstyle:{
          marginTop:'8@ms',
          marginLeft:'20@ms',
           },
      
      nametext:{
        fontWeight:'bold',
         fontSize:'15@ms',
        color:'black'
    
      },
      bigimage:{
        width:'100%',
        height:'150@ms',
        borderRadius:'15@ms',
        marginTop:'6@ms'

      },
      profilepic:{
        width:'35@ms', 
        height: '35@ms',
        borderRadius:'20@ms'
    
      },
       
      videocontent:{
      width:'100%',
         height:'120@ms',
       
    
      },
      iconcontainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:'5@ms',
        padding:'6@ms'
    
      },
      cardparagrap:{
        color:'gray',
        marginTop:'5@ms',
        fontSize:'11@ms',
        fontWeight:'bold',
        textAlign:'justify'

      },
      icontext:{
        marginRight:'15@ms'

      },
      
      })
export default styles;