import React, { useState } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, FlatList, ImageBackground, TouchableOpacity, } from "react-native";
import { ChatScreenStyle } from '../../styles';
import images from '../../index';
import IconO from 'react-native-vector-icons/Octicons';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import { colorsset } from "../../utils";

const ChartScreenset = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { navigation } = props;
  const [Doctorelist] = useState([
    {
      "id": 1,
      "image": <Image style={ChatScreenStyle.imagsetstyle} resizeMode="cover" source={images.Chat_List_BarberTwo} />,
      "text": 'Adelita',
      "texttwoset": 'Online',
      "icon": <IconO name="dot-fill" size={40} color={'#40d375'} />,
    },
    {
      "id": 2,
      "image": <Image style={ChatScreenStyle.imagsetstyle} resizeMode="cover" source={images.salon2} />,
      "text": 'Adina',
      "texttwoset": 'Offline',
      "settime": '21 Minutes ago',
      "icon": <IconO name="dot-fill" size={40} color={'red'} />,
    },
    {
      "id": 3,
      "image": <Image style={ChatScreenStyle.imagsetstyle} resizeMode="cover" source={images.salon3} />,
      "text": 'Catira',
      "texttwoset": 'Online',
      "icon": <IconO name="dot-fill" size={40} color={'#40d375'} />,
    },
    {
      "id": 4,
      "image": <Image style={ChatScreenStyle.imagsetstyle} resizeMode="cover" source={images.salon4} />,
      "text": 'Dorit',
      "texttwoset": 'Online',
      "icon": <IconO name="dot-fill" size={40} color={'#40d375'} />,
    },
    {
      "id": 5,
      "image": <Image style={ChatScreenStyle.imagsetstyle} resizeMode="cover" source={images.salon5} />,
      "text": 'Dagny',
      "texttwoset": 'Offline',
      "settime": '41 Minutes ago',
      "icon": <IconO name="dot-fill" size={40} color={'red'} />,
    },
    {
      "id": 6,
      "image": <Image style={ChatScreenStyle.imagsetstyle} resizeMode="cover" source={images.salon6} />,
      "text": 'Elvire',
      "texttwoset": 'Online',
      "icon": <IconO name="dot-fill" size={40} color={'#40d375'} />,
    },
    {
      "id": 7,
      "image": <Image style={ChatScreenStyle.imagsetstyle} resizeMode="cover" source={images.salon7} />,
      "text": 'Esilda',
      "texttwoset": 'Offline',
      "settime": '1 hours ago',
      "icon": <IconO name="dot-fill" size={40} color={'red'} />,
    },
    {
      "id": 8,
      "image": <Image style={ChatScreenStyle.imagsetstyle} resizeMode="cover" source={images.salon5} />,
      "text": 'Fitria',
      "texttwoset": 'Offline',
      "settime": '3 hours ago',
      "icon": <IconO name="dot-fill" size={40} color={'red'} />,
    },
  ])
  const Doctorelistdata = (item) => {
    return (
      <TouchableOpacity style={ChatScreenStyle.Setboxshadow} onPress={() => navigation.navigate(RouteName.CHART_SCREEN_PERSON)}>
        <View style={ChatScreenStyle.setwhitebox}>
          <View style={ChatScreenStyle.flexrowsetimage}>
            <View style={ChatScreenStyle.imagecenterstyletop}>
              {item.image}
            </View>
            <View style={ChatScreenStyle.setlistdotviewstyle}>
              {item.icon}
            </View>
            <View style={ChatScreenStyle.imagecenterstyle}>
              <Text style={[ChatScreenStyle.textsetdoctore, { color: colorrdata }]}>{item.text}</Text>
              <View style={ChatScreenStyle.setflextimeroe}>
                <Text style={ChatScreenStyle.textsetdoctoretwo}>{item.texttwoset}</Text>
                <Text style={ChatScreenStyle.textsetdoctoretwo}>{item.settime}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (

    <View style={[ChatScreenStyle.minstyleviewphotograpgy, {backgroundColor: colorsset.BackgroundColorScreen}]}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={ChatScreenStyle.minflexview}>
            <View style={ChatScreenStyle.minviewsigninscreenTwo}>
              <FlatList
                data={Doctorelist}
                renderItem={({ item, index }) => Doctorelistdata(item, index)}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>

  );
};
export default ChartScreenset;
