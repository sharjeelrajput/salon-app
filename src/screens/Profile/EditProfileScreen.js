import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, TextInput, Pressable, } from 'react-native';
import moment from 'moment';
import images from '../../index';
import { Container, AppHeader, Input, Button, RadioButton, } from '../../components';
import DateTimePicker from "react-native-modal-datetime-picker";
import { colorsset, Strings } from '../../utils';
import RouteName from '../../routes/RouteName';
import Styles from '../../styles/LoginRegiesterStyle/RegisterScreenStyle';
import Style from '../../styles/CommonStyle/Style';
import { useTogglePasswordVisibility } from '../../utils/PasswordVisible';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { AlertDaynamicModal } from "../../components";


const EditProfile = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [emailId, setEmailId] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');

    const [dateOfBrith, setDateOfBrith] = useState(Strings.register.date_of_brith);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    


    var alertdata = {
        'logout': "Profile updated successfully",
    }
    const onoknutton = () => {
        navigation.navigate(RouteName.HOME_TAB_SET);
        okbutton;
    }

    const onChangeText = (text, type) => {
        if (type === 'user_name') setUsername(text);
        if (type === 'emaiId') setEmailId(text);
        if (type === 'mobile') setMobileNumber(text);
        if (type === 'password') setPassword(text);
        if (type === 'state') setState(text);
        if (type === 'city') setCity(text);
        if (type === 'pincode') setPincode(text);
    };
    const showDateTimePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDateTimePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleDatePicked = (date) => {
        hideDateTimePicker(),
            setDateOfBrith(moment(date, "YYYY-MM-DDTHH:mm:ss Z").local().format('DD-MM-YYYY'));
    };
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const [password, setPassword] = useState('');

    const { passwordVisibilitytwo, rightIcontwo, handlePasswordVisibilitytwo } =
        useTogglePasswordVisibility();
    const [conformpassword, setconformpassword] = useState('');
    useEffect(() => {
        navigation.addListener('focus', () => {
            // setDisplayAlert(0);
        });
    }, [navigation]);
    return (
        <Container>          
            <View style={[Styles.setbgcolorthe, {backgroundColor: colorsset.BackgroundColorScreen}]}>
                <AlertDaynamicModal
                    message={alertMessage}
                    modalVisible={alertVisible}
                    setModalVisible={setAlertVisible}
                    onPressCancel={() => setAlertVisible(!alertVisible)}
                    onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                  
                />
                <ScrollView
                    contentContainerStyle={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignContent: 'center',
                        height: 'auto'
                    }}>
                    <View style={[Styles.container, {backgroundColor: colorsset.BackgroundColorScreen}]}>
                        <View style={Style.minviewallcontent}>
                            <Input
                                placeholder={Strings.register.name_hint}
                                onChangeText={(text) => onChangeText(text, 'user_name')}
                                value={username}
                                inputStyle={Style.inputMobile}
                            />
                            <Input
                                placeholder={Strings.register.email_hint}
                                onChangeText={(text) => onChangeText(text, 'emaiId')}
                                value={emailId}
                                inputStyle={Style.inputMobile}
                            />
                            <TextInput
                                placeholder={Strings.register.mobile_number_hint}
                                onChangeText={(text) => onChangeText(text, 'mobile')}
                                value={mobileNumber}
                                keyboardType="numeric"
                                placeholderTextColor="#000"
                                style={Style.numberinputMobile}
                            />
                            <View style={Style.flexrowpassword}>
                                <TextInput
                                    style={Style.setinputpassword}
                                    name="password"
                                    placeholder={Strings.login.password}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibility}
                                    value={password}
                                    enablesReturnKeyAutomatically
                                    onChangeText={text => setPassword(text)}
                                    placeholderTextColor="#000"

                                />
                                <Pressable onPress={handlePasswordVisibility}>
                                    <IconG name={rightIcon} size={25} style={Styles.eyeiconset} />
                                </Pressable>
                            </View>
                            <View style={Style.flexrowpassword}>
                                <TextInput
                                    style={Style.setinputpassword}
                                    name="password"
                                    placeholder={Strings.register.confirm_password_hint}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibilitytwo}
                                    value={conformpassword}
                                    enablesReturnKeyAutomatically
                                    onChangeText={text => setconformpassword(text)}
                                    placeholderTextColor="#000"
                                />
                                <Pressable onPress={handlePasswordVisibilitytwo}>
                                    <IconG name={rightIcontwo} size={25} style={Styles.eyeiconset} />
                                </Pressable>
                            </View>
                            <View style={Styles.inputviewstyle}>
                                <View style={Styles.setinputwidth}>
                                    <Input
                                        placeholder={Strings.register.state_hint}
                                        onChangeText={(text) => onChangeText(text, 'state')}
                                        value={state}
                                        inputStyle={Style.inputMobile}
                                    />
                                </View>
                                <View style={Styles.setinputwidth}>
                                    <Input
                                        placeholder={Strings.register.city_hint}
                                        onChangeText={(text) => onChangeText(text, 'city')}
                                        value={city}
                                        inputStyle={Style.inputMobile}
                                    />
                                </View>
                            </View>
                            <TextInput
                                placeholder={Strings.register.pincode_hint}
                                onChangeText={(text) => onChangeText(text, 'pincode')}
                                value={pincode}
                                keyboardType={"numeric"}
                                placeholderTextColor="#000"
                                style={Style.numberinputMobile}
                            />
                            <View style={Styles.setgenderview}>
                                <Text style={Styles.genderLabelStyle}>{Strings.register.gender_hint}</Text>
                                <View style={Styles.redioButtonVide}>
                                    <RadioButton />
                                </View>
                            </View>
                            <TouchableOpacity style={Styles.dobView} onPress={() => showDateTimePicker()}>
                                <Text style={Styles.dobStyle}>{dateOfBrith}</Text>
                            </TouchableOpacity>
                            <View style={Styles.setbuttonview}>
                                <Button
                                    title={Strings.ChangePassword.update}
                                    onPress={
                                        () =>
                                     {   setAlertMessage(alertdata.logout);
                                        Setokbutton('')
                                        setAlertVisible(true);
                                      }
                                        
                                      }
                                    style={Styles.button} />
                            </View>
                            
                        </View>
                    </View>
                </ScrollView>
                <DateTimePicker
                    isVisible={isDatePickerVisible}
                    onConfirm={handleDatePicked}
                    onCancel={hideDateTimePicker}
                />
            </View>
        </Container >
    );
};
export default EditProfile;
