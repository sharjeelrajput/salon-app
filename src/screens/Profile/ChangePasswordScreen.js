import React, { useState } from 'react';
import {View,ScrollView,StatusBar,ImageBackground,} from 'react-native';
import {Container,AppHeader,Input,Button} from './../../components';
import { colorsset, Strings } from './../../utils';
import RouteName from './../../routes/RouteName';
import images from '../../index';
import Style from '../../styles/CommonStyle/Style';
import Styles from '../../styles/Profilescreenstyle/ChangeYourPasswordStyle';
import Alert from '../../components/commonComponents/SweetAlertModal';
import { useSelector } from "react-redux";

const ChnagePassword = ({ navigation }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [DisplayAlert, setDisplayAlert] = useState(0)

    const onChangeText = (text, type) => {
        if (type === 'currentPassword') setCurrentPassword(text);
        if (type === 'newPassword') setNewPassword(text);
        if (type === 'confirmPassword') setConfirmPassword(text);
    };
  const { colorrdata } = useSelector(state => state.commonReducer) || {};

    return (
        <Container>
         
                    
                <ScrollView
                    contentContainerStyle={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignContent: 'center',
                        height: '100%'
                    }}>
                    <View style={[Styles.container, {backgroundColor: colorsset.BackgroundColorScreen}]}>
                        <View style={[Style.minviewallcontent, Style.minviewallcontentCenter]}>
                            <Input
                                placeholder={Strings.ChangePassword.current_password}
                                onChangeText={(text) => onChangeText(text, 'currentPassword')}
                                value={currentPassword}
                                inputStyle={Style.inputMobile}
                            />
                            <Input
                                placeholder={Strings.ChangePassword.new_password}
                                onChangeText={(text) => onChangeText(text, 'newPassword')}
                                value={newPassword}
                                inputStyle={Style.inputMobile}
                            />
                            <Input
                                placeholder={Strings.ChangePassword.confirm_password}
                                onChangeText={(text) => onChangeText(text, 'confirmPassword')}
                                value={confirmPassword}
                                inputStyle={Style.inputMobile}
                            />
                            <Button
                                title={Strings.ChangePassword.update}
                                onPress={() => { setDisplayAlert(1) }}
                                style={Styles.button} />
                        </View>
                        <View style={Style.centeredView}>
                            {DisplayAlert !== 0 ?
                                <Alert message='Password has been changed' link={RouteName.HOME_TAB_SET} />
                                :
                                null
                            }
                        </View>
                    </View>
                </ScrollView>
          
        </Container>
    )
}
export default ChnagePassword;
