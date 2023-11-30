import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, TextInput, } from "react-native";
import {HelpScreenStyle} from '../../styles';
import Button from '../../components/commonComponents/Button';
import Alert from '../../components/commonComponents/SweetAlertModal';
import RouteName from '../../routes/RouteName';
import { colorsset } from "../../utils";

const HelpScreen = (props) => {
  const { navigation } = props;
  const [DisplayAlert, setDisplayAlert] = useState(0)
  useEffect(() => {
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
    });
  }, [navigation]);
  return (
    <View style={[HelpScreenStyle.minstyleviewphotograpgy, {backgroundColor: colorsset.BackgroundColorScreen}]}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={HelpScreenStyle.minflexview}>
            <View style={HelpScreenStyle.minviewsigninscreen}>
              <View>
                <TextInput style={HelpScreenStyle.settextinputwidth} placeholder="Type Your Message"  placeholderTextColor="#D3D3D3" />
              </View>
              <View>
                <Text style={HelpScreenStyle.settextinputtext}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={HelpScreenStyle.setbuttonstyle}>
        <Button onPress={() => { setDisplayAlert(1) }} title="Send Mail" />
      </View>
      <View style={HelpScreenStyle.centeredView}>
        {DisplayAlert !== 0 ?
          <Alert message='Email Send Successfully' link={RouteName.HOME_TAB_SET} />
          :
          null
        }
      </View>
    </View>
  );
};
export default HelpScreen;