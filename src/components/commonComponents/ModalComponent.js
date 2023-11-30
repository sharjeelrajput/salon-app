import React from 'react';
import { Modal, View, Pressable, Image } from 'react-native';
import propTypes from 'prop-types';
import {AudioCallStyle} from '../../styles';
import { useTheme } from '@react-navigation/native';
import images from '../../index';

const ModalComponent = ({ children, modalVisible, setModalVisible, close, modalViewStyle, modalbuttonClose }) => {
  const { colors } = useTheme();

  return <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
    <View style={AudioCallStyle.modalcenteredView}>

      <View style={[AudioCallStyle.modalView, { ...modalViewStyle }]}>
        <Pressable
          style={AudioCallStyle.closeView}
          onPress={() => close ? close() : null}
        >
          {close ?
            <Pressable
              style={[AudioCallStyle.modalbuttonClose, { ...modalbuttonClose }]}
              onPress={() => close()}
            >
              <Image resizeMode='cover' source={images.close} />
            </Pressable>
            : null}
          {children}
        </Pressable>

      </View>
    </View>
  </Modal>;
}

Modal.defaultProps = {
  setModalVisible: () => { },
  modalVisible: false
};

ModalComponent.propTypes = {
  setModalVisible: propTypes.func,
  modalVisible: propTypes.boolean
};

export default ModalComponent;
