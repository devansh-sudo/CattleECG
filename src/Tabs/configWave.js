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



export default class limitation extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: '#eeeeee', flex: 1 }}>
                <StatusBar backgroundColor='#004d40' barStyle="light-content" />
                <View style={{ flexDirection: 'row', backgroundColor: '#004d40', height: 45 }}>
                    <Icon onPress={() => this.props.navigation.navigate('Home')} name="arrow-left" style={{ fontSize: 28, color: '#fff', marginLeft: 10, marginTop: 4 }} />
                    <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 5, marginLeft: 12 }}> Configuration of waves</Text>


                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ marginTop: 20 }}>
                        <Collapse style={{ width: '95%', alignSelf: 'center' }}>
                            <CollapseHeader style={{ alignItems: 'center', padding: 10, backgroundColor: '#FFF', }}>
                                <View style={{ alignItems: 'center', borderRadius: 20 }}>
                                    <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}> Configuration of waves</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ backgroundColor: '#fff' }}>
                                <Collapse>
                                    <CollapseHeader>
                                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 16 }} >
                                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                            <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", paddingRight: 10 }}>Electrocardiogram of ruminants is having “P,” “QRS,” and “T” complexes,
                                                P-R interval, S-T interval, Q-T interval, and R-R intervals are also seen in
                                                other animals.
                                            </Text>
                                        </View>
                                        <Image style={{ height: 130, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h9.png')} />
                                        <View style={{ bottom: 10 }}>
                                            <Text style={{ color: '#000', fontSize: 16, marginHorizontal: 20, fontStyle: 'italic', width: '90%', marginTop: 16 }}>
                                                1: P Duration→ Beginning to the end of ‘’P’’ wave
                                            </Text>
                                            <Text style={{ color: '#000', fontSize: 16, marginHorizontal: 20, fontStyle: 'italic', width: '90%', marginTop: 16 }}>
                                                2: PR Interval → Beginning of the ‘’P’’ wave to the beginning of ‘’R” wave
                                            </Text>
                                            <Text style={{ color: '#000', fontSize: 16, marginHorizontal: 20, fontStyle: 'italic', width: '90%', marginTop: 16 }}>
                                                3: ST Interval → Beginning of the “S” wave to the end of the ‘’T” wave
                                            </Text>
                                            <Text style={{ color: '#000', fontSize: 16, marginHorizontal: 20, fontStyle: 'italic', width: '90%', marginTop: 16 }}>
                                                4: QT Interval → Beginning of the ‘’Q’’ wave to the end of the ‘’T” wave
                                            </Text>

                                            <Text style={{ color: '#000', fontSize: 16, marginHorizontal: 20, fontStyle: 'italic', width: '90%', marginTop: 16 }}>
                                                5: RR Interval → Time interval between two consecutive ‘’R’’ waves

                                            </Text>
                                        </View>
                                        <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/h10.png')} />
                                    </CollapseHeader>
                                </Collapse>
                            </CollapseBody>
                        </Collapse>
                    </View>




                    <View style={{ marginTop: 10 }}>
                        <Collapse style={{ width: '95%', alignSelf: 'center' }}>
                            <CollapseHeader style={{ alignItems: 'center', padding: 10, backgroundColor: '#FFF', }}>
                                <View style={{ alignItems: 'center', borderRadius: 20 }}>
                                    <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}>
                                        P Wave
                                    </Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ backgroundColor: '#fff' }}>
                                <Collapse>
                                    <CollapseHeader>
                                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, borderColor: '#000' }} >
                                            <Text style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", marginHorizontal: 10, marginVertical: 10 }}>P wave represents the electrical activity through the atrial musculature after Sino atrial
                                                node discharge i.e., it indicates atrial depolarization . It may be round, peaked or isoelectric in
                                                appearance.
                                            </Text>

                                        </View>
                                    </CollapseHeader>
                                </Collapse>
                            </CollapseBody>
                        </Collapse>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Collapse style={{ width: '95%', alignSelf: 'center' }}>
                            <CollapseHeader style={{ alignItems: 'center', padding: 10, backgroundColor: '#FFF', }}>
                                <View style={{ alignItems: 'center', borderRadius: 20 }}>
                                    <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}>
                                        PR Interval
                                    </Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ backgroundColor: '#fff' }}>
                                <Collapse>
                                    <CollapseHeader>
                                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, borderColor: '#000' }} >
                                            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", marginHorizontal: 10, marginVertical: 10, }}>PR interval is isoelectric and indicates conduction delay at the AV node. </Text>
                                        </View>
                                    </CollapseHeader>
                                </Collapse>
                            </CollapseBody>
                        </Collapse>
                    </View>


                    <View style={{ marginTop: 10 }}>
                        <Collapse style={{ width: '95%', alignSelf: 'center' }}>
                            <CollapseHeader style={{ alignItems: 'center', padding: 10, backgroundColor: '#FFF', }}>
                                <View style={{ alignItems: 'center', borderRadius: 20 }}>
                                    <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}>
                                        Ta Wave
                                    </Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ backgroundColor: '#fff' }}>
                                <Collapse>
                                    <CollapseHeader>
                                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, borderColor: '#000' }} >
                                            <Text style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", marginHorizontal: 10, marginVertical: 10, }}>Electrical activity developed during atrial repolarisation give rise to Ta wave and is
                                                usually buried into QRS complex and escapes identification.  </Text>
                                        </View>
                                    </CollapseHeader>
                                </Collapse>
                            </CollapseBody>
                        </Collapse>
                    </View>


                    <View style={{ marginTop: 10 }}>
                        <Collapse style={{ width: '95%', alignSelf: 'center' }}>
                            <CollapseHeader style={{ alignItems: 'center', padding: 10, backgroundColor: '#FFF', }}>
                                <View style={{ alignItems: 'center', borderRadius: 20 }}>
                                    <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}>
                                        QRS Complex
                                    </Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ backgroundColor: '#fff' }}>
                                <Collapse>
                                    <CollapseHeader>
                                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, borderColor: '#000' }} >
                                            <Text numberOfLines={20} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", marginHorizontal: 10, marginVertical: 10 }}>It is produced by an electrical disturbance spreading through the ventricle. QRS complex is negative in large ruminants and indicates ventricular depolarization.  It is measured from the beginning of  the Q wave or the R wave to the end of the last R or S wave. The first downward deflection in QRS complex is labeled Q, the first upward R, while the second downward deflection is labeled S.
                                            </Text>
                                        </View>
                                    </CollapseHeader>
                                </Collapse>
                            </CollapseBody>
                        </Collapse>
                    </View>


                    <View style={{ marginTop: 10 }}>
                        <Collapse style={{ width: '95%', alignSelf: 'center' }}>
                            <CollapseHeader style={{ alignItems: 'center', padding: 10, backgroundColor: '#FFF', }}>
                                <View style={{ alignItems: 'center', borderRadius: 20 }}>
                                    <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}>
                                        Types of QRS Complex
                                    </Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ backgroundColor: '#fff' }}>
                                <Collapse>
                                    <CollapseHeader>

                                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, borderWidth: 0.5, borderColor: '#000' }} >
                                            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", marginHorizontal: 10, marginVertical: 10 }}>In the absence of an R deflection the QRS
                                                complex would be represented by a single
                                                downward deflection; here the descending
                                                limb is labeled Q, the ascending limb S, and
                                                the wave <Text style={{ color: 'blue' }}>QS Type</Text>
                                            </Text>
                                        </View>
                                        <Image style={{ height: 180, width: '95%', alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/h11.png')} />
                                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, borderWidth: 0.5, borderColor: '#000' }} >
                                            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", marginHorizontal: 10, marginVertical: 10 }}>If R wave is prominent, the descending limb is labelled R, the ascending limb S and the wave <Text style={{ color: 'blue' }}>RS Type</Text>

                                            </Text>
                                        </View>
                                        <Image style={{ height: 180, width: '95%', alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/h12.png')} />
                                    </CollapseHeader>
                                </Collapse>
                            </CollapseBody>
                        </Collapse>
                    </View>



                    <View style={{ marginTop: 10 }}>
                        <Collapse style={{ width: '95%', alignSelf: 'center' }}>
                            <CollapseHeader style={{ alignItems: 'center', padding: 10, backgroundColor: '#FFF', }}>
                                <View style={{ alignItems: 'center', borderRadius: 20 }}>
                                    <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}>
                                        T Wave
                                    </Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={{ backgroundColor: '#fff' }}>
                                <Collapse>
                                    <CollapseHeader>
                                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, borderWidth: 0.5, borderColor: '#000' }} >
                                            <View style={{ flexDirection: 'row' }}>
                                               
                                                <Text numberOfLines={20} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", marginHorizontal: 10, marginVertical: 10 }}>Electrical activity generated during ventricular repolarisation give rise to T wave.
                                                    It may be positive, negative or biphasic in nature.
                                                </Text>
                                            </View>
                                        </View>
                                        <Image style={{ height: 180, width: '95%', alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/h13.jpg')} />
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Positive T wave
                                        </Text>
                                        <Image style={{ height: 180, width: '95%', alignSelf: 'center', marginTop: 1, resizeMode: 'contain', marginBottom: 0 }} source={require('../assets/h14.png')} />
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 14, textAlign: 'center', marginBottom: 50, fontWeight: 'bold' }}>Biphasic T wave
                                        </Text>
                                    </CollapseHeader>
                                </Collapse>
                            </CollapseBody>
                        </Collapse>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
