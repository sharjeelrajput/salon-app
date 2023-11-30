import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, Strings, widthPercent, colorsset } from '../../utils';
export default StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colorsset.theme_backgound_second,
        paddingTop: 10,
    },
    inputSmall: {
        width: '100%',
        fontSize: SF(17),
        fontFamily: Fonts.Poppins_Regular
    },
    genderLabelStyle: {
        marginRight: 20,
        fontSize: SF(20),
        color: colorsset.White_color,
        lineHeight: SH(24),
        fontFamily: Fonts.Poppins_Medium
    },
    redioButtonVide: {
        width: '45%',
        marginRight: SH(190),
        marginTop: SH(7)
    },
    inputRextArea: {
        marginTop: SH(13),
        width: '100%',
        height: SH(100),
        paddingLeft: 15,
        color: 'gray',
        fontSize: SF(17),
        textAlignVertical: 'top',
        borderRadius: 7,
        fontFamily: Fonts.Poppins_Medium,
        backgroundColor: 'white',
    },
    button: {
        marginHorizontal: widthPercent('5%'),
        marginTop: SH(30),
        width: '90%',
        height: SH(50)
    },
    textStyle: {
        color: colorsset.White_color,
        fontSize: 17,
        fontFamily: Fonts.Poppins_Medium,
        marginTop: SH(20),
        lineHeight: 24,
    },
    registerTextStyle: {
        fontSize: 17,
        fontFamily: Fonts.Poppins_Bold,
        marginTop: SH(50),
        lineHeight: 24
    },
    dobView: {
        marginHorizontal: widthPercent('5%'),
        marginTop: SH(12),
        width: '100%',
        borderRadius: SH(7),
        minHeight: SH(45),       
        backgroundColor: colorsset.BoxBgColor,
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        
        borderRadius: 7,
    },
    dobStyle: {
        width: '100%',
        borderRadius: SH(20),
        fontSize: SF(20),
        color: '#000',
        fontWeight: '400',
        paddingVertical: SH(8),
        paddingHorizontal: SH(15),
    },
    setinputwidth: {
        width: '48%',
    },
    setbuttonview: {
        marginTop: 20,
        width: '100%'
    },
    inputviewstyle: {
        marginHorizontal: '5%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    setgenderview: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 2,
    },
    setbgcolorthe: {
        backgroundColor: colorsset.theme_backgound_second,
        height: '100%',
    },


});