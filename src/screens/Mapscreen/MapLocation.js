import React from "react";
import { View, ScrollView, KeyboardAvoidingView, StatusBar, Image, TouchableOpacity, Dimensions } from "react-native";
import { MapLocationStyle } from '../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import MapView, { Marker } from 'react-native-maps';
import MapDoctoreList from '../../components/commonComponents/MapDoctoreList';
import RouteName from "../../routes/RouteName";
import images from "../../index";
import { useNavigation } from '@react-navigation/native';
import IconE from 'react-native-vector-icons/Entypo';



const MapLocation = (props) => {
  const navigation = useNavigation();
  const screen = Dimensions.get('window');
  const ASPECT_RATIO = screen.width / screen.height;

  return (
    <View style={MapLocationStyle.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <View style={MapLocationStyle.minflexview}>
          <View style={MapLocationStyle.bgwhiteview}>
            <TouchableOpacity style={MapLocationStyle.positonsetdelever} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
              <IconE name="chevron-small-left" size={40} color={'#2E3A59'} />
            </TouchableOpacity>
            <View style={MapLocationStyle.mapviewstyle}>
              <MapView
                region={{
                  latitude: 33.471773,
                  longitude: -86.800823,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
                scrollEnabled={true}
                style={MapLocationStyle.mapMapLocationStyleet}
              >
                <Marker
                  coordinate={{ latitude: 33.471773, longitude: -86.800823, }}>

                  <Image resizeMethod='resize'
                    source={images.BarberOne}
                    style={MapLocationStyle.setimahmapstyle}
                    resizeMode="contain"
                  />

                </Marker>
                <Marker
                  coordinate={{ latitude: 33.515773, longitude: -86.800823, }}>
                  <Image resizeMethod='resize'
                    source={images.BarberOne}
                    style={MapLocationStyle.setimahmapstyletwo}
                    resizeMode="contain"
                  />
                </Marker>
                <Marker
                  coordinate={{ latitude: 33.515773, longitude: -86.700823, }}>

                  <Image resizeMethod='resize'
                    source={images.BarberOne}
                    style={MapLocationStyle.setimahmapstylethree}
                    resizeMode="contain"
                  />

                </Marker>
                <Marker
                  coordinate={{ latitude: 33.455773, longitude: -86.640823, }}>

                  <Image resizeMethod='resize'
                    source={images.BarberOne}
                    style={MapLocationStyle.setimahmapstylefour}
                    resizeMode="contain"
                  />

                </Marker>
                <Marker
                  coordinate={{ latitude: 33.45773, longitude: -86.800823, }}>

                  <Image resizeMethod='resize'
                    source={images.BarberOne}
                    style={MapLocationStyle.setimahmapstylefive}
                    resizeMode="contain"
                  />

                </Marker>
              </MapView>
            </View>
          </View>
        </View>

      </ScrollView>
      <View style={MapLocationStyle.positonabsolute}>
        <MapDoctoreList />
      </View>
    </View>

  );
};
export default MapLocation;
