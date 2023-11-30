import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { RouteName } from '../../../routes';
import images from '../../../index';
import { Container, Button } from '../../../components';
import {PaymentHistory} from '../../../styles';
import IconM from 'react-native-vector-icons/dist/MaterialIcons';
import IconF from 'react-native-vector-icons/dist/FontAwesome';
import { colorsset } from '../../../utils';


const HistoryTab = (props) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
    const { navigation } = props;

    return (
        <Container>
            <View style={[PaymentHistory.setcontainer, {backgroundColor: colorsset.BackgroundColorScreen}]}>
                <ScrollView style={{
                    height: '100%',
                    width: '100%',
                }}>
                    <View style={PaymentHistory.ContainerAppointmentWrap}>
                        <View style={PaymentHistory.PaymentBoxwrap}>
                            <View style={PaymentHistory.PaymentBoxPerent}>
                                <View style={PaymentHistory.PaymentBox}>
                                    <View>
                                        <Image source={images.payapalicon} style={PaymentHistory.PaymentIcon} resizeMode='contain' />                                      
                                    </View>
                                    <View style={PaymentHistory.payemnttimebox}>
                                        <Text style={PaymentHistory.PayemnttranferheadText}>Paypal</Text>
                                        <Text style={PaymentHistory.PaymentTimeText}>Dec,9 2022 at 11:00 AM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistory.PaymentAounttextpadright}>
                                    <Text style={PaymentHistory.PaymentAounttext}><IconF name="dollar" style={PaymentHistory.PaymentAountIcon} />{' '}90</Text>
                                    <Text style={[PaymentHistory.PayemntStatus, PaymentHistory.PayementSuccess]}>Successfull</Text>
                                </View>
                            </View>
                            <View style={PaymentHistory.PaymentBoxPerent}>
                                <View style={PaymentHistory.PaymentBox}>
                                    <View >
                                    <Image source={images.applepay} style={PaymentHistory.PaymentIcon} resizeMode='contain' />
                                       
                                    </View>
                                    <View style={PaymentHistory.payemnttimebox}>
                                        <Text style={PaymentHistory.PayemnttranferheadText}>Apple Pay</Text>
                                        <Text style={PaymentHistory.PaymentTimeText}>Dec,8 2022 at 12:00 AM</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={PaymentHistory.PaymentAounttext}><IconF name="dollar" style={PaymentHistory.PaymentAountIcon} />{' '}30</Text>
                                    <Text style={[PaymentHistory.PayemntStatus,PaymentHistory.PayementSuccess]}>Successfull</Text>
                                </View>
                            </View>
                            <View style={PaymentHistory.PaymentBoxPerent}>
                                <View style={PaymentHistory.PaymentBox}>
                                    <View >
                                    <Image source={images.applepay} style={PaymentHistory.PaymentIcon} resizeMode='contain' />
                                       
                                    </View>
                                    <View style={PaymentHistory.payemnttimebox}>
                                        <Text style={PaymentHistory.PayemnttranferheadText}>Apple Pay</Text>
                                        <Text style={PaymentHistory.PaymentTimeText}>Dec,8 2022 at 01:00 PM</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={PaymentHistory.PaymentAounttext}><IconF name="dollar" style={PaymentHistory.PaymentAountIcon} />{' '}30</Text>
                                    <Text style={[PaymentHistory.PayemntStatus, PaymentHistory.PayementFaild]}>failed</Text>
                                </View>
                            </View>
                            <View style={PaymentHistory.PaymentBoxPerent}>
                                <View style={PaymentHistory.PaymentBox}>
                                    <View >
                                        <Image source={images.payapalicon} style={PaymentHistory.PaymentIcon} resizeMode='contain' />
                                      
                                    </View>
                                    <View style={PaymentHistory.payemnttimebox}>
                                        <Text style={PaymentHistory.PayemnttranferheadText}>Paypal</Text>
                                        <Text style={PaymentHistory.PaymentTimeText}>Dec,7 2022 at 02:00 PM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistory.PaymentAounttextpadright}>
                                    <Text style={PaymentHistory.PaymentAounttext}><IconF name="dollar" style={PaymentHistory.PaymentAountIcon} />{' '}40</Text>
                                    <Text style={[PaymentHistory.PayemntStatus, PaymentHistory.PayementPending]}>Pending</Text>
                                </View>
                            </View>
                            <View style={PaymentHistory.PaymentBoxPerent}>
                                <View style={PaymentHistory.PaymentBox}>
                                    <View >
                                    <Image source={images.cardpayment} style={PaymentHistory.PaymentIcon} resizeMode='contain' />
                                     
                                    </View>
                                    <View style={PaymentHistory.payemnttimebox}>
                                        <Text style={PaymentHistory.PayemnttranferheadText}>Card</Text>
                                        <Text style={PaymentHistory.PaymentTimeText}>Dec,6 2022 at 03:00 PM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistory.PaymentAounttextpadright}>
                                    <Text style={PaymentHistory.PaymentAounttext}><IconF name="dollar" style={PaymentHistory.PaymentAountIcon} />{' '}23</Text>
                                    <Text style={[PaymentHistory.PayemntStatus, PaymentHistory.PayementSuccess]}>Successfull</Text>
                                </View>
                            </View>
                            <View style={PaymentHistory.PaymentBoxPerent}>
                                <View style={PaymentHistory.PaymentBox}>
                                    <View >
                                    <Image source={images.visapayment} style={PaymentHistory.PaymentIcon} resizeMode='contain' />
                                        
                                    </View>
                                    <View style={PaymentHistory.payemnttimebox}>
                                        <Text style={PaymentHistory.PayemnttranferheadText}>Visa</Text>
                                        <Text style={PaymentHistory.PaymentTimeText}>Dec,5 2022 at 04:00 PM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistory.PaymentAounttextpadright}>
                                    <Text style={PaymentHistory.PaymentAounttext}><IconF name="dollar" style={PaymentHistory.PaymentAountIcon} />{' '}55</Text>
                                    <Text style={[PaymentHistory.PayemntStatus, PaymentHistory.PayementSuccess]}>Successfull</Text>
                                </View>
                            </View>
                            <View style={PaymentHistory.PaymentBoxPerent}>
                                <View style={PaymentHistory.PaymentBox}>
                                    <View >
                                        <Image source={images.payapalicon} style={PaymentHistory.PaymentIcon} resizeMode='contain' />
                                       
                                    </View>
                                    <View style={PaymentHistory.payemnttimebox}>
                                        <Text style={PaymentHistory.PayemnttranferheadText}>Paypal</Text>
                                        <Text style={PaymentHistory.PaymentTimeText}>Dec,1 2022 at 8:00 PM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistory.PaymentAounttextpadright}>
                                    <Text style={PaymentHistory.PaymentAounttext}><IconF name="dollar" style={PaymentHistory.PaymentAountIcon} />{' '}90</Text>
                                    <Text style={[PaymentHistory.PayemntStatus, PaymentHistory.PayementSuccess]}>Successfull</Text>
                                </View>
                            </View>
                            <View style={PaymentHistory.PaymentBoxPerent}>
                                <View style={PaymentHistory.PaymentBox}>
                                    <View >
                                    <Image source={images.applepay} style={PaymentHistory.PaymentIcon} resizeMode='contain' />
                                      
                                    </View>
                                    <View style={PaymentHistory.payemnttimebox}>
                                        <Text style={PaymentHistory.PayemnttranferheadText}>Apple Pay</Text>
                                        <Text style={PaymentHistory.PaymentTimeText}>Dec,2 2022 at 11:00 PM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistory.PaymentAounttextpadright}>
                                    <Text style={PaymentHistory.PaymentAounttext}><IconF name="dollar" style={PaymentHistory.PaymentAountIcon} />{' '}30</Text>
                                    <Text style={[PaymentHistory.PayemntStatus, PaymentHistory.PayementFaild]}>failed</Text>
                                </View>
                            </View>
                            <View style={PaymentHistory.PaymentBoxPerent}>
                                <View style={PaymentHistory.PaymentBox}>
                                    <View >
                                        <Image source={images.payapalicon} style={PaymentHistory.PaymentIcon} resizeMode='contain' />
                                       
                                    </View>
                                    <View style={PaymentHistory.payemnttimebox}>
                                        <Text style={PaymentHistory.PayemnttranferheadText}>Paypal</Text>
                                        <Text style={PaymentHistory.PaymentTimeText}>Dec,3 2022 at 05:00 PM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistory.PaymentAounttextpadright}>
                                    <Text style={PaymentHistory.PaymentAounttext}><IconF name="dollar" style={PaymentHistory.PaymentAountIcon} />{' '}40</Text>
                                    <Text style={[PaymentHistory.PayemntStatus, PaymentHistory.PayementPending]}>Pending</Text>
                                </View>
                            </View>
                            <View style={PaymentHistory.PaymentBoxPerent}>
                                <View style={PaymentHistory.PaymentBox}>
                                    <View >
                                    <Image source={images.cardpayment} style={PaymentHistory.PaymentIcon} resizeMode='contain' />
                                      
                                    </View>
                                    <View style={PaymentHistory.payemnttimebox}>
                                        <Text style={PaymentHistory.PayemnttranferheadText}>Card</Text>
                                        <Text style={PaymentHistory.PaymentTimeText}>Dec,4 2022 at 05:00 AM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistory.PaymentAounttextpadright}>
                                    <Text style={PaymentHistory.PaymentAounttext}><IconF name="dollar" style={PaymentHistory.PaymentAountIcon} />{' '}23</Text>
                                    <Text style={[PaymentHistory.PayemntStatus, PaymentHistory.PayementSuccess]}>Successfull</Text>
                                </View>
                            </View>
                            <View style={PaymentHistory.PaymentBoxPerent}>
                                <View style={PaymentHistory.PaymentBox}>
                                    <View >
                                    <Image source={images.visapayment} style={PaymentHistory.PaymentIcon} resizeMode='contain' />                                      
                                    </View>
                                    <View style={PaymentHistory.payemnttimebox}>
                                        <Text style={PaymentHistory.PayemnttranferheadText}>Visa</Text>
                                        <Text style={PaymentHistory.PaymentTimeText}>Dec,5 2022 at 8:00 AM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistory.PaymentAounttextpadright}>
                                    <Text style={PaymentHistory.PaymentAounttext}><IconF name="dollar" style={PaymentHistory.PaymentAountIcon} />{' '}55</Text>
                                    <Text style={[PaymentHistory.PayemntStatus, PaymentHistory.PayementSuccess]}>Successfull</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </ScrollView>
            </View>
        </Container>
    );
}
export default HistoryTab;
