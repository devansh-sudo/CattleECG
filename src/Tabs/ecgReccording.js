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


export default class limitation extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <StatusBar backgroundColor= '#004d40' barStyle="light-content" />
        <View style={{ flexDirection: 'row', backgroundColor: '#004d40', height: 45 }}>
          <Icon onPress={() => this.props.navigation.navigate('Home')} name="arrow-left" style={{ fontSize: 28, color: '#fff', marginLeft: 10, marginTop: 4 }} />
          <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 5, marginLeft: 12 }}>ECG Recording</Text>


        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: 20,
              marginBottom: 10,

              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
              Procedure of ECG Recording


            </Text>

          </View>

          {/* <Image style={{height:250,width:'95%',alignSelf:'center',marginTop:16,resizeMode:'contain'}} source={require('../assets/34.jpg')}/> */}

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 16 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Electrocardiogram is recorded in a
              calm and quite surroundings using
              electrocardiographic machine at a
              paper speed of 25 mm per second and
              amplitude of 1 mV per 10 mm.</Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Position: ECG is recorded in standing
              position by placing the rubber /
              insulation mat underneath. .</Text>
          </View>


          <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 20,  }} source={require('../assets/img3.jpg')} />

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Flattened alligator / crocodile clips
              are used for ECG recording. </Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10,marginBottom: 90  }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000'}} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Sites of application are prepared by shaving and cleaning with alcohol. Gel is applied
              liberally on the areas of electrode attachment .</Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}
