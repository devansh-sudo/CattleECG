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
                <View style={{ flexDirection: 'row', backgroundColor: '#004d40', height: 45 }}>
                    <Icon onPress={() => this.props.navigation.navigate('Home')} name="arrow-left" style={{ fontSize: 28, color: '#fff', marginLeft: 10, marginTop: 4 }} />
                    <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 5, marginLeft: 12 }}>Junctional Arrhythmias
                    </Text>


                </View>
                <ScrollView showsVerticalScrollIndicator={false}>


                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 20 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Junctional Arrhythmias
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "blue", fontSize: 18, fontStyle: "italic" }}>Causes:


                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>When the electrical activity of the SA node is blocked or is less than the automaticity of the AV node/His bundle, a junctional arrhythmias originates. There are several disease conditions such as dioxin toxicity, electrolyte imbalance (hypokalemia), digitalis toxicity, cold water immersion etc., which decrease the electrical activity of SA node.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Other conditions such as myocarditis can also lead to junctional arrhythmias.
                                        </Text>
                                    </View>




                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >

                                        <Text numberOfLines={5} style={{ color: '#0d47a1', marginHorizontal: 10, marginTop: 16, fontSize: 16 }}>ECG Characteristics :

                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>As the electrical activation originates at or near AV node, the P wave is frequently not seen.
                                        </Text>
                                    </View>
                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h29.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Sometimes, abnormal electric impulses generated can spread backward (retrograde) through the atrium and/or forward (antegrade) to the ventricles leading to abnormal ‘P’ waves of different configuration.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Because the normal ventricular conduction system (His-Purkinje) is used in junctional arrhythmias, the QRS complex is usually normal or near normal in appearance with shorter duration.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>If antegrade and retrograde conduction are intact, a beat arising from the A-V junction produces both a retrograde P wave and QRS of supraventricular configuration. The timing of this retrograde P wave in relation to the QRS is dependent upon the site of origin of the impulse.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>A beat arising in the proximal A-V junction region is more likely to have a retrograde P wave preceding the QRS (Figure A), while a beat arising distally is more likely to have a retrograde P wave following the QRS (Figure B).
                                        </Text>
                                    </View>
                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h30.png')} />
                                    <Text style={{ marginHorizontal: 6, color: "#000", fontSize: 14, textAlign: 'center', marginTop: 10 }}>Figure A
                                    </Text>
                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h31.png')} />
                                    <Text style={{ marginHorizontal: 6, color: "#000", fontSize: 14, textAlign: 'center', marginTop: 10 }}>Figure B
                                    </Text>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >

                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#0d47a1", fontSize: 18, }}>Types

                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Junctional premature complexes

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Junction rhythm: heart rate is 40 to 60 beats per minute
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Accelerated junctional rhythm: heart rate is 60 to 100 beats per minute

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Junctional tachycardia: heart rate above 100 beats per minute

                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Junction escape rhythm


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
                                    Junctional premature complexes
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Junctional premature complexes also known as junctional ectopics are premature cardiac electrical impulses originating from the atrioventricular node of the heart or junction.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Junctional ectopics are much less common than premature atrial or ventricular contractions.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>On ECG, premature junctional contractions will appear as a normally shaped QRS complex, not preceded by any P wave or preceded by an abnormal P wave with a shorter PR interval. Rarely, the abnormal P wave can follow the QRS.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Junctional ectopics will be followed by compensatory pause.
                                        </Text>
                                    </View>
                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h32.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text numberOfLines={5} style={{ color: 'green', marginTop: 16, fontSize: 13, textAlign: 'center', marginLeft: 20 }}>JQRS complexes with black asterisks are junctional beats
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text numberOfLines={5} style={{ color: 'green', marginTop: 0, fontSize: 13, textAlign: 'center' }}>(Note the absence of  “P” wave and near normal appearance of QRS complexes)

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Usually no treatment is required and the rhythm reverts spontaneously, especially with correction of the underlying disorder.
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
                                    Atrio Ventricular junctional rhythm
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Continuous presence of more than three JVPC is known as junctional rhythm
                                        </Text>
                                    </View>
                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h33.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>AV junctional rhythm should be differentiated from atrial tachycardia, sick sinus syndrome, slow atrial fibrillation.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Treatment
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Usually no treatment is needed and the rhythm reverts spontaneously, especially with correction of the underlying disorder.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>If weakness or syncope is associated with a slow AV junctional rhythm, atropine, dobutamine, or isoproterenol may be used in an attempt to accelerate the sinus node to help regain function as the primary pacemaker.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>If CHF is present with an enhanced AV junctional rhythm, administer digitalis.
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
                                    Junctional escape rhythm
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>A junctional escape beat is a delayed heartbeat originating  from an ectopic focus in the atrioventricular junction.

                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>It occurs when the rate of depolarization of the Sinoatrial node falls below the rate of the atrioventricular node. This dysrhythmia also may occur when the electrical impulses from the SA node fail to reach the AV node because of SA or AV block. It can also occur following a premature ventricular contraction or blocked premature atrial contraction.
                                        </Text>
                                    </View>
                                    <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h34.png')} />

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "green", fontSize: 18, fontStyle: "italic" }}>ECG Characteristics:

                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Heart Rate is low
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>P waves: Depends on the site of the ectopic focus. They will be inverted, and may appear before or after the QRS complex, or they may be absent, hidden by the QRS.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>QRS Complex: Usually normal in duration and morphology.
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>No relationship between the QRS complexes and any preceding atrial activity (e.g. P-waves, flutter waves, fibrillatory waves)
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "green", fontSize: 18, fontStyle: "italic" }}>Treatment:


                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>Atropine, dobutamine, or isoproterenol may be used to accelerate the sinus node to  regain it’s function as the primary pacemaker.

                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, marginBottom: 60 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >    - </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 14, fontStyle: "italic" }}>If CHF is present with an enhanced AV junctional rhythm, administer digitalis.
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
