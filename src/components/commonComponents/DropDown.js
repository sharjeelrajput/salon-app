import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { heightPercent, SF, SH, SW } from '../../utils';
import { useTheme } from '@react-navigation/native';

function DropdownComponent({
    width,
    data,
    labelField,
    valueField,
    placeholder,
    onChange,
    value,
    labelStyle,
    placeholderStyle,
    selectedTextStyle,
    dropdownStyle
}) {
    const { colors } = useTheme();
    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: { width: width },
                dropdownStyle: {
                    borderWidth: SH(1),
                    borderColor: colors.input_border,
                    borderRadius: SH(8),
                    fontSize: SF(14),
                    lineHeight: SF(17),
                    color: colors.black,
                    fontWeight: '400',
                    padding: SH(5),
                    minHeight: SH(60),
                    ...dropdownStyle
                },
                icon: {
                    marginRight: 5,
                },
                label: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    paddingHorizontal: 8,
                    fontSize: SF(20),
                    ...labelStyle
                },
                placeholderStyle: {
                    fontSize: SF(18),
                    lineHeight: SF(21),
                    ...placeholderStyle
                },
                selectedTextStyle: {
                    fontSize: SF(18),
                    lineHeight: SF(21),
                    ...selectedTextStyle
                },
                iconStyle: {
                    width: SW(20),
                    height: SH(20),
                },
            }),
        [dropdownStyle, labelStyle, placeholder, selectedTextStyle]
    )
    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdownStyle}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={heightPercent(20)}
                labelField={labelField}
                valueField={valueField}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </View>
    );
};

export default DropdownComponent;
