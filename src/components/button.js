import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { largeButton, textStyle } from '../styles/button';


const Button = ({ buttonClick, text }) => (
  <TouchableOpacity
    style={largeButton}
    onPress={buttonClick}
  >
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);


Button.propTypes = {
  buttonClick: PropTypes.func,
  text: PropTypes.string
};

export default Button;
