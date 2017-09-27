import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { largeButton, textStyle } from '../styles/button';


const Button = props => (
  <TouchableOpacity
    style={largeButton}
    onPress={props.buttonClick}
  >
    <Text style={textStyle}>Click me</Text>
  </TouchableOpacity>
);


Button.propTypes = {
  buttonClick: PropTypes.func
};

export default Button;
