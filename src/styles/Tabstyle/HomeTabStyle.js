import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, Strings, widthPercent, colorsset } from '../../utils';
export default StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginBottom: 10,
        paddingBottom: 20,
    },
    topBg: {
        height: SH(200),
        width: '100%',
    },
    chiropractorView: {
        width: 'auto',
        flexDirection: 'row',
        position: 'absolute',
        right: SH(15),
        top: SH(15),
        alignItems: 'center'
    },
    plusImage: {
        width: SH(20),
        height: SH(20)
    },
    chiropractorText: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(20),
        fontStyle: 'normal',
        color: '#fff',
        fontWeight: '500',
        marginLeft: SH(8)
    },
    headerMainView: {
        width: '100%',
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginTop: SH(10),
        paddingLeft: 15,
    },
    dr_imageView: {
        width: SH(100),
        height: SH(100),
        borderRadius: 100,
    },
    headerTextView: {
        width: '90%',
        marginHorizontal: '5%',
        left: SH(5),
        marginBottom: SH(20),
        justifyContent: 'center',
        paddingTop: 10,
    },
    headerTextBold: {
        color: '#000',
        fontFamily: Fonts.Poppins_Bold,
        fontWeight: '800',
        fontSize: SF(22),
        fontStyle: 'normal',
        lineHeight: 30
    },
    headerTextBoldTwo: {
        color: '#fff',
        fontFamily: Fonts.Poppins_Bold,
        fontWeight: '800',
        fontSize: SF(22),
        fontStyle: 'normal',
        lineHeight: 30
    },
    headerTextNormal: {
        color: '#fff',
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        textAlign: 'left'
    },
    modalrtextset: {
        fontFamily: Fonts.Poppins_Bold,
        fontWeight: '400',
        fontSize: SF(16),
        fontStyle: 'normal',
        lineHeight: 24,
        width: '80%',
        color: 'gray'
    },
    sectionView: {
        height: 'auto',
        width: '100%',
        marginHorizontal: '5%',
        paddingBottom: SH(5),
        marginTop: SW(8),
    },
    lableTextStyle: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(20),
        color: '#F38831',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 30,
        marginBottom: 5,
    },
    lableTextStylemorning: {
        marginTop: SH(10),
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(20),
        color: '#F38831',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 30,
        marginBottom: 5,
        marginLeft: 17,
    },
    settextborder: {
        borderRadius: Platform.OS === 'ios' ? 22 : 5,
        borderWidth: 1,
        width: '100%',
        marginRight: 20,
        paddingTop: 7,
        paddingBottom: 7,
        textAlign: 'center',
        color: '#263238',
        marginHorizontal: '5%',
        color: 'white',
        borderWidth: 1,
        borderColor: colorsset.White_color

    },

    settextbordertwo: {
        borderRadius: 5,
        borderWidth: 1,
        width: '100%',
        marginRight: 20,
        paddingTop: 7,
        paddingBottom: 7,
        textAlign: 'center',
        color: '#263238',
        marginHorizontal: '5%',
        backgroundColor: colorsset.White_color
    },
    flatelist: {
        width: '100%',
        height: SH(100),
        marginTop: SH(10),
    },
    item: {
        width: '97%',
        height: SH(75),
        padding: SW(0),
        right: SW(0),
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    itemText: {
        fontFamily: Fonts.Poppins_Medium,
        fontWeight: '500',
        fontSize: SF(17),
        lineHeight: 24,
        color: colorsset.black_text_color
    },
    textcenter: {
        textAlign: 'center',
        fontFamily: Fonts.Poppins_Medium,
        fontWeight: '500',
        fontSize: SF(17),
        lineHeight: 24,
        color: 'white',
        borderRadius: 5,
        width: 30,
        paddingTop: 5,
        borderWidth: 1,
        borderColor: colorsset.White_color
    },
    textcenterbgcolor: {
        textAlign: 'center',
        fontFamily: Fonts.Poppins_Medium,
        fontWeight: '500',
        fontSize: SF(17),
        lineHeight: 24,
        color: '#263238',
        borderWidth: SW(1),
        backgroundColor: colorsset.BoxBgColor,
        borderRadius: 5,
        width: 30,
        paddingTop: 5,
    },
    itemDateBG: {
        width: SH(40),
        height: SH(40),
        marginTop: SW(5),
        borderRadius: SW(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    sessionItem: {
        width: '45%',
        height: SH(35),
        marginHorizontal: '2.5%',
        marginVertical: SH(5),
        padding: SH(3),
        borderRadius: SW(5),
        right: SW(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: SW(1),
        borderColor: '#046665',
        backgroundColor: '#E4F3F3',
    },
    sessionText: {
        textAlign: 'center',
        fontFamily: Fonts.Poppins_Medium,
        fontWeight: '400',
        fontSize: SF(16),
        lineHeight: 22,
        color: '#263238'
    },
    flatelistGrid: {
        width: '100%',
        height: 'auto',
        marginTop: SH(10),
    },
    bookBtnView: {
        height: 'auto',
        alignItems: 'center',
        right: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 20,
        borderRadius: SH(7),
    },
    bookPayStyle: {
        marginLeft: SW(10),
        fontFamily: Fonts.Poppins_Regular,
        fontWeight: '700',
        fontSize: SF(19),
        lineHeight: SF(24),
        color: '#FFFFFF',
        // marginRight: 10,
    },
    nextIcon: {
        height: SH(22),
        width: SH(20),
        marginTop: SW(2.5)
    },
    modelContainer: {
        width: '100%',
        borderRadius: SH(7),
        backgroundColor: '#FFFFFF',
        paddingTop: SH(15),
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '95%'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modelTitle: {
        fontFamily: Fonts.Poppins_Medium,
        fontWeight: '700',
        fontSize: SF(24),
        lineHeight: SF(30),
        marginHorizontal: SH(15),
    },
    closeIcon: {
        position: 'absolute',
        right: 15,
        top: 16,
        height: 40,
        width: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    iconclosestyle: {
        color: 'white',
        paddingBottom: 3,
    },
    setsudiocalltext: {
        color: 'white',
        fontSize: 18,
        fontFamily: Fonts.Poppins_Medium,
        paddingTop: 4,
    },
    setimagewidth: {
        height: SH(25),
        width: SW(25)
    },
    closeBtn: {
        height: SH(28),
        width: SW(28)
    },
    modelBottomView: {
        width: '100%',
        padding: 15,
        backgroundColor: 'rgba(4, 102, 101, 0.25)',
        marginTop: 25,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    modelHorizontal: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    iconView: {
        width: SW(18),
        height: SH(20),
        tintColor: '#046665'
    },
    horizontalTextStyle: {
        marginLeft: SH(8),
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(13),
        lineHeight: SF(22),
        fontWeight: '500',
        fontStyle: 'normal'
    },
    settextcolor: {
        color: '#FFFFFF'
    },
    settextcolortwo: {
        color: '#263238'
    },
    setviewstyle: {
        width: '100%',
        // paddingHorizontal: SH(15),
    },
    sectionstyle: {
        width: '100%',
        marginBottom: SH(30)
    },
    sectionstyleTwo: {
        marginTop: SH(0),
        width: '100%',
        marginBottom: SH(50),
        backgroundColor: colorsset.BoxBgColor,
        // shadowColor: '#b5b2b2',
        // shadowOffset: {
        //     width: 0,
        //     height: Platform.OS === 'ios' ? 2 : 5,
        //     minHeight: '100%',
        // },
        // shadowOpacity: 1,
        // shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        // elevation: Platform.OS === 'ios' ? 1 : 6,
        overflow: 'hidden',
        borderRadius: 10,
        position: 'relative',
        padding: SH(15)
    },
    setpaymentview: {
        width: '100%'
    },
    setmarginright: {
        marginRight: 22,
    },
    setteobuttonminviews: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SH(15),

    },
    settoucheblewidth: {
        width: '50%',
        marginBottom: '3%',
        borderRadius: 7,
        paddingRight: SH(15)
    },
    setbuttonviewModal: {
        flexDirection: 'row',       
    },
    setbuttonminview: {
        flexDirection: 'row',
        // justifyContent: 'flex-end',
    },
    setbuttonminviewModal: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    setbgcolor: {
        backgroundColor: '#e3f2f0'
    },
    setflexrowtwobutton: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
    },
    iconbgcolor: {
        width: '50%',
        alignItems: 'center',
        marginRight: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 7,
    },
    iconbgcolortwo: {
        width: '50%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 7,
    },
    settitlemodalview: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        paddingTop: 15,
    },
    setbgcolorgrsay: {
        backgroundColor: 'gray',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        opacity: Platform.OS === 'ios' ? 2 : 0.9,
    },

    // New Add Style for Category
    CategoryTitle: {
        fontFamily: Fonts.Poppins_Bold,
        color: colorsset.black_text_color,
        fontSize: SF(20),
        marginLeft: SH(15),
        marginVertical: SH(10)
    },
    CategoryBoxItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    CategoryBoxItemChild: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    CategoryImgBox: {
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
        overflow: 'hidden',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        width: 65,
        height: 65,
    },
    CategoryImg: {
        width: SW(40),
        height: SH(40),
    },
    CategoryText: {
        fontFamily: Fonts.Poppins_Medium,
        color: colorsset.black_text_color,
        fontSize: SF(15),
        textAlign: 'center'
    },
    MrTop: {
        marginTop: SH(15)
    },
    Placetext: {
        fontFamily: Fonts.Poppins_Medium,
        color: colorsset.black_text_color,
        fontSize: SF(20),
        paddingRight: SH(20),
        marginTop: SH(3)
    },
    SetFlexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    SpecialistBoxMain: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',   
        // backgroundColor: 'red',
        width: '50%',
        paddingHorizontal: SH(10),
        paddingBottom: SH(10)
    },
    SpecialistBox: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',   
        // backgroundColor: 'red',
        width: '100%',
    },
    SpecialistText: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(18),
        paddingRight: SH(20),
        marginTop: SH(3),
        textTransform: 'uppercase',
        paddingBottom: SH(20)
    },
    SpecialistPerBox: {
        borderRadius: 10,
        overflow: 'hidden',
        paddingTop: SH(5)
    },
    SpecialistImg: {
        width: '100%',
        height: SH(90),
        borderRadius: 10,
    },
    SpecialistPerName: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(16),
        color: colorsset.White_color,
        textAlign: 'center',
        paddingHorizontal: SH(5),
        paddingVertical: SH(5)
    },
    SpecialistAll: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(17),
    },
    SpecialistAllPosition: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    SetMrn: {
        marginHorizontal: SH(15),
    }
});