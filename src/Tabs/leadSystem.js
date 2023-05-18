import { Container } from 'native-base';
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import { Assets } from '../assets/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';


export default class Cardiac extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <StatusBar backgroundColor= '#004d40' barStyle="light-content" />
        <View style={{ flexDirection: 'row', backgroundColor: '#004d40', height: 45 }}>
          <Icon onPress={() => this.props.navigation.navigate('Home')} name="arrow-left" style={{ fontSize: 28, color: '#fff', marginLeft: 10, marginTop: 4 }} />
          <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 5, marginLeft: 12 }}>Lead System
          </Text>


        </View>
        <View
          style={{
            marginTop: 20,
            marginBottom: 10,

            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
            Lead System

          </Text>

        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <Image style={{height:250,width:'95%',alignSelf:'center',marginTop:16,resizeMode:'contain'}} source={require('../assets/34.jpg')}/> */}

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 16 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 10, color: "#000", fontSize: 18, fontStyle: "italic" }}>The primary focus of ECG recording is to detect arrhythmias, hence
              the lead selected should generate distinct P, QRS and T complexes.</Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 20 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 10, color: "#000", fontSize: 18, fontStyle: "italic" }}>The lead system should be easy to apply, and the tracing should be  free of
artifacts created by muscle tremors, skin movement, shifting of
weight, and changes in limb position.
</Text>
          </View>


          {/* <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h2.png')} /> */}

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 20 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 10, color: "#000", fontSize: 18, fontStyle: "italic" }}>No single electrocardiographic lead system has been universally
accepted for use in large ruminants.
</Text>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 20 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 10, color: "#000", fontSize: 18, fontStyle: "italic" }}>Bipolar limb leads (I, II, III), unipolar leads (aVF aVR, aVL) and
precordial chest leads (CV6LU, CV6LL, CV6RU, CV6RL) have been
described in large ruminants.
</Text>
          </View>


        </ScrollView>
      </View>
    );
  }
}
