import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, colors, Strings, widthPercent, ColorTheme } from '../../utils';

export default StyleSheet.create({
  buttonCircle: {
    // width: wp(95),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '20%'
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  getstartedtext: {
    color: 'white',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
  },
  heightsetimage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  titleStyle: {

    // top: Platform.OS === 'ios' ? -15 : 50,
  },
  nextbuttoncolorset: {
    color: '#000',
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(20),
  },
  textstyle: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(33),
    fontWeight: '800',
    lineHeight: SH(30),
    textAlign: 'center',
    color: 'white',
  },
  textstyletwo: {
    paddingLeft: 10,
    paddingRight: 10,
    color: 'black',
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    top: -65,
  },
  textstyletheree: {
    paddingLeft: 10,
    paddingRight: 10,
    color: 'black',
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    marginTop: 65,
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  minviewsigninscreen: {
    width: '90%',
    marginHorizontal: '5%',
    height: '100%',
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  bgcolorsettextminview: {
    backgroundColor: ColorTheme.BGFF4B3A,
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagsetview: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagesetus: {
    width: 82,
    height: 82,
    borderRadius: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // tintColor:colors.theme_backgound,
    backgroundColor: 'white',
  },
  smallimagcenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  settextstyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'hsl(0, 100%, 99.8%)',
    position: 'absolute',
    top: 30,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 17,
  },
  longtitlestyle: {
    color: '#FFFFFF',
    fontFamily: Fonts.Metropolis_Thin,
    fontSize: SF(45),
    textAlign: 'center',
    lineHeight: SH(50),
    fontWeight: '600',
  },
  longtitlestyletwo: {
    color: '#000000',
    fontFamily: Fonts.Metropolis_SemiBold,
    fontSize: SF(35),
    textAlign: 'center',
    lineHeight: SH(40),
    marginBottom: 20,
  },
  textcenterview: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 40,
    paddingRight: 15,
    paddingLeft: 15,
  },
  longimage: {
    width: '100%',
    height: 300,
  },
  longimageOne: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  longimageTwo: {
    width: '100%',
    height: 200,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  longimageThree: {
    width: '100%',
    height: 300, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexicon: {
    flexDirection: 'row',
    position: 'relative',
    right: 3,
  },
  seticonpositon: {
    marginLeft: 30
  },
  flexrighticonsingle: {
    position: 'relative',
    right: 14,
  },
  algnaitemcenterimageandtext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  setimagviewtwo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  ColorThemealigncenterview: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  bgwhite: {
    backgroundColor: 'white',
    position: 'relative',
    zIndex: 11
  },
  setbgcolorviewtwoview: {
    borderRadius: 14,
    width: 40,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoimg: {
    height: 70,
    width: 70,
  },
  activebutonstyleset: {
    width: 9,
    height: 9,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
  dotstyleset: {
    width: 9,
    height: 9,
    backgroundColor: 'lightblue',
    borderRadius: 100,
  },
  setbgbuttondivTwo: {
    position: 'relative',
    top: 10
  },
  IconSet: {
    height: 100
  },
  aligncenterview: {
    position: 'relative',
    top: 50
  }
});