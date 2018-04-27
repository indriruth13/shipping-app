import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import Service from './components/Service';
import VesselTracking from './components/VesselTracking';
import LocalCommodity from './components/LocalCommodity';
import FAQ from './components/FAQ';
import Exit from './components/Exit';

export default class App extends Component {
  render() {
    return (
        <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  Home: { screen: Home},
  Service: { screen: Service},
  VesselTracking: { screen: VesselTracking},
  LocalCommodity: { screen: LocalCommodity},
  FAQ: { screen: FAQ},
  Exit: { screen: Exit}
}, {
      headerMode: 'none'
    }
);