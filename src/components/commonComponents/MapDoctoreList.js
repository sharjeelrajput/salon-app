import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {DoctoreMapStyle} from '../../styles';
import { carouselItems } from '../../utils/sliderimage';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import RouteName from '../../routes/RouteName';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 5;
const entryBorderRadius = 8;
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

const FirstSliderimageScreen = ({ _slider1Ref }) => {
    const navigation = useNavigation();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const _renderItem = ({ item, index }) => {
        return (
            <View style={DoctoreMapStyle.sliderminview}>
                <TouchableOpacity style={DoctoreMapStyle.rounftextview} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                    <View style={DoctoreMapStyle.flexrowsetimage}>
                        <View>
                            {item.setprofileimage}
                        </View>
                        <View style={{width: '80%'}}>
                            <Text style={[DoctoreMapStyle.textContainer, { color: colorrdata }]}>
                                {item.title}
                            </Text>
                        </View>
                    </View>
                    <View style={DoctoreMapStyle.flexfeestect}>
                        <View style={DoctoreMapStyle.textContainertwo}>
                            <Text style={DoctoreMapStyle.textContainertwo}>
                                {item.paregraphtitle}
                            </Text>
                            {/* <Text style={DoctoreMapStyle.textContainerthree}>
                                {item.paregraphtitletwo}
                            </Text> */}
                        </View>
                        {/* <View>
                            <View style={DoctoreMapStyle.flexsettext}>
                                <Text style={DoctoreMapStyle.settextstyle}>{item.Feestwo}</Text>
                                <Text style={DoctoreMapStyle.boldtextstyle}>{item.Exptwo}</Text>
                            </View>
                        </View> */}
                    </View>
                    <View style={DoctoreMapStyle.setminflexstard}>
                        <View style={DoctoreMapStyle.setminflexview}>
                            <View style={DoctoreMapStyle.flexstar}>
                                {item.rating}
                            </View>
                            <View>
                                <Text style={DoctoreMapStyle.settextstyletwo}>{item.digittext}</Text>
                            </View>
                        </View>
                        <View style={DoctoreMapStyle.flexrowsettitle}>
                            <View style={DoctoreMapStyle.flexsettext}>
                                <Text style={DoctoreMapStyle.settextstyle}>{item.Exp}</Text>
                                <Text style={DoctoreMapStyle.boldtextstyle}>{item.Fees}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={DoctoreMapStyle.minbody}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                <Carousel
                    ref={c => _slider1Ref = c}
                    data={carouselItems}
                    renderItem={_renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={false}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    containerCustomStyle={DoctoreMapStyle.slider}
                    contentContainerCustomStyle={{ alignItems: 'center' }}
                    loop={false}
                    autoplay={false}
                    enableSnap={true}
                    bounces={false}
                    lockScrollWhileSnapping={true}
                />
            </View>
        </View>
    );
};
export default FirstSliderimageScreen;