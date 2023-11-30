import { StyleSheet } from 'react-native';
import { SH, Fonts, ColorTheme, colorsset,SF,SW } from '../../utils';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: ColorTheme.sp_Theme,
  },
  minviewallcontent: {
    width:'100%',
    paddingHorizontal:10,
    paddingBottom:40,
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor:colorsset.theme_backgound_second,
  },
  setwhitebox: {
    backgroundColor: 'white',
    width:'100%',
    borderRadius:7,
    padding:10,
    marginBottom:8,
  },
  setwhiteboxthreedf: {
    backgroundColor: 'white',
    width:'100%',
    borderRadius:7,
    padding:10,
    paddingBottom:2,
    marginBottom:8,
  },
  dertflexcview: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  setwhiteboxtwo: {
    backgroundColor: 'white',
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:7,
    padding:10,
    marginBottom:8,
  },
  imagsetstyle: {
    width: 70,
    height: 70,
    borderRadius:7,
  },
  imagsetstyledtwo: {
    width: 50,
    height: 50,
    borderRadius:7,
  },
  flexrowsetimage: {
    flexDirection:'row',
  },
  flexrowsetimagegtwo: {
    flexDirection:'row',
    width:'95%'
  },
  imagecenterstyle: {
    marginRight:10,
    width:'23%',
  },
  imagecenterstyledtwos: {
    marginRight:10,
    width:'17%',
  },
  imagecenterstyleset: {
    width:'77%',
  },
  textsetdoctore: {
    fontSize: 15,
    fontFamily: Fonts.Poppins_Bold,
    fontWeight:'700'
  },
  textsetdoctoretwo: {
    color: 'gray',
    fontSize: 12,
    fontFamily: Fonts.Poppins_Medium,
    paddingTop:2,
  },
  setwidth: {
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:17,
  },
  blackcolorsettext: {
    color:'black'
  },
  flexrowsettextview: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:3,
    paddingTop:1,
    width:'100%',
  },
  setwidthgstar: {
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingRight:15,
  },
  bgcolorsetwhitetextinput: {
    backgroundColor:'white',
    borderRadius:100,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10,
    height:50,
    marginBottom:20,
  },
  paddibnglefttextstyle: {
    paddingLeft:10,
    color: 'gray',
    width:260,
    padding:0,
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
  },
  setminviewstyle: {
    paddingTop:7,
    flexDirection:'row',
    alignItems:'center',
  },
  setdigittextstyle: {
    color:'black',
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
    marginLeft:5,
  },
  flexrowiconwithjender: {
    flexDirection:'row',
    alignItems:'center',
    marginLeft:15,
  },
  totalappointtext:{
    fontSize: 15,
    fontFamily: Fonts.Poppins_Bold,
    fontWeight:'700',
    paddingTop:5,
  },
  flexrowtabappointmeny: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'95%',
    borderRadius:4,
    backgroundColor:'white',
    position:'absolute',
    top:0,
    zIndex:4,
    
  },
  setbgcolorview: {
    width:'50%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:40,
    borderRadius:4
  },
  setbgcolorviewtwo: {
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'50%',
    height:40,
    borderRadius:4,
},
textcolorupcoming: {
  color:'white',
  fontSize:16,
  fontFamily:Fonts.Poppins_Medium
},
colortext: {
  fontSize:16,
  fontFamily:Fonts.Poppins_Medium
},
settopspaceset: {
  marginTop:40,
},
seticonbgcolor: {
  width:40,
  height:40,
  borderRadius:100,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  position:'relative',
  right:23,
},
settextstyle: {
  fontSize:16,
  fontFamily:Fonts.Poppins_Medium,
  paddingBottom:4,
  marginTop:20,
},
topBg: {
  height: SH(150),
  width: '100%',
},
title: {
  left: SH(28),
  marginTop: SH(90),
  width: 'auto',
  position: 'absolute',
  fontFamily: Fonts.Poppins_Bold,
  color: '#FFFFFF',
  fontSize: SF(24),
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: SF(36)
},
chideContainer: {
  width: '85%',
  marginTop: SH(28),
  paddingHorizontal: SH(18),
  paddingVertical: SH(20),
  backgroundColor: 'white',
  borderRadius: SW(7)
},
lable: {
  width: 'auto',
  fontFamily: Fonts.Poppins_Bold,
  fontWeight: '600',
  fontSize: SF(18),
  lineHeight: SF(24),
  color: '#000',
},
textStyle: {
  width: '70%',
  fontFamily: Fonts.Poppins_Regular,
  fontWeight: '500',
  fontSize: SF(16),
  lineHeight: SF(24),
  color: '#000',
  marginTop: SF(5)
},
settwobutton: {
  width:'100%',
  marginTop:'7%',
  paddingLeft:20,
  paddingRight:20,
},
itemHeader: {
  width: '100%',
  flexDirection: 'row',
  padding: SH(2)
},
notification_msg: {
  width: '80%',
  marginHorizontal: SH(1),
  textAlign: 'left',
  fontFamily: Fonts.Poppins_Medium,
  fontSize: SF(19),
  lineHeight: SF(24),
  color: 'black',
  fontWeight: '800',
  paddingLeft:15,
  paddingTop:15,
},
backaerrowsert: {    
  tintColor:'white'
},
settoucjbleview: {
  position:'absolute',
  top:20,
  left:20,
  width:37,
  height:37,
},
container: {
  width: '100%',
  height: 'auto',
  alignItems: 'center',
  justifyContent: 'flex-start',

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


headerTextBold: {
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
  fontWeight: '400',
  fontSize: SF(18),
  fontStyle: 'normal',
  lineHeight: 24
},
flexrowsetstarsignup: {
 
  flexDirection:'row',
  justifyContent:'flex-start',
  alignItems:'center',

},
setcontainer: {
  width:'100%',
},
setcontainertwo: {
  width:'100%',
  backgroundColor:colorsset.theme_backgound_second,
},
containertopheader: {
  width: '100%',
  height: 'auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderBottomRightRadius:30,
  borderBottomLeftRadius:30,
  marginBottom:10,
},
headerMainView: {
  width: '100%',
  flexDirection: 'row',
  marginHorizontal: '5%',
  marginTop: SH(20),
  paddingBottom: 20,
  paddingLeft: 15,
},
headerMainViewtwosert: {
  width: '100%',
  flexDirection: 'row',
  alignItems:'center',
  marginHorizontal: '5%',
  marginTop: SH(20),
  paddingBottom: 20,
  paddingLeft: 15,
},
headerMainViewtwoserttwoset: {
  width: '100%',
  flexDirection: 'row',
  alignItems:'center',
  marginHorizontal: '5%',
  marginTop: SH(0),
  paddingBottom: 0,
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
headerTextViewtwoset: {
  width: '90%',
  marginHorizontal: '5%',
  left: SH(5),
  marginBottom: SH(20),
  justifyContent: 'center',
  
},
headerTextBold: {
  color: '#fff',
  fontFamily: Fonts.Poppins_Bold,
  fontWeight: '800',
  fontSize: SF(22),
  fontStyle: 'normal',
  lineHeight: 30
},
settextstyle: {
  color:'white',
  marginLeft:10,
  fontFamily:Fonts.Poppins_Medium,
  position:'relative',
  top:2,
},
settextstyletwo: {
  color:'white',
  fontFamily:Fonts.Poppins_Medium,
  paddingTop:5,
  fontSize:15,
},
upcomingappointment: {
  fontFamily:Fonts.Poppins_Bold,
  paddingTop:5,
  fontSize:17,
  paddingBottom:5,
},
settwoispace: {
  marginHorizontal:10,
},
flexrowtextnumber: {
  flexDirection:'row',
  alignItems:'center',
  marginTop:3,
},
setdigitnumber: {
  fontSize:13,
  fontFamily:Fonts.Poppins_Medium,
  marginLeft:5,
  marginTop:3,
},
longtitletextstyle: {
  fontSize:13,
  fontFamily:Fonts.Poppins_Medium,
  borderTopWidth:1,
  borderTopColor:'lightgray',
  borderStyle:'dashed',
  paddingTop:3,
  marginTop:5,
},
settwoisocn: {
  position:'relative',
  right:10,
},
seticonstyle: {
  paddingBottom:10,
}
});