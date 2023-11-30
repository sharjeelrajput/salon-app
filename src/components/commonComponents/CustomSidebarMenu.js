import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import IconL from 'react-native-vector-icons/Entypo';
import IconT from 'react-native-vector-icons/FontAwesome5';
import IconZ from 'react-native-vector-icons/FontAwesome';
import Styles from '../../styles/CommonStyle/CustomeSlidebar';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo';
import images from '../../index';
import IconH from 'react-native-vector-icons/AntDesign';
import IconU from 'react-native-vector-icons/FontAwesome';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import IconP from 'react-native-vector-icons/Fontisto';
import IconD from 'react-native-vector-icons/MaterialCommunityIcons';
import { ConfirmationAlert } from "../../components";


const CustomSidebarMenu = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { navigation } = props;
  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');
  const [cancelbutton, SetCancelbutton] = useState('Cancel');

  var alertdata = {
    'logout': " Are you sure want to logout?",
  }

  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
    okbutton;
  }

  return (
    <ScrollView>
      <View style={Styles.customslidebarmenu}>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.TAB_HOME)
        }>
          <IconE
            size={19}
            name="home"
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.TAB_NEARBY)
        }>
          <IconD
            size={19}
            name="near-me"
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>Nearby</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.TAB_EXERCISE)
        }>
          <IconH
            size={19}
            name="copy1"
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.TAB_SPECIALIST)
        }>
          <IconZ
            size={19}
            name="list"
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>Specialist</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.TAB_PROFILE)
        }>
          <IconU size={19} name="user-circle" style={Styles.logoimage} color={colorrdata} />
          <Text style={Styles.hometextstyle}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.CHANGE_PASSWORD)
        }>
          <IconP size={19} name="key" style={Styles.logoimage} color={colorrdata} />
          <Text style={Styles.hometextstyle}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.EDIT_PROFILE)
        }>
          <IconU size={19} name="user-circle" style={Styles.logoimage} color={colorrdata} />
          <Text style={Styles.hometextstyle}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.REVIEWS_SCREEN)
        }>
          <IconM name="star" color={colorrdata} size={20} />
          <Text style={Styles.hometextstyle}>Reviews</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.NOTIFICATION_DRAWER)
        }>
          <IconL name="notification" color={colorrdata} size={20} />
          <Text style={Styles.hometextstyle}>Notification</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.PAYMENT)
        }>
          <IconM name="payment" color={colorrdata} size={20} />
          <Text style={Styles.hometextstyle}>Payment Confirmation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.CHART_DOCTORE_SCREEN)
        }>
          <IconL name="chat" color={colorrdata} size={20} />
          <Text style={Styles.hometextstyle}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.DRAWER_HELPS_SCREEN)
        }>
          <IconT name="hands-helping" color={colorrdata} size={20} />
          <Text style={Styles.hometextstyle}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.TAB_HISTORY)
        }>
          <IconT name="history" color={colorrdata} size={20} />
          <Text style={Styles.hometextstyle}>Payment History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.MAP_SCREEN)
        }>
          <IconT name="map-marked-alt" color={colorrdata} size={20} />
          <Text style={Styles.hometextstyle}>Map View</Text>
        </TouchableOpacity>
        <View style={Styles.settingandlogout}>
          <TouchableOpacity style={Styles.flexrowset} onPress={() => {
            setAlertVisible(true);
            setAlertMessage(alertdata.logout);
            Setokbutton('');
          }}>
            <IconL name="log-out" color={colorrdata} size={23} />
            <Text style={Styles.hometextstyle}>Logout</Text>
          </TouchableOpacity>
        </View>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPressCancel={() => setAlertVisible(!alertVisible)}
          onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
          cancelButtonText={cancelbutton}
        />

      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;
