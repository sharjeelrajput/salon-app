import { StyleSheet } from 'react-native';
import { SF, SH, Fonts, colorsset, SW } from '../../utils';

export default StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        overflow: 'hidden',
        borderRadius: 7,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    TextheadBox: {
        marginVertical: SH(20)
    },
    Texthead: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(22),
        textAlign: 'center',
        lineHeight: 23,
        color: colorsset.black_text_color
    },

    CategoryTitle: {
        fontFamily: Fonts.Poppins_Medium,
        color: colorsset.black_text_color,
        fontSize: SF(18),
        marginLeft: SH(15),
        marginVertical: SH(10)
    },
    CategoryBoxItem: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SH(15),
        width: '50%',
        marginVertical: SH(10),
      
    },
    CategoryBoxItemChild: {
        backgroundColor: '#fff',
        borderRadius: 7,
        textAlign: 'center',
        paddingVertical: SH(15),

    },
    CategoryImgBox: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: SH(5)
    },
    CategoryImg: {
        width: SW(70),
        height: SH(70),
    },
    CategoryText: {
        fontFamily: Fonts.Poppins_Medium,
        color: colorsset.White_color,
        fontSize: SF(17),
        textAlign: 'center'
    },
    MrTop: {
        marginTop: SH(15)
    }

});