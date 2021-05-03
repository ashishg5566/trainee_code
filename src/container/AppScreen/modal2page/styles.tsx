 //modal
 import { ScaledSheet } from 'react-native-size-matters';
const styles = ScaledSheet.create({
 modalcontainer:{
    marginTop:'80@ms',
    width:'100%',
    backgroundColor:'white',
    borderRadius:'15@ms',
    height:'380@ms',
    padding:'10@ms',
    alignItems:'center'

  },
  continuebutton:{
    margin:'8@ms',
    height:'60@ms',
    borderRadius:'10@ms',
    width:'150@ms',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#228C22'

  },
  rejectbutton:{
    backgroundColor:'#ffffff',
    margin:'8@ms',
    height:'60@ms',
    borderRadius:'10@ms',
    borderColor:'red',
    borderWidth:1,
    width:'150@ms',
    justifyContent:'center',
    alignItems:'center'

  },
  modalbuttons:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:'30@ms'

  },
  modaltext1:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:'18@ms',
    marginTop:'30@ms',
    color:'gray',
    
  },
  modaltext2:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:'13@ms',
    color:'gray',
    marginTop:'30@ms'

  }
})
  export default styles;