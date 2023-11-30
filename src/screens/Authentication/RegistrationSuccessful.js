import React from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, ImageBackground } from "react-native";
import Styles from '../../styles/LoginRegiesterStyle/RegistrationSuccefullStyle';
import Container from '../../components/commonComponents/Container';
import Button from '../../components/commonComponents/Button';
import images from '../../index';
import RouteName from '../../routes/RouteName';
import Style from '../../styles/CommonStyle/Style';
import { useSelector } from "react-redux";
import { colorsset } from "../../utils";

const RegistrationSuccessful = ({ navigation }) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const OnLoginPress = () => {
    navigation.replace(RouteName.HOME_SCREEN);
  }
  return (
    <Container>
      <View style={[Styles.minstyleviewphotograpgytwo, { backgroundColor: colorsset.BackgroundColorScreen }]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            width: '100%',
            height: 'auto',
          }}>
          <KeyboardAvoidingView enabled>
            <View style={Styles.keybordtopviewstyle}>
              <View style={Styles.minflexview}>
                <View style={Styles.minviewsigninscreen}>
                  <View style={Styles.succefullimgviewtwo}>
                    <Image style={Styles.succefullyimg} resizeMode='center' source={images.Successfullimage_set} />
                  </View>
                  <Text style={Styles.accounttext}>Account Created!</Text>
                  <Text style={Styles.accounttextsuccessfully}>Your Account has been Created Successfully</Text>
                  <View style={Styles.accountbutton}>
                    <Button
                      title="Get Started"
                      onPress={() => OnLoginPress()}
                    />
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default RegistrationSuccessful;
