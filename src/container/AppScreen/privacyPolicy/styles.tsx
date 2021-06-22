import { Platform, Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const screenWidth = Dimensions.get('window').width;
 const screenHeight = Math.round(Dimensions.get('window').height);
const styles = ScaledSheet.create({
    container: {
        flex: 1,
         backgroundColor: '#F1F1F1',

    },
    textcontainer:{
        marginTop:'6%',
        width:'100%',
        paddingHorizontal:'5%',
        
      },
    text:{
        margin:'4%',
        fontSize: hp(2.0),
        textAlign:'justify',
        fontFamily: 'Lato-Regular'

    }
    
});

export default styles;