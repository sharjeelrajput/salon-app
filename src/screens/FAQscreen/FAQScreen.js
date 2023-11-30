import React, { useState } from "react";
import { View, ScrollView, KeyboardAvoidingView, Text, FlatList, TouchableOpacity, TextInput, } from "react-native";
import { Faqstyle } from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/dist/AntDesign';
import { Faqdataset } from '../../utils/sliderimage';

const NewsScreens = (props) => {
  const Faqdataitem = (item, index) => {
    return (
      <TouchableOpacity style={Faqstyle.sebgcolorwhiyte} onPress={() => toggleHandler(item.id)}>
        <View>
          <View style={Faqstyle.setflexrowarrowleftthree}>
            <View style={Faqstyle.flexrowcreditcard}>
              <View style={Faqstyle.settextwidth}>
                <Text style={Faqstyle.creditcardtext}>{item.smalltext}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => toggleHandler(item.id)}>
                {show === item.id ? <Icon name='up' size={21} /> : <Icon name='down' size={21} />}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {show === item.id ? <View>
          <View style={Faqstyle.setparegraphviewstyle}>
            <Text style={Faqstyle.paregraphtextFaqstyleet}>{item.paymentparegraph}</Text>
          </View>
        </View> : null}
      </TouchableOpacity>
    );
  }
  const [show, setShow] = useState(null);
  const toggleHandler = (id) => {
    (id === show) ? setShow(null) : setShow(id)
  };
  return (
    <View style={Faqstyle.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={Faqstyle.minflexview}>
            <View style={Faqstyle.minviewallcontent}>
              <View style={Faqstyle.bgcolorsetwhitetextinput}>
                <View>
                  <IconF name="search1" color={'gray'} size={20} />
                </View>
                <TextInput
                  style={Faqstyle.paddibnglefttextstyle}
                  placeholder="Type Name"
                />
              </View>
              <FlatList
                data={Faqdataset}
                renderItem={({ item, index }) => Faqdataitem(item, index)}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                style={Faqstyle.setflex}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default NewsScreens;
