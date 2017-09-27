/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';

import { container } from '../styles/container';

const Card = props => (
  <View style={container}>
    { props.children }
  </View>
);

export default Card;
