import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
       backgroundColor:'lightgrey'
      
    },
    savebutton:{
        
        backgroundColor:'#4E387E',
        width:'310@ms',
        height:'55@ms',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10@ms'
      },
      savebuttontext:{
        color:'white',
        fontSize:'18@ms'
      },
    

        
    })
export default styles;