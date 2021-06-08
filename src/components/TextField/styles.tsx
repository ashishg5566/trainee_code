import { Platform, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Math.round(Dimensions.get('window').height);
//import {Font} from '../index';
import { Images, Colors, TextField, Font, CustomButton } from '../../components';

export default ScaledSheet.create({

	inputContainer: {
		backgroundColor: '#FFFFFF',
		borderRadius: 12,
		marginTop:'2%',
		borderWidth: 0.7,
		borderColor: 'lightgray',
		width:'95%',
		alignSelf:'center'

		//borderColor: 'rgba(51,51,51,0.5)',

	},
	flexdirection: {
		flexDirection: 'row',

	},
	textboxwidth: {
		//width: '90%',

	},
	textboxfieldd: {
		fontFamily: 'Lato-Regular',
		height: 50,
		width: '80%',
		fontSize: hp(2.1),
		paddingLeft: '5%',
		color: '#000'
	},
	textAreaCss: {
		fontFamily: 'Lato-Regular',
		height: 100,
		 width:200,
		fontSize: hp(2.3),
		paddingLeft: '5%',
		textAlignVertical: 'top'
	},
	imageiconConatiner: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		alignSelf: 'center',
		width: '17%',
		marginRight: '3%',

	},
	imageicon: {
		width: Dimensions.get('window').width * 0.07,
		height: Dimensions.get('window').width * 0.07,
		resizeMode: 'contain',

	}
});