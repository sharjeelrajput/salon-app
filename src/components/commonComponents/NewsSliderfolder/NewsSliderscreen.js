import React, { useState, useRef } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Styles from '../../../styles/DefaultScreenStyle/NewsSliderScreen';
import { NewssliderScreen } from '../../../utils/sliderimage';
import { colorsset } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { get_doctore_detailes_action } from '../../../redux/action/DoctoreDataAction';
import { useSelector } from "react-redux";
import RouteName from '../../../routes/RouteName';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const SLIDER_WIDTH = viewportWidth;
export const ITEM_WIDTH = slideWidth + itemHorizontalMargin * 8;

const entryBorderRadius = 8;
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

const App = ({ _slider1Ref }) => {
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
    const doctordata = (docterdata) => {
        dispatch(get_doctore_detailes_action(docterdata))
        navigation.navigate(RouteName.DRAWER_NEWS_DETAILES_SCREEN)
    }
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={Styles.setwidthminview} onPress={() => doctordata(item)}>
                <View style={Styles.rounftextview}>
                    <View style={Styles.setwidthsaw}>
                        <View>
                            <Image source={item.image} style={Styles.setimagerstylewidth} />

                        </View>
                        <View style={Styles.setpositionabsolute}>
                            <View style={Styles.bgcolorred}>
                                <Text style={Styles.textContainer}>{item.title}</Text>
                            </View>
                            <Text style={Styles.textContainertwo}>{item.paregraphtitle}</Text>
                            <Text style={Styles.textContainertwo}>{item.paregraphtitletwo}</Text>
                        </View>
                        <View style={Styles.positionabsolutedotlive}>
                            <Text style={Styles.textContainertwo}>{item.doticon}</Text>
                            <Text style={Styles.textContainertwosetlive}>{item.liveicon}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={Styles.exampleContainer}>
            <Carousel
                ref={c => _slider1Ref = c}
                data={NewssliderScreen}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                containerCustomStyle={Styles.slider}
                contentContainerCustomStyle={Styles.sliderContentContainer}
                loop={true}
                loopClonesPerSide={3}
                enableSnap={true}
                autoplay={true}
                autoplayDelay={400}
                autoplayInterval={3000}
                onSnapToItem={index => setIndex(index)}
            />
            <Pagination
                dotsLength={NewssliderScreen.length}
                activeDotIndex={index}
                carouselRef={c => _slider1Ref = c}
                containerStyle={Styles.paginationContainer}
                dotColor={'hsl(171.8, 44%, 80.4%)'}
                dotStyle={Styles.paginationDot}
                inactiveDotStyle={Styles.setdotactive}
                inactiveDotColor={colorsset.theme_backgound}
                inactiveDotOpacity={1}
                enableSnap={true}
                dotOpacity={0.5}
            />
        </View>
    );
};

export default App;