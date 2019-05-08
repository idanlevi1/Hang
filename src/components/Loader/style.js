import { StyleSheet } from 'react-native'
import GStyle from '../../utils/GlobalStyles';

const Styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 99,
        backgroundColor: GStyle.BLACK,
        flex: 1,
        opacity: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
        height: GStyle.HEIGHT,
        width: GStyle.WIDTH
    },
    loader: {
        opacity: 1,
        height: GStyle.HEIGHT * .3,
        width: GStyle.WIDTH * .3,
        padding: GStyle.HEIGHT * .25
    }
});

export default Styles