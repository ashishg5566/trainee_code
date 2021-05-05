import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
container: {
     flex:1,
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
             cardcontainer:{
                  width:'100%',
                  marginTop:'10@ms',
                  height:'82@ms',
                  padding:'8@ms',
                  justifyContent:'center',
                  
             },
             cardcontent:{
                  flexDirection:'row',
                  justifyContent:'space-between',
                 marginLeft:'8@ms',
                 marginTop:'4@ms'
                   
             },
             profilepic:{
                  height:'60@ms',
                  width:'60@ms',
                  borderRadius:'40@ms',
                 

             },
             buddyname:{
               fontWeight:'bold',
               fontSize:'16@ms'

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
         
                  height:'40@ms',
                  marginLeft:'20@ms',
                  marginRight:'8@ms'

             },
             
             
 
})
export default styles;