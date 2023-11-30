import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, ImageBackground, KeyboardAvoidingView, Pressable, TouchableOpacity } from "react-native";
import Styles from '../../styles/LoginRegiesterStyle/OtpScreenStyle';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Button from '../../components/commonComponents/Button';
import ConfirmationAlert from '../../components/commonComponents/ConfirmationAlert';
import images from '../../index';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { SweetaelertModal } from '../../components';
import { colorsset } from "../../utils";

const OtpScreenset = (props) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const navigation = useNavigation();
    const [DisplayAlert, setDisplayAlert] = useState(0);
    const [DisplayAlerttwo, setDisplayAlerttwo] = useState(0);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    const [cancelbutton, SetCancelbutton] = useState('Cancel');
    var alertdata = {
        'logout': "Resend OTP sent via SMS or to your email address",
    }

    const onoknutton = () => {
        navigation.navigate(RouteName.OTP_VERYFY_SCREEN);
        okbutton;
    }
    useEffect(() => {
        navigation.addListener('focus', () => {
            setDisplayAlert(0);
            setDisplayAlerttwo(0);
        });
    }, [navigation]);
    return (
            <View style={[Styles.minstyleviewphotograpgy,{backgroundColor: colorsset.BackgroundColorScreen}]}>
               <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: 'auto',
                    }}>
                    <KeyboardAvoidingView enabled>
                        <View style={Styles.minflexview}>
                            <View style={Styles.minviewsigninscreen}>
                                <Text style={[Styles.entersixdigittext, { color: colorrdata }]}>Enter 6 Digit OTP</Text>
                                <Text style={Styles.paregraph}>Enter the OTP code from the phone we just sent you.</Text>
                                <OTPInputView
                                    style={Styles.otpvistyleset}
                                    pinCount={6}
                                    autoFocusOnLoad={false}
                                    codeInputFieldStyle={Styles.otpinstyletype}
                                    codeInputHighlightStyle={Styles.otpinstyletype}
                                />
                                <View style={Styles.flexrowsettext}>
                                    <Text style={Styles.paregraphotpbottom}>Didn't receive OTP Code!</Text>
                                    <TouchableOpacity onPress={() => {
                                        setAlertVisible(true);
                                        setAlertMessage(alertdata.logout);
                                        Setokbutton('');
                                    }}>
                                        <Text style={Styles.resendtextbold}>Resend</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Button buttonStyle={{backgroundColor: colorrdata}} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}  title="Verify" />
                                </View>

                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                <ConfirmationAlert
                    message={alertMessage}
                    modalVisible={alertVisible}
                    setModalVisible={setAlertVisible}                   
                    onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}    
                    // buttonminview={Style.button}           
                />
            </View>
       
    );
};
export default OtpScreenset;
