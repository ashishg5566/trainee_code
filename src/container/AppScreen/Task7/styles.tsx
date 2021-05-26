import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container:{
      flex:1,
       backgroundColor:'#ecf0f1',
      },
     textinput:{
            shadowColor: 'black',
            shadowOffset: {
             width: '10@ms',
             height:  '10@ms',
              },
             shadowOpacity: 0.29,
             shadowRadius: 5.22,
             elevation: '10@ms',
             borderTopEndRadius:'8@ms',
             borderTopLeftRadius:'8@ms',
             borderRadius: '10@ms',
             marginLeft:'8@ms',
             height: '55@ms',
             backgroundColor:'white',
             fontSize:'15@ms',
             width:'220@ms',
             borderColor:'grey',
             color:'lightgrey',
             overflow: 'hidden',
             fontWeight:'bold',
             paddingLeft:'10@ms'
  
            },
            flatlistimage:{
                height:'50@ms',
                width:'50@ms',
                borderRadius:'40@ms',
                
            },
            content1:{
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center',
              marginTop:'25@ms'
            },
            cameracontainer:{
              width:'120@ms',
              height:'120@ms',
              borderRadius:'100@ms',
              backgroundColor:'white',
              marginRight:'8@ms',
              justifyContent:'center',
              alignItems:'center'

            },
            separator:{
                   borderBottomWidth:1,
                    borderColor:'lightgrey',
                    marginTop:'25@ms',
                    marginBottom:'25@ms',
                    width:'90%',
                    alignSelf:'center'

            },
            participants:{
              paddingLeft:'25@ms',
              
            },
            participanttext:{
              fontSize:'16@ms',
              fontWeight:'normal'

            },
            
            flatlist:{
                 height:'74@ms',
                 marginTop:28,
                 width:'100%',
                 paddingRight:10
                  
               },
               flatlistitem:{
                height:'75@ms',
                width:'75@ms',
                alignItems:'center',
                justifyContent:'center',
                
               },
               addmorecontent:{
                paddingLeft:'16@ms',
                marginTop:'14@ms'
               },
            addmore:{
              backgroundColor:'#4E387E',
              width:'50@ms',
              height:'50@ms',
              borderRadius:'40@ms',
              justifyContent:'center',
              alignItems:'center'
            },
            addmoretext:{
              fontSize:'30@ms',
              fontWeight:'bold',
              color:'white'
            },
            creategroupbutton:{
              marginTop:'30@ms',
              alignSelf:'center',
              width:'320@ms',
              height:'60@ms',
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:'#4E387E',
              borderRadius:'10@ms'

            },
            grouptext:{
              color:'white',
              fontSize:'16@ms'
            }
        

         
})
export default styles;