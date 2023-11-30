import { StyleSheet } from 'react-native';
import { SF, SH, Fonts, colorsset, SW } from '../../utils';

export default StyleSheet.create({
    Minviewsigninscreen: {       
        height: '100%',
    },
    ResentTextBox: {
        padding: SH(20)
    },
    ResentText: {
        fontFamily: Fonts.Poppins_Regular,
        color: 'grey',
        fontSize: SH(18)
    },
    ResentShowDataBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: SH(8),
        borderTopColor: '#e6e6e6',
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    ResentShowDataText: {
        fontFamily: Fonts.Poppins_Regular,
        color: '#000',
        fontSize: SH(18)
    },
    DirectionArrow: {
        fontSize:SF(20)
    }

});