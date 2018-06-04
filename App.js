/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';
import StartScreen from './StartScreen'
import QuoteScreen from './QuoteScreen'

const { quotes } = requre('./quotesjson')

export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      quoteIndex: 3,
    }

    this.incrementQuoteIndex = this.incrementQuoteIndex.bind(this)
  }

  incrementQuoteIndex() {
    let newIndex

    if (this.state.quoteIndex + 1 === quotes.length) {
      newIndex = 0
    } else {
      newIndex = this.state.quoteIndex + 1
    }

    this.setState({
      quoteIndex: newIndex,
    })
  }
  render() {
    const quote = quotes[this.state.quoteIndex]
    return (
      <Navigator
        initialRoute={{name: 'StartScreen'}}
        renderScene={(route, Navigator) => {
          switch (route.name) {
            case 'StartScreen':
              return <StartScreen onStartHandler={() => navigator.push({ name: 'QuoteScreen' })}/>
            case 'QuoteScreen':
              return <QuoteScreen 
                      qId={this.state.quoteIndex}
                      text={quote.text} 
                      scource={quote.source} 
                      onNextQuotePress={this.incrementQuoteIndex} 
                      />
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    fontStyle: 'italic',
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
