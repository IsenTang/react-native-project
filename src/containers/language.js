import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import LanButton from '../components/button/lanButton';
import { demo } from '../actions';
import { persistor } from '../store/store';

import styles from './testStyles';


class LanguageBasics extends Component {
    static propTypes = {
    //   dispatch: PropTypes.func.isRequired,
      navigation: PropTypes.object.isRequired,
    };

    static get defaultProps() {
      return {
      };
    }


    onPress = (data) => {
      console.log(data);
    }

    clear = async () => {
      await persistor.purge();
    }

    next = () => {
      this.props.navigation.navigate('Language');
    }

    render() {
      return (
        <View style={styles}>
          <LanButton onPress={() => this.onPress(0)} title="简体中文" />
          <LanButton onPress={() => this.onPress(1)} title="繁体中文" />
          <LanButton onPress={() => this.onPress(2)} title="English" />
          <LanButton onPress={this.next} title="next" />
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

export default connect(mapStateToProps, mapDispatchToProps)(LanguageBasics);
