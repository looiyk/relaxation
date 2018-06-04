//@flow

import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

class Quote extends React.Component {
  render() {
    return (
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"{this.props.quoteText}"</Text>
        <Text style={styles.sourceText}>- {this.props.quoteSource}</Text>
      </View>
    )
  }
};

Quote.propTypes = {
	quoteText: PropTypes.string.isRequired,
	quoteSource: PropTypes.string.isRequired,

}

const styles = StyleSheet.create({
	quoteContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	quoteText: {
		fontFamily: (Platform.OS === 'ios') ?
			'AvenirNext-Bold' : 'Roboto',
		fontSize: 36,
		color: '#000',
		marginVertical: 30,
	},
	sourceText: {
		fontFamily: (Platform.OS === 'ios') ?
			'AvenirNext-Bold' : 'Roboto',
		fontSize: 14,
		color: '#000',
		marginVertical: 30, 
	}
})
export default Quote;
