import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { loadDecks } from '../actions'

class Decks extends Component {

  componentDidMount() {
    this.props.loadDecks();
  }

  componentDidUpdate() {
    this.props.loadDecks()
  }

  render() {
    return (
      <View>
        <Text>Test</Text>
        <Text>{this.props.decks === {} ? 'Please add a deck' : 'what'}</Text>
      </View>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps, {loadDecks})(Decks)

