import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
container: {
     flex:1,
    // paddingLeft:10
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
             },
             
             cardcontent:{
              //alignSelf:'center',
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
                  width:'95@ms'
          ,
                 // marginTop:'5@ms',
                  height:'40@ms',
                  // marginLeft:'20@ms',
                  // marginRight:'8@ms'

             },
             
             
 
})
export default styles;