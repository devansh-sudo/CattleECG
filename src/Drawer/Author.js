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


export default class Milk extends React.Component {
    render(){
  return (
    <View style={{flex:1,backgroundColor:'white' }}>
 <StatusBar backgroundColor='#004d40' barStyle="light-content" />
        <View style={{ flexDirection: 'row', backgroundColor: '#004d40' , height: 50,justifyContent:'center' }}>
          {/* <Icon   onPress={() => this.props.navigation.navigate('Home')}  name="arrow-left" style={{ fontSize: 32, color: '#004d40', marginLeft: 10, marginTop: 10 }} /> */}
          <Text style={{ fontSize: 20,color: '#fff', marginTop:8,fontWeight:'bold' }}>Author</Text>
          

        </View>  
        <ScrollView showsVerticalScrollIndicator={false} backgroundColor={"#f5f5f5"}> 
        

         
        <View style={{margin:10,height:110,width:'95%',backgroundColor:'white',borderRadius:20,padding:10,elevation:1}}>
                <Text style={{fontSize:18,}}>Name : Dr Priyanka Mahadappa</Text>
                <Text style={{fontSize:18,marginTop:5}}>Scientist</Text>
                
                <Text style={{fontSize:18,marginTop:5,color:'#0d47a1'}}>Email : bidarvet@gmail.com</Text>
              </View>

              <View style={{margin:10,height:110,width:'95%',backgroundColor:'white',borderRadius:20,padding:10,elevation:1}}>
                <Text style={{fontSize:18,}}>Name : Dr K Mahendran</Text>
                <Text style={{fontSize:18,marginTop:5}}>Senior Scientist</Text>
                <Text style={{fontSize:18,marginTop:5,color:'#0d47a1'}}>Email : mahivet2002@yahoo.co.in</Text>
              </View>

              <View style={{margin:10,height:110,width:'95%',backgroundColor:'white',borderRadius:20,padding:10,elevation:1}}>
                <Text style={{fontSize:18,}}>Name : Dr BHM Patel</Text>
                <Text style={{fontSize:18,marginTop:5}}>Principal Scientist</Text>
                <Text style={{fontSize:18,marginTop:5,color:'#0d47a1'}}>Email : mpatellpm@gmail.com</Text>
              </View>
              <View style={{margin:10,height:110,width:'95%',backgroundColor:'white',borderRadius:20,padding:10,elevation:1}}>
                <Text style={{fontSize:18,}}>Name : Dr Chandra Mohan S</Text>
                <Text style={{fontSize:18,marginTop:5}}>Scientist</Text>
                <Text style={{fontSize:18,marginTop:5,color:'#0d47a1'}}>Email : drchandruram@gmail.com</Text>
              </View>

         

              <View style={{margin:10,height:110,width:'95%',backgroundColor:'white',borderRadius:20,padding:10,elevation:1}}>
                <Text style={{fontSize:18,}}>Name : Sanjay kumar</Text>
                <Text style={{fontSize:18,marginTop:5}}>Principal Scientist</Text>
                <Text style={{fontSize:18,marginTop:5,color:'#0d47a1'}}>Email : sunjupandey01@gmail.com</Text>
              </View>

              <View style={{margin:10,height:110,width:'95%',backgroundColor:'white',borderRadius:20,padding:10,elevation:1}}>
                <Text style={{fontSize:18,}}>Name : Yash pal singh</Text>
                <Text style={{fontSize:18,marginTop:5}}>Senior Scientist</Text>
                <Text style={{fontSize:18,marginTop:5,color:'#0d47a1'}}>Email : ypivri@gmail.com</Text>
              </View>
            
       
         

        {/* <Image style={{height:250,width:'95%',alignSelf:'center',marginTop:16}} source={require('../assets/visa.png')}/> */}

        
        </ScrollView>
         </View>
  );
    }
}
