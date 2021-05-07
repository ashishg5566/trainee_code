import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      backgroundColor:'lightgrey'
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
           marginLeft:'20@ms'
          },
          cardContainer:{
            width:'95%',
            marginTop:'8@ms',
            borderRadius:'20@ms',
            padding:'12@ms',
            
           // alignItems:'center'
            },
           content1:{
            flexDirection:'row', 
             padding:'5@ms'
           },
           separator:{
               borderBottomWidth: '1@ms',
               borderColor:'#DCDCDC',
               marginTop:'8@ms',
               marginBottom:'8@ms',
               marginLeft:'8@ms',
               marginRight:'8@ms',
               },
           profileimage:{
              width:'45@ms', 
              height: '45@ms'
              ,borderRadius:'40@ms'
           },
            nametext:{
               fontWeight:'bold',
               color:'black',
               marginTop:'8@ms',
               marginLeft:'15@ms',
               fontSize:'16@ms'
            },
           content2:{
            width:'100%',
             },
           titletext:{
            color:'grey',
            fontSize:'14@ms',
            fontWeight:'bold'

          },
          videocontent:{
            width:'100%',
             borderRadius:'10@ms',
            marginTop:'8@ms',
         },
          paragraphcontent:{
            width:'100%',
             color:'gray'
            ,marginTop:'10@ms',
            fontWeight:'bold',
            fontSize:'13@ms',
            textAlign:'justify'
           },
           fundingContent:{
             width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
             },
           fundingtextcontent:{
            flexDirection:'row',
            marginTop:'8@ms'
           },
           fundbutton:{
            marginTop:'20@ms',
            height:'42@ms',
            justifyContent:'center',
            alignItems:'center',
            width:'100@ms',
            borderRadius:'15@ms',
            backgroundColor:'green'

           },

          content3:{
            width:'100%',
            //backgroundColor:'red',
            paddingLeft:'10@ms',
            paddingRight:'10@ms',
            justifyContent:'space-between',
            flexDirection:'row',
             borderColor:'lightgrey'

          },
          icon:{
            marginLeft:'8@ms'

          },
          icontext:{
            fontWeight:'bold',
            fontSize:'14@ms',
            color:'grey'
          },
          content4:{
            flexDirection:'row',
            paddingLeft:'5@ms',
            paddingRight:'5@ms',
        },
          profiledesc:{
            marginLeft:'10@ms'
          },
          profiletext:{
            fontWeight:'bold',
            fontSize:'14@ms',
             },
          profileparagraph:{
            color:'gray',
            fontWeight:'bold',
           width:'300@ms',
            fontSize:'12@ms'
           },
          profilepic:{
            width:'50@ms', 
            height:'50@ms',
            borderRadius:'40@ms'

          },
           textinput:{
            marginTop:'10@ms',
            borderRadius:'10@ms',
            backgroundColor:'lightgrey',
            padding:'15@ms',
            fontSize:'18@ms',
            height:'50@ms'
          },
          fundtext:{
              fontWeight:'bold',
              fontSize:'14@ms'
          },
          amounttext:{
            fontWeight:'bold',
            fontSize:'14@ms',
            color:'#4E387E'
        }
 })
export default styles;