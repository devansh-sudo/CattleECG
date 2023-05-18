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
    render(){
  return (
    <View style={{backgroundColor:'white',flex:1}}>
 <StatusBar backgroundColor= '#004d40' barStyle="light-content" />
        <View style={{ flexDirection: 'row', backgroundColor: '#004d40' , height: 50 }}>
          <Icon   onPress={() => this.props.navigation.navigate('Home')}  name="arrow-left" style={{ fontSize: 28, color: '#fff', marginLeft: 10, marginTop: 10 }} />
          <Text style={{ fontSize: 20, alignSelf: 'center', color: '#fff', bottom: 3,marginLeft:12 }}>Introduction</Text>
          

        </View>  
        <ScrollView showsVerticalScrollIndicator={false}> 
        {/* <Image style={{height:250,width:'95%',alignSelf:'center',marginTop:16,resizeMode:'contain'}} source={require('../assets/34.jpg')}/> */}

        <View style={{ flexDirection: 'row', marginHorizontal: 10,marginTop:16 }} >
          {/* <Text style={{ fontSize: 16, fontWeight: 'bold',color:"#616161" }}>A. </Text> */}
          <Text numberOfLines={5} style={{ marginHorizontal:6,color:"#000",fontSize:18,fontStyle:"italic" }}>Electrocardiography is the simplest form of recording and
evaluating the electrical activity of heart.</Text>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
          {/* <Text style={{ fontSize: 16, fontWeight: 'bold' }}>B. </Text> */}
          <Text numberOfLines={5} style={{ marginHorizontal:6,color:"#000",fontSize:18,fontStyle:"italic" }}>It is used primarily for assessing the cardiac functions,
diagnosis of various cardiac diseases and to determine the
therapeutic considerations. </Text>
        </View>         
        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
          
          <Text numberOfLines={5} style={{ color: '#0d47a1', marginHorizontal:10,marginTop:16,fontSize:16 }}>Advantages </Text>
        </View>

        <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
          <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#000' }} > ✓ </Text>
          <Text numberOfLines={5} style={{ color:"#000",fontSize:16,fontStyle:"italic",marginStart:8 }}>Non Invasive</Text>
        </View>

        <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
          <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#000' }} > ✓ </Text>
          <Text numberOfLines={5} style={{ color:"#000",fontSize:16,fontStyle:"italic",marginStart:8 }}>Simple procedure</Text>
        </View>

        <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
          <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#000' }} > ✓ </Text>
          <Text numberOfLines={5} style={{ color:"#000",fontSize:16,fontStyle:"italic",marginStart:8 }}>Economical</Text>
        </View>

        <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
          <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#000' }} > ✓ </Text>
          <Text numberOfLines={5} style={{ color:"#000",fontSize:16,fontStyle:"italic",marginStart:8 }}>Used to evaluate electrolyte disturbance</Text>
        </View>

        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }} >
          
          <Text numberOfLines={5} style={{ color: '#0d47a1', marginHorizontal:10,marginTop:16,fontSize:16 }}>Disadvantages </Text>
        </View>

        <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
          <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#000' }} > ✓ </Text>
          <Text numberOfLines={5} style={{ color:"#000",fontSize:16,fontStyle:"italic",marginStart:8 }}>Not of prognostic value</Text>
        </View>

        <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 10 }} >
          <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#000' }} > ✓ </Text>
          <Text numberOfLines={5} style={{ color:"#000",fontSize:16,fontStyle:"italic",marginStart:8 }}>Chamber measurement not possible</Text>
        </View>
     </ScrollView>
         </View>
  );
    }
}
