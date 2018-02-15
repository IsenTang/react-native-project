import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import LanButton from '../components/button/lanButton';
import { demo } from '../actions';
import { persistor } from '../store/store';
import i18n from '../config/i18n';

import styles from './testStyles';


class TestBasics extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      navigation: PropTypes.object.isRequired,
      demo: PropTypes.object,
      demo2: PropTypes.object,
    };

    static get defaultProps() {
      return {
        demo: {},
        demo2: {},
      };
    }


    onPress = () => {
      this.props.dispatch(demo.demoAction());
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

          <LanButton onPress={this.onPress} title="test persist" />
          <Text>{this.props.demo.demoTest}</Text>
          <Text>{this.props.demo2.testDemo}</Text>
          <LanButton onPress={this.clear} title="test purge" />
          <LanButton onPress={this.next} title="next" />
          <Text>{i18n.t('home.greeting')}</Text>
        </View>
      );
    }
}


function mapStateToProps(state) {
  return {
    demo: state.demo,
    demo2: state.demo2,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestBasics);
