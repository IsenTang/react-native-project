import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'ex-react-native-i18n';


import LanButton from '../components/button/lanButton';
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
      I18n.locale = data;
      this.props.navigation.navigate('Home');
    }

    clear = async () => {
      await persistor.purge();
    }

    next = () => {
      this.props.navigation.navigate('Pic');
    }

    render() {
      return (
        <View style={styles}>
          <LanButton onPress={() => this.onPress('zh')} title="简体中文" />
          <LanButton onPress={() => this.onPress('zh')} title="繁体中文" />
          <LanButton onPress={() => this.onPress('en')} title="English" />
          <LanButton onPress={this.next} title="next" />
          <Text>{I18n.t('home.greeting')}</Text>
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
