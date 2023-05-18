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
                    <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 5, marginLeft: 12 }}>Base Apex
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
                            Base Apex Lead System

                        </Text>

                    </View>

                    {/* <Image style={{height:250,width:'95%',alignSelf:'center',marginTop:16,resizeMode:'contain'}} source={require('../assets/34.jpg')}/> */}

                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 16 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 6, color: "#000", fontSize: 18, fontStyle: "italic" }}>Positive electrode of Lead I will be placed on the left side at 5th Inter costal
                            space just posterior to the olecranon and negative electrode in jugular furrow on
                            right side about the level of the lower 1/3 of the neck.</Text>
                    </View>

                    



                    <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h6.png')} />
                    <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/h7.png')} />
                    <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/img1.jpg')} />
                    <View
                        style={{
                            marginTop: 20,
                            marginBottom: 10,

                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%',}}>
                           Advantages

                        </Text>

                    </View>
                    {/* <Image style={{ height: 250, width: '95%', alignSelf: 'center', marginTop: 20, resizeMode: 'contain' }} source={require('../assets/img2.jpg')} /> */}
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 16 }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000',marginBottom:120 }} > • </Text>
                        <Text numberOfLines={5} style={{ marginHorizontal: 10, color: "#000", fontSize: 18, fontStyle: "italic" }}>Base apex lead has clear and large waves and complexes and animal movement
                            has a minimum effect on the recording.<Text style={{color:'blue'}}>  Hence, this lead system is used widely in
                            clinical practice. </Text> 
                            </Text>
                    </View>







                </ScrollView>
            </View>
        );
    }
}
