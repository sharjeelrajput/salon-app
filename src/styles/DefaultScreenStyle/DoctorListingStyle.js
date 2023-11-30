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
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:7,
    padding:10,
    marginBottom:8,
  },
  setwhiteboxtwo: {
    backgroundColor: 'white',
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:7,
    padding:7,
    paddingBottom:4,
    marginBottom:8,
  },
  imagsetstyle: {
    width: 70,
    height: 70,
    borderRadius:7,
  },
  imagsetstylediffrenr: {
    width: 60,
    height: 60,
    borderRadius:7,
  },
  flexrowsetimage: {
    flexDirection:'row',
  },
  flexrowsetimagesetftwo: {
    flexDirection:'row',
    width:'100%'
  },
  flexrowsetimagegtwo: {
    flexDirection:'row',
    width:'95%'
  },
  imagecenterstyle: {
    marginRight:10,
    width:'23%',
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
  flexrowiconwithjenderdftwo: {
    flexDirection:'row',
    alignItems:'center',
    position:'relative',
    right:45,
  },
  totalappointtext:{
    fontSize: 15,
    fontFamily: Fonts.Poppins_Bold,
    fontWeight:'700',
    paddingTop:0,
    color:'black',
    opacity:0.8,
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
}
});