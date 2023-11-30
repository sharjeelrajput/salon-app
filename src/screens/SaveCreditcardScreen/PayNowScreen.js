import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, TextInput, ImageBackground, TouchableOpacity, Modal } from "react-native";
import {PayNameScreenStyle} from '../../styles';
import { Container, Button, AppHeader } from '../../components';
import images from '../../index';
import Style from '../../styles/CommonStyle/Style';
import RouteName from '../../routes/RouteName';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconP from 'react-native-vector-icons/dist/Entypo';
import Alert from '../../components/commonComponents/SweetAlertModal';
import { useSelector } from "react-redux";

const SaveCardScreen = ({ navigation }) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [modalVisibletwo, setmodalVisibletwo] = useState(false);
  const [DisplayAlert, setDisplayAlert] = useState(0);
  const [ApplyAlert, setApplyAlert] = useState(0)
  const onChangeText = (text, type) => {
    if (type === 'password') setPassword(text);
  };
  useEffect(() => {
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
      setApplyAlert(0);
    });
  }, [navigation]);

  return (
    <Container>
      <View style={Style.setheaderspacepadding}>
        <AppHeader leftImage={images.back_image} title='Book Now' onLeftPress={() => navigation.navigate(RouteName.HOME_TAB_SET)} />
      </View>
      <ImageBackground source={images.full_bg_img_hospital} resizeMode='cover' style={Style.setbgimage}>
        <View style={PayNameScreenStyle.minstyleviewphotograpgytwo}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              width: '100%',
              height: 'auto',
            }}>
            <View style={PayNameScreenStyle.keybordtopviewstyle}>
              <View style={PayNameScreenStyle.minflexview}>
                <View style={PayNameScreenStyle.imagetextflex}>
                  <View style={PayNameScreenStyle.setimagewidth}>
                    <Image source={images.img_dr} style={PayNameScreenStyle.creditcard} />
                  </View>
                  <View>
                    <Text style={[PayNameScreenStyle.settextstyle, { color: colorrdata }]}>Date : <Text style={PayNameScreenStyle.colorblack}>20/03/2022</Text></Text>
                    <Text style={[PayNameScreenStyle.settextstyle, { color: colorrdata }]}>Time : <Text style={PayNameScreenStyle.colorblack}>09:25</Text></Text>
                    <Text style={[PayNameScreenStyle.settextstyle, { color: colorrdata }]}>$87.00  <Text style={PayNameScreenStyle.colorblack}>$34.00</Text></Text>
                  </View>
                </View>
                <TouchableOpacity style={PayNameScreenStyle.setwhitecolor} onPress={() => navigation.navigate(RouteName.PAYMENT)} >
                  <Text style={PayNameScreenStyle.setstartext}>Payment method</Text>
                  <View style={PayNameScreenStyle.flexrowiocn}>
                    <Text style={PayNameScreenStyle.setstartext}>****6690</Text>
                    <IconP name="chevron-small-right" style={PayNameScreenStyle.setpositionicon} size={30} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={PayNameScreenStyle.flexrowiocntwo} onPress={() => navigation.navigate(RouteName.THANK_YOU)}>
                  <TouchableOpacity onPress={() => setmodalVisibletwo(true)}>
                    <Text style={PayNameScreenStyle.setapplyacoupon}>Apply a Coupon</Text>
                  </TouchableOpacity>
                  <View style={PayNameScreenStyle.centeredView}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisibletwo}
                    >
                      <View style={PayNameScreenStyle.setbgcolorgrsay}>
                        <View style={PayNameScreenStyle.centeredView}>
                          <View style={PayNameScreenStyle.modalView}>
                            <TouchableOpacity
                              style={PayNameScreenStyle.closeIcon}
                              onPress={() => setmodalVisibletwo(!modalVisibletwo)}
                            >
                              <Icon name="close" size={30} style={PayNameScreenStyle.iconclosestyle} />
                            </TouchableOpacity>
                            <View style={Style.setalldetailesminview}>
                              <TextInput
                                placeholder="Enter Coupon Code"
                                onChangeText={(text) => onChangeText(text, 'setCardNumber')}
                                style={Style.setinputstyleapply}
                              />
                              <View style={PayNameScreenStyle.setbutton}>
                                <Button title="Apply"
                                  onPress={() => setApplyAlert(1)}
                                />
                              </View>
                            </View>
                            <View style={Style.centeredView}>
                              {ApplyAlert !== 0 ?
                                <Alert message='Apply Discount $70 Successful' link={RouteName.HOME_TAB_SET} />
                                :
                                null
                              }
                            </View>
                          </View>
                        </View>
                      </View>
                    </Modal>
                  </View>
                  <IconP name="chevron-small-right" size={30} />
                </TouchableOpacity>
                <View style={PayNameScreenStyle.margintopset}>
                  <TouchableOpacity style={PayNameScreenStyle.flexdierationtext}>
                    <Text style={PayNameScreenStyle.textcolorblack}>Subtotal</Text>
                    <Text style={PayNameScreenStyle.textcolorgrays}>$250</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={PayNameScreenStyle.flexdierationtext}>
                    <Text style={PayNameScreenStyle.textcolorblack}>Discount</Text>
                    <Text style={PayNameScreenStyle.textcolorgrays}>$70</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={PayNameScreenStyle.flexdierationtextwo}>
                    <Text style={PayNameScreenStyle.textcolorblacktwo}>Total</Text>
                    <Text style={PayNameScreenStyle.textcolorblacktwo}>$180</Text>
                  </TouchableOpacity>
                  <Button title="Pay Now"
                    onPress={() => { setDisplayAlert(1) }} />
                </View>
              </View>
            </View>
            <View style={Style.centeredView}>
              {DisplayAlert !== 0 ?
                <Alert message='Payment  Successful' link={RouteName.THANK_YOU} />
                :
                null
              }
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </Container>
  );
};
export default SaveCardScreen;
