import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import propTypes from 'prop-types';
import RowComponent from './RowComponent';
import { Fonts, SF, SH, SW } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { Icon } from 'react-native-elements';
import IconA from 'react-native-vector-icons/AntDesign';


function AppHeader({ headerStyle, leftImage, title, onLeftPress }) {
    const { colors } = useTheme();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    height: SH(45),
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    backgroundColor: colorrdata,
                    ...headerStyle
                },
                leftView: {
                    height: '100%',
                    width: '15%',
                    left: SH(20),
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    tintColor: colorrdata,
                },
                leftImageStyle: {
                    height: SH(18),
                    width: SH(18),
                    resizeMode: 'contain',
                },
                titleStyle: {
                    fontFamily: Fonts.Poppins_Bold,
                    fontSize: SF(20),
                    fontWeight: '700',
                    color: '#fff',
                    paddingLeft: 20
                },
                rightView: {
                    height: '100%',
                    width: '15%',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                rightImageStyle: {
                    height: SH(18),
                    width: SW(18),
                    resizeMode: 'contain'
                }

            }),
        [headerStyle, colors],
    );
    return (
        <RowComponent rowStyle={styles.container}>
            <TouchableOpacity disabled={!leftImage} style={styles.leftView} onPress={() => onLeftPress()}>
                {/* <Image style={styles.leftImageStyle} source={leftImage} /> */}
                <IconA name={leftImage} size={22} color='#fff' />
            </TouchableOpacity>
            <View style={{ right: SH(10) }}>
                <Text style={styles.titleStyle}>{title}</Text>
            </View>
            {/* <TouchableOpacity disabled={!rightImage} style={styles.leftView}>
                <Image style={styles.rightView} source={rightImage} />
            </TouchableOpacity> */}
        </RowComponent>
    )
}

AppHeader.defaultProps = {
    headerStyle: {},
    leftImage: null,
    title: '',
    rightImage: null,
    onLeftPress: () => { },
};

AppHeader.propTypes = {
    headerStyle: propTypes.shape({}),
    leftImage: propTypes.any,
    title: propTypes.string,
    rightImage: propTypes.any,
    onLeftPress: propTypes.func
};

export default AppHeader;