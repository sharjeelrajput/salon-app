import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HelpScreen} from '../../screens';
import {CustomSidebarMenu,HeaderSidemunuicon} from '../../components';
import Style from '../../styles/CommonStyle/Style';
import { useSelector } from "react-redux";
import { colorsset, } from '../../utils';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function firstScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="HelpScreen">
      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          title: 'Help', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => <HeaderSidemunuicon seticoncoloranother={Style.seticonstyle} navigationProps={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}>
      <Drawer.Screen
        name="FirstPage"
        options={{ drawerLabel: 'First page Option', headerShown: false, }}
        component={firstScreenStack} />
    </Drawer.Navigator>
  );
}
export default App;
