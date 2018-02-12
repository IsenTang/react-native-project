import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/containers/index';

export default class App extends Component {
  render() {
    return (
        <StackNavigator/>
    );
  }
}

