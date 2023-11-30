import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StatusBar, Pressable, } from 'react-native';
import { Button, Container, } from '../../components';
import { Strings } from '../../utils';
import RouteName from '../../routes/RouteName';
import Style from '../../styles/CommonStyle/Style';
import Styles from '../../styles/LoginRegiesterStyle/LoginScreenStyle';
import { useTogglePasswordVisibility } from '../../utils/Passwordviseble';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import images from '../../index';
import { colorsset } from '../../utils';

const LoginScreen = () => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState('');
    const [textInputpassword, setTextInputPassword] = useState('');
    const [Error1, setError1] = useState(0);
    const [Error2, setError2] = useState(0);
    const OnRegisterPress = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const checkTextInput = () => {
        if (!mobileNumber.trim()) {
            setError1(1)
            return;
        }
        if (!textInputpassword.trim()) {
            setError2(1)
            return;
        }
        return (
            navigation.navigate(RouteName.OTP_VERYFY_SCREEN)
        )
    };
    return (
             
            <View style={[Styles.minstyleviewphotograpgy, { backgroundColor: colorsset.BackgroundColorScreen }]}>
                 <StatusBar barStyle="light-content" backgroundColor="#000" />
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: 'auto',
                    }}>
                    <View style={Styles.container}>
                        <View style={Style.minviewallcontent}>
                            <View style={Styles.setimagviewlogin}>
                                <Image style={Styles.imagesetus} resizeMode='contain' source={images.logo} />
                            </View>
                            <View style={Styles.Flexrowvoiew}>
                            <View style={Styles.Animationstyleset}>
                            {/* <Lottie Lottiewidthstyle={Styles.Animationstyleset} source={images.staricon_animation} /> */}
                            </View>
                            <Text style={Styles.setpatintlogin}>Login</Text>
                            <View style={Styles.Animationstyleset}>
                            {/* <Lottie Lottiewidthstyle={Styles.Animationstyleset} source={images.staricon_animation} /> */}
                            </View>
                            </View>
                            <TextInput
                                placeholder={Strings.login.mobile_number_hint}
                                onChangeText={(value) => { setError1(0); setMobileNumber(value); }}
                                value={mobileNumber}
                                keyboardType="numeric"
                                style={Style.numberinputMobile}
                                placeholderTextColor="#000"
                            />
                            {Error1 === 1 ?
                                <Text style={Styles.pleseentername}>* Please Enter Mobile Number</Text>
                                : null
                            }
                            <View style={Style.flexrowpassword}>
                                <TextInput
                                    style={Style.setinputpassword}
                                    name="password"
                                    onPress={handlePasswordVisibility}
                                    placeholder={Strings.login.password}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibility}
                                    enablesReturnKeyAutomatically
                                    onChangeText={(value) => { setError2(0); setTextInputPassword(value); }}
                                    placeholderTextColor="#000"
                                />
                                <Pressable onPress={handlePasswordVisibility}>
                                    <IconG name={rightIcon} size={25} style={Styles.eyeiconset} />
                                </Pressable>
                            </View>
                            {Error2 === 1 ?
                                <Text style={Styles.pleseentername}>* Please Enter the password</Text>
                                : null
                            }
                            <View style={Styles.viewtextStyle}>
                                <Text style={Styles.textStyle}>{Strings.login.dont_have_any_account} <Text style={Styles.registerTextStyle} onPress={() => OnRegisterPress()}>{Strings.login.register}</Text></Text>
                            </View>
                            <View style={Styles.buttonviewsettopspace}>
                                <Button buttonStyle={{backgroundColor: colorrdata}}
                                    title={Strings.login.login}
                                    onPress={checkTextInput}
                                />
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
       
    );
}
export default LoginScreen;
