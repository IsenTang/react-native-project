import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';
import Index from './src/containers/index';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View>
          <Index/>
      </View>
    );
  }
}


// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);