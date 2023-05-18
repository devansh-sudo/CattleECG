
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Share,

  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { SliderBox } from 'react-native-image-slider-box';

import { Assets } from '../assets/index';

import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // images: [
      //   require('../assets/b1.jpg'),

      // ],
    };
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Link not Generated',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: '#f5f5f5', flex: 1 }}>
        <StatusBar backgroundColor= '#004d40' barStyle="light-content" />
        <View style={{ flexDirection: 'row', backgroundColor: '#004d40', justifyContent: 'space-between', height: 45 }}>
          <Icon onPress={() => this.props.navigation.openDrawer()} name="menu" style={{ fontSize: 32, color: '#004d40', marginLeft: 10, marginTop: 4 }} />
          <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff',fontWeight:'bold',bottom:4 }}>Home</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon onPress={this.onShare} name="share" style={{ fontSize: 32, color: '#fff', marginTop: 4, marginRight: 10 }} />

            {/* <Icon onPress={() => this.props.navigation.navigate('About')} name="information" style={{ fontSize: 28, color: '#fff', marginTop: 6, marginRight: 10 }} /> */}
          </View>
        </View>

        <View  >

          <ScrollView>

            {/* <SliderBox

              images={this.state.images}
              sliderBoxHeight={200}
              dotColor="#ffb74d"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={5}
              autoplay
              circleLoop
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: 'rgba(128, 128, 128, 0.92)',
              }}
              ImageComponentStyle={{
                width: '98%',
                marginTop: 10,
              }}
            /> */}
               <Image style={{height:200,width:"95%",alignSelf:'center',marginTop:16,alignSelf:'center',borderRadius:10}} source={require('../assets/b1.jpg')}/>

<View
              style={{
               marginTop:20,
               marginBottom:10,
              
                backgroundColor: '#f5f5f5',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Text style={{ color: '#004d40', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, width: '90%', textAlign: 'center' }}>
              Table of contents

              </Text>

            </View>

            <View style={{ flexDirection: 'row',alignSelf:'center' }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Introduction')}
                style={styles.submitButton}>
                  <Image style={{height:50,width:50,alignSelf:'center',marginTop:15}} source={require('../assets/intro.png')}/>
                <View style={{ flexDirection: 'column' }}>


                  <Text style={styles.submitButtonText}> Introduction
                  </Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('limitation')}
                style={styles.submitButton}>
                    <Image style={{height:50,width:50,alignSelf:'center',marginTop:15}} source={require('../assets/limitations.png')}/>
                <View style={{ flexDirection: 'column', }}>

                  <Text numberOfLines={2} style={styles.submitButtonText}>Limitations
                  </Text>

                </View>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' ,alignSelf:'center' }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Cardiac')}
                style={styles.submitButton}>
                    <Image style={{height:50,width:50,alignSelf:'center',marginTop:16}} source={require('../assets/cardiac.png')}/>
                <View style={{ flexDirection: 'column' }}>


                  <Text style={styles.submitButtonText}> Cardiac Axis
                  </Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('leadSystem')}
                style={styles.submitButton}>
                    <Image style={{height:50,width:50,alignSelf:'center',marginTop:16}} source={require('../assets/leadsystems.png')}/>
                <View style={{ flexDirection: 'column', }}>

                  <Text numberOfLines={2} style={styles.submitButtonText}>Lead System
                  </Text>

                </View>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row',alignSelf:'center' }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('limbLead')}
                style={styles.submitButton}>
                  <Image style={{height:50,width:50,alignSelf:'center',marginTop:16}} source={require('../assets/limbleadsystems.png')}/>
                <View style={{ flexDirection: 'column' }}>


                  <Text style={styles.submitButtonText}> Limb lead system
                  </Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('baseApex')}
                style={styles.submitButton}>
                  <Image style={{height:50,width:50,alignSelf:'center',marginTop:16}} source={require('../assets/baseapex.png')}/>
                <View style={{ flexDirection: 'column', }}>

                  <Text numberOfLines={2} style={styles.submitButtonText}>Base apex lead

                  </Text>

                </View>
              </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row',alignSelf:'center' }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ecgReccording')}
                style={styles.submitButton}>
                      <Image style={{height:50,width:50,alignSelf:'center',marginTop:16}} source={require('../assets/ecg.png')}/>
                <View style={{ flexDirection: 'column' }}>


                  <Text style={styles.submitButtonText}> ECG Recording
                  </Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('configWave')}
                style={styles.submitButton}>
                        <Image style={{height:50,width:50,alignSelf:'center',marginTop:8}} source={require('../assets/waves.png')}/>
                <View style={{ flexDirection: 'column', }}>

                  <Text numberOfLines={2} style={styles.submitButtonText}>Configuration of waves
                  </Text>

                </View>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row',alignSelf:'center' }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ecgInterpretation')}
                style={styles.submitButton}>
                        <Image style={{height:50,width:50,alignSelf:'center',marginTop:6 ,resizeMode:'contain'}} source={require('../assets/ecgInter.png')}/>
                <View style={{ flexDirection: 'column' }}>


                  <Text style={styles.submitButtonText}> ECG Interpretation
                  </Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('classificationArrhythmias')}
                style={styles.submitButton}>
                     <Image style={{height:50,width:50,alignSelf:'center',marginTop:8}} source={require('../assets/classification.png')}/>
                <View style={{ flexDirection: 'column', }}>

                  <Text numberOfLines={2} style={styles.submitButtonText}>Classification of Arrhythmias
                  </Text>

                </View>
              </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row',alignSelf:'center' }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('physiologicalArrhythmias')}
                style={styles.submitButton}>
                    <Image style={{height:50,width:50,alignSelf:'center',marginTop:6}} source={require('../assets/physi.jpg')}/>
                <View style={{ flexDirection: 'column' }}>


                  <Text style={styles.submitButtonText}> Physiological Arrhythmias
                  </Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('supraventricularArrhythmias')}
                style={styles.submitButton}>
                          <Image style={{height:50,width:50,alignSelf:'center',marginTop:8}} source={require('../assets/supra.png')}/>
                <View style={{ flexDirection: 'column', }}>

                  <Text numberOfLines={2} style={styles.submitButtonText}>Supraventricular Arrhythmias
                  </Text>

                </View>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' ,alignSelf:'center'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('junctionalArrhythmias')}
                style={styles.submitButton}>
                     <Image style={{height:50,width:50,alignSelf:'center',marginTop:15}} source={require('../assets/junctional.png')}/>
                <View style={{ flexDirection: 'column' }}>


                  <Text style={styles.submitButtonText}> Junctional Arrhythmias
                  </Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ventricularArrhythmias')}
                style={styles.submitButton}>
                     <Image style={{height:50,width:50,alignSelf:'center',marginTop:15}} source={require('../assets/venti.png')}/>
                <View style={{ flexDirection: 'column', }}>

                  <Text numberOfLines={3} style={styles.submitButtonText}>Ventricular Arrhythmias
                  </Text>

                </View>
              </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row',alignSelf:'center' }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Abnormalities')}
                style={styles.submitButton}>
                    <Image style={{height:50,width:50,alignSelf:'center',marginTop:8}} source={require('../assets/abnor.png')}/>
                <View style={{ flexDirection: 'column' }}>


                  <Text style={styles.submitButtonText}> Abnormalities of impulse
                    conduction

                  </Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Arrhythmias')}
                style={styles.submitButton}>
                     <Image style={{height:50,width:50,alignSelf:'center',marginTop:8,resizeMode:'contain'}} source={require('../assets/electro.png')}/>
                <View style={{ flexDirection: 'column', }}>

                  <Text numberOfLines={3} style={styles.submitButtonText}>Arrhythmias due to electrolyte imbalance
                  </Text>

                </View>
              </TouchableOpacity>
            </View>



            <View
              style={{
                top:30,
                marginBottom:120,
      
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Text style={{ color: '#0d47a1', fontSize: 24, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
              ICAR – Indian Veterinary Research Institute, Hebbal, Bengaluru - 560024

              </Text>

            </View>






          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  submitButton: {
    marginTop: 4,
    backgroundColor: '#00796b',
    marginHorizontal: 2,
    width: '47%',
    height: 110, borderRadius: 10,
    borderWidth:0.5,
    borderColor:'white',
    elevation:1,
    alignItems:'center'
  
  },
  submitButtonText: {
    fontSize: 15,
   
    top: 8,
    textAlign: 'center',
    color: '#fff',
    fontWeight:'bold'
    


  }

})
