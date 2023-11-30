import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import images from '../../../index';
import { Container } from '../../../components';
import { Appoinmetsstyle } from '../../../styles';
import RouteName from '../../../routes/RouteName';
import { useDispatch } from "react-redux";
import { get_doctore_detailes_action } from '../../../redux/action/DoctoreDataAction';
import { useSelector } from "react-redux";
import { colorsset } from '../../../utils';

const DoctoreListingscreen = (props) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const dispatch = useDispatch();
    const { navigation } = props;
    const [tabshow, Settabshow] = useState(1);
    const [Doctorelist] = useState([
        {
            "id": 1,
            "text": 'Feb 2023',
            "texttwo": 'Dec 2022',
        },
        {
            "id": 2,
            "image": images.App_BarberOne,
            "text": 'Charlie Dean',
            "texttwosetd": 'Hair Coloring Assistance',
            "expireddate": 'Feb,1 2023 at 11:00 AM - 11:00 AM ',
        },
        {
            "id": 3,
            "image": images.salonOwnerImg4,
            "text": 'Heather Knight',
            "texttwosetd": 'Tanning',
            "expireddate": 'Feb,5 2023 at 11:00 AM - 12:00 AM',
        },
        {
            "id": 4,
            "image": images.App_salon2,
            "text": 'Danni Wyatt',
            "texttwosetd": 'Keratin Straightening',
            "expireddate": 'Feb,10 2023 at 11:00 AM - 01:00 PM',

        },
        {
            "id": 5,
            "text": 'Jun 2023',
            "texttwo": 'Feb 2022',
        },
        {
            "id": 6,
            "image": images.App_salon3,
            "text": 'Nat Sciver',
            "texttwosetd": 'Thermal Reconditioning',
            "expireddate": 'Jun,5 2023 at 11:00 AM - 02:00 PM',

        },
        {
            "id": 7,
            "image": images.App_salon4,
            "text": 'Sophie Ecclestone',
            "texttwosetd": 'Braiding',
            "expireddate": 'Jun,15 2023 at 11:00 AM - 4:00 PM',


        }
    ])

    const [AppointmentVisied] = useState([
        {
            "id": 1,
            "text": 'Feb 2023',
            "texttwo": 'Sep 2022',
        },
        {
            "id": 2,
            "image": images.salonOwnerImg1,
            "text": 'Kevin Pietersen',
            "texttwosetd": 'Beard Services',
            "expireddate": 'Sep,1 2022 at 11:00 AM - 10:00 AM ',
        },
        {
            "id": 3,
            "image": images.salonOwnerImg2,
            "text": 'Lilly',
            "texttwosetd": 'Hairstylists and Cosmetologists',
            "expireddate": 'Sep,5 2022 at 11:00 AM - 12:00 PM',
        },
        {
            "id": 4,
            "image": images.salonOwnerImg3,
            "text": 'Welly',
            "texttwosetd": 'Facials and Skin care treatment',
            "expireddate": 'Sep,10 2022 at 11:00 AM - 01:00 PM',
        },
        {
            "id": 5,
            "text": 'Jun 2023',
            "texttwo": 'Feb 2022',
        },
        {
            "id": 6,
            "image": images.salonOwnerImg4,
            "text": 'Eliya',
            "texttwosetd": 'Massages',
            "expireddate": 'Nov,5 2022 at 11:00 AM - 04:00 PM',
        },
        {
            "id": 7,
            "image": images.salonOwnerImg5,
            "text": 'Sophia Dunkley',
            "texttwosetd": 'Coloring',
            "expireddate": 'Nov,15 2022 at 11:00 AM - 06:00 PM',
        }
    ])
    const doctordata = (docterdata) => {
        dispatch(get_doctore_detailes_action(docterdata))
        navigation.navigate(RouteName.UPCOMIG_SCREEN)
    }
    const Doctorelistdata = (item, index) => {
        return (

            <View>
                {index === 1 || index === 2 || index === 3 || index === 5 || index === 6 ?
                    <View onPress={() => doctordata(item)} style={Appoinmetsstyle.Settabshow}>
                        <View style={Appoinmetsstyle.setwhiteboxtwo}>
                            <View style={Appoinmetsstyle.flexrowsetimagegtwo}>
                                <View style={Appoinmetsstyle.imagecenterstyletwo}>
                                    <Image style={Appoinmetsstyle.imagsetstylediffrenr} resizeMode="cover" source={item.image} />
                                </View>
                                <View>
                                    <Text style={[Appoinmetsstyle.textsetdoctore]}>{item.text}</Text>
                                    <View style={Appoinmetsstyle.setwidth}>
                                        <View>
                                            <Text style={Appoinmetsstyle.textsetdoctor}>{item.texttwosetd}</Text>
                                            <Text style={Appoinmetsstyle.textsetdoctoretwo}>{item.expireddate}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    :
                    <View>
                        <Text style={[Appoinmetsstyle.settextstyle, { color: colorrdata }]}>{item.text}</Text>
                    </View>}
            </View>

        );
    }

    const Doctorelistdatatwo = (item, index) => {
        return (
            <View>
                {index === 1 || index === 2 || index === 3 || index === 5 || index === 6 ?
                    <View onPress={() => doctordata(item)} style={Appoinmetsstyle.Settabshow}>
                        <View style={Appoinmetsstyle.setwhiteboxtwo}>
                            <View style={Appoinmetsstyle.flexrowsetimagegtwo}>
                                <View style={Appoinmetsstyle.imagecenterstyletwo}>
                                    <Image style={Appoinmetsstyle.imagsetstylediffrenr} resizeMode="cover" source={item.image} />
                                </View>
                                <View>
                                    <Text style={[Appoinmetsstyle.textsetdoctore]}>{item.text}</Text>
                                    <View style={Appoinmetsstyle.setwidth}>
                                        <View>
                                            <Text style={Appoinmetsstyle.textsetdoctor}>{item.texttwosetd}</Text>
                                            <Text style={Appoinmetsstyle.textsetdoctoretwo}>{item.expireddate}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    :
                    <View>
                        <Text style={[Appoinmetsstyle.settextstyle, { color: colorrdata }]}>{item.texttwo}</Text>
                    </View>}
            </View>
        );
    }
    return (
        <Container>
            <View style={[Appoinmetsstyle.minstyleviewphotograpgy, { backgroundColor: colorsset.BackgroundColorScreen }]}>
                <View style={Appoinmetsstyle.flexrowtabappointmeny}>
                    <TouchableOpacity style={tabshow == 1 ? [Appoinmetsstyle.setbgcolorview, { backgroundColor: colorrdata }] : [Appoinmetsstyle.setbgcolorviewtwo, { borderColor: colorrdata, borderWidth: 1 }]} onPress={() => Settabshow('1')}>
                        <Text style={tabshow == 1 ? Appoinmetsstyle.textcolorupcoming : [Appoinmetsstyle.colortext, { color: colorrdata }]}>Upcoming</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tabshow == 2 ? [Appoinmetsstyle.setbgcolorview, { backgroundColor: colorrdata }] : [Appoinmetsstyle.setbgcolorviewtwo, { borderColor: colorrdata, borderWidth: 1 }]} onPress={() => Settabshow('2')}>
                        <Text style={tabshow == 2 ? Appoinmetsstyle.textcolorupcoming : [Appoinmetsstyle.colortext, { color: colorrdata }]}>Visited</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: 'auto',
                    }}>
                    <View style={Appoinmetsstyle.container}>
                        <View style={Appoinmetsstyle.minviewallcontent}>
                            {tabshow == '1' ?
                                <View style={Appoinmetsstyle.settopspaceset}>
                                    <FlatList
                                        data={Doctorelist}
                                        renderItem={({ item, index }) => Doctorelistdata(item, index)}
                                        keyExtractor={item => item.id}
                                        showsHorizontalScrollIndicator={false}
                                        style={Appoinmetsstyle.setflex}
                                    />
                                </View>
                                : null}
                            {tabshow == '2' ?
                                <View style={Appoinmetsstyle.settopspaceset}>
                                    <FlatList
                                        data={AppointmentVisied}
                                        renderItem={({ item, index }) => Doctorelistdatatwo(item, index)}
                                        keyExtractor={item => item.id}
                                        showsHorizontalScrollIndicator={false}
                                        style={Appoinmetsstyle.setflex}
                                    />
                                </View>
                                : null}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Container>
    );
}
export default DoctoreListingscreen;
