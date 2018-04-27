import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button } from 'react-native';

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
          source={require('./images/BG.png')}
          style={styles.container}>
          <View style={styles.overlayContainer}>
            <View style={styles.top}>
              <Text style={styles.header}>Smart ADP</Text>
            </View>
            <View style={styles.menuContainer}>
              <View>
                <View style={styles.menuItem2}>
                  <Button
                    title="Service"
                    color="#fff"
                    onPress={() =>
                      navigate('Service')
                    }
                  />
                </View>
                <View style={styles.menuItem1}>
                  <Button
                    title="Vessel Tracking"
                    color="#fff"
                    onPress={() =>
                      navigate('VesselTracking')
                    }
                  />
                </View>
                <View style={styles.menuItem2}>
                  <Button
                    title="Local Commodity"
                    color="#fff"
                    onPress={() =>
                      navigate('LocalCommodity')
                    }
                  />
                </View>
                <View style={styles.menuItem1}>
                  <Button
                    title="FAQ"
                    color="#fff"
                    onPress={() =>
                      navigate('FAQ')
                    }
                  />
                </View>
                <View style={styles.menuItem2}>
                  <Button
                    title="Exit"
                    color="#fff"
                    onPress={() =>
                      navigate('Exit')
                    }
                  />
                </View>
              </View>
            </View> //end menuContainer
          </View>//end overlayContainer
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218,.1)'
  },
  top: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255,.1)'
  },
  menuContainer: {
     height: '50%'
  },
  menuItem1: {
    backgroundColor: 'rgba(255,255,255,.4)',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // texts: {
  //   color: '#fff',
  //   fontSize: 24,
  //   fontFamily: 'Roboto'
  // },
    menuItem2: {
    backgroundColor: 'rgba(255,181,182,.4)',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
