import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable, Switch } from 'react-native';
import { HomeSearchStyle } from '../../styles';
import { Strings } from '../../utils';
import IconF from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import RouteName from '../../routes/RouteName';

const HomeSearchScreen = () => {
    const navigation = useNavigation();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};


    return (
        <View style={HomeSearchStyle.Minviewsigninscreen}>

            <View style={HomeSearchStyle.Minviewsigninscreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: 'auto',
                    }}>
                    <View style={HomeSearchStyle.ResentTextBox}>
                        <Text style={HomeSearchStyle.ResentText}>Recent Searches</Text>

                        {/* Start for search data  */}
                        <TouchableOpacity onPress={() => navigation.navigate(RouteName.CATEGORY_LIST_SCREEN)}>
                            <View style={HomeSearchStyle.ResentShowDataBox}>
                                <Text style={HomeSearchStyle.ResentShowDataText}>Hair cutting</Text>
                                <IconF name='chevrons-right' style={[HomeSearchStyle.DirectionArrow, { color: colorrdata }]} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate(RouteName.CATEGORY_LIST_SCREEN)}>
                            <View style={HomeSearchStyle.ResentShowDataBox}>
                                <Text style={HomeSearchStyle.ResentShowDataText}>Facial</Text>
                                <IconF name='chevrons-right' style={[HomeSearchStyle.DirectionArrow, { color: colorrdata }]} />
                            </View>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
            </View>
        </View >
    );
};
export default HomeSearchScreen;
