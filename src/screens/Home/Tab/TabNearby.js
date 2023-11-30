import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView } from 'react-native';
import images from '../../../index';
import { Container } from '../../../components';
import { Prescription, NearbyShareStyle, MapLocationStyle } from '../../../styles';
import { useSelector } from "react-redux";
import { BackgroundImage } from 'react-native-elements/dist/config';
import Icon from 'react-native-vector-icons/dist/EvilIcons';
import IconM from 'react-native-vector-icons/dist/MaterialIcons';
import { RouteName } from '../../../routes';
import { useNavigation } from '@react-navigation/native';
import IconE from 'react-native-vector-icons/Entypo';
import MapView, { Marker } from 'react-native-maps';
import MapDoctoreList from '../../../components/commonComponents/MapDoctoreList';
import { colorsset } from '../../../utils';




const SearchListData = [
    {
        id: 1,
        icon: images.Nearwoman_hair,
        title: 'Haircut',
    },
    {
        id: 2,
        icon: images.Nearbeauty_treatment,
        title: 'Facial',
    },
    {
        id: 3,
        icon: images.Nearhair_dye,
        title: 'Coloring',
    },
    {
        id: 4,
        icon: images.Nearspa,
        title: 'Spa',
    },
    {
        id: 3,
        icon: images.Nearmakeup,
        title: 'mackup',
    },
    {
        id: 4,
        icon: images.Nearnail,
        title: 'Nail salons',
    }
]


const TabNearby = (props) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [text, onChangeText] = React.useState("");
    const [Tab, setTab] = React.useState(1);
    const navigation = useNavigation();

    const CategorySearchListBox = (item) => {
        return (
            <TouchableOpacity style={NearbyShareStyle.CategoryBoxItem} onPress={() => navigation.navigate(RouteName.CATEGORY_LIST_SCREEN)} >
                <View style={[NearbyShareStyle.CategoryBoxItemChild, {backgroundColor: colorrdata}]} >
                    <View>
                        <View style={NearbyShareStyle.CategoryImgBox}>
                            <Image source={item.icon} style={NearbyShareStyle.CategoryImg} />
                        </View>
                        <Text style={NearbyShareStyle.CategoryText}>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <Container>
          
                <View style={[Prescription.minstyleviewphotograpgy, {backgroundColor: colorsset.BackgroundColorScreen}]}>                  

                        <ScrollView
                            keyboardShouldPersistTaps="handled"
                            contentContainerStyle={{
                                width: '100%',
                                height: 'auto',
                            }}>
                            <View style={Prescription.container}>
                                <View style={Prescription.minviewallcontent}>
                                    <View>
                                        <View style={NearbyShareStyle.searchSection}>
                                            <Icon style={NearbyShareStyle.searchIcon} name="search" size={20} color="#000" />
                                            <TextInput
                                                style={NearbyShareStyle.input}
                                                placeholder="Search"
                                                onChangeText={onChangeText}
                                                value={text}
                                                underlineColorAndroid="transparent"
                                                placeholderTextColor={'gray'}
                                            />
                                            <TouchableOpacity>
                                                <IconM style={NearbyShareStyle.searchIcon} name="keyboard-voice" size={20} color="#000" />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={NearbyShareStyle.TextheadBox}>
                                            <Text style={NearbyShareStyle.Texthead}>Welcome</Text>
                                            <Text style={NearbyShareStyle.Texthead}>What are you looking for?</Text>
                                        </View>

                                        <View style={{ width: '100%' }}>
                                            <FlatList
                                                data={SearchListData}
                                                renderItem={({ item, index }) => CategorySearchListBox(item, index)}
                                                keyExtractor={item => item.id}
                                                numColumns={2}
                                                showsHorizontalScrollIndicator={false}
                                            // contentContainerStyle={{ marginVertical: }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                  

                        {/* <View style={MapLocationStyle.minstyleviewphotograpgy}>
                            <ScrollView
                                keyboardShouldPersistTaps="handled"
                                contentContainerStyle={{
                                    width: '100%',
                                    height: 'auto',
                                }}>
                                <View style={MapLocationStyle.minflexview}>
                                    <View style={MapLocationStyle.bgwhiteview}>
                                        <TouchableOpacity style={MapLocationStyle.positonsetdelever} onPress={() => setTab(1)}>
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
                        </View> */}

              
                </View>
           
        </Container>
    );
}
export default TabNearby;
