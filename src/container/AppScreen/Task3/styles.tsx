import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
      
      backgroundColor:'lightgrey'
      },
      
          cardContainer:{
            width:'94%',
            marginTop:'8@ms',
            borderRadius:'20@ms',
            padding:'12@ms',
            alignSelf:'center'
            },
           content1:{
            flexDirection:'row', 
             padding:'5@ms',
             alignItems:'center'
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
             resizeMode:'cover',
              width:'45@ms', 
              height: '45@ms',
              marginRight:'15@ms',
              borderRadius:'40@ms'
           },
            nametext:{
               fontWeight:'bold',
               color:'black',
               fontSize:'16@ms'
            },
           
           titletext:{
            color:'grey',
            fontSize:'14@ms',
            fontWeight:'bold'

          },
          videocontent:{
            width:'100%',
            alignItems:'center',
            justifyContent:'center',
            marginTop:'8@ms',
         },
          paragraphcontent:{
            color:'gray'
            ,marginTop:'10@ms',
            fontWeight:'bold',
            fontSize:'13@ms',
            textAlign:'justify',
           
           },
           fundingContent:{
           flexDirection:'row',
            justifyContent:'space-between',
             },
             fundtext:{
              fontWeight:'bold',
              fontSize:'14@ms'
          },
          amounttext:{
            fontWeight:'bold',
            fontSize:'14@ms',
            color:'#4E387E'
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
      textinput:{
            marginTop:'10@ms',
            borderRadius:'10@ms',
            backgroundColor:'lightgrey',
            padding:'15@ms',
            fontSize:'18@ms',
            height:'50@ms'
          },
          
 })
export default styles;