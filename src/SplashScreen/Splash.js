
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

export default function Splashscreen() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        flex: 1,

        resizeMode: 'contain',
      }}>
      <StatusBar backgroundColor='white' barStyle="dark-content" />
     
      <View
        style={{

          backgroundColor: 'white',
          position: 'absolute',
          top: 0, left: 0,
          right: 0, bottom: 0,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
           <Image style={{height:180,width:150,alignSelf:'center',marginTop:0,alignSelf:'center'}} source={require('../assets/hlogoo.png')}/>
        <Text style={{ color: '#0d47a1', fontSize: 28, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
        Interpretation and treatment of commonly occurring arrhythmias in Ruminants
        </Text>

      </View>
      </View>
  );
}
