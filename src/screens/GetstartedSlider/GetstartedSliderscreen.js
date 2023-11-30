import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { GetstartedSliderStyle } from '../../styles';
import { Button } from '../../components';
import LottieAnimation from '../../components/commonComponents/LottieAnimation';
import images from '../../index';
import RouteName from '../../routes/RouteName';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";


const GetstartedSliderscreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const [showRealApp, setShowRealApp] = useState(false);
  const Getstarted = () => {
    setShowRealApp(false);
  };

  const RenderItem = ({ item }) => {
    return (
      <View>
        <View style={[GetstartedSliderStyle.minstyleviewphotograpgy, { backgroundColor: '#ffffff' }]}>
          <StatusBar barStyle="dark-content" backgroundColor={'#ffffff'} />
          <View>
            <View style={GetstartedSliderStyle.aligncenterview}>
              <View style={GetstartedSliderStyle.smallimagcenter}>
                <View style={GetstartedSliderStyle.imagsetview}>
                  {item.image}
                </View>
              </View>
              <View style={GetstartedSliderStyle.textcenterview}>
                <Text style={[GetstartedSliderStyle.longtitlestyletwo, { color: colorrdata }]}>
                  {item.longtitle}
                </Text>
                <Text style={GetstartedSliderStyle.longtitlestyletwo}>
                  {item.longtitletwo}
                </Text>
              </View>
              <View style={GetstartedSliderStyle.setimagviewtwo}>
                {item.imagetwo}
              </View>
            </View>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>

            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} style={GetstartedSliderStyle.settextstyle}>
              <View style={[GetstartedSliderStyle.setbgcolorviewtwoview, { backgroundColor: colorrdata }]}>
                <Text style={GetstartedSliderStyle.textstyle}>
                  {item.text}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={GetstartedSliderStyle.setbgbuttondiv}>
        <View style={GetstartedSliderStyle.buttonCircle}>
          <Button
            title="Get Started"
            buttonStyle={{ backgroundColor: colorrdata, borderColor: colorrdata }}
            onPress={
              () => navigation.navigate(RouteName.LOGIN_SCREEN)
            }
          />
        </View>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={GetstartedSliderStyle.setbgbuttondiv}>
        <Text style={{
          fontFamily: 'DMSans-Bold',
          fontSize: 19,
          position: 'relative',
          top: 10,
          color: colorrdata
        }}>Next</Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={GetstartedSliderStyle.setbgbuttondiv}>
        <TouchableOpacity onPress={
          () => navigation.navigate(RouteName.LOGIN_SCREEN)
        }>
          <Text style={{
            fontFamily: 'DMSans-Bold',
            fontSize: 19,
            position: 'relative',
            top: 10,
            color: colorrdata
          }}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  };
  // const _renderNextButton = () => {
  //   return (
  //     <View style={GetstartedSliderStyle.setbgbuttondivTwo}>
  //       <Text style={[GetstartedSliderStyle.nextbuttoncolorset, { color: colorrdata }]}>Next</Text>
  //     </View>
  //   );
  // };
  // const _renderSkipButton = () => {
  //   return (
  //     <View style={GetstartedSliderStyle.setbgbuttondivTwo}>
  //       <TouchableOpacity onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
  //         <Text style={[GetstartedSliderStyle.nextbuttoncolorset, { color: colorrdata }]}>Skip</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
  // const _renderDoneButton = () => {
  //   return (
  //     <View style={GetstartedSliderStyle.setbgbuttondiv}>
  //       <View style={GetstartedSliderStyle.buttonCircle}>
  //         <Button
  //           title="Get Started"
  //           onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}
  //           buttonStyle={GetstartedSliderStyle.bgwhite}
  //           buttonTextStyle={{ color: colorrdata }}
  //         />
  //       </View>
  //     </View>
  //   );
  // };
  // const _renderNextButton = () => {
  //   return (
  //     <View style={[GetstartedSliderStyle.setbgbuttondiv, GetstartedSliderStyle.setbgbuttondivTwo]}>
  //       <Text style={GetstartedSliderStyle.nextbuttoncolorset}>Next</Text>
  //     </View>
  //   );
  // };
  // const renderPrevButton = () => {
  //   return (
  //     <View style={[GetstartedSliderStyle.setbgbuttondiv, GetstartedSliderStyle.setbgbuttondivTwo]}>
  //       <Text style={GetstartedSliderStyle.nextbuttoncolorset}>Prev</Text>
  //     </View>
  //   );
  // };
  return (
    <>
      {showRealApp ? (
        <SafeAreaView>
          <View>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={Getstarted}
          renderNextButton={_renderNextButton}
          renderSkipButton={_renderSkipButton}
          renderDoneButton={_renderDoneButton}
          showSkipButton={true}
          activeDotStyle={{ backgroundColor: colorrdata }}
          dotstyle={GetstartedSliderStyle.dotstyleset}
        />
      )}
    </>
  );
};
export default GetstartedSliderscreen;

const slides = [
  {
    key: 's1',
    text: <Icon name="chevrons-right" size={27} color="white" />,
    longtitle: 'Beauty comes from inside, inside the beauty salon',
    image: <Image style={GetstartedSliderStyle.logoimg} resizeMode='contain' source={images.logo} />,
    imagetwo: <LottieAnimation Lottiewidthstyle={GetstartedSliderStyle.longimageOne} source={images.Firstimage_Slider} />
  },
  {
    key: 's2',
    text: <Icon name="chevrons-right" size={27} color="white" />,
    longtitletwo: 'Discover your beauty',
    image: <Image style={GetstartedSliderStyle.logoimg} resizeMode='contain' source={images.logo} />,
    imagetwo: <LottieAnimation Lottiewidthstyle={GetstartedSliderStyle.longimageTwo} source={images.Two_Slider} />
  },
  {
    key: 's3',
    text: <Icon name="chevrons-right" size={27} color="white" />,
    longtitle: 'It makes you feel beautiful',
    image: <Image style={GetstartedSliderStyle.logoimg} resizeMode='contain' source={images.logo} />,
    imagetwo: <LottieAnimation Lottiewidthstyle={GetstartedSliderStyle.longimageThree} source={images.Three_Slider} />
  },
];