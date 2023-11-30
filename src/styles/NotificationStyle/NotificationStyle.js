import { SF, SW, wp, hp, widthPercent, Fonts, ColorTheme, SH } from '../../utils';
import { StyleSheet, Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%',
    paddingBottom: 30,
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  settingtext: {
    color: 'red',
    fontWeight: '600',
    fontSize: 15,
    fontFamily: Fonts.Metropolis_Medium,
  },
  settingtexttitle: {
    color: 'black',
    fontWeight: '700',
    fontSize: 21,
    paddingHorizontal: '5%',
    fontFamily: Fonts.Metropolis_Medium,
  },
  flexviewheader: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 90,
  },
  imagesetus: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginRight: 20,
  },
  flexdiractionrow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ColorTheme.BGFEF7DC,
    paddingHorizontal: '5%',
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 0.5,
    borderColor :'gray'
  },
  IconWidthSet: {
    width: '20%',
  },
  IconWidthSetBorder: {
    width: 60,
    height: 60,
    borderRadius: 200,
    borderWidth: 0.7,
    borderColor: '#000',
    padding: SH(5),
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  NotiFicationDot: {
    width: 15,
    height: 15,
    borderRadius: 200,
    backgroundColor: '#23c552',
    position: 'absolute',
    right:2,
    top: 0
  },
  NotiFicationDotRed: {
    width: 15,
    height: 15,
    borderRadius: 200,
    backgroundColor: '#F84F31',
    position: 'absolute',
    right:2,
    top: 0
  },
  flexdiractionrowtwo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
  },
  textparegraph: {
    fontSize: 13,
    color: 'black',
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 19,
  },
  twonavemberscreen: {
    fontSize: 13,
    color: ColorTheme.TextGreyColor,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 19,
    paddingTop: 3,
  },
  setparegraphwidth: {
    width: '80%',
    paddingLeft: SH(10),
  },
  setparegraphwidthtwo: {
    width: '70%',
    borderBottomColor: ColorTheme.LighGrey,
    borderBottomWidth: 1,
    paddingBottom: 10,
  }
});
