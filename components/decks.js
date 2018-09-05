import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { loadDecks } from '../actions'

class Decks extends React.Component {

  render() {

    return (
      <View>
        <Text>Test</Text>
        <Text>{this.props.decks === undefined ? 'Please add a deck' : 'what' }</Text>
      </View>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(Decks)

