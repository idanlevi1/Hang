import { StyleSheet } from 'react-native'
import GStyle from "../../utils/GlobalStyles";
import Color from "color";

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color(GStyle.BLACK).alpha(.8),
        height: '100%',
        marginVertical: 0,
        marginHorizontal: 0,
    },
    modalWindow: {
        justifyContent: 'space-between',
        width: '85%',
        backgroundColor: GStyle.BEIGE,
        borderRadius: 10,
    },
    modalContentHolder: {
        padding: 25,
        position: 'relative'
    },
    modalHeaderText: {
        fontFamily: GStyle.FbAlfiBold,
        color: Color(GStyle.BLACK).alpha(.7),
        textAlign: 'center',
        fontSize: GStyle.XXL2,
        lineHeight: GStyle.XXL2,
        marginBottom: 10,
    },
    modalItemText: {
        fontFamily: GStyle.FbAlfi,
        color: Color(GStyle.BLACK).alpha(.5),
        textAlign: 'left',
        writingDirection: 'rtl',
        fontSize: GStyle.XL,
        lineHeight: GStyle.XL,
    },
    modalButtonHolder: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color(GStyle.BLACK).alpha(.1),
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
    modalButton: {
        borderColor: Color(GStyle.BLACK).alpha(.4),
        marginBottom: 20
    },
    modalButtonText: {
        fontFamily: GStyle.FbAlfiBold,
        color: Color(GStyle.BLACK).alpha(.7),
        alignSelf: 'center'
    },
    modalBigWindow: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: GStyle.BEIGE,
        borderRadius: 10,
        width: '85%',
        maxHeight: '80%',
    },
    modalBigContentHolder: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 25,
        marginTop: 5,
        marginBottom: 20,
        borderTopWidth: 2,
        borderTopColor: Color(GStyle.BLACK).alpha(.1),
        borderBottomWidth: 2,
        borderBottomColor: Color(GStyle.BLACK).alpha(.1),
    },
    modalBigScroller: {
        paddingVertical: 20,
    },
    modalBigItemText: {
        fontFamily: GStyle.FbAlfi,
        color: Color(GStyle.BLACK).alpha(.7),
        textAlign: 'left',
        writingDirection: 'rtl',
        fontSize: GStyle.XS,
        lineHeight: 18,
    },
    modalBigFooterHolder: {
        marginHorizontal: 25,
        marginTop: 15,
        marginBottom: 35,
    },
    modalBigTitleText: {
        fontFamily: GStyle.FbAlfi,
        color: Color(GStyle.BLACK).alpha(.7),
        textAlign: 'center',
        writingDirection: 'rtl',
        fontSize: GStyle.L,
        lineHeight: GStyle.L,
    },
    modalBigInputHolder: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    modalBigInput: {
        fontFamily: GStyle.FbAlfi,
        fontSize: GStyle.XXL,
        lineHeight: GStyle.XXL,
        color: Color(GStyle.BLACK).alpha(.7),
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Color(GStyle.BLACK).alpha(.7),
        paddingHorizontal: 10,
        paddingVertical: 0,
        marginHorizontal: 5
    },
    modalBigCloseBtn: {
        position: 'absolute',
        zIndex: 5,
        right: 14,
        top: 14,
        width: 35,
        height: 35
    },
    modalBigErrMsg: {
        fontFamily: GStyle.FbAlfi,
        color: GStyle.RED,
        fontSize: 13,
        textAlign: 'center',
        marginTop: 20,
        alignItems: 'center'
    },
    inputId: {
        alignSelf: 'center',
        height: 40,
        fontSize: 34,
        lineHeight: 34,
        borderBottomWidth: 1,
        borderBottomColor: GStyle.GREEN,
        textAlign: "center",
        color: GStyle.GREEN,
        fontFamily: GStyle.FbAlfiLight,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        marginBottom: 10,
        letterSpacing: -1,
        width: '80%',
    },
    idErrMsgText: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 14,
        padding: 0,
        color: GStyle.RED,
        fontSize: 18,
        fontFamily: GStyle.FbAlfi,
        writingDirection: 'rtl',
    },
    languageContainer: {
        position: 'relative',
        alignSelf: 'flex-start',
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        // width: '60%',
        backgroundColor: '#ccc',
        marginBottom: 10,
    },
    languageOption: {
        width: 40
    },
    languageIcon: {
        height: 35,
    },
});

export default Styles