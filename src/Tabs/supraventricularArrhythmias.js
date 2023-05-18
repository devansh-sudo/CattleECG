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
          <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 5, marginLeft: 12 }}>Supraventricular Arrhythmias
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 20 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
            <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Atrial premature complexes (APC’S)
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
            <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Atrial tachycardia
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > ✓ </Text>
            <Text numberOfLines={5} style={{ color: "#000", fontSize: 16, fontStyle: "italic", marginStart: 8 }}>Atrial fibrillation
            </Text>
          </View>
          <Collapse style={{ width: '95%', alignSelf: 'center', marginTop: 20 }}>
            <CollapseHeader style={{ backgroundColor: '#FFF', }}>
              <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                  Atrial premature complex
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody style={{ backgroundColor: '#fff' }}>
              <Collapse>
                <CollapseHeader>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Atrial premature contractions are early abnormal (ectopic) beats arising from atria.
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>They are the most common arrhythmias occurring in cattle.
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>APCs occur secondary to structural heart disease, systemic disease, myocarditis, trauma, anaemia, electrolyte imbalance or it can be a normal variation.
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>In cattle, APCs are frequently associated with gastrointestinal disease in cattle.
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Hypervagotonia in gastrointestinal diseases will depress sinus node allowing subsidiary pacemakers to depolarize at a faster rate, resulting in ectopic atrial activation. In addition, hypervagotonia results in atrial heterogeneity due to non-uniform decrease in effective refractory period.
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>ECG Characteristics:

                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >     - </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Premature P wave is present and its morphology can be normal or abnormal.

                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >     - </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Ectopic P wave may be superimposed on the preceding T wave.

                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} >     - </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>QRS morphology is identical or nearly identical to normal QRS.

                    </Text>
                  </View>
                  <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/img5.jpg')} />


                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Clinical Signs & treatment:
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Single APCs will not result in any overt clinical signs.  However, a run of APCs will generally result in signs of labored breathing, exercise intolerance, weakness and collapse. Surprisingly, some animals will be largely asymptomatic despite having a rapid sustained heart rate.

                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Generally treatment of APCs consists of addressing primary causes.

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
                  Atrial Tachycardia (AT)
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody style={{ backgroundColor: '#fff' }}>
              <Collapse>
                <CollapseHeader>


                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>When 4 or more than 4 APCs occur successively, it is known as atrial tachycardia
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Atrial tachycardia is also known as supra ventricular tachycardia.

                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Can be caused by underlying atrial myocardial disease, myocarditis, electrolyte disturbance, pulmonary disease or systemic disease.

                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>On the ECG, P’ waves occur at an increased rate, they may show irregular rhythm and usually have abnormal morphology (Figure 1). At higher rates, P’ waves are buried in the preceding T wave and become invisible (Figure 2). P’ waves that conduct to the ventricles result in a QRS complex with normal morphology.

                    </Text>
                  </View>
                  <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, }} source={require('../assets/h21.jpg')} />
                  <Text style={{ marginHorizontal: 6, color: "#000", fontSize: 18, textAlign: 'center', marginTop: 10 }}>Figure 1
                  </Text>
                  <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, }} source={require('../assets/h22.jpg')} />
                  <Text style={{ marginHorizontal: 6, color: "#000", fontSize: 18, textAlign: 'center', marginTop: 10 }}>Figure 2
                  </Text>
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>It should be distinguished from sinus tachycardia.
                    </Text>
                  </View>

                  <Image style={{ height: 150, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/table.png')} />

                  <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, }} source={require('../assets/img6.png')} />
                  <Text style={{ marginHorizontal: 6, color: "#000", fontSize: 18, textAlign: 'center', marginTop: 10 }}>ECG showing Atrial Tachycardia
                  </Text>
                  <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'center' }} source={require('../assets/h24.png')} />
                  <Text style={{ marginHorizontal: 6, color: "#000", fontSize: 18, textAlign: 'center', marginTop: 10 }}>ECG showing Sinus Tachycardia
                  </Text>



                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'blue' }} > • </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "blue", fontSize: 18, fontStyle: "italic" }}>Clinical Signs:
                    </Text>
                  </View>


                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
                    <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Signs of labored breathing, exercise intolerance, weakness and collapse.  Surprisingly, some animals will be largely asymptomatic despite having a rapid sustained heart rate.

                    </Text>
                  </View>


                  <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                    <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Treatment consists of addressing any primary causes and when necessary, the addition of anti-arrhythmic medications.  There are several anti-arrhythmics which may be used include beta blockers (such as sotalol, atenolol, carvedilol) and calcium channel blockers (diltiazem).

                    </Text>
                  </View>
                </CollapseHeader>
              </Collapse>
            </CollapseBody>
          </Collapse>
          <Collapse style={{ width: '95%', alignSelf: 'center',marginTop:10 }}>
  <CollapseHeader style={{ backgroundColor: '#FFF', }}>
    <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
      Atrial Fibrillation
      </Text>
    </View>
  </CollapseHeader>
  <CollapseBody style={{ backgroundColor: '#fff' }}>
    <Collapse>
      <CollapseHeader>
      <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Atrial fibrillation (AF) is a cardiac arrhythmia which occurs when normal pacemaker activity and impulse formation in the atria are lost, and is replaced by numerous, erratic fronts of depolarization spread throughout the atrial muscle mass.
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Coordinated and rhythmic contractions of the atria are replaced by rapid quivering of the muscle and effective atrial pumping no longer occurs.
            </Text>
          </View>
          <Text style={{ marginHorizontal: 6, color: "#000", fontSize: 18, textAlign: 'center', marginTop: 10, color: 'blue' }}>Normal Sinus rhythm

          </Text>
          <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h25.png')} />
          <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h26.jpg')} />
          <Text style={{ marginHorizontal: 6, color: "blue", fontSize: 18, textAlign: 'center', marginTop: 10 }}>Atrial fibrillation

          </Text>
          <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h27.png')} />
          <Image style={{ height: 110, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h28.png')} />


          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Atrial fibrillation (AF) is the most commonly observed arrhythmia of cattle.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={15} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>AF has been reported to develop in cattle with a variety of disease conditions, the most common of which are gastrointestinal disturbances such as dysfunction of forestomachs or displacement of the abomasum. Other cases of AF in cattle may be induced by heart diseases such as myocarditis, valvular endocarditis or traumatic pericarditis. Ketosis, other electrolyte imbalances such as hypocalcaemia, hypochloremia, and hypokalemia are associated with AF.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>On ECG, Atrial fibrillation (AF) is characterized by the absence of P waves and the presence of fibrillation waves or f waves that occur with a frequency of between 300 and 600 beats/min. The morphology of the f waves varies from coarse to fine, often alternating within recordings.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={10} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>QRS-T complexes are normal in configuration but there is wide variation and no pattern in the R-R intervals. In case of very short RR intervals, the T wave will be opposite to the QRS complex, which might differ from the other T waves. Such a complex should not be mistaken for a ventricular premature beat.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>In the absence of underlying cardiac disease, the ventricular rate at rest is normal. During excitement or exercise, the heart rate easily surpasses the maximal heart rate.
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Clinical Signs:
            </Text>
          </View>


          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>Usually there are no clinical signs of AF in cattle. Chronic anorexia, listlessness and  marked reduced milk yield is observed in few animals.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > - </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 16, fontStyle: "italic" }}>On clinical examination  irregular heart rhythm with varying intensity of heart sounds, increased heart rate  and pulse deficit are noticed.
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >

            <Text numberOfLines={5} style={{ color: '#0d47a1', marginHorizontal: 10, marginTop: 16, fontSize: 16 }}>Treatment:

            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Cattle with AF usually do not have detectable cardiac disease.
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Treatment of AF usually consists of treating underlying disease condition followed by correction of acid-base and electrolyte balance.
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>If the cow is hypophagic or anorexic, it is advisable to provide oral potassium supplementation, such as 50 to 100 g of KCl daily.
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>In most cattle, atrial fibrillation resolves within 5 days of treatment.
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, marginBottom: 60 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
            <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>If atrial fibrillation persists, treatment with quinidine sulfate intravenously is warranted.
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
