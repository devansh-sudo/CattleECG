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
 <StatusBar backgroundColor= '#fff' barStyle="dark-content" />
        <View style={{ flexDirection: 'row', backgroundColor: '#fff' , height: 45 }}>
          <Icon   onPress={() => this.props.navigation.navigate('Home')}  name="arrow-left" style={{ fontSize: 28, color: '#0d47a1', marginLeft: 10, marginTop: 4 }} />
          <Text style={{ fontSize: 20, alignSelf: 'center', color: '#0d47a1', bottom: 5,marginLeft:12 }}>Arrhythmias</Text>
          

        </View>  
        <ScrollView showsVerticalScrollIndicator={false}> 
        {/* <Image style={{height:250,width:'95%',alignSelf:'center',marginTop:16,resizeMode:'contain'}} source={require('../assets/34.jpg')}/> */}

        <View style={{   marginHorizontal: 10,marginTop:16 }} >
        <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
        Arrhythmias


                        </Text>
        
          <Text numberOfLines={5} style={{ marginHorizontal:6,color:"#000",fontSize:18,fontStyle:"italic",marginTop:10 }}>Abnormality in the rate, rhythm, or site of origin of the cardiac impulse and
disturbance in conduction of the impulse such that normal sequence of activation of the
atria and ventricles is altered.</Text>
        </View>

        <View
                        style={{
                            marginTop: 20,
                            marginBottom: 10,

                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{ color: '#0d47a1', fontSize: 16, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
                        Classification of Arrhythmias


                        </Text>

                    </View>

                    <Image style={{ height: 250, width: '100%', alignSelf: 'center', marginTop: 20,}} source={require('../assets/img4.jpg')} />
     </ScrollView>
         </View>
  );
    }
}
