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
                <StatusBar backgroundColor= '#fff' barStyle="dark-content" />
                <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 45 }}>
                    <Icon onPress={() => this.props.navigation.navigate('Home')} name="arrow-left" style={{ fontSize: 28, color: '#0d47a1', marginLeft: 10, marginTop: 4 }} />
                    <Text style={{ fontSize: 20, alignSelf: 'center', color: '#0d47a1', bottom: 5, marginLeft: 12 }}>ECG Interpretation</Text>


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
                            ECG Interpretation


                        </Text>

                    </View>

                    {/* <Image style={{height:250,width:'95%',alignSelf:'center',marginTop:16,resizeMode:'contain'}} source={require('../assets/34.jpg')}/> */}

                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 16 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Assess the quality of the recording and the sufficiency for accurate diagnosis.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>In order to avoid errors, the evaluation of the ECG recording should be performed in a
                            methodical manner.
                        </Text>
                    </View>




                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>The heart rate, heart rhythm, the correlation between P waves and QRS complexes,
                            the morphology of P waves and QRS complexes and the duration of the different
                            complexes and intervals should be evaluated.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Heart rhythm should be assessed to determine whether it is regular or irregular. If irregularities are
                            present, their nature should be investigated.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, marginBottom: 90 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>The final step is to assess the morphology and duration of the different waves, and the
                            relation between waves. Each complex should have the same morphology. Each P
                            wave should be followed by a QRS complex and each QRS complex should be
                            preceded by a P wave.
                        </Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}
