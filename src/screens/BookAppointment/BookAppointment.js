import React, { useState } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, Modal, } from 'react-native';
import { Container } from '../../components';
import { colorsset, SH, Strings, } from '../../utils';
import images from '../../index';
import RouteName from '../../routes/RouteName';
import { HomeTabStyle } from '../../styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconI from 'react-native-vector-icons/dist/Ionicons';

import { useSelector } from "react-redux";

const BookAppointment = ({ navigation }) => {
    const [tabShow, setTabshow] = useState('1');
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibletwo, setModalVisibletwo] = useState(false);

    const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
    return (
        <Container>
            <View style={[HomeTabStyle.setbgcolor, { backgroundColor: colorsset.BackgroundColorScreen }]}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: '100%',
                    }}>
                    <View style={[HomeTabStyle.container, { backgroundColor: colorrdata }]}>
                        <View style={HomeTabStyle.headerMainView}>
                            <Image source={doctoreDetaile.image}
                                style={HomeTabStyle.dr_imageView} />
                            <View style={HomeTabStyle.headerTextView} >
                                <Text style={HomeTabStyle.headerTextBoldTwo}>{doctoreDetaile.text}</Text>                               
                                    <Text style={HomeTabStyle.headerTextNormal}>Mackup Artist</Text>                            
                                    {/* <Text style={HomeTabStyle.headerTextNormal}>{doctoreDetaile.Spe}</Text> */}
                           
                            </View>
                        </View>
                    </View>
                    <View style={HomeTabStyle.setviewstyle}>
                        <View
                            style={HomeTabStyle.sectionstyle}>
                            <View style={{ marginBottom: SH(10) }}>

                                <View style={HomeTabStyle.sectionView}>
                                    <Text style={HomeTabStyle.lableTextStyle}>{Strings.Home.choose_your_slot}</Text>
                                    <View style={HomeTabStyle.item} >
                                        <View style={{ flexDirection: 'row' }}>
                                            <ScrollView
                                                horizontal={true}
                                                showsHorizontalScrollIndicator={false}
                                            >
                                                <View style={HomeTabStyle.setmarginright}>
                                                    <Text style={HomeTabStyle.itemText}>sun</Text>
                                                    <TouchableOpacity onPress={() => setTabshow('1')}>
                                                        <Text style={[HomeTabStyle.textcenterbgcolor, { borderColor: colorrdata }]}>1</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={HomeTabStyle.setmarginright}>
                                                    <Text style={HomeTabStyle.itemText}>Mon</Text>
                                                    <TouchableOpacity onPress={() => setTabshow('2')}>
                                                        <Text style={[HomeTabStyle.textcenter, { backgroundColor: colorrdata }]}>2</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={HomeTabStyle.setmarginright}>
                                                    <Text style={HomeTabStyle.itemText}>Tue</Text>
                                                    <TouchableOpacity onPress={() => setTabshow('1')}>
                                                        <Text style={HomeTabStyle.textcenterbgcolor}>3</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={HomeTabStyle.setmarginright}>
                                                    <Text style={HomeTabStyle.itemText}>Wed</Text>
                                                    <TouchableOpacity onPress={() => setTabshow('2')}>
                                                        <Text style={[HomeTabStyle.textcenter, { backgroundColor: colorrdata }]}>4</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={HomeTabStyle.setmarginright}>
                                                    <Text style={HomeTabStyle.itemText}>Thu</Text>
                                                    <TouchableOpacity onPress={() => setTabshow('1')}>
                                                        <Text style={HomeTabStyle.textcenterbgcolor}>5</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={HomeTabStyle.setmarginright}>
                                                    <Text style={HomeTabStyle.itemText}>Fri</Text>
                                                    <TouchableOpacity onPress={() => setTabshow('2')}>
                                                        <Text style={[HomeTabStyle.textcenter, { backgroundColor: colorrdata }]}>6</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={HomeTabStyle.setmarginright}>
                                                    <Text style={HomeTabStyle.itemText}>Sat</Text>
                                                    <TouchableOpacity onPress={() => setTabshow('1')}>
                                                        <Text style={HomeTabStyle.textcenterbgcolor}>7</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={HomeTabStyle.setmarginright}>
                                                    <Text style={HomeTabStyle.itemText}>Sun</Text>
                                                    <TouchableOpacity onPress={() => setTabshow('2')}>
                                                        <Text style={[HomeTabStyle.textcenter, { backgroundColor: colorrdata }]}>8</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={HomeTabStyle.setmarginright}>
                                                    <Text style={HomeTabStyle.itemText}>Mon</Text>
                                                    <TouchableOpacity onPress={() => setTabshow('1')}>
                                                        <Text style={HomeTabStyle.textcenterbgcolor}>9</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={HomeTabStyle.setmarginright}>
                                                    <Text style={HomeTabStyle.itemText}>Tue</Text>
                                                    <TouchableOpacity onPress={() => setTabshow('2')}>
                                                        <Text style={[HomeTabStyle.textcenter, { backgroundColor: colorrdata }]}>10</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={HomeTabStyle.setmarginright}>
                                                    <Text style={HomeTabStyle.itemText}>Wed</Text>
                                                    <TouchableOpacity onPress={() => setTabshow('1')}>
                                                        <Text style={HomeTabStyle.textcenterbgcolor}>11</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </ScrollView>
                                        </View>
                                    </View>
                                </View>
                                {tabShow == '1' ?
                                    <View >
                                        <Text style={HomeTabStyle.lableTextStylemorning}>{Strings.Home.morning}</Text>
                                        <View style={HomeTabStyle.setteobuttonminviews}>
                                            <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisible(true)}>
                                                <Text style={[HomeTabStyle.settextborder, { backgroundColor: colorrdata }]}>06:30  To  7:30</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisible(true)}>
                                                <Text style={[HomeTabStyle.settextborder, { backgroundColor: colorrdata }]}>8:30  To  09:00</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={HomeTabStyle.setteobuttonminviews}>
                                            <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisibletwo(true)}>
                                                <Text style={HomeTabStyle.settextbordertwo}>09:30  To  012:30</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisibletwo(true)}>
                                                <Text style={HomeTabStyle.settextbordertwo}>02:30  To  04:00</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: 25, }}>
                                            <Text style={HomeTabStyle.lableTextStylemorning}>{Strings.Home.evening}</Text>
                                            <View style={HomeTabStyle.setteobuttonminviews}>
                                                <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisible(true)}>
                                                    <Text style={[HomeTabStyle.settextborder, { backgroundColor: colorrdata }]}>07:30  To  08:00</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisibletwo(true)}>
                                                    <Text style={HomeTabStyle.settextbordertwo}>08:20  To  09:00</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={HomeTabStyle.setteobuttonminviews}>
                                                <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisibletwo(true)}>
                                                    <Text style={HomeTabStyle.settextbordertwo}>09:00  To  09:30</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisibletwo(true)}>
                                                    <Text style={HomeTabStyle.settextbordertwo}>10:30  To  11:00</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    : null}
                                {tabShow == '2' ?
                                    <View style={{ width: '100%', marginTop: 15, }}>
                                        <Text style={HomeTabStyle.lableTextStylemorning}>{Strings.Home.morning}</Text>
                                        <View style={HomeTabStyle.setteobuttonminviews}>
                                            <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisibletwo(true)}>
                                                <Text style={HomeTabStyle.settextbordertwo}>07:30  To  8:00</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisible(true)}>
                                                <Text style={[HomeTabStyle.settextborder, { backgroundColor: colorrdata }]}>8:00  To  09:30</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={HomeTabStyle.setteobuttonminviews}>
                                            <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisibletwo(true)}>
                                                <Text style={HomeTabStyle.settextbordertwo}>09:30  To  010:30</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisible(true)}>
                                                <Text style={[HomeTabStyle.settextborder, { backgroundColor: colorrdata }]}>10:30  To  12:00</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: 25, }}>
                                            <Text style={HomeTabStyle.lableTextStylemorning}>{Strings.Home.evening}</Text>
                                            <View style={HomeTabStyle.setteobuttonminviews}>
                                                <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisible(true)}>
                                                    <Text style={[HomeTabStyle.settextborder, { backgroundColor: colorrdata }]}>04:30  To  05:30</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisible(true)}>
                                                    <Text style={HomeTabStyle.settextbordertwo}>07:30  To  8:00</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={HomeTabStyle.setteobuttonminviews}>
                                                <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisibletwo(true)}>
                                                    <Text style={HomeTabStyle.settextbordertwo}>06:30  To  08:30</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={HomeTabStyle.settoucheblewidth} onPress={() => setModalVisibletwo(true)}>
                                                    <Text style={HomeTabStyle.settextbordertwo}>08:30  To  09:30</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    : null}
                                <View style={HomeTabStyle.setpaymentview}>
                                </View>
                            </View>
                        </View>
                        <View style={HomeTabStyle.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                            >
                                <View style={HomeTabStyle.setbgcolorgrsay}>
                                    <View style={HomeTabStyle.centeredView}>
                                        <View style={HomeTabStyle.modalView}>
                                            <View style={HomeTabStyle.settitlemodalview}>
                                                <Text style={[HomeTabStyle.modelTitle, { color: colorrdata }]}>{Strings.Home.your_appointment}</Text>
                                            </View>
                                            <TouchableOpacity
                                                style={[HomeTabStyle.closeIcon, { backgroundColor: colorrdata }]}
                                                onPress={() => setModalVisible(!modalVisible)}
                                            >
                                                <Icon name="close" size={30} style={HomeTabStyle.iconclosestyle} />
                                            </TouchableOpacity>
                                            <View style={[HomeTabStyle.headerMainView, { marginTop: SH(30), position: 'relative' }]}>
                                                <Image source={images.APP_BarberTwo}
                                                    style={HomeTabStyle.dr_imageView} />
                                                <View style={HomeTabStyle.headerTextView} >
                                                    <Text style={HomeTabStyle.headerTextBold}>Allina Petterson</Text>
                                                    <Text style={HomeTabStyle.modalrtextset}>professionalist</Text>
                                                </View>
                                            </View>
                                            <View style={HomeTabStyle.setflexrowtwobutton}>
                                                <View style={HomeTabStyle.SetFlexRow}>
                                                    <Text style={HomeTabStyle.Placetext}>Track the place</Text>
                                                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.MAP_SCREEN)}>
                                                        <IconI name='md-location-sharp' size={25} color={colorrdata} />
                                                    </TouchableOpacity>
                                                </View>

                                                {/* <TouchableOpacity style={[HomeTabStyle.iconbgcolor, { backgroundColor: colorrdata }]}
                                                    onPress={() => { setModalVisible(!modalVisible); navigation.navigate(RouteName.AUDIOCALL_SET) }}>
                                                    <Text style={HomeTabStyle.setsudiocalltext}>Audio Call</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[HomeTabStyle.iconbgcolortwo, { backgroundColor: colorrdata }]}
                                                    onPress={() => { setModalVisible(!modalVisible); navigation.navigate(RouteName.VIDEOCALL) }}
                                                >
                                                    <Text style={HomeTabStyle.setsudiocalltext}>Video Call</Text>
                                                </TouchableOpacity> */}
                                            </View>
                                            <View style={HomeTabStyle.modelBottomView}>
                                                <View style={HomeTabStyle.modelHorizontal}>
                                                    <Image source={images.ic_calender}
                                                        style={[HomeTabStyle.horizontalTiconViewextStyle, { tintColor: colorrdata }]}
                                                        resizeMode={'stretch'} />
                                                    <Text style={[HomeTabStyle.horizontalTextStyle, { color: colorrdata }]}>Monday, 20 Dec</Text>
                                                </View>
                                                <View style={HomeTabStyle.modelHorizontal}>
                                                    <Image source={images.ic_clock}
                                                        style={[HomeTabStyle.horizontalTiconViewextStyle, { tintColor: colorrdata }]}
                                                        resizeMode={'stretch'} />
                                                    <Text style={[HomeTabStyle.horizontalTextStyle, { color: colorrdata }]}>10:00 - 10:30 AM</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={HomeTabStyle.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisibletwo}
                            >
                                <View style={HomeTabStyle.setbgcolorgrsay}>
                                    <View style={HomeTabStyle.centeredView}>
                                        <View style={HomeTabStyle.modalView}>
                                            <View style={HomeTabStyle.settitlemodalview}>
                                                <Text style={[HomeTabStyle.modelTitle, { color: colorrdata }]}>{Strings.Home.your_appointment}</Text>
                                            </View>
                                            <TouchableOpacity
                                                style={[HomeTabStyle.closeIcon, { backgroundColor: colorrdata }]}
                                                onPress={() => setModalVisibletwo(!modalVisibletwo)}
                                            >
                                                <Icon name="close" size={30} style={HomeTabStyle.iconclosestyle} />
                                            </TouchableOpacity>
                                            <View style={[HomeTabStyle.headerMainView, { marginTop: SH(30), position: 'relative' }]}>
                                                <Image source={images.salon2}
                                                    style={HomeTabStyle.dr_imageView} />
                                                <View style={HomeTabStyle.headerTextView} >
                                                    <Text style={HomeTabStyle.headerTextBold}>Julley Warney</Text>
                                                    <Text style={HomeTabStyle.modalrtextset}>Hair cutting specialist</Text>
                                                </View>
                                            </View>
                                            <View style={HomeTabStyle.setbuttonminviewModal}>
                                                <View style={HomeTabStyle.setbuttonviewModal}>
                                                    <TouchableOpacity style={[HomeTabStyle.bookBtnView, { backgroundColor: colorrdata }]}
                                                        onPress={() => { setModalVisibletwo(!modalVisibletwo); navigation.navigate(RouteName.PAYMENT) }}>
                                                        <Text style={HomeTabStyle.bookPayStyle}>{Strings.Home.pay_book}</Text>
                                                        {/* <Image source={images.ic_arrow_next}
                                                            style={HomeTabStyle.nextIcon}
                                                            resizeMode={'contain'} /> */}
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={HomeTabStyle.modelBottomView}>
                                                <View style={HomeTabStyle.modelHorizontal}>
                                                    <Image source={images.ic_calender}
                                                        style={[HomeTabStyle.iconView, { tintColor: colorrdata }]}
                                                        resizeMode={'stretch'} />
                                                    <Text style={[HomeTabStyle.horizontalTextStyle, { color: colorrdata }]}>Monday, 29 March</Text>
                                                </View>
                                                <View style={HomeTabStyle.modelHorizontal}>
                                                    <Image source={images.ic_clock}
                                                        style={[HomeTabStyle.iconView, { tintColor: colorrdata }]}
                                                        resizeMode={'stretch'} />
                                                    <Text style={[HomeTabStyle.horizontalTextStyle, { color: colorrdata }]}>05:00 - 6:30 PM</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        {/* third modal for top */}


                    </View>
                </ScrollView>
            </View>
        </Container>
    )
}
export default BookAppointment;
