import React, { Component } from 'react';
import {View,Text} from 'react-native';



class SectionListBasics extends Component {
    render() {
        return(
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        )
    }
}

module.exports = SectionListBasics;