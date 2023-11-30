import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, } from 'react-native';
import { Button, Container } from './../../../components';
import { colorsset, SH } from './../../../utils';
import images from '../../../index';
import RouteName from '../../../routes/RouteName';
import { HomeTabStyle } from '../../../styles';
import { useSelector,useDispatch } from "react-redux";
import { get_doctore_detailes_action } from '../../../redux/action/DoctoreDataAction';

const SpecialistData = [
    {
        "id": 1,
        "image": images.Spe_salonOwnerImg1,      
        "text": 'James',
    },
    {
        "id": 2,
        "image": images.Home_BarberOne,      
        "text": 'Kerry',
    },
    {
        "id": 3,
        "image": images.salon2,      
        "text": 'Fenny',
    },
    {
        "id": 4,
        "image": images.salon4,      
        "text": 'Allexa',
    },
  
]


const HomeTab = (props) => {
    const { navigation } = props;
    const dispatch = useDispatch();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
    const doctordata = (docterdata) => {
        dispatch(get_doctore_detailes_action(docterdata))
        navigation.navigate(RouteName.BOOKAPPOINTMENT)
      }

    const Specialist = (item) => {
        return (

            <View style={HomeTabStyle.SpecialistBoxMain}>
                <View style={HomeTabStyle.SpecialistBox}>
                    <TouchableOpacity style={[HomeTabStyle.SpecialistPerBox, { backgroundColor: colorrdata }]} onPress={() => doctordata(item)}>
                        <View>
                            <Image source={item.image} style={HomeTabStyle.SpecialistImg} />
                        </View>
                        <Text style={HomeTabStyle.SpecialistPerName}>{item.text}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

    return (
        <Container>
            <View style={{ backgroundColor: colorsset.BackgroundColorScreen }}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: 'auto',
                    }}>
                    <View style={HomeTabStyle.setviewstyle}>
                        <View style={HomeTabStyle.sectionstyle}>
                            <View style={{ marginBottom: SH(10) }}>
                                {/* Satrt Catagory */}
                                <Text style={HomeTabStyle.CategoryTitle}>What do you want to do ?</Text>
                                <View style={HomeTabStyle.CategoryBoxItem}>
                                    <View style={HomeTabStyle.CategoryBoxItemChild}>
                                        <TouchableOpacity style={[HomeTabStyle.CategoryImgBox, { backgroundColor: colorrdata }]} onPress={() => navigation.navigate(RouteName.CATEGORY_LIST_SCREEN)}>
                                            <Image source={images.woman_hair} style={HomeTabStyle.CategoryImg} />
                                        </TouchableOpacity>
                                        <Text style={HomeTabStyle.CategoryText}>Haircut</Text>
                                    </View>
                                    <View style={HomeTabStyle.CategoryBoxItemChild}>
                                        <TouchableOpacity style={[HomeTabStyle.CategoryImgBox, { backgroundColor: colorrdata }]} onPress={() => navigation.navigate(RouteName.CATEGORY_LIST_SCREEN)}>
                                            <Image source={images.nail} style={HomeTabStyle.CategoryImg} />
                                        </TouchableOpacity>
                                        <Text style={HomeTabStyle.CategoryText}>Nails</Text>
                                    </View>
                                    <View style={HomeTabStyle.CategoryBoxItemChild}>
                                        <TouchableOpacity style={[HomeTabStyle.CategoryImgBox, { backgroundColor: colorrdata }]} onPress={() => navigation.navigate(RouteName.CATEGORY_LIST_SCREEN)}>
                                            <Image source={images.beauty_treatment} style={HomeTabStyle.CategoryImg} />
                                        </TouchableOpacity>
                                        <Text style={HomeTabStyle.CategoryText}>Facial</Text>
                                    </View>
                                    <View style={HomeTabStyle.CategoryBoxItemChild}>
                                        <TouchableOpacity style={[HomeTabStyle.CategoryImgBox, { backgroundColor: colorrdata }]} onPress={() => navigation.navigate(RouteName.CATEGORY_LIST_SCREEN)}>
                                            <Image source={images.hair_dye} style={HomeTabStyle.CategoryImg} />
                                        </TouchableOpacity>
                                        <Text style={HomeTabStyle.CategoryText}>Coloring</Text>
                                    </View>
                                </View>
                                <View style={[HomeTabStyle.CategoryBoxItem, HomeTabStyle.MrTop]}>
                                    <View style={HomeTabStyle.CategoryBoxItemChild}>
                                        <TouchableOpacity style={[HomeTabStyle.CategoryImgBox, { backgroundColor: colorrdata }]} onPress={() => navigation.navigate(RouteName.CATEGORY_LIST_SCREEN)}>
                                            <Image source={images.spa} style={HomeTabStyle.CategoryImg} />
                                        </TouchableOpacity>
                                        <Text style={HomeTabStyle.CategoryText}>Spa</Text>
                                    </View>
                                    <View style={HomeTabStyle.CategoryBoxItemChild}>
                                        <TouchableOpacity style={[HomeTabStyle.CategoryImgBox, { backgroundColor: colorrdata }]} onPress={() => navigation.navigate(RouteName.CATEGORY_LIST_SCREEN)}>
                                            <Image source={images.waxing} style={HomeTabStyle.CategoryImg} />
                                        </TouchableOpacity>
                                        <Text style={HomeTabStyle.CategoryText}>Waxing</Text>
                                    </View>
                                    <View style={HomeTabStyle.CategoryBoxItemChild}>
                                        <TouchableOpacity style={[HomeTabStyle.CategoryImgBox, { backgroundColor: colorrdata }]} onPress={() => navigation.navigate(RouteName.CATEGORY_LIST_SCREEN)}>
                                            <Image source={images.makeup} style={HomeTabStyle.CategoryImg} />
                                        </TouchableOpacity>
                                        <Text style={HomeTabStyle.CategoryText}>Mackup</Text>
                                    </View>
                                    <View style={HomeTabStyle.CategoryBoxItemChild}>
                                        <TouchableOpacity style={[HomeTabStyle.CategoryImgBox, { backgroundColor: colorrdata }]} onPress={() => navigation.navigate(RouteName.CATEGORY_LIST_SCREEN)}>
                                            <Image source={images.massage} style={HomeTabStyle.CategoryImg} />
                                        </TouchableOpacity>
                                        <Text style={HomeTabStyle.CategoryText}>Massage</Text>
                                    </View>
                                </View>
                            </View>
                        </View >

                        <View style={HomeTabStyle.SetMrn}>
                            <View style={HomeTabStyle.sectionstyleTwo}>
                                <Text style={[HomeTabStyle.SpecialistText, { color: colorrdata }]}>choose hair specialist</Text>
                                <TouchableOpacity style={HomeTabStyle.SpecialistAllPosition} onPress={() => navigation.navigate(RouteName.CATEGORY_LIST_SCREEN)}>
                                    <Text style={[HomeTabStyle.SpecialistAll, { color: colorrdata }]}>All</Text>
                                </TouchableOpacity>                              

                                <FlatList
                                    data={SpecialistData}
                                    renderItem={({ item, index }) => Specialist(item, index)}
                                    keyExtractor={item => item.id}                                   
                                    showsHorizontalScrollIndicator={false}
                                    // style={Styles.setflex}
                                    contentContainerStyle={{ paddingHorizontal: 0, paddingRight: 0 }}
                                    numColumns='2'
                                />

                                <View style={HomeTabStyle.MrTop}>
                                    <Button buttonStyle={{backgroundColor: colorrdata}} title='Book Appointment' onPress={() => navigation.navigate(RouteName.BOOKAPPOINTMENT)} />
                                </View>
                            </View>
                        </View>

                        {/* third modal for top */}


                    </View >
                </ScrollView >
            </View >
        </Container >
    )
}
export default HomeTab;
