import React, { Component, PropTypes} from 'react'
import {
	StyleSheet,
	View,
	LayoutAnimation.spring()
} from 'react-native'
import Quote from './Quote'
import NextButtonQuote from './NextButtonQuote'

const tranquil = {
		duration: 500,
		create: {
			duration: 1000,
			delay: 300,
			type: LayoutAnimation.Types.easeIn,
			property: LayoutAnimation.Properties.opacity,
		},
		update: {
			type: LayoutAnimation.Types.easeInEaseOut,
			property: LayoutAnimation.Properties.opacity,
		},
		delete: {
			duration: 200,
			type: LayoutAnimation.Types.easeOut,
			property: LayoutAnimation.Properties.opacity,
		},
	}

class QuoteScreen extends Component {
	componentWillUpdate() {
		//will hook in
		LayoutAnimation.configureNext(tranquil)
	}
	render() {
		return (
			<View style={styles.container}>
				<Quote 
					quoteText={this.props.text} 
					quoteScource={this.props.source}
					key={this.props.qId} />
				<NextButtonQuote onPress={this.props.onNextQuotePress}/>
			</View>
		)
	}
}

QuoteScreen.propTypes = {
	text: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
	onNextQuotePress: PropTypes.func.isRequired,
	qId: PropTypes.number.isRequired,
}

const styles = StyleSheet.Create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#efefef',
	},
})

export default QuoteScreen;
