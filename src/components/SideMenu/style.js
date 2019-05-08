import GStyle from "../../utils/GlobalStyles";
import Color from "color";
import { Platform } from 'react-native';

export default {
    container: {
        paddingTop: GStyle.STATUS_BAR_HEIGHT + 25,
        flex: 1,
        borderRightWidth: Platform.OS === 'android' ? 0 : 10,
        borderRightColor: Platform.OS === 'android' ? GStyle.WHITE : GStyle.BEIGE,
        borderLeftWidth: Platform.OS === 'android' ? 10 : 0,
        borderLeftColor: Platform.OS === 'android' ? GStyle.BEIGE : GStyle.WHITE,

    },
    optionList: {
        marginBottom: 80,
    },
    optionClick: {
        // paddingRight: Platform.OS === 'android' ? '12.5%' : 0,
        // paddingLeft: Platform.OS === 'android' ? 0 : '12.5%',
        paddingHorizontal: '12.5%',
    },
    textWithIconContainer: {
        alignItems: 'center',
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        paddingHorizontal: 5,
        paddingTop: 0,
    },
    iconStyle: {
        marginRight: 13.5,
    },
    textOption: {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        fontWeight: '500',
        fontSize: 22,
    },
    hr: {
        borderBottomWidth: 1,
        borderBottomColor: Color(GStyle.BLACK).alpha(.05),
        width: '75%',
        alignSelf: 'center',
        marginVertical: 20
    }
};