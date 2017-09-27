import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { container, textStyle } from '../styles/header-style';

const Header = props => (
  <View style={container}>
    <Text style={textStyle}>
      {props.headerText}
    </Text>
  </View>
);

Header.propTypes = {
  headerText: PropTypes.string.isRequired
};

export default Header;
