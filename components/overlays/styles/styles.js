import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	backdropOverlayStyle: {
		/* backgroundColor: 'transparent', */
	},
	overlay: {
		padding: 15,
		backgroundColor: 'white',
		width: 250,
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	activityIndicatorOverlay: {
		padding: 15,
	},
	overlayTitle: {
		textAlign: 'center',
		fontFamily: 'Poppins-Medium',
		fontSize: 16,
		fontWeight: '500',
		color: 'black',
		letterSpacing: 0,
		marginTop: 10,
	},
	overlayFocusedText: {
		textAlign: 'center',
		fontFamily: 'Poppins-Medium',
		fontSize: 16,
		fontWeight: '500',
		color: 'red',
		letterSpacing: 0,
		marginTop: 10,
	},
	overlaySubTitle: {
		textAlign: 'center',
		fontFamily: 'Poppins-Medium',
		fontSize: 14,
		fontWeight: '500',
		color: 'black',
		letterSpacing: 0,
		marginTop: 10,
	},
});
