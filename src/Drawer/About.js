
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


export default class Login extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ backgroundColor: 'white' }}>
          <StatusBar backgroundColor='#004d40' barStyle="light-content" />
          <View style={{ flexDirection: 'row', backgroundColor: '#004d40', height: 50,justifyContent:'center' }}>
            {/* <Icon onPress={() => this.props.navigation.navigate('Home')} name="arrow-left" style={{ fontSize: 32, color: '#fff', marginLeft: 10, marginTop: 10 }} /> */}
            <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white',fontWeight:'bold' }}>About Application</Text>
          </View>
          <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>

            {/* <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', marginTop: 10, }}>About Application</Text> */}
            <Text numberOfLines={25} style={{  fontSize: 16, marginTop: 20, marginStart:20 }}>RumiECG is an android based mobile application containing the information about
              the electrocardiographic (ECG) features of commonly occurring arrhythmias, their diagnosis
              and therapeutic management in ruminants.  As the mean cardiac axis in ruminants is different from monogastric animals, the
              general principles of ECG interpretation cannot be applied to ruminants. The present APP
              describes in detail about the principles of ECG in ruminants, procedure of ECG recording,
              ECG interpretation, diagnosis, differential diagnosis and treatment of arrhythmias in
              ruminants. This APP will be helpful to students, academicians and practicing veterinarians to
              learn about identifying the different types of arrhythmias and updating themselves with the
              different treatment protocols practiced for the management of arrhythmias in ruminants.</Text>
            <Text numberOfLines={3} style={{ fontWeight: 'bold', fontSize: 18, color: '#0d47a1', alignSelf: 'center', textAlign: 'center', marginHorizontal: 8, marginBottom: 0, marginTop: 40 }}>Designed By </Text>


            <Image style={{ width:'95%',alignSelf:'center',resizeMode:'contain',height:120,marginTop:10}} source={require('../assets/banner.png')}/>
            <Text numberOfLines={3} style={{ fontWeight: 'bold', fontSize: 18, color: '#0d47a1', alignSelf: 'center', textAlign: 'center', marginHorizontal: 8, marginBottom: 0, marginTop: 10 }}>ARIS Cell ICAR-IVRI</Text>

          </ScrollView>
        </View>
      </View>
    );
  }
}
