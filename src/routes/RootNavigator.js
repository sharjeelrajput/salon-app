import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
import { Input } from '../components';
import { colorsset } from '../utils';
import { View, TouchableOpacity, StatusBar } from "react-native";
import Style from '../styles/CommonStyle/Style';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import IconA from 'react-native-vector-icons/AntDesign';


const Stack = createNativeStackNavigator();

// import Splash from '../screens/SplashScreen';
import TabNavigator from './TabNavigator';
import {
  LoginScreen, RegisterScreen, OtpVeryfiveScreen, RegistrationSuccessful, DraweEditProfile,
  DraweChangePassword, DraweReviesScreen, PayNowScreen, ChartScreen, DrawerChartScreen,
  DrawerHelpScreen, PaymentScreen,
  DrawerPaymentScreen, SplashScreen, MapLocation, CategoryList, BookAppointment, HomeSearchScreen, GetstartedSliderscreen, DrawerNavigationNotification
} from '../screens';

const RootNavigator = props => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  <StatusBar barStyle="light-content" backgroundColor={colorrdata} />
  const [Search, onChangeText] = React.useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name={RouteName.GET_STARTED_SCREEN} component={GetstartedSliderscreen} options={{ headerShown: false }} />
        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={RouteName.REGISTER_SCREEN} component={RegisterScreen} />
        <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />
        <Stack.Screen name={RouteName.CHANGE_PASSWORD} component={DraweChangePassword} />
        <Stack.Screen name={RouteName.EDIT_PROFILE} component={DraweEditProfile} />

        <Stack.Screen options={{
          headerShadowVisible: false,
          title: '', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: '#fff',
          },
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0,
            shadowOpacity: 0,
          },

        }}
          name={RouteName.PAYMENT} component={PaymentScreen}
        />

        <Stack.Screen name={RouteName.REGIATRAION_SUCCESSFULL} component={RegistrationSuccessful} />

        <Stack.Screen name={RouteName.REVIEWS_SCREEN} component={DraweReviesScreen} />
        <Stack.Screen name={RouteName.PAYNOW_SCREEN} component={PayNowScreen} />
        <Stack.Screen name={RouteName.CHART_DOCTORE_SCREEN} component={DrawerChartScreen} />
        <Stack.Screen name={RouteName.DRAWER_HELPS_SCREEN} component={DrawerHelpScreen}
          options={{
            headerShadowVisible: false,
            title: 'Help',
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: colorrdata,
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen options={{
          headerShadowVisible: false,
          title: 'Adelita', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: '#fff',
          },
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0,
            shadowOpacity: 0,
          },

        }} name={RouteName.CHART_SCREEN_PERSON} component={ChartScreen} />
        <Stack.Screen name={RouteName.OTP_VERYFY_SCREEN} component={OtpVeryfiveScreen} />

        <Stack.Screen name={RouteName.MAP_SCREEN} component={MapLocation} />
        <Stack.Screen options={{
          headerShadowVisible: false,
          title: 'List', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: '#fff',
          },
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0,
            shadowOpacity: 0,
          },

        }} name={RouteName.CATEGORY_LIST_SCREEN} component={CategoryList} />

        <Stack.Screen options={{
          headerShadowVisible: false,
          title: 'Appointment', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: '#fff',
          },
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0,
            shadowOpacity: 0,
          },

        }} name={RouteName.BOOKAPPOINTMENT} component={BookAppointment} />

        <Stack.Screen options={{
          title: '',
          headerShown: true,
          headerTitleStyle: {
            color: '#fff',
            fontWeight: "700",
            fontSize: 20,
          },
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0,
            shadowOpacity: 0,
          },

          headerRight: () => {
            const navigation = useNavigation();
            return (
              <View style={Style.flexsewtrwo}>
                <Input
                  placeholder='Search'
                  placeholderTextColor="lighgrey"
                  SearchHomeTab={Style.SearchHomeTab}
                  onChangeText={onChangeText}
                  value={Search}
                  underlineColorAndroid="transparent"
                  inputStyle={Style.TabInputSearch}
                />
                <TouchableOpacity onPress={() => onChangeText('')}>
                  <IconA name='close' style={Style.SearchCloseIcon} />
                </TouchableOpacity>
              </View>
            );
          },
        }}

          name={RouteName.HOME_SEARECH} component={HomeSearchScreen} />

        <Stack.Screen name={RouteName.NOTIFICATION_DRAWER} component={DrawerNavigationNotification} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;