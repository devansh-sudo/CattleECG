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

export default class Login extends React.Component {
    render() {
        return (
            <Container
                style={{
                    backgroundColor: 'white',
                    width: '100%',

                    resizeMode: 'contain',
                }}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View style={{ backgroundColor: '#fff' }}>
                    <Text>Login Screen</Text>
                </View>
            </Container>
        );
    }
}
