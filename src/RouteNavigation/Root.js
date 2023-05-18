import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';
// import Login from '../Account/Login';
import Home from '../Home/Home'
// import {DrawerContent} from '../Home/DrawerContent';
import About from '../Drawer/About'
import Author from '../Drawer/Author'
import Version from '../Drawer/Version'
import Introduction from '../Tabs/Introduction'
import Cardiac from '../Tabs/Cardiac'
import limitation from '../Tabs/limitation'
import leadSystem from '../Tabs/leadSystem'        
import limbLead from '../Tabs/limbLead'
import baseApex from '../Tabs/baseApex'
import ecgReccording from '../Tabs/ecgReccording'
import configWave from '../Tabs/configWave'
import ecgInterpretation from '../Tabs/ecgInterpretation'
import classificationArrhythmias from '../Tabs/classificationArrhythmias'
import physiologicalArrhythmias from '../Tabs/physiologicalArrhythmias'
import supraventricularArrhythmias from '../Tabs/supraventricularArrhythmias' 
import junctionalArrhythmias from '../Tabs/junctionalArrhythmias'  
import ventricularArrhythmias from '../Tabs/ventricularArrhythmias' 
import Abnormalities from '../Tabs/Abnormalities'
import Arrhythmias from '../Tabs/Arrhythmias'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

  









 
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
 
export default class RouteNavigation extends React.Component {
  state = { skip: undefined, comp: '' };
 
  render() {
     console.disableYellowBox = true;
   

     function MyTabs() {
      return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#004d40"
          barStyle={{ backgroundColor: '#e0f2f1' }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Author"
            component={Author}
            options={{
              tabBarLabel: 'Author',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bookmark" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="About App"
            component={About}
            options={{
              tabBarLabel: 'About App',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="information" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
    }

// function MyTabs() { 
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         activeTintColor: '#000',
//         labelStyle: { fontSize: 14 },
//         style: { backgroundColor: '#004d40' },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{ tabBarLabel: 'Home' }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{ tabBarLabel: 'Profile' }}
//       />
//       {/* <Tab.Screen
//         name="Support"
//         component={Support}
//         options={{ tabBarLabel: 'Support' }}
//       /> */}
//     </Tab.Navigator>
//   );
// }
    

    // function DrawerRouter() {
    //   return (
    //     <Drawer.Navigator
    //       drawerStyle={{
    //         width: 275,
    //       }}
    //       overlayColor="transparent"
    //       drawerContent={(props) => <DrawerContent {...props} />}
    //       initialRouteName="Home">
    //       <Drawer.Screen name="Home" component={Home} />
    //       <Drawer.Screen name="About" component={About} />
    //       <Drawer.Screen name="Author" component={Author} />
    //       <Drawer.Screen name="Version" component={Version} />
          
    //     </Drawer.Navigator>
    //   );
    // }   
    return (
        <>
        <NavigationContainer>
      
          <Stack.Navigator   
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Home" component={MyTabs} />
            <Stack.Screen name="Introduction" component={Introduction} />
            <Stack.Screen name="limitation" component={limitation} />
            <Stack.Screen name="Cardiac" component={Cardiac} />
            <Stack.Screen name="leadSystem" component={leadSystem} />
            <Stack.Screen name="ecgReccording" component={ecgReccording} />
            <Stack.Screen name="limbLead" component={limbLead} />
            <Stack.Screen name="baseApex" component={baseApex} />
            <Stack.Screen name="configWave" component={configWave} />
            <Stack.Screen name="ecgInterpretation" component={ecgInterpretation} />
            <Stack.Screen name="classificationArrhythmias" component={classificationArrhythmias} />
            <Stack.Screen name="physiologicalArrhythmias" component={physiologicalArrhythmias} />
            <Stack.Screen name="supraventricularArrhythmias" component={supraventricularArrhythmias} />
            <Stack.Screen name="junctionalArrhythmias" component={junctionalArrhythmias} />
            <Stack.Screen name="ventricularArrhythmias" component={ventricularArrhythmias} />
            <Stack.Screen name="Abnormalities" component={Abnormalities} />
            <Stack.Screen name="Arrhythmias" component={Arrhythmias} />











       


            
          </Stack.Navigator>

        </NavigationContainer>
      </>
     
    );
  }
}
