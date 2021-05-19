import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container: {
     flex:1,
     backgroundColor:'white',
      },
      header:{
           width:'100%',
            borderBottomRightRadius :'20@ms',
            borderBottomLeftRadius :'15@ms',
            backgroundColor:'#4E387E',
            height:'70@ms',
            flexDirection:'row',           
             padding:'16@ms',
            justifyContent:'space-between',
             alignItems:'center',
             },
             headerTitle:{
               color:'white',
               fontSize:'20@ms',
               alignItems:'center'
             },
             schoolProfile:{
                flexDirection:'row',
                width:"100%",
                marginTop:'15@ms',
                paddingLeft:'22@ms',
                paddingRight:'22@ms',
               },
              profilepic:{
               height:'50@ms',
               width:'50@ms',
               borderRadius:'40@ms'
              },
             schoolprofileText:{
               marginLeft:'20@ms',
               marginTop:'8@ms'
             },
             schoolnameText:{
               fontWeight:'bold',
               fontSize:'13@ms'
             },
             borderstyle:{
               borderBottomWidth:1,
               borderBottomColor: '#DCDCDC',
               marginTop:'15@ms',
               marginLeft:'22@ms',
               marginRight:'22@ms'
             },
             projectTitle:{
               marginTop:'8@ms',
               paddingLeft:'22@ms',
             },
             titleText:{
               fontSize:'13@ms',
               color:'grey',
               fontWeight:'bold'
             },
             bigImageContainer:{
               width:'100%',
               justifyContent:'center',
               marginTop:'10@ms',
               alignItems:'center',
               paddingLeft:'22@ms',
               paddingRight:'22@ms',
               marginBottom:'18@ms'
               },
              bigImage:{
               width:'100%',
               height:'190@ms',
               borderRadius:'20@ms',
              },
              separator:{
              borderBottomWidth:'3@ms',
              borderBottomColor: '#DCDCDC',
              marginTop:'12@ms',
              marginBottom:'12@ms'
              },
             content1:{
              flexDirection:'row', 
              justifyContent: 'space-between',
             // backgroundColor:'yellow',
              paddingRight:'22@ms',
              paddingLeft:'22@ms'
             },
             icon:{
               marginLeft:'8@ms'
             },
             iconText:{
               fontWeight:'bold',
               color:'grey',
               fontSize:'13@ms'
             },
             thumbicon:{
              marginLeft:'8@ms'
            },
            thumbText:{
              fontWeight:'bold',
              color:'#4E387E',
              fontSize:'13@ms'
            },
             content2:{
               width:'100%',
               justifyContent:'space-between',
               flexDirection:'row',
               paddingLeft:'22@ms',
               paddingRight:'22@ms'
              },
             content3:{
               width:'100%',
               alignItems:'center',
               paddingLeft:'22@ms',
               paddingRight:'22@ms'
               },
             paragraphtext:{
               //fontWeight:'bold',
               fontSize:'13@ms',
               textAlign:'justify',
               color:'grey'
             },
             paragraphtext2:{
              //fontWeight:'bold',
              fontSize:'13@ms',
               width:'305@ms',
               color:'grey'
            },
             content4:{
               flexDirection:'row',
               width:'100%',
               paddingLeft:'22@ms'
             },
             reviewtext:{
               fontSize:'13@ms',
               color:'grey'
             },
             nametext:{
               fontSize:'13@ms',
               fontWeight:'bold'
             },
             content5:{
               width:'100%',
              paddingLeft:'22@ms'
            },
            fundingtextcontent:{
              flexDirection:'row',
             },
            fundingtext:{
              fontWeight:'bold',
              fontSize:'13@ms',
              margin:'2@ms'
               },
              fundingamounttext:{
              fontWeight:'bold',
                fontSize:'13@ms',
                margin:'2@ms',
                color:'#4E387E'
              },
              viewprogressText:{
                fontSize:'14@ms',
                color:'green', 
                borderBottomWidth:1, 
                borderBottomColor: 'green',
               // fontWeight:'bold'
               },
                content6:{
                 width:'100%',
                 alignSelf:'flex-start',
                // justifyContent:'center',
                paddingLeft:'22@ms',
                paddingRight:'22@ms',
                flexDirection:'row',
                //backgroundColor:'yellow'
              },
              textinput1:{
               width:'210@ms',
                borderRadius:'10@ms',
                borderColor:'lightgrey',
                borderWidth:3,
                fontSize:'13@ms',
                padding:'10@ms',
                height:'50@ms'
               },
              fundbutton:{
                backgroundColor:'green',
                justifyContent:'center',
                alignItems:'center',
                marginLeft:'6@ms',
                height:'50@ms',
                width:'100@ms',
                borderRadius:'10@ms'
                },
              fundbuttontext:{
                color:'white'
                },
                cardcontent7:{
                  flexDirection:'row',
                  width:'90%',
                  padding:'10@ms',
                 // backgroundColor:'red'
      
                },
                profiletext:{
                  fontWeight:'bold',
                  fontSize:'16@ms',
                 
      
                },
                profileparagraph:{
                  color:'gray',
                  fontWeight:'bold',
                  //width:'280@ms',
                  fontSize:'12@ms',
                  //backgroundColor:'red',
                  //textAlign:'justify',
                  
      
      
                },
                paragraphcontent:{
                  marginLeft:'10@ms',
                  //backgroundColor:'pink',
                  paddingRight:'18@ms'
      
                },
      
               
              content8:{
                flexDirection:'row',
                width:'100%',
                alignItems:'center',
                paddingLeft:'22@ms',
                paddingRight:'22@ms',
                marginTop:'20@ms',
                marginBottom:'10@ms'
              },
              textinput2:{
                 borderRadius:'10@ms',
                backgroundColor:'lightgrey',
                padding:'15@ms',
                fontSize:'18@ms',
                width:'100%',
                height:'50@ms'
    
              }
})
export default styles;