import React from 'react';
import PropTypes from 'prop-types';
import Button from 'apsl-react-native-button';

import styles from './LanButtonStyles';

const LanButton = props => (
  <Button
    onPress={props.onPress}
    style={[styles.buttonStyle, props.style]}
  >
    {props.title}
  </Button>
);
export default LanButton;

LanButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.number,
};


LanButton.defaultProps = {
  style: 0,
};

