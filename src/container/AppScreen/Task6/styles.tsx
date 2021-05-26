import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
       backgroundColor:'#ecf0f1',
      },
      flatlist:{
          width: '100%',
          marginTop:'15@ms'
         },
         flatListItem: {
            height: '80@ms',
            paddingRight:'18@ms',
            paddingLeft:'25@ms',
          },
          flatlistcontainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom:'15@ms'

          },
          flatlisttext:{
            flexDirection:'row',
            marginLeft:'15@ms',
            alignItems:'center'

          },
          desigtext:{
            fontSize:'11@ms',
            marginLeft:'5@ms'

          },
          flatlistborder:{
            borderBottomWidth:1,
            width:'264@ms',
            alignSelf:'flex-end',
            borderColor:'lightgrey',
            marginRight:'10@ms',
            justifyContent:'center'

          },
          flatlistimage:{
            height:'50@ms',
            width:'50@ms',
            borderRadius:'40@ms'

          },
          selecticon:{
            padding:'5@ms',
            backgroundColor:'#4E387E',
            borderRadius:'20@ms'
          }
          
          

})
export default styles;