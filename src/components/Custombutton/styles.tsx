import { ScaledSheet } from 'react-native-size-matters';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors} from '../../constants';

const styles = ScaledSheet.create({
    
    savebutton:{
        
      width:'90%',
	//	padding: '5%',
        backgroundColor:Colors.$BtnBackgroundColor,
       
        height:'48@ms',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10@ms'
      },
      savebuttontext:{
        color:'white',
        fontSize: hp(2.8),
        fontFamily: 'Lato-Medium',
      },
    

        
    })
export default styles;