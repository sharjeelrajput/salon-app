import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import images from '../../../index';
import { Container } from '../../../components';
import IconF from 'react-native-vector-icons/dist/AntDesign';
import IconFA from 'react-native-vector-icons/dist/FontAwesome5';
import IconE from 'react-native-vector-icons/dist/Entypo';
import {Prescription} from '../../../styles';
import { Rating } from 'react-native-ratings';
import { TextInput } from 'react-native';
import RouteName from '../../../routes/RouteName';
import { useDispatch } from "react-redux";
import { get_doctore_detailes_action } from '../../../redux/action/DoctoreDataAction';
import { useSelector } from "react-redux";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { BackgroundImage } from 'react-native-elements/dist/config';


const PrescriptionTab = (props) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};


    return (
        <Container>
            <BackgroundImage source={images.full_bg_img_hospital} style={Prescription.setbgimage} resizeMode='cover'>
                <View style={Prescription.minstyleviewphotograpgy}>
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        contentContainerStyle={{
                            width: '100%',
                            height: 'auto',
                        }}>
                        <View style={Prescription.container}>
                            <View style={Prescription.minviewallcontent}>                                
                                <View>                                    
                                    <View style={Prescription.MedicineTakeInfocoboxWrap}>
                                        <View>
                                            {/* <Icon /> */}
                                            <Text style={Prescription.MedicineName}>Peracetamol <Text style={Prescription.MedicinePower}>(500mg)</Text></Text>
                                        </View>
                                        <View style={Prescription.MedicineTakeInfocobox}>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={Prescription.MedicineTakeText}>When to take</Text>
                                                <Text style={Prescription.MedicineAfterTake}>Before Food</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextCenter]}>
                                                    <IconE name="back-in-time" style={[Prescription.MedicineTakeText, { color: colorrdata }]} /> Duration</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextCenter]}>3 Days</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextRight]}>Start On</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextRight]}>January 1, 2022</Text>
                                            </View>
                                        </View>
                                        <View><Text style={[Prescription.MedicineAfterTake, { color: colorrdata }]}><IconE name="star" /> Take one tablet 2 time a day</Text></View>
                                    </View>
                                    <View style={Prescription.MedicineTakeInfocoboxWrap}>
                                        <View>
                                            {/* <Icon /> */}
                                            <Text style={Prescription.MedicineName}>M-Clear WC <Text style={Prescription.MedicinePower}>(250mg)</Text></Text>
                                        </View>
                                        <View style={Prescription.MedicineTakeInfocobox}>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={Prescription.MedicineTakeText}>When to take</Text>
                                                <Text style={Prescription.MedicineAfterTake}>After Food</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextCenter]}>
                                                    <IconE name="back-in-time" style={[Prescription.MedicineTakeText, { color: colorrdata }]} /> Duration</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextCenter]}>1 Days</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextRight]}>Start On</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextRight]}>January 1, 2022</Text>
                                            </View>
                                        </View>
                                        <View><Text style={[Prescription.MedicineAfterTake, { color: colorrdata }]}><IconE name="star" /> Take one tablet 1 time a day</Text></View>
                                    </View>
                                    <View style={Prescription.MedicineTakeInfocoboxWrap}>
                                        <View>
                                            {/* <Icon /> */}
                                            <Text style={Prescription.MedicineName}>Cyclopam Tablet <Text style={Prescription.MedicinePower}>(250mg)</Text></Text>
                                        </View>
                                        <View style={Prescription.MedicineTakeInfocobox}>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={Prescription.MedicineTakeText}>When to take</Text>
                                                <Text style={Prescription.MedicineAfterTake}>Before Food</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextCenter]}>
                                                    <IconE name="back-in-time" style={[Prescription.MedicineTakeText, { color: colorrdata }]} /> Duration</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextCenter]}>2 Days</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextRight]}>Start On</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextRight]}>January 2, 2022</Text>
                                            </View>
                                        </View>
                                        <View><Text style={[Prescription.MedicineAfterTake, { color: colorrdata }]}><IconE name="star" /> Take one tablet 3 time a day</Text></View>
                                    </View>
                                    <View style={Prescription.MedicineTakeInfocoboxWrap}>
                                        <View>
                                            {/* <Icon /> */}
                                            <Text style={Prescription.MedicineName}>Cyra -D Capsul <Text style={Prescription.MedicinePower}>(250mg)</Text></Text>
                                        </View>
                                        <View style={Prescription.MedicineTakeInfocobox}>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={Prescription.MedicineTakeText}>When to take</Text>
                                                <Text style={Prescription.MedicineAfterTake}>After Food</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextCenter]}>
                                                    <IconE name="back-in-time" style={[Prescription.MedicineTakeText, { color: colorrdata }]} /> Duration</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextCenter]}>1 Days</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextRight]}>Start On</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextRight]}>January 3, 2022</Text>
                                            </View>
                                        </View>
                                        <View><Text style={[Prescription.MedicineAfterTake, { color: colorrdata }]}><IconE name="star" /> Take one tablet 2 time a day</Text></View>
                                    </View>
                                    <View style={Prescription.MedicineTakeInfocoboxWrap}>
                                        <View>
                                            {/* <Icon /> */}
                                            <Text style={Prescription.MedicineName}>Cetrizen Tablet <Text style={Prescription.MedicinePower}>(500mg)</Text></Text>
                                        </View>
                                        <View style={Prescription.MedicineTakeInfocobox}>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={Prescription.MedicineTakeText}>When to take</Text>
                                                <Text style={Prescription.MedicineAfterTake}>Before Food</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextCenter]}>
                                                    <IconE name="back-in-time" style={[Prescription.MedicineTakeText, { color: colorrdata }]} /> Duration</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextCenter]}>1 Days</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextRight]}>Start On</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextRight]}>January 4, 2022</Text>
                                            </View>
                                        </View>
                                        <View><Text style={[Prescription.MedicineAfterTake, { color: colorrdata }]}><IconE name="star" /> Take one tablet 1 time a day</Text></View>
                                    </View>
                                    <View style={Prescription.MedicineTakeInfocoboxWrap}>
                                        <View>
                                            {/* <Icon /> */}
                                            <Text style={Prescription.MedicineName}>Cheston Cold Tablet<Text style={Prescription.MedicinePower}>(250mg)</Text></Text>
                                        </View>
                                        <View style={Prescription.MedicineTakeInfocobox}>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={Prescription.MedicineTakeText}>When to take</Text>
                                                <Text style={Prescription.MedicineAfterTake}>Before Food</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextCenter]}>
                                                    <IconE name="back-in-time" style={[Prescription.MedicineTakeText, { color: colorrdata }]} /> Duration</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextCenter]}>2
                                                 Days</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextRight]}>Start On</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextRight]}>January 5, 2022</Text>
                                            </View>
                                        </View>
                                        <View><Text style={[Prescription.MedicineAfterTake, { color: colorrdata }]}><IconE name="star" /> Take one tablet 2 time a day</Text></View>
                                    </View>
                                    <View style={Prescription.MedicineTakeInfocoboxWrap}>
                                        <View>
                                            {/* <Icon /> */}
                                            <Text style={Prescription.MedicineName}>Clevam 625 Tablet<Text style={Prescription.MedicinePower}>(500mg)</Text></Text>
                                        </View>
                                        <View style={Prescription.MedicineTakeInfocobox}>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={Prescription.MedicineTakeText}>When to take</Text>
                                                <Text style={Prescription.MedicineAfterTake}>Before Food</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextCenter]}>
                                                    <IconE name="back-in-time" style={[Prescription.MedicineTakeText, { color: colorrdata }]} /> Duration</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextCenter]}>4 Days</Text>
                                            </View>
                                            <View style={Prescription.MedicineTakeboxpadHori}>
                                                <Text style={[Prescription.MedicineTakeText, Prescription.TextRight]}>Start On</Text>
                                                <Text style={[Prescription.MedicineAfterTake, Prescription.TextRight]}>January 6, 2022</Text>
                                            </View>
                                        </View>
                                        <View><Text style={[Prescription.MedicineAfterTake, { color: colorrdata }]}><IconE name="star" /> Take one tablet 3 time a day</Text></View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </BackgroundImage>
        </Container>
    );
}
export default PrescriptionTab;
