import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { colorsset, SH, Strings } from './../../../utils';
import images from '../../../index';
import RouteName from './../../../routes/RouteName';
import Styles from '../../../styles/Tabstyle/ProfileScreenStyle';
import Style from '../../../styles/CommonStyle/Style';
import { useSelector } from "react-redux";
import { ConfirmationAlert } from "../../../components";
import IconE from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFO from 'react-native-vector-icons/Fontisto';








const ProfileTab = ({ navigation }) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    const [cancelbutton, SetCancelbutton] = useState('Cancel');

    var alertdata = {
        'logout': " Are you sure want to logout?",
    }

    const onoknutton = () => {
        navigation.navigate(RouteName.LOGIN_SCREEN);
        okbutton;
    }
    return (

        <View style={[Styles.minstyleviewphotograpgy, { backgroundColor: colorsset.BackgroundColorScreen }]}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: '100%',
                }}>
                <View style={Styles.container}>
                    <View style={Style.minviewallcontent}>
                        <View style={Styles.cardView}>
                            <View style={[Styles.sectionView, { justifyContent: 'space-between' }]}>
                                <View style={{ flexDirection: 'row' }}>
                                    {/* <Image source={images.ic_profileF} style={Styles.iconStyle} resizeMode={'stretch'} /> */}
                                    <IconE name='home' size={20} color={colorrdata} />
                                    <Text style={Styles.leblaStyle}>John Deo</Text>
                                </View>
                                <TouchableOpacity style={{ right: SH(10) }}
                                    onPress={() => navigation.navigate(RouteName.EDIT_PROFILE)}><Text style={[Styles.editLableStyle, { color: colorrdata }]}>{Strings.Profile.edit}</Text></TouchableOpacity>
                            </View>
                            <View style={Styles.sectionView}>
                                <IconI name='ios-call' size={20} color={colorrdata} />
                                <Text style={Styles.leblaStyle}>9876543210</Text>
                            </View>
                            <View style={Styles.sectionView}>
                                <IconF name='mail' size={20} color={colorrdata} />
                                <Text style={Styles.leblaStyle}>john@gmail.com</Text>
                            </View>
                            <View style={Styles.sectionView}>
                                <IconFA name='location-arrow' size={20} color={colorrdata} />
                                <Text style={Styles.leblaStyle}>1600 Amphitheatre Parkway, Mountain View, California, U.S.</Text>
                            </View>
                            <View style={Styles.sectionView}>
                                <IconF name='user' size={20} color={colorrdata} />
                                <Text style={Styles.leblaStyle}>Male</Text>
                            </View>
                            <View style={Styles.sectionView}>
                                <IconFO name='date' size={20} color={colorrdata} />
                                <Text style={Styles.leblaStyle}>04-05-1995</Text>
                            </View>
                            <View style={Styles.sectionView}>
                                <IconE name='info' size={20} color={colorrdata} />
                                <Text style={Styles.leblaStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            </View>
                        </View>
                        <View style={Styles.settwobuttonset}>
                            <TouchableOpacity style={[Styles.changePasswordView, { backgroundColor: colorrdata }]}
                                onPress={() => navigation.navigate(RouteName.CHANGE_PASSWORD)}>
                                <Text style={Styles.changePasswordlabel}>{Strings.Profile.change_password}</Text>
                                <IconFA name='long-arrow-right' size={20} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={[Styles.changePasswordView, { backgroundColor: colorrdata }]}
                                onPress={() => {
                                    setAlertVisible(true);
                                    setAlertMessage(alertdata.logout);
                                    Setokbutton('');
                                }}>
                                <Text style={Styles.changePasswordlabel}>Logout</Text>
                                <IconFA name='long-arrow-right' size={20} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ConfirmationAlert
                        message={alertMessage}
                        modalVisible={alertVisible}
                        setModalVisible={setAlertVisible}
                        onPressCancel={() => setAlertVisible(!alertVisible)}
                        onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                        cancelButtonText={cancelbutton}
                    />
                </View>
            </ScrollView>
        </View>

    )
}
export default ProfileTab;
