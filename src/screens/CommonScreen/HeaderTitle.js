import React from "react";
import { Text, View } from "react-native";
import Styles from '../../styles/CommonStyle/Style';
import { useSelector } from "react-redux";

const DoctorTabListScreenset = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { title } = props;
  return (
    <View>
      <Text style={[Styles.settextstyle, { color: colorrdata, marginLeft: 10 }]}>{title}</Text>
    </View>
  );
};
export default DoctorTabListScreenset;