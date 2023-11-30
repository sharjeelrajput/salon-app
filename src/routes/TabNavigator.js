import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconP from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import IconH from 'react-native-vector-icons/AntDesign';
import IconU from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import { TabHome, AppoinMentsTab, TabProfile, TabNearby, HistoryTab, Specialist } from '../screens';
import CustomSidebarMenu from '../components/commonComponents/CustomSidebarMenu';
import { colorsset } from '../utils';
import { useTheme } from '@react-navigation/native';
import RouteName from './RouteName';
import Style from '../styles/CommonStyle/Style';
import { useSelector } from "react-redux";
import ColorPicker from '../components/commonComponents/ColorPicker';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}

function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen name="Home"
        component={HomeTabsAll} />
    </Drawer.Navigator>
  );
}

function HomeTabsAll() {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: colorrdata,
        inactiveTintColor: 'gray',
        labeled: true,
        labelStyle: {
        },
        tabStyle: {
          height: 49,
          backgroundColor: '#fff',
          paddingTop: 0,
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name={RouteName.TAB_HOME}
        component={HomeTabScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size={19}
              name="home"
              style={{ color: focused ? colorrdata : 'gray' }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={RouteName.TAB_NEARBY}
        component={TabNearbyTabStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <IconP name="near-me" style={{ color: focused ? colorrdata : 'gray' }} size={25} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name={RouteName.TAB_EXERCISE}
        component={AppointmentsScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <IconH name="copy1"  style={{ color: focused ? colorrdata : 'gray' }} size={17} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name={RouteName.TAB_SPECIALIST}
        component={SpecialistScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <IconU name="list"  style={{ color: focused ? colorrdata : 'gray' }} size={17} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name={RouteName.TAB_HISTORY}
        component={HistoryScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <IconP name="history"  style={{ color: focused ? colorrdata : 'gray' }} size={25} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name={RouteName.TAB_PROFILE}
        component={ProfileScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconU
              size={19}
              name="user-circle"
              style={{ color: focused ? colorrdata : 'gray' }}
            />
          ),
        }}
      />

    </Tabs.Navigator>
  );
}

function Root({ navigation }) {

  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false
        }}
      />
      <Stack.Screen name="Home" component={HomeTabsAll}
        options={{
          title: '',
          headerShown: false
        }}
      />
    </Stack.Navigator>

  );
}
export default Root;

function HomeTabScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="TabHome">
      <Stack.Screen
        name="TabHome"
        component={TabHome}
        options={{
          title: 'Home', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: 'white',
          },
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={'white'} size={35} />
            </TouchableOpacity>
          ),
          headerRight: () => <View onPress={() => navigation.navigate(RouteName.AUDIOCALL_VIDEOCALL)} style={Style.flexrowplusicon}>
            <TouchableOpacity  onPress={() => navigation.navigate(RouteName.HOME_SEARECH)}>
              <Icon name="search" style={Style.plusiconstyle} color="white" size={22} />
            </TouchableOpacity>
            <Text style={Style.chiropractorText}></Text>
            <ColorPicker />
          </View>,
        }}
      />
    </Stack.Navigator>
  );
}
function AppointmentsScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="AppoinMentsTab">
      <Stack.Screen
        name="AppoinMentsTab"
        component={AppoinMentsTab}
        options={{
          title: 'Appointments', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={'#fff'} size={35} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function SpecialistScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="Specialist">
      <Stack.Screen
        name="Specialist"
        component={Specialist}
        options={{
          title: 'Specialist', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: 'white'
          },
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={'white'} size={35} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function HistoryScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="HistoryTab">
      <Stack.Screen
        name="HistoryTab"
        component={HistoryTab}
        options={{
          title: 'History', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: 'white'
          },
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={'white'} size={35} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="TabProfile">
      <Stack.Screen
        name="TabProfile"
        component={TabProfile}
        options={{
          title: 'Profile', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: 'white'
          },
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={'white'} size={35} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function TabNearbyTabStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="TabNearby">
      <Stack.Screen
        name="TabNearby"
        component={TabNearby}
        options={{
          title: 'Nearby', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={'#fff'} size={35} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
