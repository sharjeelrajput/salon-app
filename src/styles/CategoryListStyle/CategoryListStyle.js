import { StyleSheet } from 'react-native';
import { SH, Fonts, ColorTheme, colorsset, SW, SF } from '../../utils';
export default StyleSheet.create({

    minstyleviewphotograpgy: {
        height: '100%',
        width: '100%',
        backgroundColor: colorsset.theme_backgound_second,
    },
    minflexview: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: 50,
        paddingTop: SH(15),
    },
    minviewsigninscreen: {
        width: '90%',
        height: '100%',
        // paddingHorizontal: '5%',
    },
    imagsetstyle: {
        width: SW(80),
        height: SH(80),
        borderRadius: 15,
        marginRight: SH(20),
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
        // overflow: 'hidden',
        borderRadius: 7,
    },
    setwhitebox: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 7,
    },
    flexrowsetimage: {
        flexDirection: 'row',
        // alignItems: 'center',
    },
    // imagecenterstyletop: {
    //     width: '25%',
    // },
    imagecenterstyle: {
        width: '72%',
    },
    textsetdoctore: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: 17,
        color: '#000000'
    },
    setflextimeroe: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textsetdoctoretwo: {
        color: 'gray',
        fontFamily: Fonts.Poppins_Medium,
        fontSize: 13,
    },

    // start tab style
    TabBoxTwo: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colorsset.black,
        marginTop: SH(5),
        paddingVertical: SH(10)
    },
    TabsettextActiveBoxTwo: {
        paddingVertical: SH(5),
        paddingHorizontal: SH(10),
        textAlign: 'center',
        minWidth: SW(120),
    },
    TabsettextBoxTwo: {
        paddingVertical: SH(5),
        paddingHorizontal: SH(10),
        textAlign: 'center',
        minWidth: SW(120),
    },
    TabsettextActiveTwo: {
        color: colorsset.White_color,
        textTransform: 'uppercase',
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(16),
        textAlign: 'center',
        paddingVertical: SH(3),
        paddingHorizontal: SH(10),
    },
    TabsettextTwo: {
        color: '#000',
        textTransform: 'uppercase',
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(16),
        textAlign: 'center',
        paddingVertical: SH(3),
        paddingHorizontal: SH(10),
    },
    FleexRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    SpecificText: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(15),
        paddingLeft: SH(5),
        color: 'gray'
    },
    SetShadow: {
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
        marginVertical: SH(10),
        marginHorizontal: SH(5)
    }
});