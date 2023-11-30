import React, { useState } from "react";
import { Text, View, Image, ScrollView, ImageBackground, TextInput, } from "react-native";
import { ReviewsScreenStyle } from '../../styles';
import { Container, Button, LottieAnimation, AlertDaynamicModal } from '../../components';
import { Rating } from 'react-native-ratings';
import images from '../../index';
import RouteName from '../../routes/RouteName';


const ReviewsScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');
  const [cancelbutton, SetCancelbutton] = useState('Cancel');

  var alertdata = {
    'logout': "It is our pleasure to hear your valuable feedback",
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.HOME_TAB_SET);
    okbutton;
  }
  return (
    <Container>

      <View style={ReviewsScreenStyle.minstyleviewphotograpgytwo}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            width: '100%',
            height: 'auto',
          }}>
          <View style={ReviewsScreenStyle.keybordtopviewstyle}>
            <AlertDaynamicModal
              message={alertMessage}
              modalVisible={alertVisible}
              setModalVisible={setAlertVisible}
              onPressCancel={() => setAlertVisible(!alertVisible)}
              onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
              iconVisible={true}
            />
            <View style={ReviewsScreenStyle.minflexview}>
              <View style={ReviewsScreenStyle.minviewsigninscreen}>
                {/* <View style={ReviewsScreenStyle.succefullimgviewsethre}>
                    <Image style={ReviewsScreenStyle.succefullyimg} resizeMode="contain" source={images.Reviewsimage_set} />
                  </View> */}
                <View style={ReviewsScreenStyle.succefullimgviewsethre}>
                  <LottieAnimation Lottiewidthstyle={ReviewsScreenStyle.succefullyimg} source={images.RatingAnimation} />
                </View>
                <Text style={ReviewsScreenStyle.accounttexttwo}>Please Rate The course!</Text>
                <View style={ReviewsScreenStyle.flexrowsetstarsignup}>
                  <Rating
                    type='custom'
                    ratingColor='#FDCC0D'
                    ratingBackgroundColor='#c8c7c8'
                    ratingCount={5}
                    tintColor={'#e3f2f0'}
                    imageSize={40}
                    startingValue={3.5}
                    isDisabled={false}
                    style={{ paddingVertical: 10 }}
                  />
                </View>
                <Text style={ReviewsScreenStyle.accounttextsuccessfullytwo}>Thank you for choosing our salon for your recent appointment. We would greatly appreciate it if you could take a moment to leave a review of your experience on our app. Your feedback helps us improve our services and ensures that we are meeting the needs of our customers.</Text>
                <View style={ReviewsScreenStyle.inputUnderLinereviews}>
                  <TextInput
                    style={ReviewsScreenStyle.positionsetstyleinput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter Your Comment"
                    placeholderTextColor={'gray'}
                  />
                </View>
                <View style={ReviewsScreenStyle.accountbutton}>
                  <Button title="Submit"
                    onPress={
                      () => {
                        setAlertMessage(alertdata.logout);
                        Setokbutton('')
                        setAlertVisible(true);
                      }
                    }
                  ></Button>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

    </Container>
  );
};
export default ReviewsScreen;
