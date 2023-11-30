import React from "react";
import { Text, View, Image, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { NotificationStyle } from '../../styles';
import images from '../../../index';
import IconI from 'react-native-vector-icons/Ionicons';

const NotificationScreen = () => {
  return (
    <View style={[NotificationStyle.minstyleviewphotograpgy, NotificationStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={NotificationStyle.minflexview}>
            <View style={NotificationStyle.minviewsigninscreen}>
              <TouchableOpacity style={NotificationStyle.flexdiractionrow}>
                <View style={NotificationStyle.IconWidthSet}>
                  <View style={NotificationStyle.IconWidthSetBorder}>
                    <IconI name="ios-notifications" size={45} color={'#000'} />
                    <View style={NotificationStyle.NotiFicationDot}></View>
                  </View>
                </View>
                <View style={NotificationStyle.setparegraphwidth}>
                  <Text style={NotificationStyle.textparegraph}>Appointment Reminder: "Don't forget! You have an appointment with us tomorrow at 2pm. We'll see you soon!"</Text>
                  <Text style={NotificationStyle.twonavemberscreen}>02 Nov</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={NotificationStyle.flexdiractionrow}>
                <View style={NotificationStyle.IconWidthSet}>
                  <View style={NotificationStyle.IconWidthSetBorder}>
                    <IconI name="ios-notifications" size={45} color={'#000'} />
                    <View style={NotificationStyle.NotiFicationDotRed}></View>
                  </View>
                </View>
                <View style={NotificationStyle.setparegraphwidth}>
                  <Text style={NotificationStyle.textparegraph}>Feedback Request: "We value your feedback! Please take a moment to rate your recent experience with us."</Text>
                  <Text style={NotificationStyle.twonavemberscreen}>02 Nov</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default NotificationScreen;
