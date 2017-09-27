import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';

import Card from './card';
import CardSection from './cardSection';
import {
  textContainer,
  thumbnail,
  thumbnailContainer,
  largeImage
} from '../styles/container';
import { HeaderText } from '../styles/header-style';
import Button from './button';

const AlbumDetail = (props) => {
  const {
    title,
    thumbnail_image,
    artist,
    image,
    url
  } = props.album;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image
            style={thumbnail}
            source={{ uri: thumbnail_image }}
            alt="artist"
          />
        </View>
        <View style={textContainer}>
          <Text style={HeaderText}>{artist}</Text>
          <Text>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={largeImage}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button
          text="Buy Now"
          buttonClick={() => { Linking.openURL(url); }}
        />
      </CardSection>
    </Card>
  );
};

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
};

export default AlbumDetail;
