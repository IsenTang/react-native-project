import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';

import LanButton from '../components/button/lanButton';
import { demo } from '../actions';
import { persistor } from '../store/store';

import styles from './testStyles';


const circle = {
  marginRight: 10,
  alignItems: 'center',
  justifyContent: 'center',
  width: 28,
  height: 28,
  backgroundColor: '#f76260',
  borderColor: 'green',
  borderStyle: 'solid',
  borderRadius: 15,
  paddingBottom: 2,
};

const rectangle = {
  marginRight: 10,
  alignItems: 'center',
  justifyContent: 'center',
  width: 280,
  height: 280,
  backgroundColor: '#f76260',
  borderColor: 'green',
  borderStyle: 'solid',
  paddingBottom: 2,
};

class PicBasics extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      navigation: PropTypes.object.isRequired,
      demo: PropTypes.object,
    };

    static get defaultProps() {
      return {
        demo: {},
      };
    }

    state = {
      circle,
    }
    onPress = () => {
      this.props.dispatch(demo.demoAction());
    }

    clear = async () => {
      await persistor.purge();
    }

    next = () => {
      this.props.navigation.navigate('Home');
    }

    change =() => {
      this.setState({
        circle: rectangle,
      });
    }
    render() {
      return (
        <View style={styles}>
          <TouchableOpacity onPress={this.change} >
            <Animated.View style={this.state.circle} />
          </TouchableOpacity>
          <Text>{this.props.demo.demoTest}</Text>
          <LanButton onPress={this.next} title="back" />
        </View>
      );
    }
}


function mapStateToProps(state) {
  return {
    demo: state.demo,
    test: state.test,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(PicBasics);
