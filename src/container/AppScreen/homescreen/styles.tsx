import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
     
      container:{
        flex:1,
        backgroundColor:'lightgrey',
        alignItems:'center',
        paddingBottom:10
        
      },
      header:{
        borderBottomRightRadius :'20@ms',
      borderBottomLeftRadius :'15@ms',
       backgroundColor:'#4E387E',
      height:'70@ms',
       padding:'20@ms',
      flexDirection:'row',
      alignItems:'center',
      
       width:'100%',
       justifyContent: 'space-between',
      },
      textcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        padding:'6@ms'

      },
      headertitle:{
        alignSelf:'center',
        color:'white',
        fontSize:'18@ms',
        marginLeft:'50@ms'

      },
      text1:{
        marginLeft:'20@ms',
        color:'black',
        fontSize:'11@ms'

      },
      text2:{
        marginRight:'20@ms',
        color:'black',
        fontSize:'11@ms'

      },
      cardcontent:{
        width:'90%',
        marginTop:'8@ms',
        borderRadius:'20@ms',
        padding:'12@ms',
        

       },
      cardcontent1:{
        flexDirection:'row', 
        justifyContent: 'space-between',
         borderBottomWidth: 1,
        borderColor:'#DCDCDC',
        padding:'5@ms'
         
    
      },
      nametext:{
        fontWeight:'bold',
        marginTop:'8@ms',
        marginLeft:'20@ms',
        fontSize:'12@ms',
        color:'black'
    
      },
      profilepic:{
        width:'35@ms', 
        height: '35@ms',
        borderRadius:'20@ms'
    
      },
      cardcontent2:{
        flexDirection:'row', 
        justifyContent: 'space-between',
        marginTop:'5@ms',
        padding:'6@ms'
    
      },
      videocontent:{
      width:'100%',
         height:'120@ms',
       
    
      },
      cardcontent3:{
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

      }

      })
export default styles;