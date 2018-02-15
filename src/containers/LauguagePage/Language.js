import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import I18n from '../../config/i18n';

import { language } from '../../actions';

import LanButton from '../../components/button/LanButton';

import styles from './styles';


class LanguagePage extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      navigation: PropTypes.object.isRequired,
    };

    static get defaultProps() {
      return {
      };
    }

    state={

    }


    onPress = (data) => {
      this.props.dispatch(language.changeLanguageAction(data));
      I18n.locale = data;
      this.props.navigation.navigate('Home');
    }

    render() {
      return (
        <View style={styles.layoutStyle}>
          <Text>{I18n.t('home.greeting')}</Text>
          <LanButton onPress={() => this.onPress('zh')} title="简体中文" />
          <LanButton onPress={() => this.onPress('zh')} title="繁体中文" />
          <LanButton onPress={() => this.onPress('en')} title="English" />
        </View>
      );
    }
}


function mapStateToProps(state) {
  return {
    language: state.language,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagePage);
