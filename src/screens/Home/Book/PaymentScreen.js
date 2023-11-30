import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StatusBar, Image, TouchableOpacity, } from 'react-native';
import { Container } from './../../../components';
import images from '../../../index';
import { colorsset, SH, Strings, } from './../../../utils'
import RouteName from '../../../routes/RouteName';
import Style from '../../../styles/CommonStyle/Style';
import {PaymentscreenStyle} from '../../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {SweetaelertModal} from '../../../components';
import { useSelector } from "react-redux";

const PaymentScreen = ({ navigation }) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};   
    const [DisplayAlert, setDisplayAlert] = useState(0);   
  

    useEffect(() => {
        navigation.addListener('focus', () => {
            setDisplayAlert(0);
        });
    }, [navigation]);

    return (
        <Container>          
            <View style={[PaymentscreenStyle.setbgcolor, { backgroundColor: colorsset.BackgroundColorScreen }]}>
            
                <View style={PaymentscreenStyle.container}>
                    <View style={[PaymentscreenStyle.setbgcolorviewtop, { backgroundColor: colorrdata }]}>
                        <Text style={PaymentscreenStyle.title}>{Strings.payment.title}</Text>
                    </View>
                    <View style={PaymentscreenStyle.setviewstyle}>
                        <ScrollView
                            contentContainerStyle={{
                                flex: 1,
                                width: '100%',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                marginBottom: SH(50)
                            }}>
                            <View style={PaymentscreenStyle.chideContainer}>
                                <View style={PaymentscreenStyle.sectionView}>
                                    <Image source={images.ic_point} style={PaymentscreenStyle.iconStyle} resizeMode={'stretch'} />
                                    <Text style={PaymentscreenStyle.leblaStyle}>Consultation Charges <Text style={[PaymentscreenStyle.leblaBoldStyle, { color: colorrdata }]}>Rs. 800</Text></Text>
                                </View>
                                <View style={PaymentscreenStyle.sectionView}>
                                    <Image source={images.ic_point} style={PaymentscreenStyle.iconStyle} resizeMode={'stretch'} />
                                    <Text style={PaymentscreenStyle.leblaStyle}>Pay now a non-refundable fee of <Text style={[PaymentscreenStyle.leblaBoldStyle, { color: colorrdata }]}>Rs. 200</Text> to reserve the appointment.</Text>
                                </View>
                                <View style={PaymentscreenStyle.sectionView}>
                                    <Image source={images.ic_point} style={PaymentscreenStyle.iconStyle} resizeMode={'stretch'} />
                                    <Text style={PaymentscreenStyle.leblaStyle}>Balance of <Text style={[PaymentscreenStyle.leblaBoldStyle, { color: colorrdata }]}>Rs. 600</Text> to be paid during consultation.</Text>
                                </View>
                            </View>
                            <Text style={[PaymentscreenStyle.leblaBoldStyle, { color: colorrdata }]}>{Strings.payment.upi_app}</Text>
                            <TouchableOpacity style={PaymentscreenStyle.flexrowsetnew} onPress={() => setDisplayAlert(1)}>
                                <View style={PaymentscreenStyle.setimagewidth}>
                                    <Image source={images.Googlepay} style={PaymentscreenStyle.app_icon} />
                                </View>
                                <Text style={PaymentscreenStyle.upi_label}>GPay</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={PaymentscreenStyle.flexrowsetnew} onPress={() =>  setDisplayAlert(1)}>
                                <View style={PaymentscreenStyle.setimagewidth}>
                                    <Image source={images.payapalicon} style={PaymentscreenStyle.app_icontwo} />
                                </View>
                                <Text style={PaymentscreenStyle.upi_label}>PayPal</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={PaymentscreenStyle.flexrowsetnew} onPress={() =>  setDisplayAlert(1)}>
                                <View style={PaymentscreenStyle.setimagewidth}>
                                    <Icon name="creditcard" style={PaymentscreenStyle.app_iconthree} size={25}></Icon>
                                </View>
                                <Text style={PaymentscreenStyle.upi_label}>Credit Card</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={Style.centeredView}>                       
                        {DisplayAlert !== 0 ?
                            <SweetaelertModal message='Payment Successfully' link={RouteName.HOME_TAB_SET} />
                            :
                            null
                        }
                     
                    </View>
                </View>
            </View>
        </Container>
    );
};
export default PaymentScreen;
