import React, { Component } from 'react';
import Splashscreen from './src/SplashScreen/Splash';
import { Text } from 'react-native';
import RouteNavigation from './src/RouteNavigation/Root';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
    this.state = { showApp: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showApp: true });
    }, 2500);
  }
  render() {
    return (
      <>
        {this.state.showApp ? (

          <RouteNavigation />
        ) : (
          <Splashscreen />
        )}
      </>
    );
  }
}




{/* <Collapse style={{ width: '95%', alignSelf: 'center',marginTop:10 }}>
  <CollapseHeader style={{ backgroundColor: '#FFF', }}>
    <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#0d47a1', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20, fontStyle: 'italic', width: '90%', textAlign: 'center' }}>
        Sinus Arrest
      </Text>
    </View>
  </CollapseHeader>
  <CollapseBody style={{ backgroundColor: '#fff' }}>
    <Collapse>
      <CollapseHeader>
        <Text> HELLO </Text>
      </CollapseHeader>
    </Collapse>
  </CollapseBody>
</Collapse> */}


