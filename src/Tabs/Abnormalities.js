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
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

export default class Introduction extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: '#eeeeee', flex: 1 }}>
                <StatusBar backgroundColor='#004d40' barStyle="light-content" />
                <View style={{ flexDirection: 'row', backgroundColor: '#004d40', height: 50 }}>
                    <Icon onPress={() => this.props.navigation.navigate('Home')} name="arrow-left" style={{ fontSize: 28, color: '#fff', marginLeft: 10, marginTop: 10 }} />
                    <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 3, marginLeft: 12 }}>Abnormalities of Impulse conduction </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 20 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Abnormalities of impulse conduction
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Abnormalities of impulse conduction are the disorders in which the generation of electrical signal or the transmission of the electrical signal or both is affected leading to the occurrence of arrhythmias.

                                        </Text>
                                    </View>
                                    <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/h58.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >   </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, color: 'blue' }}>Types :
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Sinoatrial block </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Atrial standstill</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>AV block (first degree, second degree,
                                            third degree)
                                        </Text>
                                    </View>
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Sinoatrial block
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >

                                        <Text numberOfLines={5} style={{ color: '#0d47a1', marginHorizontal: 10, marginTop: 16, fontSize: 20, fontWeight: 'bold' }}>Sinoatrial block </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>In SA block the sinus node fails to discharge or its impulse is not transmitted over the atrial myocardium.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>SA block is associated with the complete absence of heart sounds, of jugular atrial wave, and of an arterial pulse for one beat period.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>ECG features:
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>There is complete absence of the P, QRS, and T complex for one beat.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>The underlying rhythm is regular unless sinus arrhythmia is present.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>The distance between the preblock and postblock P waves is twice the normal PP interval or sometimes slightly longer.
                                        </Text>
                                    </View>
                                    <Image style={{ height: 150, width: '95%', alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/h59.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Causes: High vagal tone
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>If SA block does not persist during and following exercise, it is considered as a physiologic variant of normal rhythm.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Treatment: Generally treatment is not required, it disappears with exercise. In severe cases vagolytic drugs atropine or glycopyrrolate, 0.005 to 0.01 mg/kg IV are administered.

                                        </Text>
                                    </View>
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Atrial Standstill (AS)
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Atrial standstill is also known as silent atrium or atrial arrest.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>It is an arrhythmogenic condition, characterized by lack of electrical and mechanical activity in the atria.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>It can be either transient (in hyperkalemia) or persistent (in structural heart diseases).

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Electrocardiographic features of AS include an absence of P waves in any lead and a slow regular escape rhythm of junctional or ventricular origin, with a nearly normal QRS complex.

                                        </Text>
                                    </View>
                                    <Image style={{ height: 150, width: '95%', alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/h60.png')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>ECG showing atrial standstill; note the absence of ‘P’ waves,  ventricular escape beats and bradycardia

                                    </Text>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Causes: Hyperkalemia, myocarditis, atrial myopathy etc.,

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Treatment: Treatment of underlying disease conditions .

                                        </Text>
                                    </View>
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Atrio-ventricular nodal block (AV Block)
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Normally AV node passes the impulse from Atria to Ventricles. In AV Block there is alteration in the impulse conduction through AV node.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Depending on the degree of interference with conduction at the AV node, AV block is divided into three categories (first, second, and third degree).

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>In first degree AV block, this conduction towards the ventricles is delayed; in second degree block, conduction is intermittently blocked and in third degree block, conduction is completely absent.

                                        </Text>
                                    </View>
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    First degree AV Block (AV Block)
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>In first degree AV block conduction through AV node is delayed.


                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Generally caused by high vagal tone and goes unnoticed.


                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>ECG Features:



                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Each P wave is followed by a QRS complex and every QRS complex is preceded by a P wave.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>PR interval is prolonged ( 0.26 seconds).

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>The morphology of P waves and QRS complexes is normal.

                                        </Text>
                                    </View>
                                    <Image style={{ height: 150, width: '95%', alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/h61.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Treatment:




                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Generally treatment is not required.


                                        </Text>
                                    </View>
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Second degree AV Block
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Also known as partial heart block. It occurs when there is periodic hindrance with conduction at the AV node so that some atrial complexes are blocked and not followed by ventricular complexes.




                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>ECG Features:



                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>P wave will be present, but there will be complete absence of the subsequent QRS and T waves at the blocked beat.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>There are two types of second degree AV block




                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Mobitz type 1 (Wenckebach): There is a gradual increase in the PQ interval up to the point of the blocked beat; however, the PQ interval immediately before the blocked beat does not have to be the longest in the series. This is generally considered as physiological.
                                        </Text>
                                    </View>
                                    <Image style={{ height: 150, width: '95%', alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/h62.png')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>(There will be gradual increase in PQ interval until blocked beat) </Text>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Mobitz type 2: PQ interval remains unchanged. It always indicates presence of pathological conditions of heart such as myocarditis.
                                        </Text>
                                    </View>
                                    <Image style={{ height: 150, width: '95%', alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/h63.png')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>(No changes in PQ interval)
                                    </Text>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Causes: </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>It can be associated with myocarditis, electrolyte imbalance, overdosing with calcium salts, digoxin toxicity, cardiomyopathy, and myocarditis associated with nutritional and infectious disease.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Treatment:
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Generally treatment is not required.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Addressing underlying issue will restore normal cardiac rhythm.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>In cases where the block leads to frequent syncopal episodes, short term therapy with atropine will alleviate the frequency of the block.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Second-degree heart block may progress to third-degree (complete) heart block.
                                        </Text>
                                    </View>
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Third degree AV Block
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Also known as complete heart block.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>In 3rd degree block none of the atrial impulses are conducted through AV node resulting in independent contraction of ventricles according to their own intrinsic rhythm.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Causes: Degenerative or inflammatory  AV nodal disease.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>ECG Features:
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>P waves will be of normal morphology with regular PP interval.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>No relationship is seen between P waves and QRS complexes.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>The rate of the P waves is usually high.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>QRS complexes will be bizarrely shaped with slower rate.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Ventricular escape rhythm is noticed often.

                                        </Text>
                                    </View>
                                    <Image style={{ height: 150, width: '95%', alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/h64.png')} />

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginBottom: 60 }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Prognosis of the affected animals is poor.

                                        </Text>
                                    </View>

                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                </ScrollView>
            </View>
        );
    }
}
