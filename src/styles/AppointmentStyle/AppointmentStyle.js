import { StyleSheet } from 'react-native';
import { SH, Fonts, ColorTheme, colorsset, SW, SF, } from '../../utils';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: ColorTheme.sp_Theme,
  },
  minviewallcontent: {
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 40,
    paddingTop: 10,
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: colorsset.theme_backgound_second,
  },
  setwhitebox: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 7,
    padding: 10,
    marginBottom: 8,
  },
  Settabshow: {
    backgroundColor: colorsset.BoxBgColor,
    borderRadius: 7,
    marginHorizontal: SH(10),
    marginVertical: SH(10),
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
  },
  setwhiteboxtwo: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imagsetstyle: {
    width: 60,
    height: 60,
    borderRadius: 7,
  },
  imagsetstylediffrenr: {
    width: 60,
    height: 60,
    borderRadius: 7,
  },
  flexrowsetimage: {
    flexDirection: 'row',
  },
  flexrowsetimagesetftwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  flexrowsetimagegtwo: {
    flexDirection: 'row',
    width: '95%'
  },
  imagecenterstyle: {
    marginRight: 10,
    width: '15%',
  },
  imagecenterstyletwo: {
    marginRight: 10,
    width: '20%',
  },
  imagecenterstyleset: {
    width: '50%',
  },
  textsetdoctore: {
    fontSize: 15,
    fontFamily: Fonts.Poppins_Bold,
    fontWeight: '700',
    color: '#000000',
  },
  textsetdoctor: {
    color: '#000000',
    fontSize: SF(12),
    fontFamily: Fonts.Poppins_Medium,
    paddingTop: 2,
    width: '100%'
  },
  textsetdoctoretwo: {
    color: 'gray',
    fontSize: SF(12),
    fontFamily: Fonts.Poppins_Medium,
    paddingTop: 2,
    width: '100%'
  },
  setwidth: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 17,
  },
  blackcolorsettext: {
    color: 'black'
  },
  flexrowsettextview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 3,
    paddingTop: 1,
    width: '100%',
  },
  setwidthgstar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  bgcolorsetwhitetextinput: {
    backgroundColor: 'white',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    height: 50,
    marginBottom: 20,
  },
  paddibnglefttextstyle: {
    paddingLeft: 10,
    color: 'gray',
    width: 260,
    padding: 0,
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
  },
  setminviewstyle: {
    paddingTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  setdigittextstyle: {
    color: 'black',
    fontSize: 13,
    fontFamily: Fonts.Poppins_Medium,
    marginLeft: 5,
  },
  flexrowiconwithjender: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  buttonPatientStyleety: {
    height: 25,
    paddingVertical: 0,
  },
  flexrowiconwithjenderdftwo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  setwidthbutton: {
    width: 70,
  },
  butttontextset: {
    fontSize: 11,
    position: 'relative',
  },
  buttonstylesety: {
    height: 23,
    padding: 0,
    paddingVertical: 0,
  },
  totalappointtext: {
    fontSize: 15,
    fontFamily: Fonts.Poppins_Bold,
    fontWeight: '700',
    paddingTop: 0,
    color: 'black',
    opacity: 0.8,
  },
  flexrowtabappointmeny: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    borderRadius: 4,
    backgroundColor: 'white',
    position: 'absolute',
    top: 10,
    zIndex: 4,
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

  },
  setbgcolorview: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colorsset.White_color
  },
  setbgcolorviewtwo: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 40,
    borderRadius: 4,
  },
  textcolorupcoming: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.Poppins_Medium
  },
  colortext: {
    fontSize: 16,
    fontFamily: Fonts.Poppins_Medium
  },
  settopspaceset: {
    marginTop: 40,
  },
  seticonbgcolor: {
    width: 40,
    height: 40,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    right: 23,
  },
  settextstyle: {
    fontSize: 16,
    fontFamily: Fonts.Poppins_Medium,
    paddingBottom: 4,
    marginTop: 20,
  }
});