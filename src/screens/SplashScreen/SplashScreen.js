import React, { useEffect } from 'react';
import { View, Image, StatusBar, } from 'react-native';
import images from '../../index';
import Styles from '../../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { colorsset } from '../../utils';

const SplashScreen = ({ navigation }) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('user_id').then((value) =>
                navigation.replace('GetstartedSliderscreen')
            );
        }, 2100);
        dispatch(color_picker_set_action('#000'))
    }, []);
    return (
        <View style={[Styles.minviewsplash, { backgroundColor: colorsset.BackgroundColorScreen }]}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <View style={Styles.setminviewsplash}>
                <Image resizeMode='center' source={images.logo} style={Styles.Setimagestyle} />
            </View>
        </View>
    );
};
export default SplashScreen;
