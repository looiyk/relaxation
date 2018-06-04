//@flow

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  TouchableOpacity
} from 'react-native';

const zenImage = require('./src/logoV1.png')

type Props = {};
export default class StartScreen extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.props.onStartHandler}>
            <Image source={zenImage} style={styles.buttonImage} />
            <Text style={styles.text}>I'm ready to relax...</Text>
          <Quote quoteText="Thats What" quoteSource="- She"/>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889dad',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    fontStyle: 'italic',
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  buttonImage: {
    height: 100,
    width: 100,
  }
});

export default StartScreen;