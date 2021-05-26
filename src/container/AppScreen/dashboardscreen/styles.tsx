import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
       backgroundColor:'lightgrey'
      
    },
     cardContent:{
            width:'94%',
            marginTop:'8@ms',
            borderRadius:'20@ms',
            padding:'12@ms',
             alignSelf:'center'
             },
          cardcontent1:{
            flexDirection:'row', 
            justifyContent: 'space-between',
           borderBottomWidth: '1@ms',
            borderColor:'#DCDCDC',
            padding:'10@ms'

          },
          profileimage:{
            width:'45@ms', 
            height: '45@ms'
            ,borderRadius:'40@ms',
            resizeMode:'cover'

          },
          nametextcontent:{
            //marginTop:'8@ms',
            marginLeft:'18@ms',

          },
          nametext:{
            fontWeight:'bold',
            color:'black',
           fontSize:'18@ms'

          },
          cardcontent2:{
            flexDirection:'row',
             justifyContent: 'space-between',
             marginTop:'10@ms'

          },
          titletext:{
            color:'grey',
            fontSize:'15@ms',
            fontWeight:'bold'

          },
          cardvideocontent:{
            width:'100%',
            backgroundColor:'lightblue',
            alignSelf:'center',
            borderRadius:'10@ms',
            marginTop:'8@ms',
         },
          cardparagraphcontent:{
            color:'gray'
            ,marginTop:'10@ms',
            fontWeight:'bold',
            fontSize:'13@ms',
            textAlign:'justify'

          },
          cardcontent3:{
            padding:'15@ms',
            justifyContent:'space-between',
            flexDirection:'row',
            marginTop:'10@ms',
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderColor:'lightgrey'

          },
          commentsection:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center' ,
           },
          text:{
            color:'grey',
            fontSize:'15@ms',
            fontWeight:'bold'
            },
          modalcontent:{
            flexDirection:'row',
            marginRight:'10@ms',
            marginTop:'8@ms'
          },
          modaltext:{
            fontSize:'18@ms',
              fontWeight:'bold',
              color:'grey'
          },
          bordercontent:{
            borderColor:'#DCDCDC',
            borderWidth:1,
            height:'43@ms',
            marginLeft:'28@ms',
            marginRight:'28@ms'

          },
          mainmodalcontainer:{
            backgroundColor:'white',
            height:'120@ms',
            borderRadius:'20@ms',
            justifyContent:'center',
            alignItems:'center'

          },
          textinput:{
            marginTop:'20@ms',
            borderRadius:'10@ms',
            backgroundColor:'lightgrey',
            padding:'15@ms',
            fontSize:'18@ms'

          }


        
    })
export default styles;