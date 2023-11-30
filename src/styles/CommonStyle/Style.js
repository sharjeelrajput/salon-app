import { StyleSheet } from 'react-native';
import { SF, SH, Fonts, colorsset, } from '../../utils';

export default StyleSheet.create({
  Text: {
    color: '#000'
  },
  inputMobile: {
    marginBottom: SH(13),
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 7,
    height: 47,
    color: '#000',
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  numberinputMobile: {
    marginBottom: SH(13),
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 12,
    paddingBottom: 7,
    height: 47,
    color: colorsset.black_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  minviewallcontent: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: ColorTheme.sp_Theme,
  },
  minviewallcontentCenter: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexrowpassword: {
    width: '100%',
    borderRadius: SH(7),
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginBottom: SH(15),
    height: 47,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setinputpassword: {
    width: '80%',
    color: colorsset.black_text_color,
    fontSize: SF(17),
    padding: 0,
    paddingTop: 5,
    fontFamily: Fonts.Poppins_Medium,
  },

  headerstylebgcolor: {
    backgroundColor: '#e3f2f0'
  },
  minviewaudioacall: {
    width: '100%',
    height: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
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
    paddingTop: 20,
    paddingBottom: 20,
    width: '95%'
  },
  setbgcolorgrsay: {
    backgroundColor: 'gray',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: Platform.OS === 'ios' ? 2 : 0.9,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
    top: 16,
    height: 40,
    width: 40,
    backgroundColor: '#046665',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  iconclosestyle: {
    color: 'white',
    paddingBottom: 3,
  },
  checkiconright: {
    borderWidth: 3,
    height: 80,
    width: 80,
    borderRadius: 100,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  setroundcenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  setbackgroundicon: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
  },
  registertextset: {
    paddingTop: 25,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  settext: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
  },
  setokbutton: {
    width: '30%'
  },
  buttonminview: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  buttonminviewspace: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    width: '100%'
  },
  setbuttonstyle: {
    backgroundColor: 'red',
    width: '50%'
  },
  setinputstyleapply: {
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 7,
    height: 50,
    color: 'gray',
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: '#e3f2f0',

  },
  setalldetailesminview: {
    paddingTop: 70,
  },
  setbgimage: {
    height: '100%',
    width: '100%',
  },
  container: {
    height: '100%'
  },
  chiropractorText: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(20),
    fontStyle: 'normal',
    paddingRight: 15,
    paddingLeft: 3,
    color: '#fff',
    fontWeight: '500',
  },
  marginrighthome: {
    paddingLeft: 7,
  },
  flexrowplusicon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusiconstyle: {
    position: 'relative',
    top: -2,
  },
  seticoncolor: {
    color: 'white',
    paddingLeft: 7,
  },
  seticonstyle: {
    color: '#fff'
  },
  seticonstyletwos: {
    color: 'white',
  },
  minviewtwoiconcall: {
    flexDirection: 'row',
  },
  seticongbgoclor: {
    width: 40,
    height: 40,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
  },
  setbariconmarginright: {
    marginLeft: 0,
  },
  flexrowsidemnu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  settablestyle: {
    fontSize: SF(32),
    fontFamily: Fonts.Poppins_Medium,
    color: 'black',
    position: 'relative',
    left: 100,
  },
  settextstyle: {
    fontSize: 20,
    fontFamily: Fonts.Poppins_Bold,
    fontWeight: '700'
  },
  TabInputSearch: {
    color: '#000',
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    backgroundColor: '#fff'
  },
  SearchHomeTab: {
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: "transperent",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
    color: colorsset.theme_backgound,
    fontFamily: Fonts.Poppins_Regular,
    color: '#fff'
  },
  flexsewtrwo: {
    width: '86%',
    backgroundColor: 'transperent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  SearchCloseIcon: {
    fontSize: SF(25),
    color: colorsset.White_color
  },
  SlectModuleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 'auto'
  },

});