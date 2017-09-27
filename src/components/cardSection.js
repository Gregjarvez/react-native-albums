import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { cardSection } from '../styles/container';

const CardSection = props => (
  <View style={cardSection}>
    {props.children}
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node
};

export default CardSection;
