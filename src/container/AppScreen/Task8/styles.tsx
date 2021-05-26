import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
container: {
     flex:1,
       backgroundColor:'#ecf0f1',
      },
      schoolcontainer:{
        flexDirection:'row',
        marginTop:'10@ms',
        justifyContent:'center'
    
       },
       textcontainer:{
        marginLeft:'10@ms',
        alignItems:'center',
        justifyContent:'center'

       },
       schooltext:{
        fontWeight:'bold',
        fontSize:'15@ms'

       },
       followerscontent:{
        marginTop:'8@ms'

       },
       followtext:{
        color:'white',
        fontSize:'12@ms'

       },
       addposttext:{
        color:'grey',
        fontSize:'12@ms'

       },
       addresstext:{
        fontSize:'15@ms',
        fontWeight:'bold'

       },
       overviewtext:{
        fontSize:'15@ms',
        fontWeight:'bold'

       },
     buttoncontainer:{
      flexDirection:'row',
      marginTop:'35@ms'

     },
     addresscontainer:{
      flexDirection:'row',
      marginTop:'20@ms',
      paddingLeft:'20@ms'

     },
     paragraphcontainer:{
      marginTop:'20@ms',
      paddingLeft:'20@ms',
      paddingRight:'24@ms',
      // alignItems:'center',
      // justifyContent:'center'
      

     },
     totalstudentcontainer:{
      padding:'18@ms',
      borderRadius:'20@ms',
     
      justifyContent:'center',
      alignItems:'center',
      marginTop:'20@ms',
      marginRight:'20@ms',
      marginLeft:'20@ms'

     },
     
     numbertext:{
      fontSize:'18@ms',
     fontWeight:'bold'

     },
     button2container:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:'18@ms',
      flexDirection:'row'

     },
     button:{
      margin:'5@ms',
      borderRadius:'10@ms',
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      width:'165@ms',
      height:'55@ms'

     },
 profilepic:{
       borderWidth:2,
       borderColor:'white',
       width:'80@ms',
       height:'80@ms',
       borderRadius:'50@ms',
        },
     addbuddybutton:{
         borderWidth:2,
         borderColor:'grey',
         width:'80@ms',
         height:'35@ms',
         marginTop:'2@ms',
         justifyContent:'center',
         alignItems:'center',
         borderRadius:'8@ms',
         backgroundColor:'white',
         margin:4,
          },
         followbutton:{
             backgroundColor:'#4E387E',
             width:'80@ms',
             height:'35@ms',
             marginTop:'2@ms',
             justifyContent:'center',
             alignItems:'center',
              margin:4,
              borderRadius:'8@ms'
               },
               cardContent:{
                 
                   width:'90%',
                   alignSelf:'center',
                    padding:'10@ms',
                    marginTop:'15@ms',
                    borderBottomColor:'white',
                    borderBottomWidth:1,
                    marginBottom:-1.5,
                     
                     height:50,
                     
                     //borderBottomWidth: '1@ms',
                     borderTopEndRadius:10,
                     borderTopLeftRadius:10,
                  backgroundColor:'white',
                  shadowColor:'white',
                  elevation:0
                       },
                  cardtitletext:{
                      fontWeight:'bold',
                      fontSize:'16@ms',
                      color:'#4E387E'

                  },
                  
                  
  picContainer:{
  width:'90%',
  alignSelf:'center',
  paddingLeft:'10@ms',
  flexDirection:'row',
  justifyContent:'center',
  paddingRight:'10@ms'
  
  
},
image:{
  width:'155@ms',
  height:'155@ms',
  margin:'8@ms',
  borderRadius:'20@ms'

}         
             
 
})
export default styles;