import { StyleSheet } from 'react-native';
import { SH, Fonts, ColorTheme, colorsset, } from '../../utils';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: ColorTheme.sp_Theme,
  },
  login: {
    color: '#263238',
    fontSize: 30,
    fontFamily: Fonts.Poppins_Medium,
    marginTop: SH(30),
    lineHeight: 36,
    paddingBottom: SH(20),
  },
  setpatintlogin: {
    fontSize: 25,
    marginLeft: 20,
    marginRight: 20,

    color: colorsset.White_color,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontFamily: Fonts.Metropolis_Medium,
  },
  imagesetus: {
    width: 150,
    height: 150,
  },
  button: {
    marginTop: SH(20),
    width: '100%',
  },
  textStyle: {
    color: colorsset.black_text_color,
    fontSize: 17,
    fontFamily: Fonts.Poppins_Medium,
    marginTop: SH(7),
    lineHeight: 24,
  },
  registerTextStyle: {
    fontSize: 17,
    fontFamily: Fonts.Poppins_Bold,
    marginTop: SH(50),
    lineHeight: 24,
    color: colorsset.black_text_color
  },
  buttonviewsettopspace: {
    marginTop: SH(20),
    width: '100%',
  },
  viewtextStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  logoimage: {
    height: 150,
    width: 150,
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: colorsset.theme_backgound_second,
  },
  customClass: {
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary',
  },

  success: {
    confirmButtonColor: 'red',
  },
  activedot: {
    borderTopWidth: 2,
    width: "100%",
    height: "100%",
    borderColor: 'red',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  pleseentername: {
    color: 'red',
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'left',
    width: '100%',
    marginTop: -3,
    position: 'relative',
    top: -7,
  },
  Flexrowvoiew: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  Animationstyleset: {
    height: 50,
    width: 50,
  }
});