import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../utils';
export default StyleSheet.create({
    sp_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sp_textStyle: {
        color: '#f38831',
        fontSize: 24,
        fontFamily: Fonts.Poppins_Regular,
        marginBottom: SH(50)
    },
    sp_textClinic: {
        color: '#046665',
        fontSize: 24,
        fontFamily: Fonts.Poppins_Regular,
        marginBottom: SH(50)
    },
    sp_dr_name: {
        color: '#263238',
        fontSize: 24,
        fontFamily: Fonts.Poppins_Regular,
        marginTop: SH(50)
    },
    minviewsplash: {
        height: '100%',
    },
    setminviewsplash: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Setimagestyle: {
        height: 200,
        width: 200,
    }

});