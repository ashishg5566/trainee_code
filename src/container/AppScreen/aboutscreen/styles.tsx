import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
container: {
     flex:1,
   
      },
      cardcontent:{
              height:'75@ms',
               backgroundColor:'white',
                 flexDirection:'row',
                 justifyContent:'space-between',
                paddingLeft:'10@ms',
                 marginTop:'10@ms',
                 paddingRight:'10@ms',
                 borderRadius:'5@ms',
                },
             profilepic:{
               resizeMode:'cover',
                  height:'52@ms',
                  width:'52@ms',
                  borderRadius:'40@ms',
                  },
             buddyname:{
               fontWeight:'bold',
               fontSize:'14@ms'
                },
              buddyalumni:{
               color:'green',
               fontWeight:'bold'

             },
             buddybatchmates:{
               fontWeight:'bold',
               color:'grey'

             },
             addbuddybutton:{
                  justifyContent:'center',
                  alignItems:'center',
                  borderRadius:'5@ms',
                  borderColor:'green',
                  borderWidth:1,
                  width:'95@ms' ,
                  height:'40@ms',
                    },
             
             
 
})
export default styles;