import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
      alignItems:'center'
      
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
            marginLeft:25
          },
          cardContent:{
            width:'95%',
            marginTop:'8@ms',
            borderRadius:'20@ms',
            padding:'12@ms',
           

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
            ,borderRadius:'40@ms'

          },
          nametext:{
            fontWeight:'bold',
            color:'black',
            marginTop:'8@ms',
            marginLeft:'15@ms',
            fontSize:'18@ms'

          },
          cardcontent2:{
            flexDirection:'row',
             justifyContent: 'space-between',
             marginTop:'10@ms'

          },
          titletext:{
            color:'grey',
            fontSize:'14@ms',
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
          cardcontent4:{
            flexDirection:'row',
            padding:'10@ms'

          },
          profiletext:{
            fontWeight:'bold',
            fontSize:'14@ms',
            marginLeft:'10@ms'

          },
          profileparagraph:{
            color:'gray',
            fontWeight:'bold',
            marginLeft:'10@ms',
            fontSize:'12@ms'

          },
          profilepic:{
            width:'50@ms', 
            height:'50@ms',
            borderRadius:'40@ms'

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