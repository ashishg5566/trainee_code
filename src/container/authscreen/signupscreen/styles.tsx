import { ScaledSheet } from 'react-native-size-matters';
export default ScaledSheet.create({
    container: {
        flex: 1,
          },
         namesectionStyle: {
          flexDirection: 'row',
          width: '145@ms',
           justifyContent: 'center',
           alignItems: 'center',
            backgroundColor: '#fff',
            height: '55@ms',
            borderRadius: '10@ms' ,
            margin: '5@ms',
            padding: '6@ms',
           shadowColor: 'black',
           shadowOffset: {
            width: '8@ms',
           height:  '10@ms',
           },
           shadowOpacity: 0.29,
           shadowRadius: 5.22,
            elevation: 10,
            },
            icontext:{
              margin:4,

            },
            header:{
            marginTop:'30@ms',
             flexDirection:'row',
           //flex:1
             },
             signupTitle:{
             marginLeft:'90@ms',
           // textAlign:'center',
              fontSize:'16@ms',
             },
            backbutton:{
          backgroundColor:'#4E387E',
          width:'65@ms',
          height:'40@ms',
          borderTopRightRadius:'30@ms',
          borderBottomRightRadius:'30@ms',
           },
         backbuttonText:{
         color:'white',
          marginTop:'10@ms',
          fontWeight:'bold'
         },
        formcontainer:{
          flex:1,
         // backgroundColor:'pink',
          alignItems:'center',
          marginTop:'30@ms'
        },
        nameinputcontainer:{
          flexDirection:'row'
        },
        signupStyle:{
          width: '310@ms',
          height: '55@ms',
          justifyContent:'center',
          alignItems:'center',
          margin: '40@ms',
          backgroundColor:'#4E387E',
          borderRadius: '10@ms' ,
          shadowColor: 'gray',
          shadowOffset: {
          width: '10@ms',
          height:  '10@ms',
           },
          shadowOpacity: 0.29,
         shadowRadius: 5.22,
         elevation: 10,
        },
        signupText:{
        color:'white',
        fontWeight:'bold'
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
});