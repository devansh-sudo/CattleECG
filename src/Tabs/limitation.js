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
          <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 5, marginLeft: 12 }}>Limitation</Text>


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
          Cannot be used for Chamber measurement

          </Text>

        </View>
       
          {/* <Image style={{height:250,width:'95%',alignSelf:'center',marginTop:16,resizeMode:'contain'}} source={require('../assets/34.jpg')}/> */}

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 16 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Due to complete penetration of purkinje fibers from
              endocardium to epicardium, depolarization of both
              ventricular free walls occurs explosively
              in many directions.</Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={8} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic",paddingRight:10 }}>This period of ventricular activation is
              responsible for the electrocardiographic
              criteria that indicate ventricular
              enlargement in small animals but
              contribute little to generating the QRS
              complex of large animals.</Text>
          </View>


          <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h1.png')} />

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Purkinje fibres are distributed through out the myocardium leading to cancellation of
              wave fronts.</Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000',marginBottom:90 }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Hence, unlike small animals ECG is not useful for studying cardiac hypertrophy or
              myocardial abnormality in large ruminants. </Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}
