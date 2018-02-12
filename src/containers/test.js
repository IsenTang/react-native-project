import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View,Text} from 'react-native';



class TestBasics extends Component {
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

function mapStateToProps(state) {
    return { state };
}

function mapDispatchToProps(dispatch) {
    return { dispatch };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestBasics)