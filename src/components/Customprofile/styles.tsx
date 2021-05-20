import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
       backgroundColor:'lightgrey'
    },
    cardcontent4:{
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


      },
      paragraphcontent:{
        marginLeft:'10@ms',
        //backgroundColor:'pink',
        paddingRight:'10@ms'

      },

        
    })
export default styles;