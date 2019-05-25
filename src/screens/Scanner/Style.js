import { StyleSheet } from 'react-native';
import GStyle from '../../utils/GlobalStyles';

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: GStyle.GREEN_LIGHTEN,
	},
	qrTitleText: {
		fontSize: 18,
		padding: 10,
		marginVertical: 20,
		color: GStyle.BLACK,
	},
	textBold: {
		fontWeight: '500',
		color: GStyle.BEIGE,
	},
	scannerContainer: {
		height: (GStyle.HEIGHT * .6) + 4,
		width: (GStyle.WIDTH * .8) + 4,
		backgroundColor: GStyle.BEIGE_LIGHTEN,
		borderColor: GStyle.CYAN,
		borderWidth: 2,
	},
	camera: {
		height: (GStyle.HEIGHT * .5),
		width: (GStyle.WIDTH * .8),
	},
});
