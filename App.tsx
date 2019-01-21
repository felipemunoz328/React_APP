/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Direccion from './src/components/Destino';
import AppContainer from './src/navigation';



export default class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
