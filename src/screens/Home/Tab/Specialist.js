import React, { useState } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, FlatList, ImageBackground, TouchableOpacity, } from "react-native";
import { CategoryListStyle } from '../../../styles';
import images from '../../../index';
import IconO from 'react-native-vector-icons/Octicons';
import IconA from 'react-native-vector-icons/AntDesign';
import RouteName from '../../../routes/RouteName';
import { Rating } from 'react-native-ratings';
import { colorsset } from "../../../utils";
import { useSelector,useDispatch } from "react-redux";
import { get_doctore_detailes_action } from '../../../redux/action/DoctoreDataAction';

const Specialist = (props) => {
    const { navigation } = props;
    const dispatch = useDispatch();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
    const doctordata = (docterdata) => {
        dispatch(get_doctore_detailes_action(docterdata))
        navigation.navigate(RouteName.BOOKAPPOINTMENT)
      }


    const [List1] = useState([
        {
            "id": 1,
            "image": images.Spe_salonOwnerImg1,
            "text": 'Kevin Pietersen',
            "icon": <IconA name="tags" size={20} color={colorrdata} />,
            "Spe": 'Professionalist',
            rating: <Rating
                type='custom'
                ratingColor='hsl(27.7, 73.8%, 62.5%)'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                tintColor={'white'}
                imageSize={17}
                startingValue={4.5}
                isDisabled={false}
            />,

        },
        {
            "id": 2,
            "image": images.Spe_salonOwnerImg2,
            "text": 'Lilly',
            "icon": <IconA name="tags" size={20} color={colorrdata} />,
            "Spe": 'Hair Cutting Specialist',
            rating: <Rating
                type='custom'
                ratingColor='hsl(27.7, 73.8%, 62.5%)'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                tintColor={'white'}
                imageSize={17}
                startingValue={4.5}
                isDisabled={false}
            />,
        },
        {
            "id": 3,
            "image": images.Spe_salonOwnerImg3,
            "text": 'Welly',
            "icon": <IconA name="tags" size={20} color={colorrdata} />,
            "Spe": "Makeup Artist",
            rating: <Rating
                type='custom'
                ratingColor='hsl(27.7, 73.8%, 62.5%)'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                tintColor={'white'}
                imageSize={17}
                startingValue={4.5}
                isDisabled={false}
            />,
        },
        {
            "id": 4,
            "image": images.Spe_salonOwnerImg4,
            "text": 'Eliya',
            "icon": <IconA name="tags" size={20} color={colorrdata} />,
            "Spe": "Hairdresser",
            rating: <Rating
                type='custom'
                ratingColor='hsl(27.7, 73.8%, 62.5%)'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                tintColor={'white'}
                imageSize={17}
                startingValue={4.5}
                isDisabled={false}
            />,
        },
        {
            "id": 5,
            "image": images.Spe_salonOwnerImg5,
            "text": 'Sophia Dunkley',
            "icon": <IconA name="tags" size={20} color={colorrdata} />,
            "Spe": "Hair Treatment",
            rating: <Rating
                type='custom'
                ratingColor='hsl(27.7, 73.8%, 62.5%)'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                tintColor={'white'}
                imageSize={17}
                startingValue={4.5}
                isDisabled={false}
            />,
        },
        {
            "id": 6,
            "image": images.Spe_salonOwnerImg6,
            "text": 'Danni Wyatt',
            "icon": <IconA name="tags" size={20} color={colorrdata} />,
            "Spe": "Plural Haircutters",
            rating: <Rating
                type='custom'
                ratingColor='hsl(27.7, 73.8%, 62.5%)'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                tintColor={'white'}
                imageSize={17}
                startingValue={4.5}
                isDisabled={false}
            />,
        },
        {
            "id": 7,
            "image": images.Spe_salonOwnerImg7,
            "text": 'Amy Jones',
            "icon": <IconA name="tags" size={20} color={colorrdata} />,
            "Spe": "Hair Coloring Assistance",
            rating: <Rating
                type='custom'
                ratingColor='hsl(27.7, 73.8%, 62.5%)'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                tintColor={'white'}
                imageSize={17}
                startingValue={4.5}
                isDisabled={false}
            />,
        },
        {
            "id": 8,
            "image": images.Spe_salonOwnerImg8,
            "text": 'Katherine Brunt',
            "icon": <IconA name="tags" size={20} color={colorrdata} />,
            "Spe": "Massage Specialist",
            rating: <Rating
                type='custom'
                ratingColor='hsl(27.7, 73.8%, 62.5%)'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                tintColor={'white'}
                imageSize={17}
                startingValue={4.5}
                isDisabled={false}
            />,
        },
    ])
    const Doctorelistdata = (item) => {
        return (
            <TouchableOpacity style={CategoryListStyle.SetShadow} onPress={() => doctordata(item)}>
                <View style={CategoryListStyle.setwhitebox}>
                    <View style={CategoryListStyle.flexrowsetimage}>
                        <View style={CategoryListStyle.imagecenterstyletop}>
                            {/* {item.image} */}
                            <Image style={CategoryListStyle.imagsetstyle} resizeMode="cover" source={item.image} />
                        </View>
                        <View style={CategoryListStyle.imagecenterstyle}>
                            <Text style={CategoryListStyle.textsetdoctore}>{item.text}</Text>
                            <View style={CategoryListStyle.FleexRow}>
                                <View><Text>{item.icon}</Text></View>
                                <View>
                                    <Text style={CategoryListStyle.SpecificText}>{item.Spe}</Text>
                                </View>
                            </View>
                            <View style={CategoryListStyle.FleexRow}>
                                {item.rating}
                            </View>                          
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <View style={[CategoryListStyle.minstyleviewphotograpgy, {backgroundColor: colorsset.BackgroundColorScreen}]}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <KeyboardAvoidingView enabled>
                    <View style={CategoryListStyle.minflexview}>
                        <View style={CategoryListStyle.minviewsigninscreen}>
                            <View>
                                <FlatList
                                    data={List1}
                                    renderItem={({ item, index }) => Doctorelistdata(item, index)}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};
export default Specialist;
