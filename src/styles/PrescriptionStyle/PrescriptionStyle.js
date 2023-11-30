import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, Strings, colorsset, widthPercent } from '../../utils';
export default StyleSheet.create({

  setbgimage: {
    height:'100%',
    width:'100%',
  },
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
    paddingTop: SH(10)
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: colorsset.theme_backgound_second,
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
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
    marginLeft: 5,
  },
  setavilabltextsyle: {
    fontSize: 17,
    fontFamily: Fonts.Poppins_Medium,
  },
  flexrowtabappointmeny: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 4,
    backgroundColor: 'white',
    marginTop: 30,
  },
  setbgcolorview: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4
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
  settextstylebox: {
    backgroundColor: 'white',
    width: widthPercent(21.5),
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 7,
    borderRadius: 6,
    marginBottom: 10,
  },
  settextstyleboxtwo: {
    width: widthPercent(21.5),
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    borderRadius: 6,
    marginBottom: 10,
  },
  settopspaceset: {
    marginTop: 25,
  },
  textstylesun: {
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
    color: '#000'
  },
  textstylesunwhite: {
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
    color: 'white'
  },
  setbgcolorbutton: {
    backgroundColor: 'red',
    width: '48%',
    height: 40,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexrowbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  settextstyle: {
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
    color: 'red'
  },
  settextstyletwo: {
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
    color: 'white'
  },
  settopspace: {
    marginTop: 30,
    marginBottom: 30,
  },
  setbgcolorviewsaven: {
    backgroundColor: 'white',
    height: 40,
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  serttextstyle: {
    fontSize: 17,
    fontFamily: Fonts.Poppins_Medium,
  },
  dropdown: {
    height: 40,
    width: '48%',
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  setwidthfull: {
    width:'95%',
   position:'relative',
   left:20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 18,
    fontFamily: Fonts.Poppins_Medium,
    color: '#000'
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: Fonts.Poppins_Medium,
    position: 'relative',
    left: 15,    
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  flexrowsetdropdown: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
  },
  PriscriptionHeadIConBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderRadius: 5,
    padding: 10
  },
  PriscriptionHeadICon: {
    fontSize: SF(50),
  },
  MedicineTakeInfocoboxWrap: {
    backgroundColor: 'white',
    width:'100%',    
    borderRadius:7,
    padding:7,
    paddingBottom:4,
    marginBottom:8,
  },
  MedicineTakeInfocobox: {
    flexDirection: 'row',
    justifyContent: 'space-between',   
  },
  MedicineName: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
    color: '#000',
    textAlign: 'center'
  },
  MedicinePower: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    color: 'grey'
  },
  MedicineTakeText: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
    color: 'grey'
  },
  MedicineAfterTake:{
    fontFamily: Fonts.Poppins_Regular,
    fontSize: SF(14),
    color: '#000',
    paddingTop: SH(2)
  },
  MedicineDucration: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    color: 'grey'
  },
  TextRight: {
    textAlign: 'right'
  },
  TextCenter: {
    textAlign: 'center'
  },
  MedicineTakeboxpadHori: {
    paddingHorizontal: SH(5),
    width: '33.33%',
  }
});