import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
container: {
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
            // marginBottom:-10,
             //position:'absolute',
             
             },
             headerTitle:{
               color:'white',
               fontSize:'20@ms',
               alignItems:'center',
               
             },
             backgroundImage:{
                
                 width:'100%',
                 height:'160@ms',
               //position:'relative',
                // resizeMode:'contain',
                marginTop:-20
               
                
             },
             profilepic:{
                 marginTop:'-40@ms',
                
                borderWidth:2,
                borderColor:'white',
                width:'80@ms',
                height:'80@ms',
                borderRadius:'50@ms',
                

             },
             profilecontainer:{
                flexDirection:'row',
                paddingLeft:'15@ms',
                paddingRight:'10@ms',
                width:'100%',
              // backgroundColor:'red',
                padding:'5@ms',
                justifyContent:'space-between'
               

             },
             profiletextcontainer:{
                marginLeft:'15@ms'

             },
             messageicon:{
               // marginLeft:'35@ms',
                  },
                  nametext:{
                    fontSize:'16@ms',
                    fontWeight:'bold'
                  },
                  likecontainer:{
                    //   backgroundColor:'grey',
                      flexDirection:'row',
                      justifyContent:'space-between',
                       paddingHorizontal:'15@ms',
                       marginTop:'8@ms',
                       marginBottom:"10@ms"

                  },
                  addbuddybutton:{
                    borderWidth:2,
                    borderColor:'grey',
                    width:'90@ms',
                    height:'35@ms',
                    marginTop:'2@ms',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:'8@ms',
                    backgroundColor:'white'

                  },
                  followbutton:{
                    backgroundColor:'#4E387E',
                    width:'90@ms',
                    height:'35@ms',
                    marginTop:'2@ms',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:'8@ms'

                  },
                  cardContent:{
                      width:'92%',
                      alignSelf:'center',
                      padding:'10@ms',
                      marginTop:'10@ms',
                      borderRadius:'10@ms',
                       },
                  cardContent2:{
                    width:'92%',
                    alignSelf:'center',
                    padding:'10@ms',
                    marginTop:'10@ms',
                   borderBottomColor:'white',
                   position:'relative',
                   height:50,
                   borderBottomWidth: '1@ms',
                   borderTopEndRadius:10,
                   borderTopLeftRadius:10,
                  // backgroundColor:'red'
                       },
                  cardtitletext:{
                      fontWeight:'bold',
                      fontSize:'16@ms',
                      color:'black'

                  },
                  cardtitlecontent:{
                    justifyContent:'space-between',
                    flexDirection:'row'
                  },
                  textcontainer:{
                      
                      marginLeft:'10@ms'


                  },


                  schooltext:{
                      fontWeight:'bold',
                      fontSize:'15@ms',
                      marginBottom:'4@ms'
                  },
                  textcontent:{
                    fontSize:'13@ms',
                    fontWeight:'bold',
                    color:'grey'


                  },
                  currentschoolText:{
                    fontSize:'13@ms',
                    fontWeight:'bold',
                    color:'grey',
                    marginLeft:'30@ms'

                  },
                  boldtext:{
                    fontWeight:'bold',
                    fontSize:'16@ms',
                    color:'black',
                    
                   
                  },
                  icons:{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginHorizontal:'70@ms'
                  },
                  borderstyle:{
                    borderBottomColor: '#DCDCDC',
                    borderBottomWidth: 1,
                    marginTop:'14@ms',
                    marginBottom:'14@ms',
                    width:'95%',
                    alignSelf:'center'

                  },
                  personalinfocontent:{
                    fontSize:'13@ms',
                    fontWeight:'bold',
                    color:'grey',
                    marginBottom:'4@ms'

                  }
,
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