import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/containers/albumList';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Albums" />
        <AlbumList />
      </View>
    );
  }
}


AppRegistry.registerComponent('albums', () => App);
