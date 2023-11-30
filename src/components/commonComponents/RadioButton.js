
import React, { useState } from 'react';
import { View } from 'react-native';
import Styles from '../../styles/LoginRegiesterStyle/RadioButtonStyle';
import RadioForm from 'react-native-simple-radio-button';
import { useSelector } from "react-redux";

const QuesAnsPair = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [chosenOption, setChosenOption] = useState('apple'); //will store our current user options
  const options = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ]; //

  return (

    <View style={{ flexDirection: 'row' }}>
      <RadioForm
        radio_props={options}
        buttonColor={colorrdata}
        selectedButtonColor={colorrdata}
        buttonSize={10}
        buttonOuterSize={20}
        style={Styles.flexrowradiobutton}
        labelStyle={{
          fontSize: 18,
          color: 'black',
          marginRight: 20,
        }}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption(value);
        }} //if the user changes options, set the new value
      />
    </View>

  );
}

export default QuesAnsPair;

