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
                <StatusBar backgroundColor='#004d40' barStyle="LIGHT-content" />
                <View style={{ flexDirection: 'row', backgroundColor: '#004d40', height: 45 }}>
                    <Icon onPress={() => this.props.navigation.navigate('Home')} name="arrow-left" style={{ fontSize: 28, color: '#FFF', marginLeft: 10, marginTop: 4 }} />
                    <Text style={{ fontSize: 20, alignSelf: 'center', color: '#FFF', bottom: 5, marginLeft: 12 }}>Physiological
                        Arrhythmias
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>


                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 20 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View
                                style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Physiological
                                    Arrhythmias
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8, marginEnd: 16 }}>Sinus arrhythmia</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Sinus tachycardia</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Sinus bradycardia</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Sinus arrest</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
                                        <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Wandering sinus pacemaker</Text>
                                    </View>
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>


                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View
                                style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Sinus Arrhythmias
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Sinus arrhythmia is a periodic waxing and waning of the heart rate usually caused
                                            by alterations in vagal tone.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>ECG Characteristics:
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > – </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>It is characterized by irregular RR intervals.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > – </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>P-QRS relations are normal and QRS complexes always have a normal morphology.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > – </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Every P wave is followed by a QRS complex and every QRS complex is preceded by a P
                                            wave.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > – </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Shape of the P wave can be variable.
                                        </Text>
                                    </View>
                                    <Image style={{ height: 70, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h15.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Treatment: It is considered as normal variation, hence generally treatment
                                            is not required.
                                        </Text>
                                    </View>
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View
                                style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Sinus Tachycardia
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Sinus tachycardia originates from Sino atrial node and has normal sinus rhythm
                                            with higher heart rate.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>It is caused by an increase in sympathetic tone or a decrease in parasympathetic
                                            tone and can be a physiological response in order to increase cardiac output.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>It can be caused by excitement, fever, pain, hemorrhage, anemia, shock or heart
                                            failure.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>On ECG it is characterized by a resting heart rate above 80 bpm (in cattle), with
                                            regular RR intervals. The morphology, duration and relation of P waves and
                                            QRS complexes are normal. At higher rates, P waves may be masked by the
                                            preceding T wave
                                        </Text>
                                    </View>
                                    <Image style={{ height: 70, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h16.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Treatment: treatment is given for underlying disease conditions.

                                        </Text>
                                    </View>
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View
                                style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Sinus Tachycardia
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Sinus bradycardia is decrease in heart rate caused by a decreased rate of discharge from the SA node.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>On ECG it is characterized by regular RR intervals, heart rate below 44 bpm. All
                                            waves and complexes have a normal appearance and the relation between P waves and
                                            QRS complexes is normal.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Often sinus bradycardia is associated with sinus arrhythmia.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Bradycardia will occur in association with an increase in arterial blood pressure,
                                            space-occupying lesions of the cranium and increased intracranial pressure, pituitary
                                            abscess, hyperkalemia, hypothyroidism, hypothermia, and hypoglycemia and
                                            following the administration of α-2-adrenergic agonists such
                                            as xylazine or detomidine.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Bradycardia is sometimes associated with vagus indigestion and diaphragmatic
                                            hernia in cattle and also occurs in cattle deprived of food.
                                        </Text>
                                    </View>
                                    <Image style={{ height: 70, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h17.png')} />
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Animals with sinus bradycardia are often asymptomatic. Sometimes clinical signs of
                                            weakness, lethargy and syncope may accompany.
                                        </Text>
                                    </View>
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View
                                style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                    Treatment
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>The decision to treat sinus bradycardia should be based on clinical signs and the degree of
                                            bradycardia.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>In an animal with no clinical signs, sinus bradycardia may be “waited out” with close
                                            monitoring.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>If the animal appears unstable and pacemaker therapy is not an option, medical therapy
                                            aimed at abolishing high vagal tone can be attempted for temporary support.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Patients showing partial or complete response to atropine response test may be candidates
                                            for medical management of sinus bradycardia.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Treatment options include either a combination of a vagolytic drug (e.g., probantheline
                                            bromide: Pro-Banthine 0.25 to 0.5 mg/kg PO twice a day) and a sympathomimetic
                                            (e.g., albuterol: Proventil 0.02 to 0.05 mg/kg PO two to three times a day) or a
                                            phosphodiesterase inhibitor (e.g., theophylline; Theo-Dur 20 mg/kg PO twice a day).
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Medical therapy has adverse effects such as erratic and poor efficacy, anxiety, excessive
                                            panting, anorexia or other gastrointestinal signs.
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>In patients experiencing syncope or episodic weakness, pacemaker therapy is indicated.

                                        </Text>
                                    </View>
                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                        <View
                                style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                Sinus Arrest
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Sinus arrest is characterized by long pauses during which there are no P-QRS-T
                            complexes. </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}> A high vagal tone is considered to interrupt with firing rate of the SA node causing sinus
                            arrest. They are infrequent and rarely pathological. Usually it disappears during exercise
                            and in rare cases, cardiac output can drop to such a low level that syncope can develop.
                        </Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Characteristic on the ECG is that the PP and RR intervals are greater than 2 normal PP or
                            RR intervals.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>All other aspects of the ECG are normal: the morphology of P waves and QRS complexes
                            is normal, every P wave is followed by a QRS complex and every QRS complex is
                            preceded by a P wave.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>During a long pause however, a junctional or ventricular escape beat may occur on the
                            ECG, appearing as QRS complexes with an abnormal morphology and duration, and no
                            relation with a P wave
                        </Text>
                    </View>
                    <Image style={{ height: 70, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h18.png')} />

                                </CollapseHeader>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>

                    <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                        <CollapseHeader style={{ backgroundColor: '#FFF', }}>
                            <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                                Wandering pace maker
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: '#fff' }}>
                            <Collapse>
                                <CollapseHeader>
                                   
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>A variant of sinus arrhythmia, in which there is a shift in pacemaker within the SA node or from the SA to the AV node </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>ECG changes:
                        </Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >     - </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic", paddingRight: 10 }}>Gradual change in configuration of the P wave
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >     - </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>P -R interval constant
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >     - </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>QRS complexes are same
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >     - </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>P wave becomes positive, diphasic, isoelectric, and negative
                        </Text>
                    </View>
                    <Image style={{ height: 70, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h19.png')} />
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, marginBottom: 120 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Might be caused by high vagal tone and is rarely pathological, hence does not require treatment.

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
