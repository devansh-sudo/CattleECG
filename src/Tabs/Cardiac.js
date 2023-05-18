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
          <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 5, marginLeft: 12 , }}>Cardiac axis
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
          <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center', elevation:1 }}>
            Anatomical Location and Cardiac axis

          </Text>

        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <Image style={{height:250,width:'95%',alignSelf:'center',marginTop:16,resizeMode:'contain'}} source={require('../assets/34.jpg')}/> */}

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 16 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Bovine heart is located vertically in thoracic cavity and 5/7th of heart is situated in left of the median plane.</Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 8, color: "#000", fontSize: 18, fontStyle: "italic" }}>Direction of cardiac axis in cattle
              (Negative) is different from small
              animals (Positive).</Text>
          </View>


          <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h2.png')} />
          <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" ,textAlign:'center'}}>Reference :
(Norr and Johannes, 1921) 
 </Text>

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 25 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Theoretical axis runs from the vicinity
              of cervical scapular angle in the regio
              prescapularis to the regio apices </Text>
          </View>


        </ScrollView>
      </View>
    );
  }
}
