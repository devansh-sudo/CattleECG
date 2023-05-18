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


export default class Introduction extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <StatusBar backgroundColor= '#004d40' barStyle="light-content" />
                <View style={{ flexDirection: 'row', backgroundColor: '#004d40', height: 70 }}>
                    <Icon onPress={() => this.props.navigation.navigate('Home')} name="arrow-left" style={{ fontSize: 28, color: '#fff', marginLeft: 10, marginTop: 10 }} />
                    <Text numberOfLines={2} style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 3, marginLeft: 12,width:'80%' }}>Arrhythmias due to electrolyte imbalance </Text>


                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Electrolytes such as calcium, potassium, sodium play an important role in the electrical activity of heart.
                        </Text>
                    </View>


                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Disturbances in the electrolyte balance leads to arrhythmias and other ECG changes.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginBottom: 30 }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Arrhythmias due to hyperkalemia and milk fever are noticed very commonly in large ruminants.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >

                        <Text numberOfLines={5} style={{ color: '#0d47a1', marginHorizontal: 10, marginTop: 16, fontSize: 20,fontWeight:'bold'}}>Hyperkalemia </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Hyperkalemia is a condition where serum or plasma potassium levels are more than 5.5 mmol/L and is commonly noticed in neonatal ruminants with diarrhea, dehydration and metabolic acidosis. In adult ruminants it is seen in exertional rhabdomyolysis.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>ECG changes such as suppression in P wave amplitude or loss of the P wave, widened QRS complexes, increased J point, increased ST segment angle, and symmetric T waves (narrowing of T wave duration and “tenting” of the T wave) are noticed in severe hyperkalemia (6.5 to 8.0 mmol/L).
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Cardiotoxic effects and life threatening arrhythmias such as atrial standstill and ventricular escape rhythm are evident when the serum potassium concentration is 8–11 mmol/L.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Hyperkalemia can be treated by Intravenous administration of isotonic saline or isotonic sodium bicarbonate solutions or hypertonic saline or hypertonic sodium bicarbonate, calcium, or glucose solutions  based on the severity and need.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >

                        <Text numberOfLines={5} style={{ color: '#0d47a1', marginHorizontal: 10, marginTop: 16, fontSize: 20,fontWeight:'bold' }}>Milk Fever </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>As calcium is vital for the contraction of cardiac muscles, its deficiency leads to ECG changes.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>ECG changes such as prolonged QT and ST interval are observed in cows with milk fever.
                        </Text>
                    </View>
                    <Image style={{ height: 150, width: '95%', alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/h65.png')} />
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" ,marginHorizontal:30,marginBottom:60}}>ECG showing prolonged QT interval in cow suffering from Milk fever 

                    </Text>


                </ScrollView>
            </View>
        );
    }
}
