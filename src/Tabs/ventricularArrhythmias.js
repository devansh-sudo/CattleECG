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
            <View style={{ backgroundColor: '#eeeeee', flex: 1 }}>
                <StatusBar backgroundColor='#004d40' barStyle="light-content" />
                <View style={{ flexDirection: 'row', backgroundColor: '#004d40', height: 45 }}>
                    <Icon onPress={() => this.props.navigation.navigate('Home')} name="arrow-left" style={{ fontSize: 28, color: '#fff', marginLeft: 10, marginTop: 4 }} />
                    <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 5, marginLeft: 12 }}>Ventricular Arrhythmias

                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 20 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Ventricular Arrhythmias
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Ventricular arrhythmias originate from the ventricular myocardium.</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Morphology: As the impulse conduction is different in ventricular myocardium and depend on cell to cell conduction, resulting QRS complexes will be of different morphology and longer duration. </Text>
                                    </View>

                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h35.png')} />




                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>If ectopic impulses involve partial conduction over the His bundle, resulting QRS complexes will be near normal in appearance and they should be differentiated from junctional rhythm.
                                        </Text>
                                    </View>
                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h36.png')} />

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", color: 'blue' }}>Causes:


                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Myocardial damage, systemic disease, hypoxia, acid–base or electrolyte disturbance, drugs, and toxicity.  </Text>
                                    </View>


                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", color: 'blue' }}>Classification:

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Ventricular premature complexes </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Ventricular tachycardia </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Ventricular fibrillation </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Ventricular escape rhythm</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Ventricular asystole</Text>
                                    </View>
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Ventricular Premature Complexes
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>A ventricular premature complex (VPC) occurs when an abnormal electrical impulse originates within the ventricle. These abnormal impulses cause the ventricles to contract prematurely, before the completion of diastole.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Usually VPCs are not conducted retrogradely to atria, hence the underlying sinoatrial nodal activity is not affected. To fall back into the underlying sinus rhythm, VPCs are followed by a compensatory pause.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Compensatory pause means that the RR interval enclosing the VPC equals twice the normal RR interval (Fig 1).
                                        </Text>
                                    </View>

                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h37.png')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic", textAlign: 'center' }}>Compensatory pause (B) = 2A

                                    </Text>



                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Occasionally, VPCs occur in between 2 normal beats (interpolated) without changing the underlying rhythm.
                                        </Text>
                                    </View>

                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h38.png')} />


                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>ECG features

                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic", marginEnd: 20 }}>Broad QRS complex (≥ 120 ms) with abnormal morphology
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, marginEnd: 30 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Premature — i.e. occurs earlier than would be expected for the next sinus impulse
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Discordant ST segment and T wave changes.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Usually followed by a full compensatory pause.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Retrograde capture of the atria will not occur usually.
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
                                    Classification of VPCs
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Based on the origin of ectopic foci, VPCs are classified as unifocal (arising from a single ectopic focus; each VPC is identical) and multifocal (arising from two or more ectopic foci; multiple QRS morphologies).
                                        </Text>
                                    </View>

                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h39.png')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic", textAlign: 'center' }}>Electrocardiogram showing unifocal ventricular premature complexes; all the three VPCs have similar morphology *
                                    </Text>
                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h40.png')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic", textAlign: 'center' }}>There are three different types of VPCs i.e., multifocal  (labeled with 1, 2 and 3) along with normal beats (labeled as N) in the above ECG
                                    </Text>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#0d47a1", fontSize: 18, fontStyle: "italic" }}>Based on repeating patterns
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Bigeminy: every other beat is a VPC

                                        </Text>
                                    </View>
                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h41.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Trigeminy: every third beat is a VPC

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Quadrageminy: every fourth beat is a VPC

                                        </Text>
                                    </View>
                                    <Image style={{ height: 70, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h42.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Pentageminy: every fifth beat is a VPC

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Hexageminy:  every sixth beat is a VPC

                                        </Text>
                                    </View>
                                    <Image style={{ height: 70, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h43.png')} />

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Singlets- VPC conducted in single

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Couplet s -  two VPCs are conducted consecutively
                                        </Text>
                                    </View>

                                    <Image style={{ height: 70, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h44.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Triplets – three VPCs are conducted consecutively

                                        </Text>
                                    </View>
                                    <Image style={{ height: 70, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h45.png')} />
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Capture beat VS Fusion beat
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Capture beat is a heart beat resulting from the production of ventricular complex from supraventricular region following a period of atrioventricular dissociation
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Fusion beat: A VPC that originates almost simultaneously with the normal ventricular depolarization. The morphology of this fusion beat is a mixture between the normal QRS and the VPC morphology.
                                        </Text>
                                    </View>

                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h46.png')} />
                                    <Text numberOfLines={7} style={{ marginHorizontal: 10, color: "#000", fontSize: 14, fontStyle: "italic", textAlign: 'center' }}>Electrocardiogram showing multifocal ventricular premature complexes with capture and fusion beats (Capture beats and fusion beats are indicated by asterisk marks of golden yellow and red colour respectively) (Lead: Base apex, Paperspeed : 25 mm /sec, Sensitivity : 1 mV = 1 cm) </Text>


                                    {/* <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text numberOfLines={5} style={{ color: '#0d47a1', marginHorizontal: 10, marginTop: 16, fontSize: 20,fontWeight:'bold' }}>Ventricular Premature Complexes
                        </Text>
                    </View> */}
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, color: 'blue' }}>Aetiology:
                                        </Text>
                                    </View>
                                    <Text numberOfLines={8} style={{ marginHorizontal: 20, color: "#000", fontSize: 14, fontStyle: "italic" }}>Ventricular myocardial disease (Myocardial inflammation, degeneration, or necrosis caused by bacterial, viral, parasitic infection), intoxication (cardiac glycosides, monensin), or neoplasia, electrolyte and metabolic disturbances, hypoxia, anemia, fever, toxemia, high sympathetic tone etc.
                                    </Text>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, color: 'blue' }}>Clinical Signs:
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Anorexia, weakness, exercise intolerance
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Irregular rhythm on auscultation.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, marginEnd: 20 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>The VPC may have an increased intensity of  the first heart sound and is
                                            usually followed by a compensatory pause.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Depending on the prematurity, a pulse deficit may be palpated.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, color: 'blue' }}>Treatment:
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Treat underlying systemic or cardiac disease
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Give adequate rest.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, marginEnd: 20 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Corticosteroids such as dexamethasone are administered @ 0.05 - 0.2 mg/kg intravenously.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Antiarrhythmic drugs such as Lidocaine or Phenytoin are only administered in symptomatic or clinical cases.
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
                                    Ventricular Tachycardia
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Presence of three or more consecutive VPCs in quick succession are termed Ventricular Tachycardia (VT).
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >  </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "green", fontSize: 18, fontStyle: "italic" }}>Classification:
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", color: 'red' }}>Based on the rhythm
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Sustained VT: if rhythm persists for more than 30 secs
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Paroxysmal: if terminates spontaneously
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", color: 'red' }}>Based on the rate
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Benign VT (accelerated idioventricular rhythm): If the rate is slow
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Malignant VT: If the rate is fast
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", color: 'red' }}>Based on the  morphology of QRS Complex
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Polymorphic or multiform: Presence of more than one ectopic QRS morphology (Figure 1)
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Monomorphic: Presence of only one type of ectopic QRS morphology  (Figure 2)
                                        </Text>
                                    </View>
                                    <Image style={{ height: 100, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h47.jpg')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "green", fontSize: 14, fontStyle: "italic" }}>ECG showing  Sustained Ventricular Tachycardia
                                    </Text>
                                    <Image style={{ height: 100, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h48.png')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "green", fontSize: 14, fontStyle: "italic" }}>ECG showing  Paroxysmal Ventricular Tachycardia (Red arrow shows the abrupt  onset and termination of VT)
                                    </Text>
                                    <Image style={{ height: 100, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h49.png')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "green", fontSize: 14, fontStyle: "italic" }}>ECG showing Accelerated idioventricular rhythm; HR 68bpm
                                    </Text>
                                    <Image style={{ height: 100, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h50.png')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "green", fontSize: 14, fontStyle: "italic" }}>ECG showing Malignant Ventricular tachycardia; HR 180bpm

                                    </Text>
                                    <Image style={{ height: 100, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h51.png')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "green", fontSize: 14, fontStyle: "italic" }}>ECG showing Polymorphic Ventricular Tachycardia; Normal sinus beats are labelled as N and different foci of VPCS as 1, 2 and 3


                                    </Text>
                                    <Image style={{ height: 100, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h52.jpg')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "green", fontSize: 14, fontStyle: "italic" }}>ECG showing Monomorphic  Sustained Ventricular Tachycardia


                                    </Text>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}><Text style={{ color: 'blue' }}>R-on-T phenomenon:</Text> It is an electrocardiographic diagnosis in which an ectopic QRS merges with the preceding T wave </Text>
                                    </View>
                                    <Image style={{ height: 100, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h53.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}><Text style={{ color: 'blue' }}>Torsades de pointes:</Text> It is a type of wide complex polymorphic VT in which QRS complexes and T waves twist around the baseline of the ECG. </Text>
                                    </View>
                                    <Image style={{ height: 100, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h54.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>R-on-T phenomenon and torsades de pointes represent an unstable electrical activity that can deteriorate to ventricular fibrillation and cardiac arrest.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", color: 'blue' }}>Treatment:
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Treatment of underlying disease condition
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Adequate rest
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Avoiding stress
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Antiarrhythmic drugs
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Lidocaine, a class IB sodium channel blocker, is most commonly used antiarrhythmic drug. It is given @0.25 to 0.5 mg/kg slow intravenous injection every 5 minutes up to 1.5 mg/kg followed by a constant rate infusion of 0.05 mg/kg/min.

                                        </Text>
                                    </View>
                                    <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8, textAlign: 'center' }}>OR
                                    </Text>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Phenytoin has similar effects and is usually given @20 mg/kg orally twice a day for 2 days followed by 10 to 15 mg/kg twice a day.

                                        </Text>
                                    </View>
                                    <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8, textAlign: 'center' }}>OR
                                    </Text>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Magnesium sulfate (2–6 mg/kg/min intravenously, up to a total dose of about 55–100 mg/kg) might be useful, especially to treat or avoid Torsade de pointes.
                                        </Text>
                                    </View>
                                    <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8, textAlign: 'center' }}>OR
                                    </Text>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Other drugs to treat ventricular arrhythmias include procainamide and quinidine gluconate.

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
                                    Ventricular Fibrillation
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Ventricular fibrillation (VF) is an irregular, chaotic rhythm of the ventricles in which there is no effective ventricular contraction.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>The ECG shows a fine to coarse zigzag pattern with no detectable P waves or QRS complexes .

                                        </Text>
                                    </View>
                                    <Image style={{ height: 100, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h55.png')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "green", fontSize: 14, fontStyle: "italic" }}>ECG showing undulating baseline with no identifiable QRS complexes or T waves.

                                    </Text>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Causes: It occurs in the terminal stages of most suddenly fatal diseases, including lightning stroke, poisonings, overdose with anesthetics, severe toxemia, and in the terminal phases of most acquired cardiac diseases.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Clinical Signs: There is complete absence of the pulse and heart sounds, and the animal rapidly becomes unconscious and dies within a minute or two of onset.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Treatment is usually impractical, although deaths during anesthesia may be prevented by immediate and aggressive external cardiac massage.

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
                                    Ventricular escape rhythm
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Ventricular escape rhythm is a self-generated electrical discharge initiated by, and causing contraction of the ventricles of the heart.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>It occurs when the rate of electrical discharge reaching the ventricles falls below the basic rate due to underlying atrial or junctional disease resulting in bradycardia.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>An escape beat usually occurs 2–3 seconds after an electrical impulse has failed to reach the ventricles and can be said to “rescue” the ventricles from asystole.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>The ECG shows a longer than normal RR’ interval and the QRS’ complex has an abnormal morphology and duration. P wave can be absent, or is non-conducted with no correlation to the QRS’ complex. When escape beats arise in close proximity to the AV node, they may have a fairly normal appearance.

                                        </Text>
                                    </View>
                                    <Image style={{ height: 100, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h56.png')} />
                                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>ECG showing Third degree AV block. Please note that first QRS Complex is an example of ventricular escape beat.

                                    </Text>

                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Ventricular Asystole
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Ventricular Asystole, colloquially referred to as flat line, represents the cessation of electrical and mechanical activity of the heart.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>It typically occurs as a deterioration of the ventricular arrhythmias such as ventricular fibrillation or ventricular tachycardia.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>It represents the terminal rhythm of a cardiac arrest.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>On ECG, P waves may be present if AV block exists, but no QRS complexes are observed.

                                        </Text>
                                    </View>
                                    <Image style={{ height: 100, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h57.jpg')} />

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, marginBottom: 60 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Treatment: Intracardiac injections of epinephrine are often used in the treatment, but mortality rate is very high.
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
