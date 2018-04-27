import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class LocalCommodity extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
          <Button
            title="Home"
            onPress={() =>
              navigate('Home')
            }
          />
          <Text>This is Local Commodity Screen</Text>
        </View>
    );
  }
}
