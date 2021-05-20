import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
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
            alignItems:'center'
          
          } 

        
    })
export default styles;