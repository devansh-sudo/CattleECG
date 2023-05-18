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
                    <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 5, marginLeft: 12 }}>Limb leads system
                    </Text>


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
                            Bipolar limb leads in Einthoven Triangle

                        </Text>

                    </View>

                    {/* <Image style={{height:250,width:'95%',alignSelf:'center',marginTop:16,resizeMode:'contain'}} source={require('../assets/34.jpg')}/> */}

                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 16 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>The right and left armed electrodes will be attached proximal to olecranon
                            process on the caudal aspects of the appropriate fore legs, whereas hind leg
                            electrodes will be attached over stifle joint on the anterior aspects of appropriate
                            hind legs.</Text>
                    </View>

                    <Text style={{ color: '#000', fontSize: 14, marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center', marginTop: 16 }}>
                        Lead I: Left Fore Limb (Positive) – Right Fore Limb (Negative)

                    </Text>
                    <Text style={{ color: '#000', fontSize: 14, marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center', marginTop: 16 }}>
                        Lead II: Right Fore Limb (Negative) – Left Hind Limb (Positive)

                    </Text>
                    <Text style={{ color: '#000', fontSize: 14, marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center', marginTop: 16 }}>
                        Lead III: Left Fore Limb (Negative) – Left Hind Limb (Positive)


                    </Text>

                    <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h3.png')} />
                    <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h4.png')} />
                    <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h5.png')} />
                   

                   



                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >

                        <Text numberOfLines={5} style={{ color: '#0d47a1', marginHorizontal: 10, marginTop: 16, fontSize: 16 }}>Drawbacks </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>As the position of electrodes is far from the position of heart in thoracic
                            cavity, major electrical activity of the heart will not be recorded. Hence, the
                            ECGs recorded using the limb leads in cattle have low polarities. </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10,marginBottom:40 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Movement of the animal affects the recording of cardiac potential, hence
                            there will be great variability in recorded waveforms. </Text>
                    </View>


                </ScrollView>
            </View>
        );
    }
}
